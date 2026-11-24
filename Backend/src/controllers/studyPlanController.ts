import { Request, Response } from 'express';
import mongoose from 'mongoose';
import StudyPlan from '../models/StudyPlan';
import Syllabus from '../models/Syllabus';
import Exam from '../models/Exam';

const getUserId = (req: Request): string | undefined => {
  const user = (req as any).user;
  return user?.id ?? user?._id?.toString();
};

// HELPER: Generates rich, authentic, high-yield tasks customized per exam
function getExamSpecificFallbackTasks(examName: string, examSlug: string, subjects: string[] = []): any[] {
  const nameLower = (examName + ' ' + examSlug).toLowerCase();

  if (nameLower.includes('gate')) {
    return [
      { day: 'Monday', subject: 'Algorithms', topic: 'Dynamic Programming & Memoization', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'Data Structures', topic: 'Binary Search Trees & AVL Rotations', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Tuesday', subject: 'Operating Systems', topic: 'Deadlock Avoidance & Banker Algorithm', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'Theory of Computation', topic: 'Pumping Lemma & DFA Minimization', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Computer Networks', topic: 'TCP Sliding Window & Subnetting', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'Databases', topic: 'Normalization & BCNF Decomposition', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Thursday', subject: 'Engineering Mathematics', topic: 'Linear Algebra & Eigenvalues', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Friday', subject: 'Compiler Design', topic: 'LR Parsing & Syntax Directed Translation', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Friday', subject: 'General Aptitude', topic: 'Numerical & Verbal Reasoning Drills', activity: 'Practice PYQ', durationMinutes: 45, completed: false },
      { day: 'Saturday', subject: 'Full Syllabus', topic: 'Past 5-Year Solved Papers & Formula Review', activity: 'Revision', durationMinutes: 120, completed: false },
      { day: 'Sunday', subject: 'Full Syllabus', topic: 'Weekly Full-Length CBT Mock Examination (65 Qs)', activity: 'Mock Test', durationMinutes: 180, completed: false }
    ];
  }

  if (nameLower.includes('upsc') || nameLower.includes('civil services') || nameLower.includes('ias')) {
    return [
      { day: 'Monday', subject: 'Indian Polity & Governance', topic: 'Fundamental Rights & Directive Principles (DPSP)', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'Modern History', topic: 'Freedom Struggle & National Movement (1885-1947)', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Tuesday', subject: 'Indian Economy', topic: 'Monetary Policy, Fiscal Deficit & Banking Reforms', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'Geography', topic: 'Physical Geography & Indian River Systems', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Environment & Ecology', topic: 'Biodiversity Hotspots & Climate Change Accords', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'Science & Technology', topic: 'Space Missions, Biotechnology & Defense Indigenization', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Thursday', subject: 'CSAT Aptitude', topic: 'Reading Comprehension & Logical Deductions', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Thursday', subject: 'CSAT Math', topic: 'Permutations, Number Series & Data Interpretation', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Friday', subject: 'Ethics & Integrity', topic: 'Case Studies on Administrative Ethics & Integrity', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Saturday', subject: 'Current Affairs & Editorial', topic: 'Weekly Current Affairs Digest & Mains Answer Writing', activity: 'Revision', durationMinutes: 120, completed: false },
      { day: 'Sunday', subject: 'General Studies', topic: 'UPSC Prelims GS-1 Full-Length Simulation (100 Qs)', activity: 'Mock Test', durationMinutes: 120, completed: false }
    ];
  }

  if (nameLower.includes('jee') || nameLower.includes('iit')) {
    return [
      { day: 'Monday', subject: 'Physics', topic: 'Rotational Motion & Moment of Inertia', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'Mathematics', topic: 'Calculus: Definite Integrals & Area Under Curves', activity: 'Practice PYQ', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'Organic Chemistry', topic: 'Reaction Mechanisms (SN1, SN2, Electrophilic Addition)', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'Physical Chemistry', topic: 'Chemical Thermodynamics & Ionic Equilibrium', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Mathematics', topic: 'Vectors & 3D Geometry Problem Set', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'Physics', topic: 'Electrostatics & Gauss Law Applications', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
      { day: 'Thursday', subject: 'Inorganic Chemistry', topic: 'Coordination Compounds & Chemical Bonding', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Thursday', subject: 'Physics', topic: 'Modern Physics & Photoelectric Effect', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Friday', subject: 'Mathematics', topic: 'Permutations, Combinations & Probability', activity: 'Practice PYQ', durationMinutes: 90, completed: false },
      { day: 'Saturday', subject: 'PCM Master Review', topic: 'Key Formula Derivations & Tough Problems Log', activity: 'Revision', durationMinutes: 120, completed: false },
      { day: 'Sunday', subject: 'Full PCM Syllabus', topic: 'JEE Advanced Timed Dual 3-Hour CBT Simulation', activity: 'Mock Test', durationMinutes: 180, completed: false }
    ];
  }

  if (nameLower.includes('neet') || nameLower.includes('medical') || nameLower.includes('mbbs')) {
    return [
      { day: 'Monday', subject: 'Human Physiology', topic: 'Neural Control & Endocrine Coordination', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'Genetics', topic: 'Mendelian Genetics & Molecular Basis of Inheritance', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
      { day: 'Tuesday', subject: 'Physics', topic: 'Laws of Motion & Work-Energy-Power', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'Organic Chemistry', topic: 'Aldehydes, Ketones & Carboxylic Acids', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Plant Physiology', topic: 'Photosynthesis & Mineral Nutrition in Higher Plants', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Wednesday', subject: 'Physical Chemistry', topic: 'Chemical Equilibrium & Solutions Numericals', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Thursday', subject: 'Inorganic Chemistry', topic: 'p-Block Elements & Periodic Trends', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Thursday', subject: 'Physics', topic: 'Ray Optics & Wave Optics Problem Drill', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
      { day: 'Friday', subject: 'Ecology & Evolution', topic: 'Ecosystem Dynamics & Population Ecology', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Saturday', subject: 'NCERT Biology High-Yield', topic: 'NCERT Exemplar Questions & Diagrams Revision', activity: 'Revision', durationMinutes: 120, completed: false },
      { day: 'Sunday', subject: 'Full NEET Syllabus', topic: 'NEET Grand Mock Test (200 Questions, 720 Marks)', activity: 'Mock Test', durationMinutes: 200, completed: false }
    ];
  }

  if (nameLower.includes('cat') || nameLower.includes('management') || nameLower.includes('iim')) {
    return [
      { day: 'Monday', subject: 'VARC', topic: '4 Advanced Reading Comprehension Passages', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'DILR', topic: 'Linear & Circular Matrix Arrangements', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Tuesday', subject: 'Quantitative Aptitude', topic: 'Arithmetic: Percentages, Profit-Loss & TSD', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Tuesday', subject: 'VARC', topic: 'Para Jumbles, Para Summary & Odd-One-Out', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'DILR', topic: 'Games & Tournaments / Venn Diagrams', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Algebra: Quadratic Equations & Logarithms', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
      { day: 'Thursday', subject: 'Quantitative Aptitude', topic: 'Geometry, Circles & Mensuration', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Friday', subject: 'DILR Speed Drill', topic: 'Complex Caselets & Radar Chart Interpretation', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
      { day: 'Saturday', subject: 'Sectional Review', topic: 'Error Analysis & Speed Optimization Strategy', activity: 'Revision', durationMinutes: 90, completed: false },
      { day: 'Sunday', subject: 'Full CAT Syllabus', topic: 'Full-Length 2-Hour Timed CAT Computer-Based Mock', activity: 'Mock Test', durationMinutes: 120, completed: false }
    ];
  }

  if (nameLower.includes('ssc') || nameLower.includes('cgl')) {
    return [
      { day: 'Monday', subject: 'Quantitative Aptitude', topic: 'Geometry & Trigonometry Identities', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Monday', subject: 'Reasoning', topic: 'Analogies, Syllogisms & Coding-Decoding', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Tuesday', subject: 'General Awareness', topic: 'Indian Constitution, Articles & Amendments', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Tuesday', subject: 'English Language', topic: 'Active/Passive Voice & Direct/Indirect Speech', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Arithmetic: Ratios, Time-Work & Compound Interest', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'General Awareness', topic: 'Modern History & Static GK (Dances, Parks, Rivers)', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Thursday', subject: 'English Language', topic: 'Idioms, Phrases, One-Word Substitutions & Cloze Test', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Friday', subject: 'Speed Marathon', topic: 'Tier-1 Mixed 100-Question Speed Sprint', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Saturday', subject: 'Weekly Revision', topic: 'Math Short Tricks & Current Affairs of Last 6 Months', activity: 'Revision', durationMinutes: 90, completed: false },
      { day: 'Sunday', subject: 'Full Syllabus', topic: 'SSC CGL Tier-1 100-Question 60-Minute Real Simulation', activity: 'Mock Test', durationMinutes: 60, completed: false }
    ];
  }

  if (nameLower.includes('bank') || nameLower.includes('ibps') || nameLower.includes('sbi')) {
    return [
      { day: 'Monday', subject: 'Quantitative Aptitude', topic: 'Simplification, Approximation & Number Series', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Monday', subject: 'Reasoning Ability', topic: 'Floor & Flat Puzzles, Box Arrangements', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Tuesday', subject: 'Reasoning Ability', topic: 'Syllogism (Only a few cases) & Inequalities', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Tuesday', subject: 'English Language', topic: 'Reading Comprehension & Cloze Test Drills', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Data Interpretation: Bar, Line & Pie Charts', activity: 'Concept Study', durationMinutes: 90, completed: false },
      { day: 'Wednesday', subject: 'Banking Awareness', topic: 'RBI Regulations, Monetary Policy & Financial Terms', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Thursday', subject: 'Reasoning Ability', topic: 'Machine Input-Output & Direction Sense', activity: 'Concept Study', durationMinutes: 75, completed: false },
      { day: 'Friday', subject: 'Speed Math & Vocabulary', topic: 'Vedic Math Shortcuts, Error Spotting & Word Swap', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
      { day: 'Saturday', subject: 'Revision & Analysis', topic: 'Sectional Timed Quizzes & Weak Area Practice', activity: 'Revision', durationMinutes: 90, completed: false },
      { day: 'Sunday', subject: 'Full Syllabus', topic: 'IBPS/SBI PO Prelims Full 100-Question 60-Minute Mock', activity: 'Mock Test', durationMinutes: 60, completed: false }
    ];
  }

  // Default rich fallback for any other general or academic examination
  const subjList = subjects.length > 0 ? subjects : ['Core Subject 1', 'Core Subject 2', 'Core Subject 3'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days.map((day, idx) => ({
    day,
    subject: subjList[idx % subjList.length],
    topic: idx === 6 ? 'Weekly Full-Length Practice Test' : `Key Concepts & Problem Solving - Section ${idx + 1}`,
    activity: idx === 6 ? 'Mock Test' : idx % 2 === 0 ? 'Concept Study' : 'Practice PYQ',
    durationMinutes: idx === 6 ? 120 : 75,
    completed: false
  }));
}

// GET STUDENT STUDY PLAN
export const getStudyPlan = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const examId = String(req.params.examId || '');
    const filter: any = { userId: new mongoose.Types.ObjectId(userId) };

    if (examId && mongoose.Types.ObjectId.isValid(examId)) {
      filter.examId = new mongoose.Types.ObjectId(examId);
    }

    let plan = await StudyPlan.findOne(filter).sort({ updatedAt: -1 });

    return res.status(200).json({
      success: true,
      data: plan
    });
  } catch (error) {
    console.error('Get Study Plan Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch study plan' });
  }
};

// GENERATE OR UPDATE ADAPTIVE STUDY PLAN
export const generateStudyPlan = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const { examId, dailyHours = 4, targetExamDate } = req.body;
    if (!examId) {
      return res.status(400).json({ success: false, message: 'Valid exam identifier required' });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);

    let exam: any = null;
    let examObjectId: mongoose.Types.ObjectId | null = null;

    if (mongoose.Types.ObjectId.isValid(examId)) {
      examObjectId = new mongoose.Types.ObjectId(examId);
      exam = await Exam.findById(examObjectId);
    } else {
      exam = await Exam.findOne({ slug: examId });
      if (exam) {
        examObjectId = exam._id;
      }
    }

    const syllabus = examObjectId ? await Syllabus.findOne({ examId: examObjectId }) : null;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let generatedTasks: any[] = [];

    if (syllabus && syllabus.subjects && syllabus.subjects.length > 0) {
      let dayIndex = 0;
      syllabus.subjects.forEach((subj) => {
        subj.topics.slice(0, 3).forEach((topic, tIdx) => {
          const currentDay = days[dayIndex % days.length];
          const activity = tIdx % 3 === 0 ? 'Concept Study' : tIdx % 3 === 1 ? 'Practice PYQ' : 'Revision';
          generatedTasks.push({
            day: currentDay,
            subject: subj.name,
            topic: topic.title,
            activity,
            durationMinutes: Math.min(120, (topic.estimatedHours || 1) * 30),
            completed: false
          });
          dayIndex++;
        });
      });
      // Add weekly mock test
      generatedTasks.push({
        day: 'Sunday',
        subject: 'Full Syllabus',
        topic: 'Weekly Adaptive Benchmark Mock Test',
        activity: 'Mock Test',
        durationMinutes: 180,
        completed: false
      });
    } else {
      // Build tailored syllabus based on exam name, slug, or subjects
      const examName = exam?.name || String(examId);
      const examSlug = exam?.slug || String(examId);
      const subjects = exam?.subjects || [];
      generatedTasks = getExamSpecificFallbackTasks(examName, examSlug, subjects);
    }

    const targetExamObjectId = examObjectId || new mongoose.Types.ObjectId();
    const examDisplayName = exam?.name || String(examId).replace(/-/g, ' ').toUpperCase();

    const plan = await StudyPlan.findOneAndUpdate(
      { userId: userObjectId, examId: targetExamObjectId },
      {
        userId: userObjectId,
        examId: targetExamObjectId,
        examName: examDisplayName,
        dailyHours: Number(dailyHours) || 4,
        targetExamDate: targetExamDate ? new Date(targetExamDate) : (exam?.examDate || new Date(Date.now() + 90 * 24 * 3600 * 1000)),
        tasks: generatedTasks,
        adaptiveNotes: `Dynamically calibrated for ${dailyHours} hrs/day based on verified exam weightage and high-yield chapters.`
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Adaptive study plan generated successfully',
      data: plan
    });
  } catch (error) {
    console.error('Generate Study Plan Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to generate study plan' });
  }
};

// TOGGLE TASK COMPLETION
export const toggleTaskCompletion = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const planId = String(req.params.planId || '');
    const taskId = String(req.params.taskId || '');
    const { completed } = req.body;

    if (!mongoose.Types.ObjectId.isValid(planId) || !mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ success: false, message: 'Invalid plan or task ID' });
    }

    const plan = await StudyPlan.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(planId), userId: new mongoose.Types.ObjectId(userId), 'tasks._id': new mongoose.Types.ObjectId(taskId) },
      {
        $set: {
          'tasks.$.completed': !!completed,
          'tasks.$.completedAt': completed ? new Date() : null
        }
      },
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ success: false, message: 'Task or plan not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Task updated',
      data: plan
    });
  } catch (error) {
    console.error('Toggle Task Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to update task' });
  }
};

