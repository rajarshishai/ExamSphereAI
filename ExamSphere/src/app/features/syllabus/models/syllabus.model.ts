
export interface SyllabusTopic {
  _id: string;
  title: string;
  description?: string;
  importance: 'High' | 'Medium' | 'Low';
  estimatedHours: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  weightage?: string;
  subtopics?: string[];
}

export interface SyllabusSubject {
  _id: string;
  name: string;
  weightage?: string;
  totalHours?: number;
  topics: SyllabusTopic[];
}

export interface Syllabus {
  _id: string;
  examId: string;
  slug?: string;
  examName: string;
  category: string;
  subCategory?: string;
  conductingBody?: string;
  totalMarks?: number;
  durationMinutes?: number;
  overview?: string;
  pattern?: string;
  subjects: SyllabusSubject[];
}

export interface SubjectProgress {
  subjectName: string;
  totalTopics: number;
  completedTopics: number;
  completionPercentage: number;
}

export interface SyllabusProgress {
  examName: string;
  totalTopics: number;
  completedTopics: number;
  pendingTopics: number;
  completionPercentage: number;
  completedTopicIds?: string[];
  subjects: SubjectProgress[];
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}
