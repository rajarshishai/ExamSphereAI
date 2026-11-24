export interface BankQuestion {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
}

export const CLIENT_QUESTION_BANK: Record<string, BankQuestion[]> = {
  // JEE Main
  'jee-main': [
    {
      questionText: 'A particle of mass m executes simple harmonic motion along the x-axis between x = -A and x = +A. At what displacement from the mean position is its kinetic energy equal to 3 times its potential energy?',
      options: ['x = A / 2', 'x = A / √2', 'x = A / √3', 'x = A / 4'],
      correctOptionIndex: 0,
      explanation: 'Total Energy E = (1/2) m ω² A². Potential Energy U = (1/2) m ω² x². Kinetic Energy K = E - U. Given K = 3U => E - U = 3U => E = 4U => (1/2) m ω² A² = 4 * (1/2) m ω² x² => A² = 4x² => x = A / 2.',
      subject: 'Physics',
      topic: 'Simple Harmonic Motion & Oscillations',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'A uniform solid sphere of mass M and radius R rolls without slipping down an inclined plane of inclination θ. The linear acceleration of the center of mass of the sphere is:',
      options: ['(5/7) g sin θ', '(2/3) g sin θ', '(1/2) g sin θ', '(5/9) g sin θ'],
      correctOptionIndex: 0,
      explanation: 'For pure rolling down an incline of angle θ, linear acceleration a = (g sin θ) / (1 + I / (M R²)). For a solid sphere, I = (2/5) M R². Therefore a = (g sin θ) / (1 + 2/5) = (5/7) g sin θ.',
      subject: 'Physics',
      topic: 'Rotational Motion & Rolling Without Slipping',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'An ideal gas undergoes a thermodynamic process according to the relation P V² = constant. What is the molar heat capacity (C) of a monoatomic gas (γ = 5/3) during this polytropic process?',
      options: ['R / 2', '3R / 2', '2R', 'R'],
      correctOptionIndex: 0,
      explanation: 'For a polytropic process P V^n = constant, molar heat capacity C = Cv + R / (1 - n). For a monoatomic gas, Cv = (3/2)R. Here n = 2. So C = (3/2)R + R / (1 - 2) = (3/2)R - R = R / 2.',
      subject: 'Physics',
      topic: 'Thermodynamics & Polytropic Processes',
      difficulty: 'Hard',
      marks: 4
    },
    {
      questionText: 'Which of the following molecules has a square planar molecular geometry according to VSEPR theory?',
      options: ['XeF4', 'SF4', 'SiF4', 'BF4⁻'],
      correctOptionIndex: 0,
      explanation: 'XeF4 has Xenon with 8 valence electrons + 4 fluorine bond pairs = 12 electrons (6 electron pairs: 4 bonding pairs and 2 lone pairs). The electron geometry is octahedral, and with 2 lone pairs at trans positions, the molecular geometry is square planar.',
      subject: 'Chemistry',
      topic: 'Chemical Bonding & VSEPR Theory',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'The rate constant for a first-order reaction is 6.93 × 10⁻³ s⁻¹. What is the half-life period (t1/2) of the reaction?',
      options: ['100 seconds', '10 seconds', '69.3 seconds', '50 seconds'],
      correctOptionIndex: 0,
      explanation: 'For a first-order reaction, t1/2 = 0.693 / k. Given k = 6.93 * 10^-3 s^-1, t1/2 = 0.693 / (6.93 * 10^-3) = 100 seconds.',
      subject: 'Chemistry',
      topic: 'Chemical Kinetics',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'The value of the definite integral ∫ from 0 to π/2 of (sin³ x) / (sin³ x + cos³ x) dx is:',
      options: ['π / 4', 'π / 2', 'π / 8', '1'],
      correctOptionIndex: 0,
      explanation: 'Using King Property ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx: I = ∫[0 to π/2] (sin³ x) / (sin³ x + cos³ x) dx. Also I = ∫[0 to π/2] (cos³ x) / (cos³ x + sin³ x) dx. Adding both: 2I = ∫[0 to π/2] 1 dx = π/2 => I = π/4.',
      subject: 'Mathematics',
      topic: 'Definite Integrals & Properties',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'The area bounded by the parabola y² = 4ax and its latus rectum is:',
      options: ['(8/3) a²', '(4/3) a²', '(16/3) a²', '2 a²'],
      correctOptionIndex: 0,
      explanation: 'The equation of the latus rectum is x = a. The area is 2 * ∫[0 to a] 2√(a) x^(1/2) dx = 4√(a) * [ (2/3) x^(3/2) ][0 to a] = 4√(a) * (2/3) a^(3/2) = (8/3) a².',
      subject: 'Mathematics',
      topic: 'Application of Integrals & Area under Curves',
      difficulty: 'Medium',
      marks: 4
    }
  ],

  // NEET UG
  'neet-ug': [
    {
      questionText: 'An electron is accelerated through a potential difference of 100 V. What is the de Broglie wavelength associated with the electron?',
      options: ['0.123 nm (1.23 Å)', '1.23 nm', '0.0123 nm', '12.3 nm'],
      correctOptionIndex: 0,
      explanation: 'The de Broglie wavelength of an electron accelerated through potential V is given by λ = 1.227 / √V nm. For V = 100 V: λ = 1.227 / 10 = 0.1227 nm ≈ 0.123 nm (1.23 Å).',
      subject: 'Physics',
      topic: 'Dual Nature of Radiation and Matter',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'Which of the following oxoacids of phosphorus is a monobasic (monoprotic) reducing acid?',
      options: ['H3PO2 (Hypophosphorous acid)', 'H3PO3 (Phosphorous acid)', 'H3PO4 (Phosphoric acid)', 'H4P2O7 (Pyrophosphoric acid)'],
      correctOptionIndex: 0,
      explanation: 'H3PO2 contains one P-OH bond and two P-H bonds. Because only the hydrogen bonded to oxygen is ionizable, it acts as a monobasic acid. The two P-H bonds impart strong reducing properties.',
      subject: 'Chemistry',
      topic: 'p-Block Elements & Group 15 Oxoacids',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'In C4 plants, the primary carbon dioxide fixation takes place in the mesophyll cells and is catalyzed by which enzyme?',
      options: ['PEP carboxylase (PEPcase)', 'RuBisCO', 'Pyruvate dehydrogenase', 'Carbonic anhydrase'],
      correctOptionIndex: 0,
      explanation: 'In C4 plants, the initial acceptor of CO2 is phosphoenolpyruvate (PEP) in the mesophyll cells, catalyzed by PEP carboxylase (PEPcase) to form oxaloacetic acid (OAA). RuBisCO operates later in the bundle sheath cells.',
      subject: 'Botany',
      topic: 'Photosynthesis in Higher Plants (C4 Pathway)',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'Which plant hormone is primarily responsible for inducing seed dormancy and promoting stomatal closure under water-stress conditions?',
      options: ['Abscisic Acid (ABA)', 'Gibberellin (GA3)', 'Auxin (IAA)', 'Cytokinin'],
      correctOptionIndex: 0,
      explanation: 'Abscisic acid (ABA) acts as a general plant growth inhibitor and stress hormone. Under drought stress, ABA stimulates rapid closure of stomata to prevent excessive transpiration.',
      subject: 'Botany',
      topic: 'Plant Growth and Development & Phytohormones',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'Which hormone is secreted by the juxtaglomerular cells of the kidney in response to a drop in glomerular blood pressure or GFR?',
      options: ['Renin', 'Erythropoietin', 'Atrial Natriuretic Factor (ANF)', 'Aldosterone'],
      correctOptionIndex: 0,
      explanation: 'A fall in glomerular blood pressure or GFR activates the juxtaglomerular (JG) cells to release renin, which converts angiotensinogen into angiotensin I, initiating the RAAS mechanism.',
      subject: 'Zoology',
      topic: 'Excretory Products and their Elimination (RAAS)',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'During skeletal muscle contraction, which of the following events takes place within the sarcomere according to the sliding filament theory?',
      options: ['The I-band shortens while the A-band retains its length', 'Both A-band and I-band lengthen', 'The A-band shortens while I-band remains constant', 'The Z-lines move apart'],
      correctOptionIndex: 0,
      explanation: 'During contraction, actin filaments slide over myosin filaments toward the M-line. Consequently, the H-zone disappears, the I-band shortens, while the dark A-band remains at constant length.',
      subject: 'Zoology',
      topic: 'Locomotion and Movement (Sliding Filament Theory)',
      difficulty: 'Medium',
      marks: 4
    }
  ],

  // UPSC CSE
  'upsc-cse': [
    {
      questionText: 'With reference to the Constitution of India, which one of the following Articles empowers the President to seek the advisory opinion of the Supreme Court of India?',
      options: ['Article 143', 'Article 136', 'Article 142', 'Article 131'],
      correctOptionIndex: 0,
      explanation: 'Article 143 of the Constitution confers advisory jurisdiction upon the Supreme Court, permitting the President to refer questions of law or fact of public importance for its advisory opinion.',
      subject: 'Indian Polity',
      topic: 'Judiciary & Supreme Court Advisory Jurisdiction',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'Under the Indian Constitution, which one of the following Writs literally translates to "We Command" and is issued to compel a public official or body to perform a statutory duty?',
      options: ['Mandamus', 'Habeas Corpus', 'Quo-Warranto', 'Certiorari'],
      correctOptionIndex: 0,
      explanation: 'Mandamus literally means "We Command". It is an order issued by the High Court (Art. 226) or Supreme Court (Art. 32) directed to a public official, tribunal, or lower court to perform an act falling under its legal duty.',
      subject: 'Indian Polity',
      topic: 'Fundamental Rights & Constitutional Remedies (Article 32)',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'With reference to modern Indian history, who among the following founded the Satyashodhak Samaj in Maharashtra in 1873 to eradicate untouchability and promote women education?',
      options: ['Jyotirao Phule', 'Dr. B.R. Ambedkar', 'Ishwar Chandra Vidyasagar', 'Gopal Krishna Gokhale'],
      correctOptionIndex: 0,
      explanation: 'Jyotirao Phule founded the Satyashodhak Samaj in 1873 in Pune to champion social equality, fight Brahminical hegemony, and spread education among oppressed castes and women.',
      subject: 'History of India',
      topic: 'Socio-Religious Reform Movements & Modern History',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'Which of the following Biosphere Reserves in India was the very first to be included in UNESCO World Network of Biosphere Reserves in the year 2000?',
      options: ['Nilgiri Biosphere Reserve', 'Sundarbans Biosphere Reserve', 'Gulf of Mannar', 'Nanda Devi'],
      correctOptionIndex: 0,
      explanation: 'The Nilgiri Biosphere Reserve, established in 1986 across Tamil Nadu, Kerala, and Karnataka, became the first Indian biosphere reserve inducted into UNESCO MAB network in 2000.',
      subject: 'Geography & Environment',
      topic: 'Ecology, Biodiversity & Biosphere Reserves',
      difficulty: 'Medium',
      marks: 2
    },
    {
      questionText: 'In the context of the Indian Economy, which of the following measures would directly cause an expansionary monetary impact (increase money supply in the economy)?',
      options: [
        'Purchase of government securities from the public by the Reserve Bank of India (Open Market Operations)',
        'An increase in the Cash Reserve Ratio (CRR)',
        'An increase in the Statutory Liquidity Ratio (SLR)',
        'Sale of government securities in the open market by the RBI'
      ],
      correctOptionIndex: 0,
      explanation: 'When the RBI purchases government securities from commercial banks and the public, it injects fresh liquidity and cash reserves into the banking system, thereby expanding the money supply.',
      subject: 'Economy',
      topic: 'Monetary Policy & Reserve Bank of India Operations',
      difficulty: 'Medium',
      marks: 2
    }
  ],

  // GATE CSE
  'gate-cse': [
    {
      questionText: 'What is the tightest worst-case time complexity of finding the single-source shortest paths in a directed acyclic graph (DAG) with V vertices and E edges?',
      options: ['O(V + E)', 'O(E log V)', 'O(V²)', 'O(V * E)'],
      correctOptionIndex: 0,
      explanation: 'In a DAG, we can perform a topological sort in O(V + E) time, and then relax edges in topologically sorted order in O(V + E) time, giving an overall optimal complexity of O(V + E).',
      subject: 'Algorithms & Data Structures',
      topic: 'Graph Algorithms & Topological Sorting',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'Consider a paging system where page tables are stored in main memory with access time 100 ns. If an associative Translation Lookaside Buffer (TLB) with access time 20 ns is used and has a hit ratio of 80%, what is the Effective Memory Access Time (EMAT)?',
      options: ['140 ns', '120 ns', '220 ns', '160 ns'],
      correctOptionIndex: 0,
      explanation: 'EMAT = Hit_Ratio * (TLB_time + Mem_time) + (1 - Hit_Ratio) * (TLB_time + 2 * Mem_time). EMAT = 0.8 * (20 + 100) + 0.2 * (20 + 200) = 0.8 * 120 + 0.2 * 220 = 96 + 44 = 140 ns.',
      subject: 'Operating Systems',
      topic: 'Virtual Memory, Paging & TLB Access',
      difficulty: 'Hard',
      marks: 4
    },
    {
      questionText: 'In an IPv4 network, a datagram of total size 4000 bytes (including a 20-byte IP header) arrives at a router with an outgoing interface MTU of 1500 bytes. What is the value of the Fragment Offset in the third fragment?',
      options: ['370', '2960', '185', '375'],
      correctOptionIndex: 0,
      explanation: 'Data payload = 3980 bytes. Max payload per fragment = 1500 - 20 = 1480 bytes (multiple of 8). Fragment 1 carries 1480 bytes (offset 0). Fragment 2 carries 1480 bytes (offset 1480/8 = 185). Fragment 3 carries remaining 1020 bytes; its offset is (1480 + 1480) / 8 = 2960 / 8 = 370.',
      subject: 'Computer Networks',
      topic: 'IPv4 Header & Packet Fragmentation',
      difficulty: 'Hard',
      marks: 4
    },
    {
      questionText: 'A relation R(A, B, C, D) has functional dependencies F = { A -> B, B -> C, C -> D, D -> A }. In which highest normal form is the relation R?',
      options: ['BCNF', '3NF', '2NF', '1NF'],
      correctOptionIndex: 0,
      explanation: 'The candidate keys of R are A, B, C, and D because each single attribute determines all other attributes via transitive closure. Since the determinant of every non-trivial functional dependency is a superkey, R is in Boyce-Codd Normal Form (BCNF).',
      subject: 'Databases',
      topic: 'Normalization & Functional Dependencies',
      difficulty: 'Medium',
      marks: 4
    }
  ]
};

export const getQuestionsForExamSlug = (slug: string): BankQuestion[] => {
  const s = slug.toLowerCase();
  for (const [key, qs] of Object.entries(CLIENT_QUESTION_BANK)) {
    if (s.includes(key) || key.includes(s)) {
      return qs;
    }
  }
  return CLIENT_QUESTION_BANK['jee-main'] || [];
};
