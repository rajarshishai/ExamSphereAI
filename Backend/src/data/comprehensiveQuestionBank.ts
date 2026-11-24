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

export const COMPREHENSIVE_QUESTION_BANK: Record<string, BankQuestion[]> = {
  // =========================================================================
  // 1. JEE MAIN (Physics, Chemistry, Mathematics)
  // =========================================================================
  'jee-main': [
    // --- Physics ---
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
      questionText: 'In Young double slit experiment, the separation between slits is 0.5 mm and the distance between slits and screen is 1.0 m. If light of wavelength 500 nm is used, the fringe width is:',
      options: ['1.0 mm', '0.5 mm', '2.0 mm', '0.25 mm'],
      correctOptionIndex: 0,
      explanation: 'Fringe width β = λ D / d. Here λ = 500 * 10^-9 m, D = 1.0 m, d = 0.5 * 10^-3 m. β = (500 * 10^-9 * 1) / (0.5 * 10^-3) = 1.0 * 10^-3 m = 1.0 mm.',
      subject: 'Physics',
      topic: 'Wave Optics & Interference',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'A parallel plate capacitor with air between the plates has capacitance C0. If a dielectric slab of dielectric constant K = 4 and thickness t = d/2 (where d is plate separation) is introduced, the new capacitance is:',
      options: ['(8/5) C0', '(5/8) C0', '2 C0', '(4/3) C0'],
      correctOptionIndex: 0,
      explanation: 'Capacitance with slab of thickness t: C = ε0 A / [d - t + t/K]. For t = d/2 and K = 4: C = ε0 A / [d - d/2 + d/(2*4)] = ε0 A / [d/2 + d/8] = ε0 A / [(5/8) d] = (8/5) (ε0 A / d) = (8/5) C0.',
      subject: 'Physics',
      topic: 'Electrostatics & Dielectrics',
      difficulty: 'Medium',
      marks: 4
    },

    // --- Chemistry ---
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
      questionText: 'Which of the following organic compounds will give a positive Iodoform test upon reaction with I2 and aqueous NaOH?',
      options: ['Butan-2-one', 'Pentan-3-one', 'Benzaldehyde', 'Methanol'],
      correctOptionIndex: 0,
      explanation: 'The iodoform test is given by compounds having a methyl carbonyl group (CH3-C=O) or a secondary alcohol that can be oxidized to it (CH3-CH(OH)-). Butan-2-one has the CH3-CO-CH2-CH3 structure, yielding a yellow precipitate of CHI3.',
      subject: 'Chemistry',
      topic: 'Aldehydes, Ketones & Carboxylic Acids',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'According to Crystal Field Theory, what is the crystal field stabilization energy (CFSE) for a high-spin octahedral d6 complex?',
      options: ['-0.4 Δo', '-2.4 Δo', '-1.2 Δo', '-0.8 Δo'],
      correctOptionIndex: 0,
      explanation: 'For high-spin octahedral d6, the electronic configuration is t2g^4 eg^2. CFSE = [4 * (-0.4) + 2 * (+0.6)] Δo = [-1.6 + 1.2] Δo = -0.4 Δo.',
      subject: 'Chemistry',
      topic: 'Coordination Chemistry & Crystal Field Theory',
      difficulty: 'Hard',
      marks: 4
    },
    {
      questionText: 'The standard reduction potential for Cu²⁺/Cu is +0.34 V and for Zn²⁺/Zn is -0.76 V. What is the standard EMF (E°cell) of the Daniell cell?',
      options: ['+1.10 V', '+0.42 V', '-1.10 V', '-0.42 V'],
      correctOptionIndex: 0,
      explanation: 'E°cell = E°cathode - E°anode = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0.34 V - (-0.76 V) = +1.10 V.',
      subject: 'Chemistry',
      topic: 'Electrochemistry & Galvanic Cells',
      difficulty: 'Easy',
      marks: 4
    },

    // --- Mathematics ---
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
      questionText: 'If the system of linear equations: x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has infinitely many solutions, then (λ, μ) is:',
      options: ['(3, 10)', '(3, 8)', '(2, 10)', '(4, 12)'],
      correctOptionIndex: 0,
      explanation: 'For infinitely many solutions, the rank of coefficient matrix must equal the rank of augmented matrix and be less than 3. Comparing row 2 (x + 2y + 3z = 10) and row 3 (x + 2y + λz = μ), we require λ = 3 and μ = 10.',
      subject: 'Mathematics',
      topic: 'Matrices, Determinants & System of Equations',
      difficulty: 'Medium',
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
    },
    {
      questionText: 'Let a⃗, b⃗, c⃗ be three non-zero vectors such that |a⃗| = 1, |b⃗| = 2, |c⃗| = 3. If a⃗ + b⃗ + c⃗ = 0, then the value of a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗ is:',
      options: ['-7', '7', '-14', '0'],
      correctOptionIndex: 0,
      explanation: '|a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗). Since a⃗ + b⃗ + c⃗ = 0, we have 0 = 1 + 4 + 9 + 2(S) => 2S = -14 => S = -7.',
      subject: 'Mathematics',
      topic: 'Vector Algebra & Dot Product',
      difficulty: 'Easy',
      marks: 4
    },
    {
      questionText: 'The general solution of the differential equation dy/dx + y tan x = sec x is:',
      options: ['y sec x = tan x + C', 'y cos x = tan x + C', 'y sin x = cos x + C', 'y sec x = sin x + C'],
      correctOptionIndex: 0,
      explanation: 'This is a linear first-order differential equation: Integrating Factor IF = e^(∫ tan x dx) = e^(ln |sec x|) = sec x. The solution is y * sec x = ∫ sec x * sec x dx = ∫ sec² x dx = tan x + C.',
      subject: 'Mathematics',
      topic: 'Differential Equations',
      difficulty: 'Medium',
      marks: 4
    }
  ],

  // =========================================================================
  // 2. NEET UG (Physics, Chemistry, Botany, Zoology)
  // =========================================================================
  'neet-ug': [
    // --- Physics ---
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
      questionText: 'A concave mirror of focal length 20 cm produces an inverted image twice the size of the object. What is the distance of the object from the mirror?',
      options: ['30 cm', '40 cm', '15 cm', '10 cm'],
      correctOptionIndex: 0,
      explanation: 'Magnification m = -v / u = -2 (for real/inverted image) => v = 2u. Using mirror formula: 1/f = 1/v + 1/u. Since f = -20 cm: -1/20 = 1/(2u) + 1/u = 3/(2u) => 2u = -60 => u = -30 cm.',
      subject: 'Physics',
      topic: 'Ray Optics & Spherical Mirrors',
      difficulty: 'Medium',
      marks: 4
    },
    {
      questionText: 'A circular coil of 100 turns and radius 10 cm carries a current of 1 A. What is the magnetic field at the center of the circular coil? (Take μ0 = 4π × 10⁻⁷ T·m/A)',
      options: ['6.28 × 10⁻⁴ T', '3.14 × 10⁻⁴ T', '1.25 × 10⁻⁴ T', '6.28 × 10⁻⁵ T'],
      correctOptionIndex: 0,
      explanation: 'Magnetic field B = (μ0 * N * I) / (2 * R). Here N = 100, I = 1 A, R = 0.1 m. B = (4π * 10^-7 * 100 * 1) / (2 * 0.1) = (4π * 10^-5) / 0.2 = 20π * 10^-5 = 2π * 10^-4 T ≈ 6.28 * 10^-4 T.',
      subject: 'Physics',
      topic: 'Moving Charges and Magnetism',
      difficulty: 'Medium',
      marks: 4
    },

    // --- Chemistry ---
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
      questionText: 'What is the pH of a 10⁻⁸ M aqueous solution of HCl at 25°C?',
      options: ['Between 6.95 and 6.98 (slightly acidic)', '8.00 (basic)', '7.00 (neutral)', '6.00'],
      correctOptionIndex: 0,
      explanation: 'Because HCl is very dilute, the auto-ionization of water must be accounted for: [H+]_total = 10^-8 (from HCl) + 10^-7 (from water) = 1.1 * 10^-7 M. pH = -log(1.1 * 10^-7) ≈ 7 - 0.041 = 6.96.',
      subject: 'Chemistry',
      topic: 'Ionic Equilibrium & pH Calculations',
      difficulty: 'Medium',
      marks: 4
    },

    // --- Botany ---
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
      questionText: 'What is the phenotypic dihybrid ratio observed in the F2 generation of a classic Mendelian cross exhibiting independent assortment?',
      options: ['9 : 3 : 3 : 1', '9 : 7', '12 : 3 : 1', '15 : 1'],
      correctOptionIndex: 0,
      explanation: 'According to Mendel Law of Independent Assortment, the F2 generation of a dihybrid cross (e.g., Round Yellow x Wrinkled Green) yields a 9:3:3:1 phenotypic ratio.',
      subject: 'Botany',
      topic: 'Principles of Inheritance and Variation (Genetics)',
      difficulty: 'Easy',
      marks: 4
    },

    // --- Zoology ---
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
    },
    {
      questionText: 'Which enzyme is commonly known as "molecular glue" in recombinant DNA technology for joining DNA fragments?',
      options: ['DNA Ligase', 'Restriction Endonuclease', 'DNA Polymerase I', 'Reverse Transcriptase'],
      correctOptionIndex: 0,
      explanation: 'DNA ligase facilitates the formation of phosphodiester bonds between adjacent 3\'-OH and 5\'-phosphate ends of DNA fragments, sealing nicks and joining recombinant molecules.',
      subject: 'Zoology',
      topic: 'Biotechnology: Principles and Processes',
      difficulty: 'Easy',
      marks: 4
    }
  ],

  // =========================================================================
  // 3. CIVIL SERVICES (UPSC CSE Prelims GS 1)
  // =========================================================================
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
    },
    {
      questionText: 'Consider the term "CRISPR-Cas9", frequently mentioned in science and technology news. What does it fundamentally refer to?',
      options: [
        'A targeted molecular gene-editing technology for altering DNA sequences',
        'A biosensor for detecting gravitational waves',
        'A quantum communication encryption algorithm',
        'A deep-learning algorithm for nuclear fusion containment'
      ],
      correctOptionIndex: 0,
      explanation: 'CRISPR-Cas9 is an RNA-guided genome editing tool derived from bacterial immune systems that enables precise molecular cutting and modification of targeted DNA sequences in living organisms.',
      subject: 'Science & Technology',
      topic: 'Biotechnology & Genetic Engineering',
      difficulty: 'Easy',
      marks: 2
    }
  ],

  // =========================================================================
  // 4. GATE COMPUTER SCIENCE (CSE)
  // =========================================================================
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
      questionText: 'Which of the following grammar classes is the most powerful in parsing capability among deterministic parsers?',
      options: ['LR(1)', 'LALR(1)', 'SLR(1)', 'LL(1)'],
      correctOptionIndex: 0,
      explanation: 'The hierarchical containment of grammar classes is LL(1) ⊂ SLR(1) ⊂ LALR(1) ⊂ LR(1). Thus LR(1) is strictly the most powerful deterministic bottom-up parsing technique among the choices.',
      subject: 'Theory of Computation',
      topic: 'Compiler Design & Bottom-Up Parsing',
      difficulty: 'Medium',
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
  ],

  // =========================================================================
  // 5. COMMON ADMISSION TEST (CAT)
  // =========================================================================
  'cat': [
    {
      questionText: 'A person travels from city A to city B at an average speed of 60 km/h and returns from B to A along the exact same route at 90 km/h. What is the average speed of the entire journey?',
      options: ['72 km/h', '75 km/h', '70 km/h', '80 km/h'],
      correctOptionIndex: 0,
      explanation: 'When equal distances are traversed at speeds v1 and v2, harmonic mean applies: Average speed = (2 * v1 * v2) / (v1 + v2) = (2 * 60 * 90) / (60 + 90) = 10800 / 150 = 72 km/h.',
      subject: 'Quantitative Aptitude',
      topic: 'Time, Speed and Distance',
      difficulty: 'Easy',
      marks: 3
    },
    {
      questionText: 'Find the remainder when 3²⁰²⁶ is divided by 7.',
      options: ['2', '4', '1', '6'],
      correctOptionIndex: 0,
      explanation: 'By Fermat Little Theorem, since 7 is prime and gcd(3,7)=1, 3^6 ≡ 1 (mod 7). Dividing 2026 by 6: 2026 = 6 * 337 + 4. Therefore 3^2026 ≡ (3^6)^337 * 3^4 ≡ 1 * 81 ≡ 81 (mod 7). 81 = 11 * 7 + 4. Wait: 3^1=3, 3^2=2, 3^3=6, 3^4=4. 81 mod 7 = 4.',
      subject: 'Quantitative Aptitude',
      topic: 'Number Systems & Modular Arithmetic',
      difficulty: 'Medium',
      marks: 3
    },
    {
      questionText: 'In a group of 100 corporate managers, 65 subscribe to Harvard Business Review, 45 subscribe to Forbes, and 20 subscribe to both. How many managers subscribe to neither publication?',
      options: ['10', '15', '20', '5'],
      correctOptionIndex: 0,
      explanation: 'n(HBR ∪ Forbes) = n(HBR) + n(Forbes) - n(HBR ∩ Forbes) = 65 + 45 - 20 = 90. Neither = Total - n(HBR ∪ Forbes) = 100 - 90 = 10 managers.',
      subject: 'DILR',
      topic: 'Set Theory & Venn Diagrams',
      difficulty: 'Easy',
      marks: 3
    },
    {
      questionText: 'Identify the sentence with grammatically correct and coherent parallelism:',
      options: [
        'The chief executive was praised for handling the crisis decisively, communicating transparently, and restoring stakeholder confidence.',
        'The chief executive was praised for handling the crisis decisively, transparent communication, and to restore stakeholder confidence.',
        'The chief executive was praised to handle the crisis decisively, communicated transparently, and restoring stakeholder confidence.',
        'The chief executive was praised for decisive crisis handling, communicating transparently, and restoration of stakeholder confidence.'
      ],
      correctOptionIndex: 0,
      explanation: 'Parallel construction requires coordinated verbs to maintain the identical gerund grammatical form (-ing): handling..., communicating..., and restoring....',
      subject: 'VARC',
      topic: 'Verbal Ability & Parallelism',
      difficulty: 'Easy',
      marks: 3
    }
  ],

  // =========================================================================
  // 6. SSC COMBINED GRADUATE LEVEL (SSC CGL)
  // =========================================================================
  'ssc-cgl': [
    {
      questionText: 'If "TEACHER" is coded as "VGCEJGT" in a certain cryptographic cipher, how will "STUDENT" be coded in the same system?',
      options: ['UVWFGPV', 'UVWFGPT', 'TUVEHPU', 'TVWFGPU'],
      correctOptionIndex: 0,
      explanation: 'Each alphabet letter is shifted forward by +2 positions: T(+2)->V, E(+2)->G, A(+2)->C, C(+2)->E, H(+2)->J, E(+2)->G, R(+2)->T. For STUDENT: S(+2)->U, T(+2)->V, U(+2)->W, D(+2)->F, E(+2)->G, N(+2)->P, T(+2)->V.',
      subject: 'General Intelligence & Reasoning',
      topic: 'Coding-Decoding',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'Who was the Governor-General of India when the Indian National Congress was founded in Bombay in December 1885?',
      options: ['Lord Dufferin', 'Lord Ripon', 'Lord Curzon', 'Lord Lytton'],
      correctOptionIndex: 0,
      explanation: 'Lord Dufferin served as the Viceroy and Governor-General of India from 1884 to 1888 when the Indian National Congress was founded by A.O. Hume in 1885.',
      subject: 'General Awareness',
      topic: 'Indian Modern History',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'A dealer marks his goods 30% above the cost price and allows a discount of 15% on the marked price. What is his net gain percentage?',
      options: ['10.5%', '15%', '12.5%', '8.5%'],
      correctOptionIndex: 0,
      explanation: 'Let CP = 100. MP = 130. Discount = 15% of 130 = 19.5. SP = 130 - 19.5 = 110.5. Profit% = (110.5 - 100)% = 10.5%.',
      subject: 'Quantitative Aptitude',
      topic: 'Profit, Loss and Discount',
      difficulty: 'Easy',
      marks: 2
    },
    {
      questionText: 'Select the most appropriate synonym of the word "CANDID":',
      options: ['Frank & Outspoken', 'Deceitful', 'Hesitant', 'Arrogant'],
      correctOptionIndex: 0,
      explanation: '"Candid" means truthful, straightforward, and sincere in speech, making "Frank & Outspoken" the exact synonym.',
      subject: 'English Comprehension',
      topic: 'Vocabulary & Synonyms',
      difficulty: 'Easy',
      marks: 2
    }
  ],

  // =========================================================================
  // 7. COMMON LAW ADMISSION TEST (CLAT UG)
  // =========================================================================
  'clat-ug': [
    {
      questionText: 'Principle: Volenti non fit injuria (to a willing person, no injury is done) is a complete defense in the law of torts if the plaintiff voluntarily assumed the known risk.\nFacts: Amit bought a front-row ticket to a professional cricket match. During the match, a batsman hit a powerful six into the stands, striking Amit and fracturing his arm. Amit sued the stadium organizers for damages.',
      options: [
        'Amit cannot recover damages because he voluntarily assumed the customary risk of stray balls by attending the live match.',
        'Amit can recover damages because the stadium failed to install protective nets across the entire seating gallery.',
        'Amit can recover damages under strict liability.',
        'The batsman is personally liable to compensate Amit for medical expenses.'
      ],
      correctOptionIndex: 0,
      explanation: 'Under the defense of volenti non fit injuria, spectators attending sporting events impliedly consent to the ordinary and customary risks inherent to the game.',
      subject: 'Legal Reasoning',
      topic: 'Law of Torts & General Defences',
      difficulty: 'Medium',
      marks: 1
    },
    {
      questionText: 'Which landmark Supreme Court of India judgement held that the Right to Privacy is a fundamental right protected under Article 21 and Part III of the Constitution?',
      options: [
        'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)',
        'Navtej Singh Johar v. Union of India (2018)',
        'Shayara Bano v. Union of India (2017)',
        'Maneka Gandhi v. Union of India (1978)'
      ],
      correctOptionIndex: 0,
      explanation: 'A unanimous nine-judge Constitution Bench in Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) declared the Right to Privacy an intrinsic fundamental right under Article 21.',
      subject: 'Current Affairs & GK',
      topic: 'Constitutional Law & Landmark Judgements',
      difficulty: 'Easy',
      marks: 1
    },
    {
      questionText: 'Statement: "All contracts are agreements, but all agreements are not contracts." What essential ingredient transforms an agreement into an enforceable contract under the Indian Contract Act, 1872?',
      options: ['Enforceability by law', 'Written documentation on stamp paper', 'Affidavit registration', 'Witness signatures'],
      correctOptionIndex: 0,
      explanation: 'Section 2(h) of the Indian Contract Act defines a contract as "an agreement enforceable by law". Agreements lacking lawful consideration, lawful object, or free consent are not enforceable contracts.',
      subject: 'Legal Reasoning',
      topic: 'Indian Contract Act',
      difficulty: 'Easy',
      marks: 1
    }
  ],

  // =========================================================================
  // 8. NATIONAL DEFENCE ACADEMY (NDA)
  // =========================================================================
  'nda': [
    {
      questionText: 'If sin θ + cos θ = √2 cos θ, what is the value of cos θ - sin θ?',
      options: ['√2 sin θ', '-√2 sin θ', '√2 cos θ', '1 / √2'],
      correctOptionIndex: 0,
      explanation: 'Squaring (sin θ + cos θ = √2 cos θ): 1 + 2 sin θ cos θ = 2 cos² θ. Now (cos θ - sin θ)² = 1 - 2 sin θ cos θ = 1 - (2 cos² θ - 1) = 2 - 2 cos² θ = 2 sin² θ. Taking square root: cos θ - sin θ = √2 sin θ.',
      subject: 'Mathematics',
      topic: 'Trigonometric Identities',
      difficulty: 'Medium',
      marks: 2.5
    },
    {
      questionText: 'What is the sum of all two-digit natural numbers which leave a remainder of 1 when divided by 3?',
      options: ['1605', '1650', '1590', '1700'],
      correctOptionIndex: 0,
      explanation: 'The numbers form an AP: 10, 13, 16, ..., 97. First term a = 10, common difference d = 3, last term l = 97. Number of terms n = (97 - 10) / 3 + 1 = 30. Sum S = (n/2) * (a + l) = 15 * (10 + 97) = 15 * 107 = 1605.',
      subject: 'Mathematics',
      topic: 'Arithmetic Progressions',
      difficulty: 'Easy',
      marks: 2.5
    },
    {
      questionText: 'The acceleration due to gravity on the surface of a planet having twice the mass and twice the radius of Earth is:',
      options: ['g / 2', '2g', 'g', 'g / 4'],
      correctOptionIndex: 0,
      explanation: 'g = G M / R². For the new planet: g\' = G (2M) / (2R)² = (2 G M) / (4 R²) = (1/2) g.',
      subject: 'General Ability Test',
      topic: 'Physics & Gravitation',
      difficulty: 'Easy',
      marks: 4
    }
  ],

  // =========================================================================
  // 9. STATE BANK OF INDIA PROBATIONARY OFFICER (SBI PO)
  // =========================================================================
  'sbi-po': [
    {
      questionText: 'In a code language: "banking sector grows rapid" is coded as "kx mo pa tz", "rapid development brings stability" is coded as "tz lu bn ro", and "sector stability creates trust" is coded as "mo bn yi we". What is the code for "sector"?',
      options: ['mo', 'kx', 'tz', 'bn'],
      correctOptionIndex: 0,
      explanation: 'Comparing sentence 1 ("banking sector grows rapid" = kx mo pa tz) and sentence 3 ("sector stability creates trust" = mo bn yi we), the only shared word is "sector" and the only shared code is "mo".',
      subject: 'Reasoning Ability',
      topic: 'Fictitious Coding / Chinese Coding',
      difficulty: 'Easy',
      marks: 1
    },
    {
      questionText: 'Pipe A can fill a tank in 12 hours, while Pipe B can fill it in 15 hours. If both pipes are opened simultaneously into an empty tank, how long will it take to fill the tank completely?',
      options: ['6 hours 40 minutes (6.67 hrs)', '6 hours 15 minutes', '7 hours', '5 hours 45 minutes'],
      correctOptionIndex: 0,
      explanation: 'Total capacity = LCM(12, 15) = 60 units. Efficiency of A = 60/12 = 5 units/hr. Efficiency of B = 60/15 = 4 units/hr. Combined efficiency = 9 units/hr. Time taken = 60 / 9 = 20 / 3 hours = 6 hours and 40 minutes.',
      subject: 'Quantitative Aptitude',
      topic: 'Pipes and Cisterns',
      difficulty: 'Easy',
      marks: 1
    },
    {
      questionText: 'Select the grammatical segment with an error: "Neither the branch manager (A) / nor the loan officers (B) / was present at the conference (C) / yesterday afternoon (D)."',
      options: ['(C) was present at the conference', '(A) Neither the branch manager', '(B) nor the loan officers', '(D) yesterday afternoon'],
      correctOptionIndex: 0,
      explanation: 'When subjects are joined by "neither... nor...", the verb agrees with the closer subject. Here "loan officers" is plural, so the verb must be plural: "were present", not "was present".',
      subject: 'English Language',
      topic: 'Subject-Verb Agreement',
      difficulty: 'Easy',
      marks: 1
    }
  ],

  // =========================================================================
  // 10. UGC NATIONAL ELIGIBILITY TEST (UGC NET)
  // =========================================================================
  'ugc-net': [
    {
      questionText: 'Which research approach seeks to understand phenomena from the perspective of the individuals experiencing them, emphasizing subjective interpretations rather than objective statistical measurements?',
      options: ['Phenomenological research', 'Positivist quantitative research', 'Experimental control trial', 'Ex-post facto research'],
      correctOptionIndex: 0,
      explanation: 'Phenomenological research is a qualitative methodology rooted in interpretivism that explores and elucidates the lived experiences of individuals regarding a specific concept or phenomenon.',
      subject: 'Paper 1 (General Teaching & Research)',
      topic: 'Research Methodology',
      difficulty: 'Medium',
      marks: 2
    },
    {
      questionText: 'In the communication process, any factor that disrupts, distorts, or hinders the accurate transmission and comprehension of the sender message is known as:',
      options: ['Noise', 'Feedback', 'Encoding', 'Channeling'],
      correctOptionIndex: 0,
      explanation: 'In Shannon-Weaver and transactional communication models, "noise" encompasses physical, physiological, or psychological barriers that distort the clarity of the transmitted signal.',
      subject: 'Paper 1 (General Teaching & Research)',
      topic: 'Communication Models & Barriers',
      difficulty: 'Easy',
      marks: 2
    }
  ],

  // =========================================================================
  // 11. RAILWAY RECRUITMENT BOARD (RRB NTPC)
  // =========================================================================
  'rrb-ntpc': [
    {
      questionText: 'In which year did the first passenger train run in India between Bori Bunder (Bombay) and Thane over a distance of 34 kilometers?',
      options: ['1853', '1857', '1869', '1885'],
      correctOptionIndex: 0,
      explanation: 'India first passenger train ran on April 16, 1853, covering 34 km between Bori Bunder and Thane, hauled by three steam locomotives named Sahib, Sindh, and Sultan.',
      subject: 'General Awareness',
      topic: 'History of Indian Railways',
      difficulty: 'Easy',
      marks: 1
    },
    {
      questionText: 'Two trains of lengths 120 m and 180 m travel in opposite directions on parallel tracks with speeds of 40 km/h and 50 km/h respectively. How long will they take to cross each other completely?',
      options: ['12 seconds', '10 seconds', '15 seconds', '8 seconds'],
      correctOptionIndex: 0,
      explanation: 'Total distance = 120 + 180 = 300 m. Relative speed in opposite directions = 40 + 50 = 90 km/h = 90 * (5/18) = 25 m/s. Time to cross = 300 / 25 = 12 seconds.',
      subject: 'Mathematics',
      topic: 'Relative Speed & Problems on Trains',
      difficulty: 'Easy',
      marks: 1
    }
  ]
};
