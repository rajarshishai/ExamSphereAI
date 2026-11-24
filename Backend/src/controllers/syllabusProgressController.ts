
import { Request, Response } from 'express';
import mongoose from 'mongoose';

import Syllabus from '../models/Syllabus';
import SyllabusProgress from '../models/SyllabusProgress';

// Helper: safely get topic ID from Mongoose subdocuments.
const getTopicId = (topic: unknown): string => {
  const topicDocument = topic as {
    _id: mongoose.Types.ObjectId;
  };

  return topicDocument._id.toString();
};

// Helper: collect all syllabus topic IDs.
const getTopicIds = (syllabus: any): string[] => {
  return syllabus.subjects.flatMap((subject: any) =>
    subject.topics.map((topic: unknown) => getTopicId(topic))
  );
};


// GET STUDENT PROGRESS
export const getStudentProgress = async (
  req: Request,
  res: Response
) => {
  try {
    const examId = req.params.examId;

    // Get authenticated student ID.
    const userId = (req as any).user?.id;

    // Validate authentication.
    if (
      !userId ||
      typeof userId !== 'string' &&
      !(userId instanceof mongoose.Types.ObjectId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Validate exam ID.
    if (
      typeof examId !== 'string' ||
      !mongoose.Types.ObjectId.isValid(examId)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid exam ID'
      });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const examObjectId = new mongoose.Types.ObjectId(examId);

    // Find syllabus.
    const syllabus = await Syllabus.findOne({
      examId: examObjectId
    });

    if (!syllabus) {
      return res.status(404).json({
        success: false,
        message: 'Syllabus not found'
      });
    }

    const topicIds = getTopicIds(syllabus);

    // Find existing student progress.
    let progress = await SyllabusProgress.findOne({
      userId: userObjectId,
      examId: examObjectId
    });

    // Initialize progress if it does not exist.
    if (!progress) {
      progress = await SyllabusProgress.create({
        userId: userObjectId,
        examId: examObjectId,
        topics: topicIds.map(topicId => ({
          topicId,
          completed: false
        }))
      });
    }

    // Synchronize new and deleted syllabus topics.
    const validIds = new Set(topicIds);

    const existingIds = new Set(
      progress.topics.map(topic => topic.topicId)
    );

    const newTopics = topicIds
      .filter(id => !existingIds.has(id))
      .map(topicId => ({
        topicId,
        completed: false
      }));

    progress.topics = [
      ...progress.topics.filter(topic =>
        validIds.has(topic.topicId)
      ),
      ...newTopics
    ] as any;

    await progress.save();

    // Calculate overall progress.
    const completedCount = progress.topics.filter(
      topic => topic.completed
    ).length;

    const totalTopics = topicIds.length;

    const percentage = totalTopics
      ? Math.round((completedCount / totalTopics) * 100)
      : 0;

    // Calculate subject-wise progress.
    const subjects = syllabus.subjects.map((subject: any) => {
      const completed = subject.topics.filter((topic: unknown) => {
        const currentTopicId = getTopicId(topic);

        return progress!.topics.some(
          item =>
            item.topicId === currentTopicId &&
            item.completed
        );
      }).length;

      const total = subject.topics.length;

      return {
        subjectName: subject.name,
        totalTopics: total,
        completedTopics: completed,
        completionPercentage: total
          ? Math.round((completed / total) * 100)
          : 0
      };
    });

    return res.status(200).json({
      success: true,
      data: {
        examName: syllabus.examName,
        totalTopics,
        completedTopics: completedCount,
        pendingTopics: totalTopics - completedCount,
        completionPercentage: percentage,
        completedTopicIds: progress.topics.filter(t => t.completed).map(t => t.topicId),
        subjects
      }
    });

  } catch (error) {
    console.error('Progress Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to fetch student progress'
    });
  }
};


// UPDATE TOPIC COMPLETION
export const updateTopicProgress = async (
  req: Request,
  res: Response
) => {
  try {
    const examId = req.params.examId;
    const topicId = req.params.topicId;
    const { completed } = req.body;

    // Get authenticated student ID.
    const userId = (req as any).user?.id;

    // Validate authentication.
    if (
      !userId ||
      typeof userId !== 'string' &&
      !(userId instanceof mongoose.Types.ObjectId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Validate exam ID.
    if (
      typeof examId !== 'string' ||
      !mongoose.Types.ObjectId.isValid(examId)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid exam ID'
      });
    }

    // Validate topic ID.
    if (
      typeof topicId !== 'string' ||
      !topicId.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid topic ID'
      });
    }

    // Validate completion status.
    if (typeof completed !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'completed must be true or false'
      });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const examObjectId = new mongoose.Types.ObjectId(examId);

    // Find syllabus.
    const syllabus = await Syllabus.findOne({
      examId: examObjectId
    });

    if (!syllabus) {
      return res.status(404).json({
        success: false,
        message: 'Syllabus not found'
      });
    }

    const topicIds = getTopicIds(syllabus);

    // Check whether topic belongs to this syllabus.
    if (!topicIds.includes(topicId)) {
      return res.status(404).json({
        success: false,
        message: 'Topic not found in this syllabus'
      });
    }

    // Update student progress.
    const progress = await SyllabusProgress.findOneAndUpdate(
      {
        userId: userObjectId,
        examId: examObjectId,
        'topics.topicId': topicId
      },
      {
        $set: {
          'topics.$.completed': completed,
          'topics.$.completedAt': completed
            ? new Date()
            : null
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'Progress not initialized. Fetch progress first.'
      });
    }

    // Calculate updated progress.
    const completedCount = progress.topics.filter(
      topic => topic.completed
    ).length;

    const totalTopics = topicIds.length;

    return res.status(200).json({
      success: true,
      message: 'Topic progress updated successfully',
      data: {
        completed,
        totalTopics,
        completedTopics: completedCount,
        pendingTopics: totalTopics - completedCount,
        completionPercentage: totalTopics
          ? Math.round((completedCount / totalTopics) * 100)
          : 0
      }
    });

  } catch (error) {
    console.error('Update Progress Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to update topic progress'
    });
  }
};