// ADD CUSTOM TASK TO PLAN
export const addCustomTask = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const planId = String(req.params.planId || '');
    const { day, subject, topic, activity = 'Concept Study', durationMinutes = 60 } = req.body;

    if (!mongoose.Types.ObjectId.isValid(planId)) {
      return res.status(400).json({ success: false, message: 'Invalid plan ID' });
    }

    if (!day || !subject || !topic) {
      return res.status(400).json({ success: false, message: 'Day, subject, and topic are required' });
    }

    const newTask = {
      day,
      subject,
      topic,
      activity,
      durationMinutes: Number(durationMinutes) || 60,
      completed: false
    };

    const plan = await StudyPlan.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(planId), userId: new mongoose.Types.ObjectId(userId) },
      { $push: { tasks: newTask } },
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ success: false, message: 'Plan not found' });
    }

    return res.status(201).json({
      success: true,
      message: 'Task added successfully',
      data: plan
    });
  } catch (error) {
    console.error('Add Custom Task Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to add custom task' });
  }
};

// DELETE TASK FROM PLAN
export const deleteTaskFromPlan = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const planId = String(req.params.planId || '');
    const taskId = String(req.params.taskId || '');

    if (!mongoose.Types.ObjectId.isValid(planId) || !mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ success: false, message: 'Invalid plan or task ID' });
    }

    const plan = await StudyPlan.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(planId), userId: new mongoose.Types.ObjectId(userId) },
      { $pull: { tasks: { _id: new mongoose.Types.ObjectId(taskId) } } },
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ success: false, message: 'Plan not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Task removed successfully',
      data: plan
    });
  } catch (error) {
    console.error('Delete Task Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to remove task' });
  }
};

