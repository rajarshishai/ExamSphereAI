// =========================================================================
// ExamSphere AI - Verified Frontend Examinations Catalog (120 Exams)
// Fallback and instant client-side catalog for Explore Exams page.
// =========================================================================

export interface FrontendExamItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  level: string;
  conductingAuthority: string;
  qualification: string;
  examMode: string;
  frequency: string;
  status: 'Upcoming' | 'Open' | 'Closed' | 'Verified';
  examDateText: string;
  description: string;
  subjects: string[];
}

export const FALLBACK_EXAM_CATALOG: FrontendExamItem[] = [
  {
    "id": "EXAM-001",
    "slug": "gate-cse",
    "name": "GATE Computer Science & Information Technology",
    "shortName": "GATE CSE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs & IISc Bangalore",
    "qualification": "B.E. / B.Tech / M.Sc / MCA or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Premier national postgraduate examination testing comprehensive undergraduate CS/IT subjects for M.Tech admissions and PSU recruitment.",
    "subjects": [
      "Programming & Data Structures",
      "Algorithms",
      "Operating Systems & Databases",
      "Computer Networks & Compilers",
      "Engineering Mathematics & Aptitude"
    ]
  },
  {
    "id": "EXAM-002",
    "slug": "gate-me",
    "name": "GATE Mechanical Engineering",
    "shortName": "GATE ME",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs & IISc Bangalore",
    "qualification": "B.E. / B.Tech / M.Sc / MCA or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Core postgraduate entrance examination evaluating comprehensive engineering thermodynamics, fluid mechanics, design, and manufacturing.",
    "subjects": [
      "Applied Mechanics & Design",
      "Thermal Sciences & Fluid Mechanics",
      "Materials, Manufacturing & Math/Aptitude"
    ]
  },
  {
    "id": "EXAM-003",
    "slug": "gate-ce",
    "name": "GATE Civil Engineering",
    "shortName": "GATE CE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs & IISc Bangalore",
    "qualification": "B.E. / B.Tech / M.Sc / MCA or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "In-depth national civil engineering evaluation focusing on structures, soil mechanics, environmental engineering, hydrology, and highway design.",
    "subjects": [
      "Structural Engineering",
      "Geotechnical & Environmental",
      "Water Resources, Transportation & Math"
    ]
  },
  {
    "id": "EXAM-004",
    "slug": "gate-ee",
    "name": "GATE Electrical Engineering",
    "shortName": "GATE EE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs & IISc Bangalore",
    "qualification": "B.E. / B.Tech / M.Sc / MCA or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "All-India examination covering electric networks, power systems, electrical machines, control systems, and power electronics.",
    "subjects": [
      "Circuits, Fields & Control Systems",
      "Electrical Machines & Power Systems",
      "Power Electronics & Math/Aptitude"
    ]
  },
  {
    "id": "EXAM-005",
    "slug": "gate-ece",
    "name": "GATE Electronics & Communication Engineering",
    "shortName": "GATE ECE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs & IISc Bangalore",
    "qualification": "B.E. / B.Tech / M.Sc / MCA or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Specialized evaluation of electronic devices, analog/digital design, communications, signal processing, and antenna wave propagation.",
    "subjects": [
      "Devices, Circuits & Digital Logic",
      "Signals, Systems & Communications",
      "Electromagnetics & Math/Aptitude"
    ]
  },
  {
    "id": "EXAM-006",
    "slug": "jee-main",
    "name": "Joint Entrance Examination Main (JEE Main)",
    "shortName": "JEE MAIN",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "National Testing Agency (NTA)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "National screening entrance examination for admission into undergraduate engineering programs across NITs, IIITs, CFTIs.",
    "subjects": [
      "Physics",
      "Chemistry",
      "Mathematics"
    ]
  },
  {
    "id": "EXAM-007",
    "slug": "jee-advanced",
    "name": "Joint Entrance Examination Advanced (JEE Advanced)",
    "shortName": "JEE ADVANCED",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "IITs (Joint Admission Board)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Elite all-India engineering entrance examination for admission across all 23 IITs.",
    "subjects": [
      "Advanced Physics",
      "Advanced Chemistry",
      "Advanced Mathematics"
    ]
  },
  {
    "id": "EXAM-008",
    "slug": "bitsat",
    "name": "Birla Institute of Technology and Science Admission Test (BITSAT)",
    "shortName": "BITSAT",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "BITS Pilani",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Computer-based entrance examination for admission into integrated first-degree programmes of BITS Pilani.",
    "subjects": [
      "Physics & Chemistry",
      "Mathematics",
      "English & Logical Reasoning"
    ]
  },
  {
    "id": "EXAM-009",
    "slug": "viteee",
    "name": "VIT Engineering Entrance Examination (VITEEE)",
    "shortName": "VITEEE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "VIT University",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Annual computer-based entrance exam for admissions to B.Tech programs offered across VIT campuses.",
    "subjects": [
      "Mathematics & Physics",
      "Chemistry, English & Aptitude"
    ]
  },
  {
    "id": "EXAM-010",
    "slug": "srmjeee",
    "name": "SRM Joint Engineering Entrance Examination (SRMJEEE)",
    "shortName": "SRMJEEE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "SRM Institute of Science and Technology",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Undergraduate engineering entrance examination for B.Tech admission across SRM University campuses.",
    "subjects": [
      "Physics & Chemistry",
      "Mathematics & Aptitude"
    ]
  },
  {
    "id": "EXAM-011",
    "slug": "wbjee",
    "name": "West Bengal Joint Entrance Examination (WBJEE)",
    "shortName": "WBJEE",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "WBJEE Board",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "State-level examination for admission to undergraduate engineering and pharmacy courses in West Bengal.",
    "subjects": [
      "Mathematics (Paper 1)",
      "Physics & Chemistry (Paper 2)"
    ]
  },
  {
    "id": "EXAM-012",
    "slug": "mht-cet-eng",
    "name": "Maharashtra Common Entrance Test (MHT CET Engineering)",
    "shortName": "MHT CET ENG",
    "category": "Engineering",
    "level": "National",
    "conductingAuthority": "State CET Cell, Maharashtra",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Mathematics",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "State common entrance test for admission to first-year engineering and technology degree courses in Maharashtra.",
    "subjects": [
      "Mathematics",
      "Physics & Chemistry"
    ]
  },
  {
    "id": "EXAM-013",
    "slug": "neet-ug",
    "name": "National Eligibility cum Entrance Test (NEET UG)",
    "shortName": "NEET UG",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Testing Agency (NTA)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Offline (OMR / Written Pen-Paper)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Single unified national entrance examination for admission to undergraduate medical (MBBS), dental (BDS), AYUSH, and nursing programmes.",
    "subjects": [
      "Biology (Botany & Zoology)",
      "Chemistry",
      "Physics"
    ]
  },
  {
    "id": "EXAM-014",
    "slug": "neet-pg",
    "name": "NEET for Postgraduate (NEET PG)",
    "shortName": "NEET PG",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Board of Examinations (NBE)",
    "qualification": "MBBS Degree from an NMC recognized institution + 1-year internship",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "National qualifying-cum-ranking examination for admission to MD/MS and PG Diploma courses across Indian medical colleges.",
    "subjects": [
      "Pre-Clinical Sciences",
      "Para-Clinical Sciences",
      "Clinical Sciences"
    ]
  },
  {
    "id": "EXAM-015",
    "slug": "ini-cet",
    "name": "Institute of National Importance Combined Entrance Test (INI CET)",
    "shortName": "INI CET",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "AIIMS New Delhi",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Combined entrance test for admission to PG courses in premier institutions: AIIMS, JIPMER, PGIMER, and NIMHANS.",
    "subjects": [
      "Integrated Clinical Medicine & Surgery",
      "Basic Medical Sciences & Research"
    ]
  },
  {
    "id": "EXAM-016",
    "slug": "neet-ss",
    "name": "NEET Super Specialty (NEET SS)",
    "shortName": "NEET SS",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Board of Examinations (NBE)",
    "qualification": "MD / MS / DNB in relevant specialty",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Single entrance examination for admission to DM and M.Ch super specialty medical and surgical courses in India.",
    "subjects": [
      "Broad Specialty Feeder Principles",
      "Super Specialty Domain Specialties"
    ]
  },
  {
    "id": "EXAM-017",
    "slug": "fmge",
    "name": "Foreign Medical Graduate Examination (FMGE)",
    "shortName": "FMGE",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Board of Examinations (NBE)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Mandatory statutory screening test conducted by NBE for Indian citizens with foreign medical degrees.",
    "subjects": [
      "Pre and Para-Clinical Subjects",
      "Clinical Subjects"
    ]
  },
  {
    "id": "EXAM-018",
    "slug": "aiapget",
    "name": "All India AYUSH Post Graduate Entrance Test (AIAPGET)",
    "shortName": "AIAPGET",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Testing Agency (NTA)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "National postgraduate entrance test for admission to MD/MS in Ayurveda, Unani, Siddha, and Homeopathy.",
    "subjects": [
      "Ayurveda Samhitas & Basic Principles",
      "Clinical Ayurveda & Therapeutics"
    ]
  },
  {
    "id": "EXAM-019",
    "slug": "gpat",
    "name": "Graduate Pharmacy Aptitude Test (GPAT)",
    "shortName": "GPAT",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Testing Agency (NTA)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "National entrance test for entry into M.Pharm programmes and awarding AICTE fellowship to pharmacy graduates.",
    "subjects": [
      "Pharmaceutics & Biopharmaceutics",
      "Pharmacology & Toxicology",
      "Medicinal Chemistry & Pharmacognosy"
    ]
  },
  {
    "id": "EXAM-020",
    "slug": "next-mbbs",
    "name": "National Exit Test (NExT MBBS)",
    "shortName": "NEXT MBBS",
    "category": "Medical",
    "level": "National",
    "conductingAuthority": "National Medical Commission (NMC)",
    "qualification": "Class 12 / Higher Secondary with Physics, Chemistry & Biology (PCB)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Comprehensive unified exit exam for all MBBS graduates across India serving both as a licensing test and postgraduate entrance.",
    "subjects": [
      "Medicine & Allied Specialities",
      "Surgery & Allied Specialities",
      "Obstetrics, Gynecology & Pediatrics"
    ]
  },
  {
    "id": "EXAM-021",
    "slug": "upsc-cse",
    "name": "Civil Services Examination (UPSC CSE / IAS)",
    "shortName": "UPSC CSE",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Offline (OMR / Written Pen-Paper)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Premier nationwide competitive examination conducted for recruitment into higher civil services including IAS, IPS, IFS.",
    "subjects": [
      "General Studies Paper I (Polity & History)",
      "General Studies Paper II & III (Economy & Geography)",
      "CSAT Aptitude & Ethics (GS IV)"
    ]
  },
  {
    "id": "EXAM-022",
    "slug": "upsc-ese",
    "name": "Engineering Services Examination (UPSC ESE / IES)",
    "shortName": "UPSC ESE",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Recruitment to Group A engineering positions under Government of India.",
    "subjects": [
      "General Studies & Engineering Aptitude",
      "Discipline Specific Technical Papers"
    ]
  },
  {
    "id": "EXAM-023",
    "slug": "upsc-capf",
    "name": "Central Armed Police Forces (UPSC CAPF AC)",
    "shortName": "UPSC CAPF",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Selection of Assistant Commandants in BSF, CRPF, CISF, ITBP and SSB.",
    "subjects": [
      "General Ability & Intelligence",
      "General Studies, Essay & Comprehension"
    ]
  },
  {
    "id": "EXAM-024",
    "slug": "ssc-cgl",
    "name": "Staff Selection Commission Combined Graduate Level (SSC CGL)",
    "shortName": "SSC CGL",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "National recruitment for Inspectors, Sub-Inspectors, and Officers across Indian ministries and departments.",
    "subjects": [
      "Quantitative Aptitude",
      "Reasoning & General Intelligence",
      "English Language & General Awareness"
    ]
  },
  {
    "id": "EXAM-025",
    "slug": "ssc-chsl",
    "name": "SSC Combined Higher Secondary Level (SSC CHSL)",
    "shortName": "SSC CHSL",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Selection for Lower Division Clerks, Junior Secretariat Assistants, and Data Entry Operators.",
    "subjects": [
      "Quantitative Aptitude",
      "General Intelligence, English & GK"
    ]
  },
  {
    "id": "EXAM-026",
    "slug": "ssc-cpo",
    "name": "SSC Central Police Organization (SSC CPO Sub-Inspector)",
    "shortName": "SSC CPO",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Recruitment of Sub-Inspectors in Delhi Police, CISF, BSF, CRPF, and ITBP.",
    "subjects": [
      "Paper 1 (Reasoning, GK, Math, English)",
      "Paper 2 (English Language & Comprehension)"
    ]
  },
  {
    "id": "EXAM-027",
    "slug": "ssc-je",
    "name": "SSC Junior Engineer (SSC JE Civil/Mech/Elec)",
    "shortName": "SSC JE",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Technical recruitment for CPWD, MES, CWC, and Border Roads Organisation.",
    "subjects": [
      "General Intelligence & Awareness",
      "Technical Engineering Domain"
    ]
  },
  {
    "id": "EXAM-028",
    "slug": "ssc-mts",
    "name": "SSC Multi-Tasking Staff (SSC MTS & Havaldar)",
    "shortName": "SSC MTS",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Central government recruitment for General Central Service Group C non-gazetted posts.",
    "subjects": [
      "Numerical & Mathematical Ability",
      "Reasoning, English & General Awareness"
    ]
  },
  {
    "id": "EXAM-029",
    "slug": "ssc-steno",
    "name": "SSC Stenographer (Grade C & D)",
    "shortName": "SSC STENO",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Staff Selection Commission (SSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Selection of Stenographers in government ministries, attached and subordinate offices.",
    "subjects": [
      "General Intelligence, Reasoning & GK",
      "English Language and Comprehension"
    ]
  },
  {
    "id": "EXAM-030",
    "slug": "upsc-ifos",
    "name": "UPSC Indian Forest Service (IFoS)",
    "shortName": "UPSC IFOS",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Recruitment to the elite Indian Forest Service managing India’s national parks and forest reserves.",
    "subjects": [
      "General English & General Knowledge",
      "Forestry & Science Optionals"
    ]
  },
  {
    "id": "EXAM-031",
    "slug": "upsc-cms",
    "name": "UPSC Combined Medical Services (CMS)",
    "shortName": "UPSC CMS",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Recruitment of Medical Officers in Indian Railways, Municipal Corporations, and Central Health Service.",
    "subjects": [
      "General Medicine & Pediatrics (Paper 1)",
      "Surgery, Gynecology & PSM (Paper 2)"
    ]
  },
  {
    "id": "EXAM-032",
    "slug": "upsc-geoscientist",
    "name": "UPSC Combined Geo-Scientist Examination",
    "shortName": "UPSC GEOSCIENTIST",
    "category": "Civil Services",
    "level": "National",
    "conductingAuthority": "Union Public Service Commission (UPSC)",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Recruitment of Geologists, Geophysicists, and Chemists in Geological Survey of India and Central Ground Water Board.",
    "subjects": [
      "General Studies & Earth Sciences",
      "Mineralogy, Petrology & Geophysics"
    ]
  },
  {
    "id": "EXAM-033",
    "slug": "sbi-po",
    "name": "State Bank of India Probationary Officer (SBI PO)",
    "shortName": "SBI PO",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "State Bank of India (SBI)",
    "qualification": "Bachelor’s Degree in any discipline with minimum 55-60% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Premier public sector banking officer recruitment comprising Prelims, Mains, Psychometric, and Interview.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-034",
    "slug": "sbi-clerk",
    "name": "State Bank of India Junior Associates (SBI Clerk)",
    "shortName": "SBI CLERK",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "State Bank of India (SBI)",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "National recruitment for customer support and clerical positions across SBI branches.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-035",
    "slug": "ibps-po",
    "name": "IBPS Probationary Officer / Management Trainee (IBPS PO)",
    "shortName": "IBPS PO",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Institute of Banking Personnel Selection",
    "qualification": "Bachelor’s Degree in any discipline with minimum 55-60% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Centralized recruitment for PO/MT across 11 participating public sector banks.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-036",
    "slug": "ibps-clerk",
    "name": "IBPS Clerical Cadre (IBPS Clerk)",
    "shortName": "IBPS CLERK",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Institute of Banking Personnel Selection",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "National recruitment examination for office clerks in public sector banks.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-037",
    "slug": "ibps-rrb-po",
    "name": "IBPS Regional Rural Banks Officer Scale-I (IBPS RRB PO)",
    "shortName": "IBPS RRB PO",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Institute of Banking Personnel Selection",
    "qualification": "Bachelor’s Degree in any discipline with minimum 55-60% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Officer recruitment in rural and semi-urban regional rural banks.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-038",
    "slug": "ibps-rrb-clerk",
    "name": "IBPS RRB Office Assistant (Multipurpose)",
    "shortName": "IBPS RRB CLERK",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Institute of Banking Personnel Selection",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Clerical recruitment in regional rural banks across all Indian states.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-039",
    "slug": "rbi-grade-b",
    "name": "Reserve Bank of India Grade B Officer (RBI Grade B)",
    "shortName": "RBI GRADE B",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Reserve Bank of India Services Board",
    "qualification": "Bachelor’s Degree in any discipline with minimum 55-60% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Elite central bank management cadre recruitment focusing on economics, finance, and management.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-040",
    "slug": "rbi-assistant",
    "name": "Reserve Bank of India Assistant (RBI Assistant)",
    "shortName": "RBI ASSISTANT",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Reserve Bank of India",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Clerical recruitment for regional offices of India’s central bank.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-041",
    "slug": "nabard-grade-a",
    "name": "NABARD Assistant Manager Grade A",
    "shortName": "NABARD GRADE A",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "National Bank for Agriculture and Rural Development",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Officer recruitment focusing on rural development, agriculture, and rural finance.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-042",
    "slug": "sebi-grade-a",
    "name": "SEBI Officer Grade A Assistant Manager",
    "shortName": "SEBI GRADE A",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Securities and Exchange Board of India",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Securities market regulator recruitment focusing on commerce, finance, and securities law.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-043",
    "slug": "lic-aao",
    "name": "Life Insurance Corporation Assistant Administrative Officer (LIC AAO)",
    "shortName": "LIC AAO",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "Life Insurance Corporation of India",
    "qualification": "Graduation in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Generalist and specialist officer recruitment in India’s largest state-owned insurer.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-044",
    "slug": "niacl-ao",
    "name": "New India Assurance Administrative Officer (NIACL AO)",
    "shortName": "NIACL AO",
    "category": "Banking",
    "level": "National",
    "conductingAuthority": "New India Assurance Company Ltd",
    "qualification": "Bachelor’s Degree in any discipline with minimum 55-60% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Leading general insurance public sector officer recruitment examination.",
    "subjects": [
      "Reasoning Ability & Computer Aptitude",
      "Quantitative Aptitude & Data Analysis",
      "English Language & General/Banking Awareness"
    ]
  },
  {
    "id": "EXAM-045",
    "slug": "nda",
    "name": "National Defence Academy & Naval Academy (NDA & NA)",
    "shortName": "NDA",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "UPSC",
    "qualification": "Class 12 Pass (Physics & Math for Air Force / Navy wings)",
    "examMode": "Offline (OMR / Written Pen-Paper)",
    "frequency": "Biannual (Twice a year)",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Premier officer recruitment test for Indian Army, Navy, and Air Force wings after 10+2.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-046",
    "slug": "cds",
    "name": "Combined Defence Services Examination (UPSC CDS)",
    "shortName": "CDS",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "UPSC",
    "qualification": "Bachelor’s degree from a recognized university (Engineering for technical branches)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Biannual (Twice a year)",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Graduation level entry for Indian Military Academy, Naval Academy, Air Force Academy, and OTA.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-047",
    "slug": "afcat",
    "name": "Air Force Common Admission Test (AFCAT)",
    "shortName": "AFCAT",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Air Force",
    "qualification": "Bachelor’s degree from a recognized university (Engineering for technical branches)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Biannual (Twice a year)",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Officer selection for Flying and Ground Duty (Technical and Non-Technical) branches.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-048",
    "slug": "inet-navy",
    "name": "Indian Navy Entrance Test (INET Officers)",
    "shortName": "INET NAVY",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Navy",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "Entry for Permanent Commission and Short Service Commission officers in the Indian Navy.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-049",
    "slug": "coast-guard-ac",
    "name": "Indian Coast Guard Assistant Commandant (ICG AC)",
    "shortName": "COAST GUARD AC",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Coast Guard",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Selection of Gazetted Officers in General Duty, Technical, and Aviation branches of ICG.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-050",
    "slug": "territorial-army",
    "name": "Territorial Army Officer (Non-Departmental)",
    "shortName": "TERRITORIAL ARMY",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Territorial Army Directorate",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Commissioning of civilian professionals as part-time military officers in the Indian Army.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-051",
    "slug": "army-tgc",
    "name": "Indian Army Technical Graduate Course (TGC)",
    "shortName": "ARMY TGC",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Army",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Direct entry for engineering graduates into the Indian Army as commissioned officers.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-052",
    "slug": "agniveer-vayu",
    "name": "Indian Air Force Agniveer Vayu",
    "shortName": "AGNIVEER VAYU",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Air Force",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Recruitment of airmen under the Agnipath scheme for technical and non-technical trades.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-053",
    "slug": "agniveer-navy",
    "name": "Indian Navy Agniveer (SSR & MR)",
    "shortName": "AGNIVEER NAVY",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Navy",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Recruitment of sailors under the Agnipath scheme for Senior Secondary Recruit and Matric Recruit.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-054",
    "slug": "agniveer-army",
    "name": "Indian Army Agniveer (General Duty & Technical)",
    "shortName": "AGNIVEER ARMY",
    "category": "Defence",
    "level": "National",
    "conductingAuthority": "Indian Army",
    "qualification": "Graduation / 10+2 from recognized board",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Recruitment of soldiers under the Agnipath scheme across combat and support arms.",
    "subjects": [
      "Mathematics & Quantitative Reasoning",
      "General Ability & English"
    ]
  },
  {
    "id": "EXAM-055",
    "slug": "cat-mba",
    "name": "Common Admission Test (CAT MBA)",
    "shortName": "CAT MBA",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "Indian Institutes of Management (IIMs)",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Premier computer-based management entrance test for MBA admission into all 21 IIMs and top B-schools.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-056",
    "slug": "xat",
    "name": "Xavier Aptitude Test (XAT)",
    "shortName": "XAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "XLRI Jamshedpur",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "National management test testing Decision Making, Verbal Ability, Quantitative Ability, and General Knowledge.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-057",
    "slug": "snap",
    "name": "Symbiosis National Aptitude Test (SNAP)",
    "shortName": "SNAP",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "Symbiosis International University",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Speed-based management entrance test for MBA programs across 16 Symbiosis institutes.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-058",
    "slug": "nmat",
    "name": "NMAT by GMAC",
    "shortName": "NMAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "Graduate Management Admission Council",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Computer-adaptive management test for NMIMS and leading global business schools.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-059",
    "slug": "cmat",
    "name": "Common Management Admission Test (CMAT)",
    "shortName": "CMAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "National Testing Agency (NTA)",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "National level entrance examination for AICTE-approved management institutions in India.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-060",
    "slug": "mat",
    "name": "Management Aptitude Test (MAT)",
    "shortName": "MAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "All India Management Association (AIMA)",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "National test conducted four times a year in CBT, PBT, and IBT modes for MBA admissions.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-061",
    "slug": "micat",
    "name": "MICA Admissions Test (MICAT)",
    "shortName": "MICAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "MICA Ahmedabad",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Specialized entrance test for Strategic Marketing and Communications management programmes.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-062",
    "slug": "iift",
    "name": "Indian Institute of Foreign Trade MBA (IIFT)",
    "shortName": "IIFT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "NTA / IIFT",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Dedicated entrance test for International Business (MBA-IB) at IIFT campuses.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-063",
    "slug": "tissnet-cuet-pg",
    "name": "CUET PG / TISSNET Management Programs",
    "shortName": "TISSNET CUET PG",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "National Testing Agency",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Entrance test for HRM and Organization Development at Tata Institute of Social Sciences.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-064",
    "slug": "ibsat",
    "name": "ICFAI Business School Aptitude Test (IBSAT)",
    "shortName": "IBSAT",
    "category": "Management",
    "level": "National",
    "conductingAuthority": "ICFAI Foundation for Higher Education",
    "qualification": "Bachelor’s degree with at least 50% marks (45% for SC/ST) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Online management aptitude test for admission to MBA/PGPM at 9 IBS campuses.",
    "subjects": [
      "Verbal Ability & Reading Comprehension (VARC)",
      "Data Interpretation & Logical Reasoning (DILR)",
      "Quantitative Aptitude (QA)"
    ]
  },
  {
    "id": "EXAM-065",
    "slug": "clat-ug",
    "name": "Common Law Admission Test UG (CLAT UG)",
    "shortName": "CLAT UG",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "Consortium of NLUs",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Premier entrance test for 5-year integrated LLB admissions across 24 National Law Universities.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-066",
    "slug": "clat-pg",
    "name": "Common Law Admission Test PG (CLAT PG)",
    "shortName": "CLAT PG",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "Consortium of NLUs",
    "qualification": "LL.B. Degree or equivalent examination with minimum 50% marks",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "National law entrance examination for one-year LLM programmes in NLUs.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-067",
    "slug": "ailet",
    "name": "All India Law Entrance Test (AILET)",
    "shortName": "AILET",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "NLU Delhi",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Exclusive entrance examination for BA LLB and LLM admissions at National Law University Delhi.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-068",
    "slug": "lsat-india",
    "name": "Law School Admission Test India (LSAT India)",
    "shortName": "LSAT INDIA",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "Law School Admission Council (LSAC)",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Standardized test measuring reading and verbal reasoning skills for top law schools.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-069",
    "slug": "slat",
    "name": "Symbiosis Law Aptitude Test (SLAT)",
    "shortName": "SLAT",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "Symbiosis International University",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Law entrance exam for Symbiosis Law Schools in Pune, Noida, Hyderabad, and Nagpur.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-070",
    "slug": "mhcet-law",
    "name": "Maharashtra Common Entrance Test for Law (MH CET Law)",
    "shortName": "MHCET LAW",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "State CET Cell Maharashtra",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "State entrance exam for 3-year and 5-year LLB programs in GLC Mumbai, ILS Pune, and allied colleges.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-071",
    "slug": "djs-judiciary",
    "name": "Delhi Judicial Services Examination (DJS)",
    "shortName": "DJS JUDICIARY",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "Delhi High Court",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Elite judicial examination to recruit Civil Judges / Metropolitan Magistrates in Delhi Courts.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-072",
    "slug": "uppcs-j",
    "name": "UP Judicial Services Exam (UP PCS J)",
    "shortName": "UPPCS J",
    "category": "Law",
    "level": "National",
    "conductingAuthority": "UPPSC",
    "qualification": "Class 12 or equivalent with minimum 45% aggregate",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "Judicial officer recruitment for Civil Judge (Junior Division) courts across Uttar Pradesh.",
    "subjects": [
      "Legal Reasoning & Constitutional Law",
      "Logical Reasoning & Critical Thinking",
      "Current Affairs, GK & English Comprehension"
    ]
  },
  {
    "id": "EXAM-073",
    "slug": "ugc-net",
    "name": "University Grants Commission National Eligibility Test (UGC NET)",
    "shortName": "UGC NET",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "NTA",
    "qualification": "Master’s Degree with at least 55% marks (50% for reserved)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "National test determining eligibility for Assistant Professorship and award of Junior Research Fellowship (JRF).",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-074",
    "slug": "csir-net",
    "name": "Joint CSIR-UGC NET for Sciences",
    "shortName": "CSIR NET",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "NTA / CSIR",
    "qualification": "Master’s Degree with at least 55% marks (50% for reserved)",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Biannual (Twice a year)",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "National eligibility test for Lectureship and JRF in Science disciplines (Physical, Chemical, Earth, Life, Math).",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-075",
    "slug": "ctet",
    "name": "Central Teacher Eligibility Test (CTET)",
    "shortName": "CTET",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "CBSE",
    "qualification": "Senior Secondary with D.El.Ed / B.El.Ed or Graduation with B.Ed",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Mandatory central qualification test for teachers in Central Government schools (KVS, NVS, Central Tibetan).",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-076",
    "slug": "kvs-recruitment",
    "name": "Kendriya Vidyalaya Sangathan Teacher Recruitment (KVS PGT/TGT/PRT)",
    "shortName": "KVS RECRUITMENT",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "KVS",
    "qualification": "Bachelor’s degree + B.Ed or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "National recruitment for Post Graduate, Trained Graduate, and Primary Teachers in Kendriya Vidyalayas.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-077",
    "slug": "nvs-recruitment",
    "name": "Navodaya Vidyalaya Samiti Recruitment (NVS PGT/TGT)",
    "shortName": "NVS RECRUITMENT",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "NVS",
    "qualification": "Bachelor’s degree + B.Ed or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Recruitment for residential school teachers across Jawahar Navodaya Vidyalayas nationwide.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-078",
    "slug": "dsssb-teacher",
    "name": "Delhi Subordinate Services Selection Board (DSSSB PRT/TGT/PGT)",
    "shortName": "DSSSB TEACHER",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "DSSSB",
    "qualification": "Bachelor’s degree + B.Ed or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Teacher recruitment examination for Directorate of Education and Municipal Corporation of Delhi.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-079",
    "slug": "state-tet",
    "name": "State Teacher Eligibility Test (UPTET / REET / MPTET)",
    "shortName": "STATE TET",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "State Examination Regulatory Authorities",
    "qualification": "Senior Secondary with D.El.Ed / B.El.Ed or Graduation with B.Ed",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "State-level mandatory qualification examinations for primary and upper-primary government school teachers.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-080",
    "slug": "set-lectureship",
    "name": "State Eligibility Test for Lectureship (SET / SLET)",
    "shortName": "SET LECTURESHIP",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "State Accredited Universities",
    "qualification": "Bachelor’s degree + B.Ed or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "State-accredited eligibility test for appointments of Assistant Professors in state universities.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-081",
    "slug": "awes-aps",
    "name": "Army Welfare Education Society Combined Screening (AWES CSB)",
    "shortName": "AWES APS",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "AWES",
    "qualification": "Bachelor’s degree + B.Ed or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Centralized online screening test for teachers across 137 Army Public Schools across India.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-082",
    "slug": "super-tet",
    "name": "Uttar Pradesh Assistant Teacher Recruitment (Super TET)",
    "shortName": "SUPER TET",
    "category": "Teaching",
    "level": "National",
    "conductingAuthority": "UP Basic Education Board",
    "qualification": "Senior Secondary with D.El.Ed / B.El.Ed or Graduation with B.Ed",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Competitive recruitment examination for primary school teachers in basic education council schools of UP.",
    "subjects": [
      "Teaching & Research Aptitude",
      "Domain Subject Specialization"
    ]
  },
  {
    "id": "EXAM-083",
    "slug": "uppsc-pcs",
    "name": "UPPSC Combined State / Upper Subordinate Services (UP PCS)",
    "shortName": "UPPSC PCS",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Uttar Pradesh PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Uttar Pradesh.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-084",
    "slug": "bpsc-cce",
    "name": "Bihar Public Service Commission Combined Competitive Exam (BPSC CCE)",
    "shortName": "BPSC CCE",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Bihar PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Bihar.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-085",
    "slug": "mpsc-rajyaseva",
    "name": "Maharashtra Public Service Commission Rajyaseva Exam (MPSC)",
    "shortName": "MPSC RAJYASEVA",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Maharashtra PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Maharashtra.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-086",
    "slug": "mppsc-sse",
    "name": "Madhya Pradesh State Services Examination (MPPSC)",
    "shortName": "MPPSC SSE",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Madhya Pradesh PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Madhya Pradesh.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-087",
    "slug": "rpsc-ras",
    "name": "Rajasthan Administrative Services Examination (RPSC RAS / RTS)",
    "shortName": "RPSC RAS",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Rajasthan PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Rajasthan.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-088",
    "slug": "wbpsc-wbcs",
    "name": "West Bengal Civil Service Executive Examination (WBCS)",
    "shortName": "WBPSC WBCS",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "West Bengal PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in West Bengal.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-089",
    "slug": "tnpsc-group1",
    "name": "Tamil Nadu Public Service Commission Group 1 Services (TNPSC)",
    "shortName": "TNPSC GROUP1",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Tamil Nadu PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Tamil Nadu.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-090",
    "slug": "appsc-group1",
    "name": "Andhra Pradesh Public Service Commission Group 1 (APPSC)",
    "shortName": "APPSC GROUP1",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Andhra Pradesh PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Andhra Pradesh.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-091",
    "slug": "tspsc-group1",
    "name": "Telangana State Public Service Commission Group 1 (TSPSC)",
    "shortName": "TSPSC GROUP1",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Telangana PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Telangana.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-092",
    "slug": "kpsc-kas",
    "name": "Karnataka Administrative Services Examination (KPSC KAS)",
    "shortName": "KPSC KAS",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Karnataka PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Karnataka.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-093",
    "slug": "gpsc-class1-2",
    "name": "Gujarat Public Service Commission Class 1 & 2 (GPSC)",
    "shortName": "GPSC CLASS1 2",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Gujarat PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Gujarat.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-094",
    "slug": "opsc-oas",
    "name": "Odisha Administrative Services Examination (OPSC OAS)",
    "shortName": "OPSC OAS",
    "category": "State PSC",
    "level": "State",
    "conductingAuthority": "Odisha PSC",
    "qualification": "Bachelor’s Degree in any discipline from a recognized University",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Odisha.",
    "subjects": [
      "General Studies Paper I (National & State Heritage)",
      "General Studies Paper II (State Economy & Geography)",
      "General Aptitude, Language & Mental Ability"
    ]
  },
  {
    "id": "EXAM-095",
    "slug": "rrb-ntpc",
    "name": "Railway Recruitment Board Non-Technical (RRB NTPC)",
    "shortName": "RRB NTPC",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "Railway Recruitment Control Board",
    "qualification": "Graduation for Graduate Posts / 12th Pass for Undergraduate Posts",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Mega recruitment for Station Masters, Goods Guards, Traffic Assistants, and Senior Clerks.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-096",
    "slug": "rrb-group-d",
    "name": "Railway Recruitment Board Level 1 (RRB Group D)",
    "shortName": "RRB GROUP D",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "Railway Recruitment Cells (RRC)",
    "qualification": "10th / ITI / 12th / Diploma / Degree as per notification",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "National recruitment for Track Maintainers, Pointsman, Helpers across 16 railway zones.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-097",
    "slug": "rrb-alp",
    "name": "RRB Assistant Loco Pilot & Technician (RRB ALP)",
    "shortName": "RRB ALP",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "RRB",
    "qualification": "10th / ITI / 12th / Diploma / Degree as per notification",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Technical train operations recruitment focusing on mechanical and electrical fundamentals.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-098",
    "slug": "rrb-technician",
    "name": "RRB Technician Grade I & Grade III",
    "shortName": "RRB TECHNICIAN",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "RRB",
    "qualification": "10th / ITI / 12th / Diploma / Degree as per notification",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Technical trade recruitment across railway workshops, signals, and electrical departments.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-099",
    "slug": "rrb-je",
    "name": "RRB Junior Engineer (RRB JE)",
    "shortName": "RRB JE",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "RRB",
    "qualification": "Diploma / Degree in Engineering in relevant branch",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Engineering recruitment for permanent way, bridge, rolling stock, and signal supervisors.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-100",
    "slug": "rpf-si-constable",
    "name": "Railway Protection Force SI & Constable (RPF)",
    "shortName": "RPF SI CONSTABLE",
    "category": "Railways",
    "level": "National",
    "conductingAuthority": "Ministry of Railways",
    "qualification": "10th / ITI / 12th / Diploma / Degree as per notification",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Uniformed recruitment to safeguard railway passengers, passenger areas, and railway property.",
    "subjects": [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science & General Awareness"
    ]
  },
  {
    "id": "EXAM-101",
    "slug": "iit-jam",
    "name": "Joint Admission Test for Masters (IIT JAM)",
    "shortName": "IIT JAM",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "IITs",
    "qualification": "Bachelor’s Degree in Science (B.Sc / B.S.) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "National entrance for M.Sc, Joint M.Sc-Ph.D, and dual degree programmes at IITs and IISc.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-102",
    "slug": "tifr-gs",
    "name": "Tata Institute of Fundamental Research Graduate Studies (TIFR GS)",
    "shortName": "TIFR GS",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "TIFR",
    "qualification": "Bachelor’s Degree in Science (B.Sc / B.S.) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Elite research institution admission test for Ph.D. and Integrated Ph.D. programmes.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-103",
    "slug": "jest",
    "name": "Joint Entrance Screening Test (JEST)",
    "shortName": "JEST",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "Science & Engineering Research Board",
    "qualification": "Bachelor’s Degree in Science (B.Sc / B.S.) or equivalent",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "National screening test for Ph.D./Integrated Ph.D. in Physics, Theoretical Computer Science, and Neuroscience.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-104",
    "slug": "nimcet",
    "name": "NIT MCA Common Entrance Test (NIMCET)",
    "shortName": "NIMCET",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "National Institutes of Technology",
    "qualification": "Undergraduate / Postgraduate Science Degree",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Premier national entrance test for Master of Computer Applications (MCA) admissions across NITs.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-105",
    "slug": "isi-kolkata",
    "name": "Indian Statistical Institute Admission Test (ISI Kolkata)",
    "shortName": "ISI KOLKATA",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "ISI Kolkata",
    "qualification": "Undergraduate / Postgraduate Science Degree",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Elite entrance examination for B.Stat, M.Stat, B.Math, M.Math, and M.Tech Computer Science.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-106",
    "slug": "cmi-entrance",
    "name": "Chennai Mathematical Institute Entrance Examination (CMI)",
    "shortName": "CMI ENTRANCE",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "Chennai Mathematical Institute",
    "qualification": "Undergraduate / Postgraduate Science Degree",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "Prestigious examination for undergraduate and postgraduate degrees in Mathematics and Computer Science.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-107",
    "slug": "icar-aieea",
    "name": "ICAR All India Entrance Examination for Admission (ICAR AIEEA)",
    "shortName": "ICAR AIEEA",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "NTA / ICAR",
    "qualification": "Undergraduate / Postgraduate Science Degree",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "National entrance test for undergraduate and postgraduate agricultural university programs.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-108",
    "slug": "nest-exam",
    "name": "National Entrance Screening Test (NEST)",
    "shortName": "NEST EXAM",
    "category": "Science",
    "level": "National",
    "conductingAuthority": "NISER Bhubaneswar & UM-DAE CEBS",
    "qualification": "Undergraduate / Postgraduate Science Degree",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "Comprehensive science test for 5-year integrated M.Sc programmes in basic sciences.",
    "subjects": [
      "Core Scientific Principles & Analysis",
      "Experimental & Applied Sciences"
    ]
  },
  {
    "id": "EXAM-109",
    "slug": "ca-foundation",
    "name": "ICAI Chartered Accountancy Foundation (CA Foundation)",
    "shortName": "CA FOUNDATION",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "Institute of Chartered Accountants of India",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Jan 2026",
    "description": "Entry-level examination for the prestigious Chartered Accountancy professional qualification.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-110",
    "slug": "ca-intermediate",
    "name": "ICAI Chartered Accountancy Intermediate (CA Inter)",
    "shortName": "CA INTERMEDIATE",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "Institute of Chartered Accountants of India",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "Aug 2027",
    "description": "Second level examination covering financial accounting, corporate laws, taxation, and auditing.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-111",
    "slug": "ca-final",
    "name": "ICAI Chartered Accountancy Final (CA Final)",
    "shortName": "CA FINAL",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "Institute of Chartered Accountants of India",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Mar 2027",
    "description": "Final licensing examination to qualify and practice as a certified Chartered Accountant in India.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-112",
    "slug": "cs-executive",
    "name": "ICSI Company Secretary Executive Examination (CS Executive)",
    "shortName": "CS EXECUTIVE",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "Institute of Company Secretaries of India",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Upcoming",
    "examDateText": "Oct 2026",
    "description": "Professional certification examining corporate governance, securities laws, and company administration.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-113",
    "slug": "cma-intermediate",
    "name": "ICMAI Cost & Management Accountant Intermediate (CMA Inter)",
    "shortName": "CMA INTERMEDIATE",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "Institute of Cost Accountants of India",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Open",
    "examDateText": "May 2027",
    "description": "Intermediate professional examination in management accounting, operations, and cost audit.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-114",
    "slug": "cfa-level1",
    "name": "Chartered Financial Analyst Level 1 (CFA Level 1)",
    "shortName": "CFA LEVEL1",
    "category": "Professional",
    "level": "National",
    "conductingAuthority": "CFA Institute (USA)",
    "qualification": "Class 12 / Bachelor degree with registered foundation enrollment",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Dec 2027",
    "description": "Global gold standard investment management and financial analysis professional qualification.",
    "subjects": [
      "Financial Accounting & Reporting",
      "Corporate Laws, Taxation & Audit",
      "Financial Management & Economics"
    ]
  },
  {
    "id": "EXAM-115",
    "slug": "gre-general",
    "name": "Graduate Record Examination (GRE General Test)",
    "shortName": "GRE GENERAL",
    "category": "International",
    "level": "International",
    "conductingAuthority": "Educational Testing Service (ETS)",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "On-Demand (Year-round)",
    "status": "Upcoming",
    "examDateText": "Jul 2026",
    "description": "Global standardized test for admission to graduate and business school master and doctoral programs.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  },
  {
    "id": "EXAM-116",
    "slug": "gmat-focus",
    "name": "GMAT Focus Edition",
    "shortName": "GMAT FOCUS",
    "category": "International",
    "level": "International",
    "conductingAuthority": "Graduate Management Admission Council (GMAC)",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "On-Demand (Year-round)",
    "status": "Open",
    "examDateText": "Feb 2027",
    "description": "Premier international computer-adaptive entrance examination tailored strictly for top global MBA admissions.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  },
  {
    "id": "EXAM-117",
    "slug": "sat-digital",
    "name": "Digital SAT Examination",
    "shortName": "SAT DIGITAL",
    "category": "International",
    "level": "International",
    "conductingAuthority": "College Board (USA)",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Sep 2027",
    "description": "Standardized college admissions test widely accepted across USA, Canada, and global undergraduate universities.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  },
  {
    "id": "EXAM-118",
    "slug": "ielts-academic",
    "name": "IELTS Academic (International English Language Testing System)",
    "shortName": "IELTS ACADEMIC",
    "category": "International",
    "level": "International",
    "conductingAuthority": "IDP / British Council",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "On-Demand (Year-round)",
    "status": "Upcoming",
    "examDateText": "Apr 2026",
    "description": "World’s most recognized English proficiency test for international study and immigration.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  },
  {
    "id": "EXAM-119",
    "slug": "toefl-ibt",
    "name": "TOEFL iBT (Test of English as a Foreign Language)",
    "shortName": "TOEFL IBT",
    "category": "International",
    "level": "International",
    "conductingAuthority": "Educational Testing Service (ETS)",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "On-Demand (Year-round)",
    "status": "Open",
    "examDateText": "Nov 2027",
    "description": "Premier American English academic proficiency test measuring Reading, Listening, Speaking, and Writing.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  },
  {
    "id": "EXAM-120",
    "slug": "pte-academic",
    "name": "Pearson Test of English Academic (PTE Academic)",
    "shortName": "PTE ACADEMIC",
    "category": "International",
    "level": "International",
    "conductingAuthority": "Pearson VUE",
    "qualification": "Higher secondary / Undergraduate degree or final year student",
    "examMode": "Online (Computer Based Test - CBT)",
    "frequency": "Annual",
    "status": "Verified",
    "examDateText": "Jun 2027",
    "description": "AI-scored computer-based English language test accepted worldwide for student visas and university admissions.",
    "subjects": [
      "Verbal Reasoning & English Proficiency",
      "Quantitative Reasoning & Data Insights"
    ]
  }
];
