export interface ExamOfficialBlueprint {
  examSlug: string;
  examName: string;
  category: string;
  conductingBody: string;
  officialDurationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  negativeMarkingRate: number;
  negativeMarkingFormula: string;
  patternType: string;
  sections: {
    name: string;
    questionCount: number;
    marks: number;
    durationMinutes?: number;
  }[];
  subjects: string[];
  officialRules: string[];
  blueprintSummary: string;
}

export const OFFICIAL_EXAM_BLUEPRINTS: Record<string, ExamOfficialBlueprint> = {
  'jee-main': {
    examSlug: 'jee-main',
    examName: 'JEE Main',
    category: 'Engineering',
    conductingBody: 'National Testing Agency (NTA)',
    officialDurationMinutes: 180,
    totalMarks: 300,
    totalQuestions: 90,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-1 Mark per incorrect answer (both MCQs & Numerical)',
    patternType: 'Computer Based Test (CBT)',
    sections: [
      { name: 'Physics (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 },
      { name: 'Chemistry (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 },
      { name: 'Mathematics (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 }
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    officialRules: [
      'Total 90 questions: 30 questions each in Physics, Chemistry, and Mathematics.',
      'Section A contains 20 Multiple Choice Questions (compulsory).',
      'Section B contains 10 Numerical Value questions (attempt any 5).',
      'Marking Scheme: +4 marks for correct answer, -1 mark for incorrect answer.'
    ],
    blueprintSummary: '3 Hours • 300 Marks • 75 Questions to Attempt • Official NTA Format'
  },
  'jee-advanced': {
    examSlug: 'jee-advanced',
    examName: 'JEE Advanced',
    category: 'Engineering',
    conductingBody: 'IIT Consortium (Zonal IIT)',
    officialDurationMinutes: 180,
    totalMarks: 180,
    totalQuestions: 54,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-1 to -2 for wrong MCQs, partial marks for multi-correct',
    patternType: 'Computer Based Test (CBT - Paper 1 & Paper 2)',
    sections: [
      { name: 'Physics (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 },
      { name: 'Chemistry (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 },
      { name: 'Mathematics (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 }
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    officialRules: [
      'Contains Single-Correct MCQs, One or More than One Correct MCQs, and Numerical Value Questions.',
      'Partial marking is awarded for multi-correct questions.',
      'Negative marking applies to incorrect single and multi-correct options.'
    ],
    blueprintSummary: '3 Hours • 180 Marks • Advanced Multi-Concept CBT'
  },
  'neet-ug': {
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    conductingBody: 'National Testing Agency (NTA)',
    officialDurationMinutes: 200,
    totalMarks: 720,
    totalQuestions: 200,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-1 Mark per incorrect response (25%)',
    patternType: 'Pen & Paper OMR / CBT Simulation',
    sections: [
      { name: 'Physics (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
      { name: 'Chemistry (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
      { name: 'Botany (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
      { name: 'Zoology (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 }
    ],
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    officialRules: [
      'Total 200 questions: 180 questions must be attempted.',
      'Each subject has Section A (35 questions, all compulsory) and Section B (15 questions, attempt any 10).',
      '+4 marks for correct answer, -1 mark for wrong answer, 0 for unattempted.'
    ],
    blueprintSummary: '3 Hours 20 Mins • 720 Marks • 180 Questions to Attempt • NTA Medical Blueprint'
  },
  'gate-cse': {
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    conductingBody: 'IITs & IISc Bangalore',
    officialDurationMinutes: 180,
    totalMarks: 100,
    totalQuestions: 65,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-0.33 for 1-mark MCQs, -0.66 for 2-mark MCQs (0 for NAT & MSQ)',
    patternType: 'Computer Based Test (CBT)',
    sections: [
      { name: 'General Aptitude (GA)', questionCount: 10, marks: 15 },
      { name: 'Engineering Mathematics', questionCount: 10, marks: 13 },
      { name: 'Computer Science Core Technical', questionCount: 45, marks: 72 }
    ],
    subjects: ['General Aptitude', 'Engineering Mathematics', 'Algorithms & Data Structures', 'Operating Systems', 'Computer Networks', 'Theory of Computation & Compilers', 'Databases'],
    officialRules: [
      'Questions consist of MCQs (Multiple Choice), MSQs (Multiple Select), and NAT (Numerical Answer Type).',
      'Negative marking of 1/3rd is ONLY applied to MCQs. No negative marking for NAT or MSQ.',
      'Virtual Scientific Calculator is provided on screen.'
    ],
    blueprintSummary: '3 Hours • 100 Marks • 65 Questions • Official IIT GATE Blueprint'
  },
  'upsc-cse': {
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Civil Services',
    conductingBody: 'Union Public Service Commission (UPSC)',
    officialDurationMinutes: 120,
    totalMarks: 200,
    totalQuestions: 100,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-0.66 Marks per incorrect answer (1/3rd penalty)',
    patternType: 'Offline OMR / Real Simulator',
    sections: [
      { name: 'Indian Polity & Governance', questionCount: 18, marks: 36 },
      { name: 'History of India & National Movement', questionCount: 18, marks: 36 },
      { name: 'Geography & Environmental Ecology', questionCount: 22, marks: 44 },
      { name: 'Economic & Social Development', questionCount: 18, marks: 36 },
      { name: 'General Science & National/International Events', questionCount: 24, marks: 48 }
    ],
    subjects: ['Polity', 'History', 'Geography', 'Economy', 'Environment', 'Science & Technology', 'Current Affairs'],
    officialRules: [
      'Preliminary Examination General Studies Paper I determines cutoff for Mains qualification.',
      '100 questions of 2 marks each. Total marks: 200.',
      '1/3rd (0.66 marks) deducted for every wrong answer.'
    ],
    blueprintSummary: '2 Hours • 200 Marks • 100 Questions • UPSC Prelims GS Paper 1 Pattern'
  },
  'cat': {
    examSlug: 'cat',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    conductingBody: 'Indian Institutes of Management (IIMs)',
    officialDurationMinutes: 120,
    totalMarks: 198,
    totalQuestions: 66,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-1 Mark for incorrect MCQ, 0 penalty for Non-MCQ (TITA)',
    patternType: 'Computer Based Test with Sectional 40-Min Timers',
    sections: [
      { name: 'Verbal Ability & Reading Comprehension (VARC)', questionCount: 24, marks: 72, durationMinutes: 40 },
      { name: 'Data Interpretation & Logical Reasoning (DILR)', questionCount: 20, marks: 60, durationMinutes: 40 },
      { name: 'Quantitative Aptitude (QA)', questionCount: 22, marks: 66, durationMinutes: 40 }
    ],
    subjects: ['VARC', 'DILR', 'Quantitative Aptitude'],
    officialRules: [
      'Strict 40-minute timer per section. Candidates cannot switch sections during an active section.',
      '+3 marks for correct response, -1 mark for incorrect MCQ.',
      'No negative marking for Type-In-The-Answer (TITA) questions.'
    ],
    blueprintSummary: '2 Hours (40m/sec) • 198 Marks • 66 Questions • Official IIM CAT Blueprint'
  },
  'ssc-cgl': {
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    conductingBody: 'Staff Selection Commission (SSC)',
    officialDurationMinutes: 60,
    totalMarks: 200,
    totalQuestions: 100,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-0.50 Marks per wrong answer (25%)',
    patternType: 'Computer Based Test (CBT Tier-1)',
    sections: [
      { name: 'General Intelligence & Reasoning', questionCount: 25, marks: 50 },
      { name: 'General Awareness', questionCount: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
      { name: 'English Comprehension', questionCount: 25, marks: 50 }
    ],
    subjects: ['Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English'],
    officialRules: [
      '100 questions of 2 marks each. Total duration: 60 minutes.',
      'Negative marking: 0.50 marks for each wrong answer.',
      'All sections must be navigated freely within the 60-minute window.'
    ],
    blueprintSummary: '60 Mins • 200 Marks • 100 Questions • SSC CGL Tier-1 Speed Blueprint'
  },
  'clat-ug': {
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    conductingBody: 'Consortium of National Law Universities',
    officialDurationMinutes: 120,
    totalMarks: 120,
    totalQuestions: 120,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-0.25 Marks per incorrect answer (25%)',
    patternType: 'Passage-Based Comprehension CBT',
    sections: [
      { name: 'English Language', questionCount: 24, marks: 24 },
      { name: 'Current Affairs & General Knowledge', questionCount: 28, marks: 28 },
      { name: 'Legal Reasoning', questionCount: 32, marks: 32 },
      { name: 'Logical Reasoning', questionCount: 24, marks: 24 },
      { name: 'Quantitative Techniques', questionCount: 12, marks: 12 }
    ],
    subjects: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    officialRules: [
      '120 passage-based questions, each worth 1 mark.',
      '0.25 mark deducted for each incorrect answer.',
      'Emphasis on reading speed, comprehension, and analytical deduction.'
    ],
    blueprintSummary: '2 Hours • 120 Marks • 120 Questions • National Law Universities Blueprint'
  },
  'nda': {
    examSlug: 'nda',
    examName: 'National Defence Academy (NDA)',
    category: 'Defence',
    conductingBody: 'Union Public Service Commission (UPSC)',
    officialDurationMinutes: 150,
    totalMarks: 300,
    totalQuestions: 120,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-0.83 Marks per incorrect answer (33%)',
    patternType: 'Offline OMR / Real Simulator (Mathematics Paper)',
    sections: [
      { name: 'Algebra, Trigonometry & Matrices', questionCount: 40, marks: 100 },
      { name: 'Calculus & Differential Equations', questionCount: 40, marks: 100 },
      { name: 'Coordinate Geometry, Vectors & Probability', questionCount: 40, marks: 100 }
    ],
    subjects: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Vectors & Statistics'],
    officialRules: [
      'Mathematics Paper contains 120 questions of 2.5 marks each. Total marks: 300.',
      '1/3rd (0.83 marks) deducted for each incorrect response.',
      'Calculators are strictly prohibited.'
    ],
    blueprintSummary: '2.5 Hours • 300 Marks • 120 Questions • UPSC NDA Mathematics Blueprint'
  },
  'sbi-po': {
    examSlug: 'sbi-po',
    examName: 'State Bank of India Probationary Officer (SBI PO)',
    category: 'Banking',
    conductingBody: 'State Bank of India (SBI)',
    officialDurationMinutes: 60,
    totalMarks: 100,
    totalQuestions: 100,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-0.25 Marks per wrong answer (25%)',
    patternType: 'Online CBT with 20-min Sectional Timers',
    sections: [
      { name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20 },
      { name: 'Quantitative Aptitude', questionCount: 35, marks: 35, durationMinutes: 20 },
      { name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20 }
    ],
    subjects: ['English', 'Quantitative Aptitude', 'Reasoning Ability'],
    officialRules: [
      'Strict 20-minute timer for each of the 3 sections.',
      '1/4th (0.25 mark) penalty for every wrong answer.',
      'No sectional cut-off in SBI PO Prelims, but overall merit list applies.'
    ],
    blueprintSummary: '60 Mins (20m/sec) • 100 Marks • 100 Questions • SBI PO Prelims Blueprint'
  },
  'ugc-net': {
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    conductingBody: 'National Testing Agency (NTA)',
    officialDurationMinutes: 180,
    totalMarks: 300,
    totalQuestions: 150,
    negativeMarkingRate: 0,
    negativeMarkingFormula: 'No Negative Marking (0%)',
    patternType: 'Computer Based Test (Single Session without Break)',
    sections: [
      { name: 'Paper 1 (Teaching & Research Aptitude, ICT, Higher Ed)', questionCount: 50, marks: 100 },
      { name: 'Paper 2 (Specialized Domain Subject Knowledge)', questionCount: 100, marks: 200 }
    ],
    subjects: ['Teaching Aptitude', 'Research Aptitude', 'ICT & Logic', 'Subject Domain Knowledge'],
    officialRules: [
      '150 questions of 2 marks each across Paper 1 and Paper 2.',
      'Continuous 3-hour duration without break between papers.',
      'No negative marking for incorrect responses.'
    ],
    blueprintSummary: '3 Hours • 300 Marks • 150 Questions • Zero Negative Marking NTA NET'
  },
  'rrb-ntpc': {
    examSlug: 'rrb-ntpc',
    examName: 'Railway Recruitment Board (RRB NTPC)',
    category: 'Railway',
    conductingBody: 'Railway Recruitment Control Board',
    officialDurationMinutes: 90,
    totalMarks: 100,
    totalQuestions: 100,
    negativeMarkingRate: 0.33,
    negativeMarkingFormula: '-0.33 Marks per wrong answer (1/3rd penalty)',
    patternType: 'Computer Based Test (CBT-1)',
    sections: [
      { name: 'General Awareness', questionCount: 40, marks: 40 },
      { name: 'Mathematics', questionCount: 30, marks: 30 },
      { name: 'General Intelligence & Reasoning', questionCount: 30, marks: 30 }
    ],
    subjects: ['General Awareness', 'Mathematics', 'General Intelligence & Reasoning'],
    officialRules: [
      '100 objective questions of 1 mark each.',
      '1/3rd mark deducted for every incorrect response.',
      'Free sectional navigation within the 90-minute timeframe.'
    ],
    blueprintSummary: '90 Mins • 100 Marks • 100 Questions • Railway CBT-1 Blueprint'
  }
};

export const getBlueprintForExam = (examSlugOrName: string, fallbackMeta?: any): ExamOfficialBlueprint => {
  const normalized = (examSlugOrName || '').toLowerCase().trim();

  // Direct key lookup
  for (const [slug, bp] of Object.entries(OFFICIAL_EXAM_BLUEPRINTS)) {
    if (
      normalized === slug ||
      normalized === bp.examName.toLowerCase() ||
      normalized.includes(slug) ||
      bp.examName.toLowerCase().includes(normalized)
    ) {
      return bp;
    }
  }

  // Synthesize dynamic blueprint for other examinations
  const name = fallbackMeta?.name || examSlugOrName || 'Competitive Examination';
  const category = fallbackMeta?.category || 'General';
  const subjects = fallbackMeta?.subjects && fallbackMeta.subjects.length > 0
    ? fallbackMeta.subjects
    : ['General Aptitude', 'Core Domain', 'Analytical Reasoning'];

  return {
    examSlug: fallbackMeta?.slug || normalized.replace(/\s+/g, '-'),
    examName: name,
    category,
    conductingBody: fallbackMeta?.conductingBody || 'National Assessment Body',
    officialDurationMinutes: 90,
    totalMarks: 100,
    totalQuestions: 50,
    negativeMarkingRate: 0.25,
    negativeMarkingFormula: '-0.25 Marks per incorrect answer (25%)',
    patternType: 'Computer Based Test (CBT)',
    sections: subjects.map((subj: string) => ({
      name: subj,
      questionCount: Math.round(50 / subjects.length),
      marks: Math.round(100 / subjects.length)
    })),
    subjects,
    officialRules: [
      `Official testing format for ${name}.`,
      'Questions testing core conceptual domain knowledge and speed.',
      'Standard negative marking applies to incorrect answers.'
    ],
    blueprintSummary: `90 Mins • 100 Marks • Official Pattern for ${name}`
  };
};
