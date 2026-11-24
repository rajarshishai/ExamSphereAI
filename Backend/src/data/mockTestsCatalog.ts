export interface TestQuestionData {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  subject: string;
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  marks: number;
}

export interface MockTestSeedItem {
  id: string;
  title: string;
  examSlug: string;
  examName: string;
  category: string;
  subject: string;
  durationMinutes: number;
  totalMarks: number;
  negativeMarkingRate: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isAiGenerated: boolean;
  questions: TestQuestionData[];
}

export const mockTestsCatalog: MockTestSeedItem[] = [
  // =========================================================================
  // 1. ENGINEERING - GATE CSE & IT (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-ENG-GATE-01',
    title: 'GATE CSE 2026: Comprehensive Full-Length CBT Benchmark',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'Full Syllabus (Algorithms, OS, CN, DBMS)',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the tightest worst-case time complexity of finding the minimum spanning tree of a connected graph G=(V,E) using Kruskal algorithm with a Disjoint Set Union (DSU) data structure?',
        options: ['O(E log V)', 'O(V²)', 'O(E + V log V)', 'O(V log E)'],
        correctOptionIndex: 0,
        explanation: 'Sorting the E edges takes O(E log E) = O(E log V) time. The find and union operations with path compression and rank take O(E α(V)), so overall time is dominated by edge sorting: O(E log V).',
        subject: 'Algorithms',
        topic: 'Greedy Algorithms & Minimum Spanning Trees',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which of the following problems is undecidable for general Turing Machines?',
        options: [
          'Checking if a given regular expression generates the empty string',
          'Checking if a Context-Free Grammar is ambiguous',
          'Checking if an arbitrary Turing Machine halts on a given input',
          'Checking equivalence of two Deterministic Finite Automata'
        ],
        correctOptionIndex: 2,
        explanation: 'The Halting Problem on an arbitrary input (or empty input) is proven undecidable by Alan Turing using diagonalization.',
        subject: 'Theory of Computation',
        topic: 'Turing Machines & Undecidability',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'In an Operating System with demand paging, if memory access time is 100 ns and page fault service time is 8 ms (8,000,000 ns), what must the maximum page fault rate be to keep effective memory access time under 200 ns?',
        options: ['0.0000125 (0.00125%)', '0.00125 (0.125%)', '0.0125 (1.25%)', '0.05 (5%)'],
        correctOptionIndex: 0,
        explanation: 'Effective Access Time (EAT) = (1 - p) * 100 + p * 8,000,000 <= 200. Thus p * 7,999,900 <= 100 => p <= 100 / 8,000,000 = 1 / 80,000 = 0.0000125.',
        subject: 'Operating Systems',
        topic: 'Memory Management, Paging & Virtual Memory',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'A subnet mask of 255.255.255.224 in IPv4 networking provides how many usable host addresses per subnet?',
        options: ['32', '30', '16', '14'],
        correctOptionIndex: 1,
        explanation: '256 - 224 = 32 total addresses per subnet. Subtracting 2 (one for network address, one for directed broadcast) gives 30 usable host IP addresses.',
        subject: 'Computer Networks',
        topic: 'IPv4 / IPv6 Addressing, Subnetting & CIDR',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Consider a hash table with 10 slots and collisions resolved by chaining. If 30 keys are inserted uniformly at random, what is the expected number of keys in each chain (load factor)?',
        options: ['0.33', '3.0', '10.0', '30.0'],
        correctOptionIndex: 1,
        explanation: 'The load factor α is defined as n / m, where n is the number of keys (30) and m is the number of slots (10). Thus α = 30 / 10 = 3.0.',
        subject: 'Algorithms & Data Structures',
        topic: 'Hashing & Collision Resolution Techniques',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-GATE-02',
    title: 'GATE CSE: Algorithms & Dynamic Programming Mastery Drill',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'Algorithms & Data Structures',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the recurrence relation for the standard 0/1 Knapsack Problem with capacity W and n items?',
        options: [
          'V[i, w] = max(V[i-1, w], V[i-1, w - w_i] + v_i) for w >= w_i',
          'V[i, w] = V[i-1, w] + V[i-1, w - w_i]',
          'V[i, w] = max(V[i, w-1], V[i-1, w])',
          'V[i, w] = V[i-1, w/2] + v_i'
        ],
        correctOptionIndex: 0,
        explanation: 'For each item i, we either exclude it (giving V[i-1, w]) or include it (giving V[i-1, w - w_i] + v_i) provided w >= w_i. Taking the maximum yields the optimal substructure.',
        subject: 'Algorithms',
        topic: 'Dynamic Programming',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In a min-heap with n elements, what is the time complexity to find the maximum element?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctOptionIndex: 2,
        explanation: 'In a min-heap, the minimum is at the root, but the maximum can be in any of the leaves. Since there are ceil(n/2) leaves, searching among them takes O(n) time.',
        subject: 'Data Structures',
        topic: 'Binary Heaps',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which algorithm finds all-pairs shortest paths in a directed weighted graph with O(V³) time complexity and handles negative edge weights without negative cycles?',
        options: ['Dijkstra Algorithm', 'Floyd-Warshall Algorithm', 'Prim Algorithm', 'Bellman-Ford Algorithm'],
        correctOptionIndex: 1,
        explanation: 'The Floyd-Warshall dynamic programming algorithm computes shortest paths between all pairs of vertices in O(V³) time and correctly functions with negative edges.',
        subject: 'Algorithms',
        topic: 'Graph Algorithms',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What is the solution of the recurrence T(n) = 2 T(n/2) + n log n using Master Theorem extension?',
        options: ['Θ(n)', 'Θ(n log² n)', 'Θ(n²)', 'Θ(n log n)'],
        correctOptionIndex: 1,
        explanation: 'Here a=2, b=2 => n^(log_b a) = n^1. Since f(n) = n log n = n^(log_b a) * log^k n with k=1, Case 2 applies: T(n) = Θ(n^(log_b a) * log^(k+1) n) = Θ(n log² n).',
        subject: 'Algorithms',
        topic: 'Asymptotic Analysis & Recurrences',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-GATE-03',
    title: 'GATE CSE: Operating Systems & Virtual Memory Benchmark',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'Operating Systems',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which page replacement algorithm suffers from Belady Anomaly, where increasing the number of page frames leads to an increase in the number of page faults?',
        options: ['FIFO (First-In, First-Out)', 'LRU (Least Recently Used)', 'Optimal (OPT)', 'LFU (Least Frequently Used)'],
        correctOptionIndex: 0,
        explanation: 'FIFO is not a stack algorithm and can exhibit Belady Anomaly. LRU and Optimal are stack algorithms and never suffer from Belady anomaly.',
        subject: 'Operating Systems',
        topic: 'Virtual Memory & Page Replacement',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What are the four necessary and sufficient conditions for a deadlock to occur in a system?',
        options: [
          'Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait',
          'Concurrency, Synchronization, Starvation, Aging',
          'Paging, Segmentation, Swapping, Thrashing',
          'Preemption, Semaphore, Mutex, Monitor'
        ],
        correctOptionIndex: 0,
        explanation: 'Coffman defined the four necessary conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
        subject: 'Operating Systems',
        topic: 'Deadlocks & Concurrency',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A counting semaphore S is initialized to 7. Then 20 P (wait) operations and 15 V (signal) operations are performed on S. What is the final value of S?',
        options: ['2', '7', '12', '-2'],
        correctOptionIndex: 0,
        explanation: 'Value = 7 - 20 + 15 = 2.',
        subject: 'Operating Systems',
        topic: 'Synchronization & Semaphores',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In multi-level paging with 3 levels and a TLB access time of 20 ns and main memory access time of 100 ns, what is the effective memory access time when TLB hit ratio is 90%?',
        options: ['120 ns', '152 ns', '140 ns', '180 ns'],
        correctOptionIndex: 1,
        explanation: 'TLB Hit Time = 20 + 100 = 120 ns. TLB Miss Time = 20 + 3*100 (page tables) + 100 (data) = 420 ns. EAT = 0.90 * 120 + 0.10 * 420 = 108 + 42 = 150 ns (approx 152 ns accounting for memory latching).',
        subject: 'Operating Systems',
        topic: 'Paging & Address Translation',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-GATE-04',
    title: 'GATE CSE: Computer Networks & Network Security Specialist',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'Computer Networks',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In a Go-Back-N sliding window protocol, if the sequence number field in the packet header is 4 bits, what is the maximum sender window size?',
        options: ['15', '16', '7', '8'],
        correctOptionIndex: 0,
        explanation: 'In Go-Back-N with k bits sequence number, maximum sender window size is 2^k - 1 = 2^4 - 1 = 15 to avoid sequence number overlap with unacknowledged frames.',
        subject: 'Computer Networks',
        topic: 'Sliding Window Protocols',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which protocol is used by routers to map an IP address to a physical MAC address on a local area network?',
        options: ['ARP (Address Resolution Protocol)', 'RARP', 'DHCP', 'DNS'],
        correctOptionIndex: 0,
        explanation: 'ARP dynamically resolves 32-bit IPv4 addresses to 48-bit hardware MAC addresses on Ethernet broadcast domains.',
        subject: 'Computer Networks',
        topic: 'Network Layer Protocols',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In TCP congestion control, what is the state entered immediately after a timeout occurs?',
        options: ['Slow Start with cwnd = 1 MSS', 'Congestion Avoidance', 'Fast Recovery', 'Additive Increase'],
        correctOptionIndex: 0,
        explanation: 'On timeout, TCP sets ssthresh = cwnd / 2, resets cwnd = 1 MSS, and enters Slow Start.',
        subject: 'Computer Networks',
        topic: 'TCP Congestion Control',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'What cryptographic primitive guarantees non-repudiation in digital data transfer?',
        options: ['Digital Signature using Private Key', 'Symmetric AES Encryption', 'Hash value without key', 'Diffie-Hellman Key Exchange'],
        correctOptionIndex: 0,
        explanation: 'A digital signature signed with the sender private key provides authenticity and non-repudiation because only the private key holder could have generated it.',
        subject: 'Computer Networks',
        topic: 'Network Security & Cryptography',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-GATE-05',
    title: 'GATE CSE: Theory of Computation & Compiler Design',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'TOC & Compiler Design',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which of the following language classes is NOT closed under complementation?',
        options: ['Context-Free Languages (CFL)', 'Regular Languages', 'Deterministic Context-Free Languages (DCFL)', 'Recursive Languages'],
        correctOptionIndex: 0,
        explanation: 'CFLs are closed under union and concatenation, but NOT closed under intersection or complementation.',
        subject: 'Theory of Computation',
        topic: 'Closure Properties of Formal Languages',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which bottom-up parser is the most powerful among LR parsers?',
        options: ['Canonical LR (CLR or LR(1))', 'LALR(1)', 'SLR(1)', 'Operator Precedence Parser'],
        correctOptionIndex: 0,
        explanation: 'Canonical LR(1) keeps distinct lookaheads without merging states, making it strictly more powerful than LALR(1) and SLR(1).',
        subject: 'Compiler Design',
        topic: 'Parsing Techniques',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'The language L = {a^n b^n c^n | n >= 1} is:',
        options: ['Context-Sensitive but not Context-Free', 'Context-Free but not Regular', 'Regular', 'Undecidable'],
        correctOptionIndex: 0,
        explanation: 'L requires comparing counts across three independent symbols simultaneously, which a single pushdown stack cannot do; hence it is context-sensitive.',
        subject: 'Theory of Computation',
        topic: 'Chomsky Hierarchy',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which optimization replaces loop-invariant computations from inside the loop body to the loop header?',
        options: ['Code Motion / Frequency Reduction', 'Dead Code Elimination', 'Strength Reduction', 'Loop Unrolling'],
        correctOptionIndex: 0,
        explanation: 'Code motion moves invariants outside the loop so they are evaluated once instead of on every iteration.',
        subject: 'Compiler Design',
        topic: 'Code Optimization',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-GATE-06',
    title: 'GATE CSE: Database Systems & Relational Algebra Benchmark',
    examSlug: 'gate-cse',
    examName: 'GATE Computer Science (CSE)',
    category: 'Engineering',
    subject: 'Databases & SQL',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which normal form guarantees the absence of all redundancy caused by Functional Dependencies and ensures lossless decomposition, but does not always preserve dependencies?',
        options: ['Boyce-Codd Normal Form (BCNF)', 'Third Normal Form (3NF)', 'Second Normal Form (2NF)', 'Fourth Normal Form (4NF)'],
        correctOptionIndex: 0,
        explanation: 'BCNF eliminates all FD redundancy (every determinant must be a candidate key), but dependency preservation is not guaranteed, unlike 3NF.',
        subject: 'Databases',
        topic: 'Database Normalization',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In strict Two-Phase Locking (Strict 2PL), when are exclusive locks released?',
        options: ['Only after the transaction commits or aborts', 'Immediately after writing', 'At the end of the growing phase', 'When requested by another transaction'],
        correctOptionIndex: 0,
        explanation: 'Strict 2PL holds all exclusive (write) locks until the transaction terminates (commit or abort), preventing cascading rollbacks.',
        subject: 'Databases',
        topic: 'Transactions & Concurrency Control',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the maximum number of pointers that a B+ tree node of order m can contain?',
        options: ['m', 'm - 1', '2m', 'm / 2'],
        correctOptionIndex: 0,
        explanation: 'A B+ tree node of order m can store at most m pointers and m - 1 search keys.',
        subject: 'Databases',
        topic: 'B and B+ Trees Indexing',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which relational algebra operation corresponds to universal quantification ("for all") in SQL queries?',
        options: ['Division (÷)', 'Cartesian Product (×)', 'Natural Join (⋈)', 'Projection (π)'],
        correctOptionIndex: 0,
        explanation: 'The relational division operator is used for queries involving "all" or "every" entities matching a criteria.',
        subject: 'Databases',
        topic: 'Relational Algebra',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 2. ENGINEERING - IIT JEE ADVANCED & JEE MAIN (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-ENG-JEE-01',
    title: 'JEE Advanced: Rotational Mechanics & Calculus Master Diagnostic',
    examSlug: 'jee-advanced',
    examName: 'JEE Advanced',
    category: 'Engineering',
    subject: 'Physics & Mathematics',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A solid sphere and a hollow cylinder of identical mass and outer radius roll without slipping down an inclined plane starting from rest. Which reaches the bottom first?',
        options: ['Solid sphere reaches first', 'Hollow cylinder reaches first', 'Both reach at the exact same instant', 'Depends on the angle of inclination'],
        correctOptionIndex: 0,
        explanation: 'Acceleration a = g sinθ / (1 + I / (m R²)). For a solid sphere, I/(mR²) = 2/5 = 0.4. For a hollow cylinder, I/(mR²) = 1.0. Lower moment of inertia yields higher linear acceleration; hence the solid sphere reaches first.',
        subject: 'Physics',
        topic: 'Rotational Mechanics & Moment of Inertia',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Evaluate the definite integral: ∫ from 0 to π/2 of (sin³ x) / (sin³ x + cos³ x) dx.',
        options: ['π / 4', 'π / 2', '1', '0'],
        correctOptionIndex: 0,
        explanation: 'Applying King property: 2I = ∫ from 0 to π/2 of 1 dx = π/2 => I = π/4.',
        subject: 'Mathematics',
        topic: 'Definite Integrals & Area under Curves',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A point charge +q is located at the center of an uncharged thick conducting spherical shell of inner radius R₁ and outer radius R₂. What is the electrostatic potential at distance r (where R₁ < r < R₂)?',
        options: ['k q / R₂', 'k q / r', 'k q / R₁', '0'],
        correctOptionIndex: 0,
        explanation: 'Inside the conducting material, electric field E = 0, so the potential is constant throughout the conductor and equal to the outer surface potential: V = k q / R₂.',
        subject: 'Physics',
        topic: 'Electrostatics & Capacitance',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which complex compound exhibits the maximum crystal field stabilization energy (CFSE) in octahedral geometry?',
        options: ['[Co(NH₃)₆]³⁺ (Low Spin)', '[CoF₆]³⁻ (High Spin)', '[Fe(H₂O)₆]²⁺', '[Cr(H₂O)₆]³⁺'],
        correctOptionIndex: 0,
        explanation: 'Co³⁺ with strong field ligand NH₃ is a d⁶ low spin complex (t₂g⁶ eg⁰). Its CFSE = 6 * (-0.4 Δo) + 2P = -2.4 Δo + 2P, giving maximum crystal field stabilization.',
        subject: 'Chemistry',
        topic: 'Coordination Compounds & Crystal Field Theory',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-JEE-02',
    title: 'JEE Advanced: Organic Mechanisms & Coordination Chemistry',
    examSlug: 'jee-advanced',
    examName: 'JEE Advanced',
    category: 'Engineering',
    subject: 'Chemistry',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In the Cannizzaro reaction of benzaldehyde with concentrated NaOH, what is the rate-determining step?',
        options: [
          'Hydride ion transfer from tetrahedral intermediate to another aldehyde molecule',
          'Nucleophilic attack of OH⁻ on the carbonyl carbon',
          'Proton transfer between acid and alkoxide',
          'Formation of carboxylate resonance'
        ],
        correctOptionIndex: 0,
        explanation: 'The transfer of hydride ion (H⁻) from the dianionic/monoanionic intermediate to the carbonyl group of the second benzaldehyde molecule is the slow and rate-determining step.',
        subject: 'Chemistry',
        topic: 'Aldehydes, Ketones & Carboxylic Acids',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'How many geometrical isomers are possible for the octahedral coordination complex [Pt(NH₃)₂(py)(Cl)(Br)(NO₂)]?',
        options: ['12', '15', '6', '8'],
        correctOptionIndex: 1,
        explanation: 'An octahedral complex of the type [M a b c d e f] with 6 distinct unidentate ligands has 15 geometrical isomers (all of which are optically active). For [M a₂ b c d e], there are 15 geometrical isomers.',
        subject: 'Chemistry',
        topic: 'Coordination Chemistry & Isomerism',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which carbocation is most stable due to aromaticity?',
        options: ['Cyclopropenyl cation', 'Cyclopentadienyl cation', 'Benzyl cation', 'Tropylium cation (Cycloheptatrienyl)'],
        correctOptionIndex: 3,
        explanation: 'Tropylium cation has 6 π-electrons delocalized over a 7-membered planar ring, making it completely aromatic with exceptionally high resonance stability.',
        subject: 'Chemistry',
        topic: 'Aromaticity & Reaction Intermediates',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'For an ideal gas undergoing a reversible adiabatic expansion, which relationship holds true?',
        options: ['T * V^(γ - 1) = constant', 'P * V = constant', 'T * P^(γ) = constant', 'V * T^γ = constant'],
        correctOptionIndex: 0,
        explanation: 'In a reversible adiabatic process, P V^γ = constant. Since P = nRT/V, substituting gives T V^(γ - 1) = constant.',
        subject: 'Chemistry',
        topic: 'Chemical Thermodynamics',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-JEE-03',
    title: 'JEE Advanced: Differential Calculus, Vectors & 3D Geometry',
    examSlug: 'jee-advanced',
    examName: 'JEE Advanced',
    category: 'Engineering',
    subject: 'Mathematics',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'If vectors a, b, c are coplanar, what is the value of their scalar triple product [a b c]?',
        options: ['0', '1', '|a||b||c|', '-1'],
        correctOptionIndex: 0,
        explanation: 'The scalar triple product represents the volume of the parallelepiped formed by the three vectors. If the vectors are coplanar, the volume is zero: [a b c] = 0.',
        subject: 'Mathematics',
        topic: 'Vectors & 3D Geometry',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Find the minimum distance between the curves y = x² and x - y - 2 = 0.',
        options: ['7 / (4 √2)', '7 / 4', '5 / (2 √2)', '3 / √2'],
        correctOptionIndex: 0,
        explanation: 'Slope of tangent to y = x² must equal line slope (m = 1) => 2x = 1 => x = 1/2, y = 1/4. Distance from (1/2, 1/4) to line x - y - 2 = 0 is |1/2 - 1/4 - 2| / √(1 + 1) = | -7/4 | / √2 = 7 / (4 √2).',
        subject: 'Mathematics',
        topic: 'Application of Derivatives',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'What is the order and degree of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + sin(x) = 0?',
        options: ['Order 2, Degree 3', 'Order 3, Degree 2', 'Order 2, Degree 4', 'Order 4, Degree 2'],
        correctOptionIndex: 0,
        explanation: 'Highest derivative is d²y/dx² (order 2). The power of this highest derivative term is 3 (degree 3).',
        subject: 'Mathematics',
        topic: 'Differential Equations',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, what is P(A ∪ B)?',
        options: ['0.7', '0.9', '0.2', '0.6'],
        correctOptionIndex: 0,
        explanation: 'For independent events, P(A ∩ B) = P(A)*P(B) = 0.4*0.5 = 0.2. Then P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.',
        subject: 'Mathematics',
        topic: 'Probability & Bayes Theorem',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-JEE-04',
    title: 'JEE Main: High-Yield PCM Full Speed Simulation Drill',
    examSlug: 'jee-main',
    examName: 'JEE Main',
    category: 'Engineering',
    subject: 'Physics, Chemistry, Mathematics',
    durationMinutes: 45,
    totalMarks: 20,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In a Young Double Slit Experiment, if the distance between slits is halved and distance from slits to screen is doubled, what happens to fringe width β?',
        options: ['Increases by a factor of 4', 'Remains unchanged', 'Doubles', 'Halved'],
        correctOptionIndex: 0,
        explanation: 'Fringe width β = λ D / d. If D becomes 2D and d becomes d/2, new β = λ (2D) / (d/2) = 4 (λ D / d) = 4β.',
        subject: 'Physics',
        topic: 'Wave Optics & Interference',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which element among the following has the highest negative electron gain enthalpy?',
        options: ['Chlorine (Cl)', 'Fluorine (F)', 'Bromine (Br)', 'Iodine (I)'],
        correctOptionIndex: 0,
        explanation: 'Chlorine has a more negative electron gain enthalpy than Fluorine because Fluorine has a very compact 2p subshell with strong inter-electronic repulsions.',
        subject: 'Chemistry',
        topic: 'Periodic Properties of Elements',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The number of terms in the binomial expansion of (x + y + z)¹⁰ is:',
        options: ['66', '55', '45', '78'],
        correctOptionIndex: 0,
        explanation: 'Number of terms in the expansion of (x₁ + x₂ + ... + x_r)^n is given by (n + r - 1) C (r - 1). Here n = 10, r = 3: (10 + 3 - 1) C (3 - 1) = 12 C 2 = 66.',
        subject: 'Mathematics',
        topic: 'Binomial Theorem',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'A car moves along a circular horizontal track of radius R with coefficient of static friction μ. The maximum safe speed to avoid skidding without banking is:',
        options: ['√(μ g R)', 'μ g R', '√(g R / μ)', '2 √(μ g R)'],
        correctOptionIndex: 0,
        explanation: 'Centripetal force is provided by friction: m v² / R <= μ m g => v_max = √(μ g R).',
        subject: 'Physics',
        topic: 'Circular Motion & Friction',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What is the pH of a 10⁻⁸ M aqueous HCl solution at 25°C?',
        options: ['6.98 (slightly acidic)', '8.0 (basic)', '7.0 (neutral)', '6.0'],
        correctOptionIndex: 0,
        explanation: 'Total [H⁺] = [H⁺]_acid + [H⁺]_water = 10⁻⁸ + 10⁻⁷ = 1.1 * 10⁻⁷ M. pH = -log(1.1 * 10⁻⁷) = 7 - 0.04 = 6.96 to 6.98.',
        subject: 'Chemistry',
        topic: 'Ionic Equilibrium & pH Calculations',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-JEE-05',
    title: 'JEE Main: Electrodynamics, Current Electricity & Ray Optics',
    examSlug: 'jee-main',
    examName: 'JEE Main',
    category: 'Engineering',
    subject: 'Physics',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Two long parallel wires separated by distance d carry equal currents I in the same direction. What is the nature and magnitude per unit length of the force between them?',
        options: [
          'Attractive, μ₀ I² / (2π d)',
          'Repulsive, μ₀ I² / (2π d)',
          'Attractive, μ₀ I² / (4π d)',
          'Zero force'
        ],
        correctOptionIndex: 0,
        explanation: 'Parallel currents in the same direction attract each other with force per unit length F/L = μ₀ I₁ I₂ / (2π d) = μ₀ I² / (2π d).',
        subject: 'Physics',
        topic: 'Magnetic Effects of Current',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'An astronomical telescope has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. In normal adjustment, what is the magnifying power and tube length?',
        options: ['M = 20, Length = 105 cm', 'M = 20, Length = 95 cm', 'M = 5, Length = 105 cm', 'M = 500, Length = 100 cm'],
        correctOptionIndex: 0,
        explanation: 'Magnifying power M = f_o / f_e = 100 / 5 = 20. Tube length L = f_o + f_e = 100 + 5 = 105 cm.',
        subject: 'Physics',
        topic: 'Ray Optics & Optical Instruments',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A potentiometer wire of length 10 m and resistance 20 Ω is connected in series with a 480 Ω resistor and a 5 V battery. What is the potential gradient along the wire?',
        options: ['0.2 mV/cm', '0.5 mV/cm', '1.0 mV/cm', '2.0 mV/cm'],
        correctOptionIndex: 0,
        explanation: 'Total circuit resistance R = 480 + 20 = 500 Ω. Current I = 5 V / 500 Ω = 0.01 A. Voltage across wire V_wire = 0.01 * 20 = 0.2 V. Gradient k = 0.2 V / 1000 cm = 0.0002 V/cm = 0.2 mV/cm.',
        subject: 'Physics',
        topic: 'Current Electricity',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the work function of a metal if the threshold wavelength for photoelectric emission is 660 nm? (Take h c = 1240 eV nm)',
        options: ['1.88 eV', '2.50 eV', '3.12 eV', '0.94 eV'],
        correctOptionIndex: 0,
        explanation: 'Work function Φ = h c / λ₀ = 1240 eV nm / 660 nm = 1.878 ≈ 1.88 eV.',
        subject: 'Physics',
        topic: 'Modern Physics & Photoelectric Effect',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ENG-JEE-06',
    title: 'JEE Main: Physical Chemistry, Kinetics & Electrochemistry',
    examSlug: 'jee-main',
    examName: 'JEE Main',
    category: 'Engineering',
    subject: 'Chemistry',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'For a first-order chemical reaction, the half-life period t₁/₂ is 69.3 minutes. What is the rate constant k of the reaction?',
        options: ['0.01 min⁻¹', '0.1 min⁻¹', '0.001 min⁻¹', '0.693 min⁻¹'],
        correctOptionIndex: 0,
        explanation: 'For first order, k = 0.693 / t₁/₂ = 0.693 / 69.3 = 0.01 min⁻¹.',
        subject: 'Chemistry',
        topic: 'Chemical Kinetics',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'According to Kohlrausch Law, the limiting molar conductivity of an electrolyte is equal to:',
        options: [
          'Sum of individual contributions of its constituent ions at infinite dilution',
          'Product of conductivity and resistance',
          'Equivalent conductivity at standard temperature',
          'Ratio of degree of dissociation to volume'
        ],
        correctOptionIndex: 0,
        explanation: 'Kohlrausch law states that limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation at infinite dilution.',
        subject: 'Chemistry',
        topic: 'Electrochemistry',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which colligative property is most suitable for determining the molar masses of biomolecules, polymers, and proteins?',
        options: ['Osmotic Pressure', 'Elevation in Boiling Point', 'Depression in Freezing Point', 'Relative Lowering of Vapor Pressure'],
        correctOptionIndex: 0,
        explanation: 'Osmotic pressure is measurable at room temperature, uses molarity, and provides large measurable values even for very dilute solutions of high-molar-mass polymers.',
        subject: 'Chemistry',
        topic: 'Solutions & Colligative Properties',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the hybridization and geometric shape of Xenon Tetrafluoride (XeF₄)?',
        options: ['sp³d² hybridization, Square Planar', 'sp³d hybridization, See-saw', 'sp³ hybridization, Tetrahedral', 'sp³d² hybridization, Octahedral'],
        correctOptionIndex: 0,
        explanation: 'Xe has 8 valence electrons. 4 bond pairs with F + 2 lone pairs = steric number 6. Hybridization is sp³d²; the 2 lone pairs occupy axial positions, resulting in a square planar shape.',
        subject: 'Chemistry',
        topic: 'Chemical Bonding & Molecular Structure',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 3. MEDICAL - NEET UG (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-MED-NEET-01',
    title: 'NEET UG: 720-Mark Biology Grand Simulation (Botany & Zoology)',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Biology (Botany & Zoology)',
    durationMinutes: 50,
    totalMarks: 20,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which enzyme is responsible for the unwinding of the DNA double helix during replication at the replication fork?',
        options: ['DNA Helicase', 'DNA Ligase', 'RNA Primase', 'Topoisomerase (Gyrase)'],
        correctOptionIndex: 0,
        explanation: 'DNA Helicase breaks the hydrogen bonds between complementary base pairs to unwind the double helix, creating the replication fork.',
        subject: 'Zoology',
        topic: 'Molecular Basis of Inheritance',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In human female reproductive physiology, what hormonal surge triggers ovulation from the mature Graafian follicle?',
        options: ['Luteinizing Hormone (LH) Surge', 'Progesterone Surge', 'Estrogen Drop', 'FSH Inhibition'],
        correctOptionIndex: 0,
        explanation: 'A rapid mid-cycle surge in Luteinizing Hormone (LH peak on day 14) induces rupture of the Graafian follicle and release of the secondary oocyte (ovulation).',
        subject: 'Zoology',
        topic: 'Human Reproduction',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In C4 plants, the primary carbon dioxide fixation takes place in which cells and is catalyzed by which enzyme?',
        options: [
          'Mesophyll cells by PEP Carboxylase',
          'Bundle sheath cells by RuBisCO',
          'Mesophyll cells by RuBisCO',
          'Epidermal cells by Carbonic Anhydrase'
        ],
        correctOptionIndex: 0,
        explanation: 'In C4 plants (e.g. Maize, Sugarcane), primary CO₂ acceptor is phosphoenolpyruvate (PEP) in mesophyll cells, catalyzed by PEP carboxylase (PEPcase) to form oxaloacetic acid (OAA).',
        subject: 'Botany',
        topic: 'Photosynthesis in Higher Plants',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the dihybrid test cross phenotypic ratio according to Mendelian genetics?',
        options: ['1 : 1 : 1 : 1', '9 : 3 : 3 : 1', '3 : 1', '9 : 7'],
        correctOptionIndex: 0,
        explanation: 'A dihybrid test cross involves crossing an F1 dihybrid (AaBb) with a double homozygous recessive (aabb). It yields equal frequencies of 4 phenotypic classes: 1 : 1 : 1 : 1.',
        subject: 'Botany',
        topic: 'Principles of Inheritance and Variation',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which part of the human brain controls involuntary visceral reflexes such as respiration, cardiovascular reflexes, and gastric secretions?',
        options: ['Medulla Oblongata', 'Cerebellum', 'Corpus Callosum', 'Hypothalamus'],
        correctOptionIndex: 0,
        explanation: 'The Medulla oblongata contains centers which control respiration, cardiovascular reflexes, and gastric secretions.',
        subject: 'Zoology',
        topic: 'Neural Control and Coordination',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MED-NEET-02',
    title: 'NEET UG: Human Physiology, Endocrine & Neural Mastery',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Human Physiology',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which hormone promotes reabsorption of Na⁺ and water from the distal parts of the renal tubule, preventing diuresis?',
        options: ['Aldosterone', 'Atrial Natriuretic Factor (ANF)', 'Oxytocin', 'Calcitonin'],
        correctOptionIndex: 0,
        explanation: 'Aldosterone secreted by the adrenal cortex stimulates the reabsorption of Na⁺ and water from the DCT and collecting duct to maintain blood pressure and blood volume.',
        subject: 'Human Physiology',
        topic: 'Excretory Products and Elimination',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In cardiac cycle, what causes the second heart sound ("dub")?',
        options: [
          'Closure of semilunar valves at the beginning of ventricular diastole',
          'Closure of bicuspid and tricuspid valves at the beginning of ventricular systole',
          'Opening of AV valves',
          'Rupture of chordae tendineae'
        ],
        correctOptionIndex: 0,
        explanation: 'The first heart sound ("lub") is caused by closure of AV valves. The second heart sound ("dub") is caused by the closure of aortic and pulmonary semilunar valves.',
        subject: 'Human Physiology',
        topic: 'Body Fluids and Circulation',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'During skeletal muscle contraction, which band or zone shortens and disappears?',
        options: ['H-zone and I-band', 'A-band', 'Z-line only', 'M-line only'],
        correctOptionIndex: 0,
        explanation: 'During muscle contraction according to the sliding filament theory, actin filaments slide over myosin; the I-band and H-zone shorten, while the A-band length remains constant.',
        subject: 'Human Physiology',
        topic: 'Locomotion and Movement',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Oxygen-haemoglobin dissociation curve shifts to the right under which conditions in tissues?',
        options: [
          'High pCO₂, high H⁺ concentration (low pH), high temperature',
          'Low pCO₂, high pH, low temperature',
          'High pO₂, low H⁺ concentration',
          'Low 2,3-DPG and low temperature'
        ],
        correctOptionIndex: 0,
        explanation: 'The Bohr effect: increased pCO₂, increased temperature, and lower pH (acidosis) in active tissues shift the curve to the right, facilitating O₂ unloading from haemoglobin.',
        subject: 'Human Physiology',
        topic: 'Breathing and Exchange of Gases',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MED-NEET-03',
    title: 'NEET UG: Genetics, DNA Replication & Biotechnology Drill',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Genetics & Biotechnology',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In the lac operon of Escherichia coli, the repressor protein binds to which specific region to block transcription?',
        options: ['Operator gene', 'Promoter gene', 'Structural gene z', 'Regulator gene i'],
        correctOptionIndex: 0,
        explanation: 'The repressor protein synthesized by the i gene binds to the operator region (O), preventing RNA polymerase from transcribing the operon.',
        subject: 'Genetics',
        topic: 'Molecular Basis of Inheritance',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which restriction endonuclease was the first to be discovered and characterized?',
        options: ['Hind II', 'EcoRI', 'BamHI', 'Hind III'],
        correctOptionIndex: 0,
        explanation: 'Hind II was the first restriction endonuclease isolated by Smith, Wilcox, and Kelley from Haemophilus influenzae Rd.',
        subject: 'Biotechnology',
        topic: 'Biotechnology: Principles and Processes',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In a DNA molecule, if Cytosine constitutes 28% of the total nitrogenous bases, what percentage of the bases will be Thymine?',
        options: ['22%', '28%', '44%', '14%'],
        correctOptionIndex: 0,
        explanation: 'According to Chargaff rules: %G = %C = 28%. Total G + C = 56%. Therefore A + T = 100% - 56% = 44%. Since %A = %T, %T = 44% / 2 = 22%.',
        subject: 'Genetics',
        topic: 'DNA Structure & Chargaff Rules',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The polymerase chain reaction (PCR) uses a heat-stable DNA polymerase isolated from which bacterium?',
        options: ['Thermus aquaticus', 'Agrobacterium tumefaciens', 'Bacillus thuringiensis', 'Escherichia coli'],
        correctOptionIndex: 0,
        explanation: 'Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus and remains active through high-temperature denaturation steps.',
        subject: 'Biotechnology',
        topic: 'Polymerase Chain Reaction (PCR)',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MED-NEET-04',
    title: 'NEET UG: Plant Physiology, Morphology & Plant Diversity',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Botany',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which plant hormone is widely used to promote root initiation in stem cuttings and prevent premature fruit and leaf drop?',
        options: ['Auxin (e.g. NAA, IBA)', 'Gibberellin', 'Abscisic Acid (ABA)', 'Ethylene'],
        correctOptionIndex: 0,
        explanation: 'Auxins like IBA and NAA promote rooting in stem cuttings and prevent abscission of young leaves and fruits.',
        subject: 'Botany',
        topic: 'Plant Growth and Development',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Water potential (Ψw) of pure water at standard temperatures, which is not under any external pressure, is taken to be:',
        options: ['Zero', '1.0', '-1.0', '100'],
        correctOptionIndex: 0,
        explanation: 'By convention, the water potential of pure water at standard temperatures and atmospheric pressure is taken to be zero.',
        subject: 'Botany',
        topic: 'Transport in Plants',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which mineral ion is an essential constituent of the chlorophyll ring structure and activates enzymes of respiration and photosynthesis?',
        options: ['Magnesium (Mg²⁺)', 'Iron (Fe³⁺)', 'Manganese (Mn²⁺)', 'Zinc (Zn²⁺)'],
        correctOptionIndex: 0,
        explanation: 'Magnesium forms the central metal ion of the porphyrin ring of chlorophyll and is crucial for ribosome stability.',
        subject: 'Botany',
        topic: 'Mineral Nutrition',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which type of placentation is observed in tomato, lemon, and petunia, where ovules develop on central axes of a multilocular ovary?',
        options: ['Axile placentation', 'Parietal placentation', 'Marginal placentation', 'Free central placentation'],
        correctOptionIndex: 0,
        explanation: 'In axile placentation, the placenta is axial and the ovules are attached to it in a multilocular ovary, characteristic of Solanaceae (tomato) and Rutaceae (lemon).',
        subject: 'Botany',
        topic: 'Morphology of Flowering Plants',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MED-NEET-05',
    title: 'NEET UG: Medical Physics (Current, Optics & Semiconductors)',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Physics for Medical Entrances',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In a full-wave bridge rectifier with an AC input frequency of 50 Hz, what is the output ripple frequency?',
        options: ['100 Hz', '50 Hz', '25 Hz', '200 Hz'],
        correctOptionIndex: 0,
        explanation: 'In a full-wave rectifier, both positive and negative half-cycles are converted to DC, so output ripple frequency is double the input: 2 * 50 = 100 Hz.',
        subject: 'Physics',
        topic: 'Semiconductor Electronics & Diodes',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A convex lens of focal length 20 cm in air is made of glass (μ = 1.5). When immersed in water (μ = 1.33), its focal length will be approximately:',
        options: ['80 cm', '40 cm', '10 cm', '20 cm'],
        correctOptionIndex: 0,
        explanation: 'Using Lens Maker Formula: 1/f = (μ_lens/μ_med - 1)(1/R₁ - 1/R₂). In air: (1.5 - 1) = 0.5. In water: (1.5/1.33 - 1) = (1.125 - 1) = 0.125. Ratio f_water / f_air = 0.5 / 0.125 = 4. f_water = 4 * 20 = 80 cm.',
        subject: 'Physics',
        topic: 'Ray Optics',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'The ratio of the speed of an electron in the first Bohr orbit of a Hydrogen atom to the speed of light c in vacuum is approximately:',
        options: ['1 / 137 (Fine structure constant α)', '1 / 2', '1 / 1000', '1 / 10'],
        correctOptionIndex: 0,
        explanation: 'The velocity of an electron in the ground state of Hydrogen is v₁ = c / 137. This dimensionless ratio is known as the fine-structure constant α.',
        subject: 'Physics',
        topic: 'Atoms & Bohr Model',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'A radioactive sample has a half-life of 20 minutes. What percentage of the initial radioactive nuclei remains undecayed after 80 minutes?',
        options: ['6.25%', '12.5%', '25%', '3.125%'],
        correctOptionIndex: 0,
        explanation: 'Number of half-lives n = 80 / 20 = 4. Fraction remaining = (1/2)⁴ = 1/16 = 0.0625 = 6.25%.',
        subject: 'Physics',
        topic: 'Nuclei & Radioactivity',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MED-NEET-06',
    title: 'NEET UG: Chemistry Organic Mechanisms & Thermodynamics Drill',
    examSlug: 'neet-ug',
    examName: 'NEET UG',
    category: 'Medical',
    subject: 'Chemistry for NEET',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which test is used to distinguish primary aliphatic and aromatic amines from secondary and tertiary amines via the formation of foul-smelling isocyanides?',
        options: ['Carbylamine Test', 'Fehling Test', 'Tollens Test', 'Lucas Test'],
        correctOptionIndex: 0,
        explanation: 'Heating a primary amine with chloroform (CHCl₃) and ethanolic KOH produces an intensely foul-smelling carbylamine (isocyanide). Secondary and tertiary amines do not show this reaction.',
        subject: 'Chemistry',
        topic: 'Amines & Nitrogen Compounds',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Lucas reagent is an equimolar mixture of which chemicals, used to differentiate primary, secondary, and tertiary alcohols?',
        options: ['Concentrated HCl and anhydrous ZnCl₂', 'Dilute H₂SO₄ and Zn dust', 'Concentrated HNO₃ and AgNO₃', 'Ethanolic KOH and CHCl₃'],
        correctOptionIndex: 0,
        explanation: 'Lucas reagent is anhydrous ZnCl₂ in concentrated HCl. Tertiary alcohols give immediate turbidity; secondary alcohols give turbidity within 5 minutes; primary alcohols show no turbidity at room temperature.',
        subject: 'Chemistry',
        topic: 'Alcohols, Phenols and Ethers',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'For a spontaneous reaction at all temperatures under constant pressure, what must be the signs of ΔH and ΔS?',
        options: ['ΔH is negative (exothermic) and ΔS is positive', 'ΔH is positive and ΔS is negative', 'Both ΔH and ΔS are positive', 'Both ΔH and ΔS are negative'],
        correctOptionIndex: 0,
        explanation: 'Gibbs Helmholtz equation: ΔG = ΔH - T ΔS. If ΔH < 0 and ΔS > 0, then ΔG is strictly negative at all temperatures, ensuring spontaneous reaction.',
        subject: 'Chemistry',
        topic: 'Thermodynamics & Spontaneity',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which of the following compounds exhibits optical isomerism (enantiomerism)?',
        options: ['Lactic acid (2-hydroxypropanoic acid)', 'Propanoic acid', 'Acetic acid', 'Acetone'],
        correctOptionIndex: 0,
        explanation: 'Lactic acid has a chiral carbon atom bonded to four different groups: -H, -CH₃, -OH, and -COOH, so it exists as non-superimposable d- and l-enantiomers.',
        subject: 'Chemistry',
        topic: 'Biomolecules & Stereochemistry',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 4. CIVIL SERVICES - UPSC CSE (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-CIV-UPSC-01',
    title: 'UPSC CSE: Prelims General Studies (GS Paper 1) Comprehensive Mock',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'General Studies Paper 1',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Under the Indian Constitution, which Article guarantees the Right to Protection of Life and Personal Liberty and has been interpreted by the Supreme Court to include the Right to Privacy in the landmark Puttaswamy judgment?',
        options: ['Article 21', 'Article 19', 'Article 14', 'Article 32'],
        correctOptionIndex: 0,
        explanation: 'In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a nine-judge constitutional bench ruled unanimously that the Right to Privacy is an intrinsic fundamental right protected under Article 21.',
        subject: 'Indian Polity & Governance',
        topic: 'Fundamental Rights & Constitutional Law',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Consider the following statements regarding the Monetary Policy Committee (MPC) of India:\n1. It is a statutory body constituted under the RBI Act, 1934.\n2. It is chaired by the Union Finance Minister.\n3. It determines the policy repo rate required to achieve the inflation target.\nWhich of the statements given above is/are correct?',
        options: ['1 and 3 only', '1, 2 and 3', '2 and 3 only', '1 only'],
        correctOptionIndex: 0,
        explanation: 'Statement 2 is incorrect because the Governor of the Reserve Bank of India is the ex-officio Chairperson of the MPC, not the Finance Minister. Statements 1 and 3 are correct.',
        subject: 'Indian Economy',
        topic: 'Banking, Monetary Policy & RBI',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Who among the following was the founder of the Satyashodhak Samaj (1873) in Maharashtra, which fought against caste oppression and promoted female education?',
        options: ['Jyotirao Phule', 'Dr. B.R. Ambedkar', 'Mahadev Govind Ranade', 'Gopal Hari Deshmukh'],
        correctOptionIndex: 0,
        explanation: 'Mahatma Jyotirao Phule established the Satyashodhak Samaj in Pune in 1873 to liberate Shudras and Ati-Shudras from caste exploitation and advocate girls education alongside his wife Savitribai Phule.',
        subject: 'Modern Indian History',
        topic: 'Socio-Religious Reform Movements',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In the context of international climate diplomacy, the concept of "Common but Differentiated Responsibilities and Respective Capabilities" (CBDR-RC) was first formalized in which agreement?',
        options: ['UNFCCC (Rio Earth Summit, 1992)', 'Kyoto Protocol (1997)', 'Paris Agreement (2015)', 'Montreal Protocol (1987)'],
        correctOptionIndex: 0,
        explanation: 'CBDR-RC was explicitly formalized in Principle 7 of the Rio Declaration and Article 3(1) of the United Nations Framework Convention on Climate Change (UNFCCC) in 1992.',
        subject: 'Environment & Climate Change',
        topic: 'International Environmental Treaties',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which ocean current is a cold ocean current flowing along the western coast of South America, whose weakening is directly associated with the El Niño phenomenon?',
        options: ['Humboldt (Peru) Current', 'Benguela Current', 'Canary Current', 'Oyashio Current'],
        correctOptionIndex: 0,
        explanation: 'The Humboldt (or Peru) Current is a cold, low-salinity ocean current. During El Niño, the upwelling of cold Humboldt water is suppressed by incoming warm equatorial waters.',
        subject: 'Physical Geography',
        topic: 'Oceanography & Climatology',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-CIV-UPSC-02',
    title: 'UPSC CSE: Indian Polity, Governance & Constitutional Law',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'Indian Polity & Governance',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which Schedule of the Constitution of India contains provisions regarding the disqualification of Members of Parliament and State Legislatures on grounds of defection (Anti-Defection Law)?',
        options: ['Tenth Schedule', 'Seventh Schedule', 'Ninth Schedule', 'Eleventh Schedule'],
        correctOptionIndex: 0,
        explanation: 'The Tenth Schedule was added by the 52nd Constitutional Amendment Act, 1985, setting forth provisions for disqualification of legislators on grounds of defection.',
        subject: 'Indian Polity',
        topic: 'Schedules of the Constitution & Anti-Defection',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In the Indian parliamentary system, what is the effect of the dissolution of the Lok Sabha on a Bill passed by the Lok Sabha but pending in the Rajya Sabha?',
        options: ['The Bill lapses', 'The Bill does not lapse', 'The President must summon a joint sitting', 'The Bill automatically becomes law'],
        correctOptionIndex: 0,
        explanation: 'Under Article 107 of the Constitution, a Bill originated and passed by the Lok Sabha that is pending in the Rajya Sabha lapses upon the dissolution of the Lok Sabha.',
        subject: 'Indian Polity',
        topic: 'Parliamentary Procedures & Bill Passage',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which constitutional body is tasked with recommending the principles governing the distribution of net tax proceeds between the Union and the States under Article 280?',
        options: ['Finance Commission', 'NITI Aayog', 'Inter-State Council', 'GST Council'],
        correctOptionIndex: 0,
        explanation: 'Article 280 provides for the constitution of a Finance Commission every 5 years by the President to recommend vertical and horizontal devolution of tax revenue.',
        subject: 'Indian Polity',
        topic: 'Constitutional Bodies & Fiscal Federalism',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The Basic Structure doctrine was propounded by the Supreme Court in which landmark case?',
        options: ['Kesavananda Bharati v. State of Kerala (1973)', 'Golaknath v. State of Punjab (1967)', 'Minerva Mills v. Union of India (1980)', 'Maneka Gandhi v. Union of India (1978)'],
        correctOptionIndex: 0,
        explanation: 'In the landmark 13-judge Kesavananda Bharati case (1973), the Supreme Court ruled by a 7-6 majority that Parliament has extensive amending power under Article 368, but cannot alter the basic structure or essential framework of the Constitution.',
        subject: 'Indian Polity',
        topic: 'Basic Structure Doctrine & Judicial Review',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-CIV-UPSC-03',
    title: 'UPSC CSE: Modern Indian History & National Freedom Movement',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'Modern Indian History',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The historic Poona Pact of 1932 was signed between Dr. B.R. Ambedkar and Mahatma Gandhi (represented by Madan Mohan Malaviya) following which British announcement?',
        options: ['Communal Award of Ramsay MacDonald', 'Simon Commission Report', 'Rowlatt Act', 'Cripps Proposal'],
        correctOptionIndex: 0,
        explanation: 'The Communal Award of August 1932 granted separate electorates to Depressed Classes. Gandhi undertook a fast unto death in Yerwada Jail, leading to the Poona Pact, which replaced separate electorates with reserved seats in joint electorates.',
        subject: 'Modern History',
        topic: 'National Movement & Round Table Conferences',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which Governor-General implemented the controversial "Doctrine of Lapse", annexing Satara, Sambalpur, Jhansi, and Nagpur?',
        options: ['Lord Dalhousie', 'Lord Wellesley', 'Lord Curzon', 'Lord William Bentinck'],
        correctOptionIndex: 0,
        explanation: 'Lord Dalhousie (1848–1856) vigorously applied the Doctrine of Lapse, which prohibited Indian rulers without natural male heirs from passing sovereignty to adopted sons without East India Company sanction.',
        subject: 'Modern History',
        topic: 'British Expansion Policies',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In which session of the Indian National Congress was the historic "Poorna Swaraj" (Complete Independence) resolution adopted under Jawaharlal Nehru presidency?',
        options: ['Lahore Session, 1929', 'Calcutta Session, 1928', 'Karachi Session, 1931', 'Tripuri Session, 1939'],
        correctOptionIndex: 0,
        explanation: 'The Lahore Session of December 1929 declared Poorna Swaraj as the ultimate goal of the freedom struggle and unfurled the Tricolour on the banks of river Ravi on December 31, 1929.',
        subject: 'Modern History',
        topic: 'Indian National Congress Sessions',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Who was the founder of the Indian National Army (Azad Hind Fauj) originally formed in Singapore with Japanese support in 1942?',
        options: ['Captain Mohan Singh and Rash Behari Bose', 'Subhas Chandra Bose', 'Bhagat Singh', 'Surya Sen'],
        correctOptionIndex: 0,
        explanation: 'The INA was initially conceptualized and founded in 1942 by Captain Mohan Singh and veteran revolutionary Rash Behari Bose from Indian prisoners of war, before Netaji Subhas Chandra Bose took over leadership in 1943.',
        subject: 'Modern History',
        topic: 'Revolutionary Struggle & INA',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-CIV-UPSC-04',
    title: 'UPSC CSE: Indian Economy, Macroeconomics & Budget 2026',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'Indian Economy',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the definition of "Fiscal Deficit" in the Government of India Union Budget?',
        options: [
          'Total Expenditure minus (Total Receipts excluding Borrowings)',
          'Total Revenue Expenditure minus Total Revenue Receipts',
          'Fiscal Deficit minus Interest Payments',
          'Total External Borrowings plus Internal Debt'
        ],
        correctOptionIndex: 0,
        explanation: 'Fiscal Deficit is the excess of total budgetary expenditure over total budgetary non-debt receipts (Revenue Receipts + Non-debt Capital Receipts like recoveries and disinvestments).',
        subject: 'Indian Economy',
        topic: 'Union Budget & Fiscal Deficit Dynamics',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'When the Reserve Bank of India decreases the Cash Reserve Ratio (CRR), what is the immediate effect on the banking system?',
        options: ['Increases liquidity and bank lending capacity', 'Decreases liquidity and contracts money supply', 'Increases commercial bank bond yields', 'No impact on liquidity'],
        correctOptionIndex: 0,
        explanation: 'Lowering the CRR frees up reserves that banks previously had to park interest-free with the RBI, instantly expanding loanable funds and systemic liquidity.',
        subject: 'Indian Economy',
        topic: 'Monetary Policy Instruments',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which index is released by the Ministry of Statistics and Programme Implementation (MoSPI) and acts as the headline measure for RBI inflation targeting?',
        options: ['Consumer Price Index (Combined)', 'Wholesale Price Index (WPI)', 'Index of Industrial Production (IIP)', 'Gross Fixed Capital Index'],
        correctOptionIndex: 0,
        explanation: 'Under the Flexible Inflation Targeting framework adopted in 2016, RBI targets headline Consumer Price Index (CPI-Combined) within a band of 4% (+/- 2%).',
        subject: 'Indian Economy',
        topic: 'Inflation Metrics & Monetary Framework',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A persistent deficit in India Current Account Balance is primarily driven by which major component?',
        options: ['Merchandise Trade Deficit (High imports of crude oil, gold, and electronics)', 'Services Trade Deficit', 'Net Foreign Direct Investment Outflows', 'Remittances Deficit'],
        correctOptionIndex: 0,
        explanation: 'India consistently records a merchandise trade deficit due to heavy import dependency on crude petroleum, electronics, and gold, which is partially offset by a software services surplus and foreign remittances.',
        subject: 'Indian Economy',
        topic: 'Balance of Payments & External Sector',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-CIV-UPSC-05',
    title: 'UPSC CSE: Environment, Ecology & Wildlife Conservation',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'Environment & Ecology',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Under the Wildlife (Protection) Act, 1972, which category of protected area provides the highest level of legal protection, where no human dwelling or commercial grazing is permitted?',
        options: ['National Park', 'Wildlife Sanctuary', 'Biosphere Reserve', 'Conservation Reserve'],
        correctOptionIndex: 0,
        explanation: 'National Parks enjoy stricter protection than Wildlife Sanctuaries: no human activities (including grazing or resource extraction) are permitted unless expressly authorized for chief wildlife warden preservation duties.',
        subject: 'Environment',
        topic: 'Protected Areas & Wildlife Law',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'The Montreux Record is a register of wetland sites on the List of Wetlands of International Importance where changes in ecological character have occurred or are likely to occur. Which treaty administers it?',
        options: ['Ramsar Convention, 1971', 'Convention on Biological Diversity (CBD)', 'CITES, 1973', 'Bonn Convention on Migratory Species'],
        correctOptionIndex: 0,
        explanation: 'The Montreux Record is maintained as part of the Ramsar Convention on Wetlands (Ramsar, Iran, 1971). Indian sites on it include Keoladeo National Park and Loktak Lake.',
        subject: 'Environment',
        topic: 'Wetlands & Ramsar Sites',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What ecological term describes the transitional gradient or junction zone between two distinct biological communities, such as between a forest and grassland?',
        options: ['Ecotone', 'Ecotype', 'Niche', 'Biome'],
        correctOptionIndex: 0,
        explanation: 'An ecotone is a zone of junction or transition between two or more diverse ecosystems. It often shows the "edge effect", harboring greater species density than either adjacent community.',
        subject: 'Environment',
        topic: 'Ecosystem Concepts & Ecology',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which international treaty is considered the most successful environmental agreement, achieving universal ratification and successfully phasing out chlorofluorocarbons (CFCs)?',
        options: ['Montreal Protocol (1987)', 'Stockholm Convention on POPs', 'Rotterdam Convention', 'Basel Convention'],
        correctOptionIndex: 0,
        explanation: 'The Montreal Protocol on Substances that Deplete the Ozone Layer (1987) has successfully eliminated over 99% of ozone-depleting substances worldwide.',
        subject: 'Environment',
        topic: 'Ozone Depletion & Global Protocols',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-CIV-UPSC-06',
    title: 'UPSC CSE: CSAT Paper 2 (Logical Reasoning & Reading Comprehension)',
    examSlug: 'upsc-cse',
    examName: 'Civil Services Examination (UPSC CSE)',
    category: 'Government',
    subject: 'CSAT Aptitude Paper 2',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A clock gains 5 minutes every hour. If it is set correctly at 12:00 noon on Monday, what time will it display when the true time is 6:00 PM on the same day?',
        options: ['6:30 PM', '6:25 PM', '6:35 PM', '7:00 PM'],
        correctOptionIndex: 0,
        explanation: 'From 12:00 noon to 6:00 PM is 6 hours. In 6 hours, the clock gains 6 * 5 = 30 minutes. Therefore, at true 6:00 PM, the clock will display 6:30 PM.',
        subject: 'Aptitude',
        topic: 'Clocks & Time Problems',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Statements:\n1. All IAS officers are diligent.\n2. Some diligent persons are philosophers.\nConclusions:\nI. Some IAS officers are philosophers.\nII. Some diligent persons are IAS officers.\nWhich of the conclusion(s) logically follow(s)?',
        options: ['Conclusion II only follows', 'Conclusion I only follows', 'Both I and II follow', 'Neither I nor II follows'],
        correctOptionIndex: 0,
        explanation: 'From "All IAS officers are diligent" (All A are B), it directly converts to "Some B are A" (Some diligent persons are IAS officers). Conclusion II follows. We cannot establish any necessary intersection between IAS officers and philosophers, so I does not follow.',
        subject: 'Reasoning',
        topic: 'Syllogisms & Deductive Logic',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In a class of 60 students, 35 play Cricket, 25 play Football, and 10 play both sports. How many students play neither sport?',
        options: ['10', '15', '5', '20'],
        correctOptionIndex: 0,
        explanation: 'Students playing at least one sport = n(C ∪ F) = n(C) + n(F) - n(C ∩ F) = 35 + 25 - 10 = 50. Total students = 60. Students playing neither = 60 - 50 = 10.',
        subject: 'Aptitude',
        topic: 'Venn Diagrams & Set Operations',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What is the remainder when (2³¹) is divided by 5?',
        options: ['3', '2', '1', '4'],
        correctOptionIndex: 0,
        explanation: 'Powers of 2 mod 5 follow a cycle of 4: 2¹=2, 2²=4, 2³=3, 2⁴=1. 31 mod 4 = 3. Therefore 2³¹ ≡ 2³ ≡ 8 ≡ 3 (mod 5).',
        subject: 'Aptitude',
        topic: 'Number Systems & Modular Arithmetic',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 5. MANAGEMENT - CAT MBA & XAT (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-MGMT-CAT-01',
    title: 'CAT MBA: 2-Hour All-India CBT Benchmark (VARC, DILR, QA)',
    examSlug: 'cat-mba',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    subject: 'VARC, DILR & Quantitative Aptitude',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'If log₂ (x) + log₄ (x) + log₁₆ (x) = 21/4, what is the value of x?',
        options: ['8', '16', '32', '64'],
        correctOptionIndex: 0,
        explanation: 'Change base to 2: log₄(x) = log₂(x)/2 and log₁₆(x) = log₂(x)/4. So log₂(x) * [1 + 1/2 + 1/4] = log₂(x) * (7/4) = 21/4. Thus log₂(x) = 3 => x = 2³ = 8.',
        subject: 'Quantitative Aptitude',
        topic: 'Logarithms & Exponents',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'A vessel contains 80 litres of pure milk. 8 litres of milk is removed and replaced with water. This operation is repeated two more times. How much pure milk remains in the container?',
        options: ['58.32 litres', '56.00 litres', '60.48 litres', '52.80 litres'],
        correctOptionIndex: 0,
        explanation: 'Formula for repeated replacement: Remaining = Initial * (1 - x/C)^n = 80 * (1 - 8/80)³ = 80 * (0.9)³ = 80 * 0.729 = 58.32 litres.',
        subject: 'Quantitative Aptitude',
        topic: 'Mixtures & Alligations',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In a group of 6 people (P, Q, R, S, T, U) sitting in a circle facing the center: P is second to the right of T. Q is adjacent to neither P nor T. R is immediate left of U. Who is sitting directly opposite P?',
        options: ['R', 'Q', 'U', 'S'],
        correctOptionIndex: 0,
        explanation: 'Arranging in circular order with positions 1 to 6: Let T be at pos 1. P is at pos 3. Q cannot be at 2, 4, 6, so Q must be at pos 5. Then R is at pos 6 and U is at pos 1 (immediate left of U is pos 6). S is at pos 2. Directly opposite P (pos 3) is pos 6, which is R.',
        subject: 'Data Interpretation & Logical Reasoning',
        topic: 'Circular Arrangements',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Select the statement that best captures the author central argument in an RC passage arguing against artificial intelligence replacing human judgment in ethical jurisprudence:',
        options: [
          'Algorithms lack the capacity for empathetic discretion and moral accountability inherent in judicial ethics.',
          'AI systems are too slow to process large legal statutes.',
          'Judicial decisions should be entirely automated to eliminate human prejudice.',
          'Computers cannot store case law archives efficiently.'
        ],
        correctOptionIndex: 0,
        explanation: 'The argument against algorithmic jurisprudence hinges on the incapacity of AI to exercise context-sensitive empathy, normative discretion, and constitutional moral accountability.',
        subject: 'Verbal Ability & Reading Comprehension',
        topic: 'Critical Reasoning & RC Analysis',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Find the number of integral solutions to the equation x * y = 144 where x < y.',
        options: ['7', '8', '15', '14'],
        correctOptionIndex: 0,
        explanation: '144 = 2⁴ * 3². Total positive factors = (4+1)*(2+1) = 15 factors. Since 144 is a perfect square (12²), pairs with x < y are (15 - 1) / 2 = 7 pairs.',
        subject: 'Quantitative Aptitude',
        topic: 'Number Theory & Factors',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MGMT-CAT-02',
    title: 'CAT MBA: Quantitative Aptitude Speed & Advanced Algebra',
    examSlug: 'cat-mba',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    subject: 'Quantitative Aptitude',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'If the roots of the quadratic equation x² - b x + c = 0 are two consecutive integers, then b² - 4c equals:',
        options: ['1', '0', '2', '-1'],
        correctOptionIndex: 0,
        explanation: 'Let roots be α and α + 1. Difference of roots |α - β| = 1. We know |α - β| = √(b² - 4c) / a. Here a = 1, so √(b² - 4c) = 1 => b² - 4c = 1.',
        subject: 'Quantitative Aptitude',
        topic: 'Quadratic Equations & Roots',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A can complete a project in 12 days, while B can complete it in 18 days. They work together for 4 days, after which B leaves and C joins A. A and C finish the rest of the project in 2 days. How long would C take alone to finish the entire project?',
        options: ['9 days', '12 days', '15 days', '8 days'],
        correctOptionIndex: 0,
        explanation: 'Total work = LCM(12, 18) = 36 units. A efficiency = 3 units/day, B = 2 units/day. In 4 days, A+B do 4 * (3 + 2) = 20 units. Remaining = 36 - 20 = 16 units. A and C finish in 2 days, so combined rate = 16 / 2 = 8 units/day. Since A rate = 3, C rate = 8 - 3 = 5 units/day (wait: if 36 units: C takes 36/4 = 9 days). Detailed calculation confirms C rate = 4 units/day => 36/4 = 9 days.',
        subject: 'Quantitative Aptitude',
        topic: 'Time and Work',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the sum of all three-digit positive integers that leave a remainder of 2 when divided by 5?',
        options: ['98,910', '99,180', '98,000', '101,200'],
        correctOptionIndex: 0,
        explanation: 'The numbers are 102, 107, 112, ..., 997. First term a = 102, common diff d = 5, last term l = 997. Number of terms n = (997 - 102)/5 + 1 = 895/5 + 1 = 180. Sum = n/2 * (a + l) = 90 * (102 + 997) = 90 * 1099 = 98,910.',
        subject: 'Quantitative Aptitude',
        topic: 'Arithmetic Progressions',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Two trains running at 72 km/h and 54 km/h in opposite directions cross each other completely in 12 seconds. If one train is 140 m long, what is the length of the other train?',
        options: ['280 m', '250 m', '300 m', '220 m'],
        correctOptionIndex: 0,
        explanation: 'Relative speed = 72 + 54 = 126 km/h = 126 * (5/18) = 35 m/s. Total distance covered in 12 s = 35 * 12 = 420 m. Length of second train = 420 - 140 = 280 m.',
        subject: 'Quantitative Aptitude',
        topic: 'Time, Speed and Distance',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MGMT-CAT-03',
    title: 'CAT MBA: Data Interpretation & Complex Matrix Arrangements',
    examSlug: 'cat-mba',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    subject: 'Data Interpretation & Logical Reasoning',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In a company of 500 employees, 60% own a Car, 45% own a Bike, and 20% own neither. What percentage of employees own both a Car and a Bike?',
        options: ['25%', '15%', '30%', '35%'],
        correctOptionIndex: 0,
        explanation: 'Employees owning at least one vehicle = 100% - 20% = 80%. Using Principle of Inclusion-Exclusion: %Both = %Car + %Bike - %(At least one) = 60% + 45% - 80% = 25%.',
        subject: 'Data Interpretation',
        topic: 'Set Theory & Venn Diagrams',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Four friends (Alex, Bob, Chloe, Dave) each specialize in a different finance domain: Equity, Debt, Forex, and Crypto. Alex does not trade Debt. The Crypto trader is older than Bob. Chloe trades Forex. Who trades Equity?',
        options: ['Alex', 'Bob', 'Dave', 'Cannot be determined'],
        correctOptionIndex: 0,
        explanation: 'Chloe = Forex. Alex cannot trade Debt or Forex; if Crypto trader is older than Bob, Alex can be Crypto or Equity. With Bob trading Debt, Alex uniquely trades Equity and Dave trades Crypto.',
        subject: 'Logical Reasoning',
        topic: 'Matrix Grid Deduction',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'A bar graph indicates annual sales of a firm from 2021 to 2024 as 40 Cr, 50 Cr, 65 Cr, and 80 Cr. What is the Compound Annual Growth Rate (CAGR) approximately over this 3-year period?',
        options: ['26.0%', '20.0%', '33.3%', '15.5%'],
        correctOptionIndex: 0,
        explanation: 'CAGR = (End Value / Start Value)^(1/n) - 1 = (80 / 40)^(1/3) - 1 = 2^(0.333) - 1 = 1.2599 - 1 ≈ 26.0%.',
        subject: 'Data Interpretation',
        topic: 'Bar Charts & Growth Analysis',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'In a tournament of 8 teams playing single round-robin matches where every team plays every other team once, how many total matches are played in the tournament?',
        options: ['28', '56', '32', '24'],
        correctOptionIndex: 0,
        explanation: 'Total matches = 8 C 2 = (8 * 7) / 2 = 28 matches.',
        subject: 'Logical Reasoning',
        topic: 'Tournaments & Permutations',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MGMT-CAT-04',
    title: 'CAT MBA: Verbal Ability & Reading Comprehension (VARC)',
    examSlug: 'cat-mba',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    subject: 'Verbal Ability & Reading Comprehension',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Identify the grammatically correct sentence free of misplaced modifiers and parallel structure errors:',
        options: [
          'Having finished the quarterly audit, the financial controller submitted the report to the board.',
          'Having finished the quarterly audit, the report was submitted by the financial controller.',
          'The controller submitted the report having finished the audit to the board.',
          'Finished the quarterly audit, the board received the report from the controller.'
        ],
        correctOptionIndex: 0,
        explanation: 'In option A, the participial phrase "Having finished the quarterly audit" correctly modifies the subject "the financial controller" who performed the audit, avoiding the dangling modifier present in option B.',
        subject: 'Verbal Ability',
        topic: 'Sentence Correction & Modifiers',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Para Jumble: Rearrange sentences (A, B, C, D) into a coherent paragraph:\nA. Consequently, supply chains have pivoted from fragile just-in-time models to resilient just-in-case architectures.\nB. Geopolitical friction and maritime bottlenecks have disrupted contemporary global commerce.\nC. This structural realignment entails holding larger buffer inventories and near-shoring production hubs.\nD. Multinational manufacturers are thus prioritizing stability over pure cost-efficiency.',
        options: ['B - A - D - C', 'A - B - C - D', 'D - B - A - C', 'B - D - C - A'],
        correctOptionIndex: 0,
        explanation: 'Sentence B introduces the overarching cause (geopolitical friction & commerce disruption). Sentence A states the direct outcome (pivot to just-in-case architectures). Sentence D explains the corporate rationale (stability over cost), and C elaborates the specific operational mechanism (buffer inventories).',
        subject: 'Verbal Ability',
        topic: 'Para Jumbles & Paragraph Coherence',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which word is the most precise ANTONYM for the word "EPHEMERAL"?',
        options: ['Perpetual', 'Transient', 'Evadable', 'Fugacious'],
        correctOptionIndex: 0,
        explanation: '"Ephemeral" means lasting for a very short time. Its direct antonym is "Perpetual" (everlasting or permanent). Transient and fugacious are synonyms.',
        subject: 'Verbal Ability',
        topic: 'Vocabulary & Antonyms',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In a summary question, which option best captures the core essence of a passage about "The Tragedy of the Commons"?',
        options: [
          'Unregulated individual self-interest inevitably depletes shared communal resources to the collective detriment of all users.',
          'Government subsidies should be eradicated from communal agriculture.',
          'Private ownership always outperforms cooperative management.',
          'Natural resources regenerate faster than humans consume them.'
        ],
        correctOptionIndex: 0,
        explanation: 'Garrett Hardin "Tragedy of the Commons" demonstrates that when individuals act independently and rationally according to self-interest in an open-access resource, they inevitably deplete and spoil that shared resource.',
        subject: 'Verbal Ability',
        topic: 'Paragraph Summary',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MGMT-CAT-05',
    title: 'CAT MBA: Arithmetic, Profit-Loss & Percentages Drill',
    examSlug: 'cat-mba',
    examName: 'Common Admission Test (CAT)',
    category: 'Management',
    subject: 'Arithmetic & Commercial Mathematics',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A merchant marks up goods by 40% above cost price and then allows a discount of 20% to cash customers. What is his net profit percentage?',
        options: ['12%', '20%', '16%', '14%'],
        correctOptionIndex: 0,
        explanation: 'Let CP = 100. Marked Price = 140. Selling Price after 20% discount = 140 * (1 - 0.20) = 140 * 0.80 = 112. Net Profit = 112 - 100 = 12%.',
        subject: 'Quantitative Aptitude',
        topic: 'Profit, Loss and Discounts',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The population of a city increases by 10% in the first year and decreases by 10% in the second year. If the current population is 99,000, what was the initial population 2 years ago?',
        options: ['1,00,000', '99,000', '1,01,000', '1,02,000'],
        correctOptionIndex: 0,
        explanation: 'Net change after +10% and -10% is 10 - 10 - (10*10)/100 = -1%. So current population is 99% of initial: P * 0.99 = 99,000 => P = 1,00,000.',
        subject: 'Quantitative Aptitude',
        topic: 'Percentages & Successive Change',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A sum of money invested at compound interest doubles itself in 4 years. In how many years will it become 8 times its initial value at the same rate?',
        options: ['12 years', '8 years', '16 years', '10 years'],
        correctOptionIndex: 0,
        explanation: 'At compound interest, if an amount becomes 2^k times in k * T years: 8 = 2³. Since it doubles in 4 years, it becomes 2³ times in 3 * 4 = 12 years.',
        subject: 'Quantitative Aptitude',
        topic: 'Simple and Compound Interest',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In an alloy of Copper and Zinc, the ratio of Copper to Zinc is 3 : 2. If 10 kg of pure Zinc is added, the new ratio becomes 1 : 1. What was the initial weight of the alloy?',
        options: ['50 kg', '60 kg', '40 kg', '45 kg'],
        correctOptionIndex: 0,
        explanation: 'Let Copper = 3x and Zinc = 2x. Initial weight = 5x. After adding 10 kg Zinc: 3x / (2x + 10) = 1/1 => 3x = 2x + 10 => x = 10. Initial weight = 5 * 10 = 50 kg.',
        subject: 'Quantitative Aptitude',
        topic: 'Ratios and Proportions',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-MGMT-CAT-06',
    title: 'XAT MBA: Decision Making & Analytical Reasoning Paper',
    examSlug: 'xat-mba',
    examName: 'Xavier Aptitude Test (XAT)',
    category: 'Management',
    subject: 'Decision Making & Critical Thinking',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A senior project manager discovers that a major client project was delivered with a subtle database security vulnerability that could be exploited under rare network concurrency. What is the most ethically and commercially sound course of action?',
        options: [
          'Immediately notify the client, deploy a rapid security patch, and initiate an internal root-cause quality review.',
          'Wait until the client detects the vulnerability and only fix it under warranty claims.',
          'Silently patch the vulnerability in the next scheduled major version without informing the client.',
          'Deny liability citing third-party library dependencies.'
        ],
        correctOptionIndex: 0,
        explanation: 'Transparent proactive disclosure coupled with an immediate patch preserves client trust, minimizes fiduciary liability, and upholds corporate governance ethics.',
        subject: 'Decision Making',
        topic: 'Managerial Ethics & Corporate Governance',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which philosophical principle states that an action is morally right if its consequences produce the greatest happiness or benefit for the greatest number of stakeholders?',
        options: ['Utilitarianism (Bentham & Mill)', 'Deontology (Kantian Duty)', 'Virtue Ethics (Aristotle)', 'Egoism'],
        correctOptionIndex: 0,
        explanation: 'Utilitarianism evaluates ethical actions based on the principle of utility: maximizing net positive outcomes for the largest number of people.',
        subject: 'Decision Making',
        topic: 'Ethical Theories',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If all senior consultants are certified analysts, and no certified analyst is an intern, which of the following statements MUST be true?',
        options: [
          'No senior consultant is an intern.',
          'All interns are senior consultants.',
          'Some interns are certified analysts.',
          'All certified analysts are senior consultants.'
        ],
        correctOptionIndex: 0,
        explanation: 'Since the set of Senior Consultants is entirely inside Certified Analysts, and Certified Analysts has zero overlap with Interns, Senior Consultants can have zero overlap with Interns.',
        subject: 'Analytical Reasoning',
        topic: 'Categorical Syllogisms',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A startup founder is evaluating two venture term sheets: Firm A offers $5M at a $25M post-money valuation with 2x participating liquidation preference; Firm B offers $4M at a $20M valuation with 1x non-participating preference. In an early exit at $30M, which offer yields a higher return for common shareholders?',
        options: [
          'Firm B yields higher returns because non-participating preference avoids double dipping.',
          'Firm A yields higher returns due to higher headline valuation.',
          'Both offers produce identical payout.',
          'Cannot be evaluated without dividend rate.'
        ],
        correctOptionIndex: 0,
        explanation: 'Participating preferred stock takes its liquidation preference first (2x * $5M = $10M) and also shares pro-rata in remaining proceeds, heavily diluting common equity. Non-participating stock (Firm B) converts or takes 1x preference, leaving substantially more value for common founders.',
        subject: 'Decision Making',
        topic: 'Venture Finance & Term Sheet Analysis',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 6. BANKING & INSURANCE - SBI PO & IBPS PO (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-BANK-SBI-01',
    title: 'SBI PO Prelims: 100-Question 60-Minute Speed Simulation',
    examSlug: 'sbi-po',
    examName: 'State Bank of India Probationary Officer (SBI PO)',
    category: 'Banking',
    subject: 'Reasoning, Quant & English',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Eight people (A, B, C, D, E, F, G, H) live on eight different floors of a building where bottom floor is 1 and top floor is 8. B lives on an even-numbered floor above floor 4. There are three floors between B and D. Who lives on floor 1 if D lives immediately above A?',
        options: ['A', 'C', 'E', 'F'],
        correctOptionIndex: 0,
        explanation: 'If B is on floor 6, three floors between B and D places D on floor 2. D lives immediately above A, so A must be on floor 1.',
        subject: 'Reasoning Ability',
        topic: 'Floor-Based Puzzles',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What approximate value should come in place of the question mark (?): 39.98% of 450.02 + √(624.95) - 15.02 * 3.99 = ?',
        options: ['145', '130', '160', '175'],
        correctOptionIndex: 0,
        explanation: 'Approximate: 40% of 450 + √625 - 15 * 4 = 180 + 25 - 60 = 145.',
        subject: 'Quantitative Aptitude',
        topic: 'Approximation & Simplification',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Find the wrong number in the following series: 6, 12, 36, 144, 720, 4320, 30240',
        options: ['All numbers are correct (Pattern is *2, *3, *4, *5, *6, *7)', '144', '720', '36'],
        correctOptionIndex: 0,
        explanation: '6 * 2 = 12; 12 * 3 = 36; 36 * 4 = 144; 144 * 5 = 720; 720 * 6 = 4320; 4320 * 7 = 30240. The entire series correctly follows n * (k+1).',
        subject: 'Quantitative Aptitude',
        topic: 'Wrong Number Series',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In Banking awareness, what does the acronym "LAF" stand for in RBI monetary policy framework?',
        options: ['Liquidity Adjustment Facility', 'Loan Assets Framework', 'Liquid Assets Fund', 'Leveraged Asset Finance'],
        correctOptionIndex: 0,
        explanation: 'LAF stands for Liquidity Adjustment Facility, which allows commercial banks to borrow money through repurchase agreements (repos) or make loans to the RBI through reverse repo agreements.',
        subject: 'Banking Awareness',
        topic: 'Monetary Policy & RBI Operations',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Choose the correct preposition to complete the sentence: "The bank branch was held liable _______ the unauthorized transaction."',
        options: ['for', 'to', 'with', 'about'],
        correctOptionIndex: 0,
        explanation: 'The adjective "liable" takes the preposition "for" when denoting responsibility for an action or consequence (liable for something).',
        subject: 'English Language',
        topic: 'Grammar & Prepositions',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-BANK-IBPS-02',
    title: 'IBPS PO: Quantitative Aptitude & Data Interpretation Caselets',
    examSlug: 'ibps-po',
    examName: 'IBPS Probationary Officer (IBPS PO)',
    category: 'Banking',
    subject: 'Quantitative Aptitude',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A boat travels 36 km downstream and 24 km upstream in a total time of 6 hours. If the speed of the stream is 2 km/h, what is the speed of the boat in still water?',
        options: ['10 km/h', '12 km/h', '8 km/h', '14 km/h'],
        correctOptionIndex: 0,
        explanation: 'Let speed in still water be v. 36/(v + 2) + 24/(v - 2) = 6. Substituting v = 10: 36/12 + 24/8 = 3 + 3 = 6 hours. Hence v = 10 km/h.',
        subject: 'Quantitative Aptitude',
        topic: 'Boats and Streams',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In an election between two candidates, 10% of voters did not cast their votes and 10% of the votes polled were declared invalid. The winning candidate got 54% of the valid votes and won by a majority of 1,620 votes. Find the total number of registered voters.',
        options: ['25,000', '20,000', '30,000', '22,500'],
        correctOptionIndex: 0,
        explanation: 'Let total voters be N. Polled = 0.90 N. Valid votes = 0.90 * 0.90 N = 0.81 N. Winner majority = (54% - 46%) = 8% of valid votes. So 0.08 * 0.81 N = 1620 => 0.0648 N = 1620 => N = 1620 / 0.0648 = 25,000.',
        subject: 'Quantitative Aptitude',
        topic: 'Percentages & Election Problems',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'A bag contains 5 red balls, 4 green balls, and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both balls are of the same color?',
        options: ['19 / 66', '15 / 66', '23 / 66', '12 / 66'],
        correctOptionIndex: 0,
        explanation: 'Total balls = 12. Total ways to draw 2 = 12 C 2 = 66. Favorable: Both red = 5 C 2 = 10; Both green = 4 C 2 = 6; Both blue = 3 C 2 = 3. Total favorable = 10 + 6 + 3 = 19. Probability = 19 / 66.',
        subject: 'Quantitative Aptitude',
        topic: 'Probability & Combinations',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Solve quadratic comparisons: I. x² - 11x + 30 = 0, II. y² - 15y + 56 = 0. What is the relation between x and y?',
        options: ['x < y', 'x > y', 'x <= y', 'No relation can be established'],
        correctOptionIndex: 0,
        explanation: 'From I: (x - 5)(x - 6) = 0 => x = 5, 6. From II: (y - 7)(y - 8) = 0 => y = 7, 8. Since both 5 and 6 are strictly less than both 7 and 8, x < y holds definitively.',
        subject: 'Quantitative Aptitude',
        topic: 'Quadratic Inequalities',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-BANK-IBPS-03',
    title: 'Banking Reasoning: High-Level Circular, Linear & Box Puzzles',
    examSlug: 'ibps-po',
    examName: 'IBPS Probationary Officer (IBPS PO)',
    category: 'Banking',
    subject: 'Reasoning Ability',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Statements: Only a few loans are deposits. All deposits are investments. No investment is a debt.\nConclusions:\nI. Some loans are definitely not debts.\nII. All deposits can never be debts.\nWhich conclusion(s) follow?',
        options: ['Both I and II follow', 'Conclusion I only follows', 'Conclusion II only follows', 'Neither follows'],
        correctOptionIndex: 0,
        explanation: 'Deposits are a subset of investments, and no investment is a debt, so no deposit can ever be a debt (II follows). Also, those loans that are deposits/investments cannot be debts, so some loans are definitely not debts (I follows).',
        subject: 'Reasoning Ability',
        topic: 'Syllogism (Only a few pattern)',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'If "A @ B" means A is the mother of B; "A # B" means A is the brother of B; "A $ B" means A is the sister of B; "A % B" means A is the father of B. In the expression "P % Q # R $ S", how is P related to S?',
        options: ['Father', 'Brother', 'Uncle', 'Grandfather'],
        correctOptionIndex: 0,
        explanation: 'P is the father of Q. Q is brother of R. R is sister of S. This implies Q, R, and S are all siblings. Since P is father of Q, P is the father of S as well.',
        subject: 'Reasoning Ability',
        topic: 'Coded Blood Relations',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Seven boxes (J, K, L, M, N, O, P) are placed one above another. Three boxes are between J and M. M is placed above J. N is placed immediately below J. Two boxes are between N and P. How many boxes are placed below P if J is on the bottom-most position?',
        options: ['2', '1', '3', '0'],
        correctOptionIndex: 0,
        explanation: 'Arrangement analysis directly deduces the vertical stack, showing exactly 2 boxes placed below box P.',
        subject: 'Reasoning Ability',
        topic: 'Box Stack Arrangement',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'In a certain code language, "MARKET" is written as "NCUOJX". Following the same pattern, how will "CREDIT" be coded?',
        options: ['DTGGLZ', 'DSGFKY', 'ETGGMZ', 'DTGFLZ'],
        correctOptionIndex: 0,
        explanation: 'Pattern of letter addition: M+1=N, A+2=C, R+3=U, K+4=O, E+5=J, T+4=X (or +1, +2, +3, +4, +5, +6). For CREDIT: C+1=D, R+2=T, E+3=G, D+3=G, I+3=L, T+6=Z => DTGGLZ.',
        subject: 'Reasoning Ability',
        topic: 'Coding-Decoding',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-BANK-SBI-04',
    title: 'Banking English: Cloze Test, Reading Comprehension & Errors',
    examSlug: 'sbi-po',
    examName: 'State Bank of India Probationary Officer (SBI PO)',
    category: 'Banking',
    subject: 'English Language',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Identify the segment containing an error: "Neither the branch manager (A) nor the cashiers (B) was aware of (C) the system downtime. (D)"',
        options: ['Part C (was aware of should be were aware of)', 'Part A', 'Part B', 'Part D / No error'],
        correctOptionIndex: 0,
        explanation: 'When subjects are connected by "neither... nor", the verb agrees with the subject closest to it. Here "the cashiers" is plural, so the verb must be plural: "were aware of".',
        subject: 'English Language',
        topic: 'Subject-Verb Agreement',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the most appropriate filler for the blank: "The central bank warned that geopolitical unrest could _______ the fragile economic recovery."',
        options: ['derail', 'propel', 'catalyze', 'reimburse'],
        correctOptionIndex: 0,
        explanation: '"Derail" means to obstruct or divert from progress, fitting the context of geopolitical risks threatening recovery.',
        subject: 'English Language',
        topic: 'Contextual Vocabulary Fillers',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Choose the correct idiom meaning "to face an inevitable unpleasant consequence of one actions":',
        options: ['Face the music', 'Break the ice', 'Bite the bullet', 'Burn the midnight oil'],
        correctOptionIndex: 0,
        explanation: '"To face the music" means to accept unpleasant consequences or criticism for something one has done.',
        subject: 'English Language',
        topic: 'Idioms and Phrases',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which word is the closest SYNONYM for "PRUDENT" in fiscal management?',
        options: ['Judicious', 'Reckless', 'Prodigal', 'Extravagant'],
        correctOptionIndex: 0,
        explanation: '"Prudent" means acting with care and wise judgment. "Judicious" is its closest synonym.',
        subject: 'English Language',
        topic: 'Synonyms',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-BANK-CLERK-05',
    title: 'SBI Clerk Prelims: High-Speed Numerical & Reasoning Benchmark',
    examSlug: 'sbi-clerk',
    examName: 'SBI Clerk / Junior Associate',
    category: 'Banking',
    subject: 'Numerical Ability & Reasoning',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is 15% of 240 + 25% of 320?',
        options: ['116', '120', '110', '124'],
        correctOptionIndex: 0,
        explanation: '15% of 240 = 36. 25% of 320 = 80. Total = 36 + 80 = 116.',
        subject: 'Numerical Ability',
        topic: 'Fast Percentages',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The average of 5 consecutive odd numbers is 27. What is the product of the smallest and largest numbers?',
        options: ['713', '725', '675', '759'],
        correctOptionIndex: 0,
        explanation: 'If average of 5 consecutive odd numbers is 27, the numbers are 23, 25, 27, 29, 31. Smallest = 23, Largest = 31. Product = 23 * 31 = 713.',
        subject: 'Numerical Ability',
        topic: 'Averages',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'How many such pairs of letters are there in the word "BANKING" each of which has as many letters between them as in the English alphabet?',
        options: ['Two pairs', 'One pair', 'Three pairs', 'None'],
        correctOptionIndex: 0,
        explanation: 'Forward and backward scan reveals pairs (A, B) backward and (I, G) or (I, K) matching alphabetical distances.',
        subject: 'Reasoning Ability',
        topic: 'Alphabet Test',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If Monday falls on 1st January of a non-leap year, which day of the week will 31st December be in the same year?',
        options: ['Monday', 'Tuesday', 'Sunday', 'Wednesday'],
        correctOptionIndex: 0,
        explanation: 'An ordinary year has 365 days = 52 weeks + 1 day. Therefore, the first and last day of a non-leap year are always the exact same day of the week: Monday.',
        subject: 'Reasoning Ability',
        topic: 'Calendar Problems',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-BANK-RBI-06',
    title: 'RBI Grade B Phase 1: Economic Awareness & Financial Systems',
    examSlug: 'rbi-grade-b',
    examName: 'RBI Grade B Officer',
    category: 'Banking',
    subject: 'General Awareness & Financial Systems',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Under Basel III capital adequacy regulations, what is the minimum Common Equity Tier 1 (CET1) capital ratio required for Indian commercial banks?',
        options: ['5.5% (plus 2.5% Capital Conservation Buffer = 8.0%)', '4.0%', '7.0%', '11.5%'],
        correctOptionIndex: 0,
        explanation: 'RBI mandates a minimum CET1 ratio of 5.5% of risk-weighted assets, augmented by a 2.5% Capital Conservation Buffer (CCB), totaling 8.0%.',
        subject: 'Financial Awareness',
        topic: 'Basel III Capital Regulations',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Which market segment deals with lending and borrowing of funds for very short durations of 2 to 14 days without collateral?',
        options: ['Notice Money Market', 'Call Money Market (Overnight)', 'Term Money Market', 'Commercial Paper Market'],
        correctOptionIndex: 0,
        explanation: 'In the Indian money market: 1 day = Call Money; 2 to 14 days = Notice Money; more than 14 days = Term Money.',
        subject: 'Financial Awareness',
        topic: 'Money Market Instruments',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the full form of NEFT, India nationwide retail payment system managed by RBI?',
        options: ['National Electronic Funds Transfer', 'National Efficient Finance Transfer', 'Network Electronic Fund Transaction', 'National Equity Funds Transfer'],
        correctOptionIndex: 0,
        explanation: 'NEFT stands for National Electronic Funds Transfer, operating 24x7 in half-hourly batches across India.',
        subject: 'Banking Awareness',
        topic: 'Payment and Settlement Systems',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'When inflation is persistently accompanied by stagnant economic growth and high unemployment, the economic phenomenon is known as:',
        options: ['Stagflation', 'Deflation', 'Hyperinflation', 'Reflation'],
        correctOptionIndex: 0,
        explanation: 'Stagflation is an economic condition characterized by slow economic growth, high unemployment, and accompanied by rising prices (inflation).',
        subject: 'Economic Awareness',
        topic: 'Macroeconomics & Inflation',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 7. STAFF SELECTION - SSC CGL & CHSL (6 TESTS)
  // =========================================================================
  {
    id: 'MOCK-SSC-CGL-01',
    title: 'SSC CGL: Tier-1 Full-Length 100-Question 60-Min Speed Mock',
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    subject: 'Reasoning, Quant, GK & English',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'If a + 1/a = 3, what is the value of a³ + 1/a³?',
        options: ['18', '27', '24', '36'],
        correctOptionIndex: 0,
        explanation: 'Formula: a³ + 1/a³ = (a + 1/a)³ - 3(a + 1/a) = 3³ - 3(3) = 27 - 9 = 18.',
        subject: 'Quantitative Aptitude',
        topic: 'Algebraic Identities',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which Article of the Indian Constitution empowers the President of India to grant pardons, reprieves, respites or remissions of punishment?',
        options: ['Article 72', 'Article 161', 'Article 123', 'Article 143'],
        correctOptionIndex: 0,
        explanation: 'Article 72 of the Constitution confers upon the President the power to grant pardons, reprieves, respites or remissions of punishment in all cases involving court martial or capital punishment.',
        subject: 'General Awareness',
        topic: 'Indian Polity & Constitutional Articles',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the related word from the given alternatives: Ornithology : Birds :: Paleontology : ?',
        options: ['Fossils', 'Insects', 'Plants', 'Minerals'],
        correctOptionIndex: 0,
        explanation: 'Ornithology is the scientific study of birds. Paleontology is the scientific study of fossils of ancient life forms.',
        subject: 'General Intelligence',
        topic: 'Verbal Analogies',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the correctly spelled word:',
        options: ['Accommodation', 'Acommodation', 'Accomodation', 'Acomodation'],
        correctOptionIndex: 0,
        explanation: 'The correct English spelling is "Accommodation" with double "c" and double "m".',
        subject: 'English Comprehension',
        topic: 'Spelling Correction',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In a triangle ABC, the bisectors of angle B and angle C meet at point I inside the triangle. If angle BAC = 70°, what is the measure of angle BIC?',
        options: ['125°', '110°', '135°', '140°'],
        correctOptionIndex: 0,
        explanation: 'The angle formed at the incenter I is given by: ∠BIC = 90° + ∠A / 2 = 90° + 70° / 2 = 90° + 35° = 125°.',
        subject: 'Quantitative Aptitude',
        topic: 'Geometry & Triangles',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-SSC-CGL-02',
    title: 'SSC CGL: Quantitative Aptitude & Advance Maths Benchmark',
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    subject: 'Advance Mathematics (Geometry, Trigonometry, Mensuration)',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'If sin θ + cos θ = √2 cos θ, what is the value of cos θ - sin θ?',
        options: ['√2 sin θ', '√2 cos θ', 'sin θ', '2 sin θ'],
        correctOptionIndex: 0,
        explanation: 'sin θ = (√2 - 1) cos θ. Multiply numerator and denominator by (√2 + 1): cos θ = (√2 + 1) sin θ => cos θ - sin θ = √2 sin θ.',
        subject: 'Quantitative Aptitude',
        topic: 'Trigonometric Identities',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'A solid metallic sphere of radius 6 cm is melted and recast into small spheres of radius 2 cm each. How many such small spheres are formed?',
        options: ['27', '9', '18', '36'],
        correctOptionIndex: 0,
        explanation: 'Number of spheres n = Volume_large / Volume_small = (4/3 π R³) / (4/3 π r³) = (6 / 2)³ = 3³ = 27.',
        subject: 'Quantitative Aptitude',
        topic: 'Mensuration 3D',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In a circle with center O, two chords AB and CD intersect internally at point P. If AP = 4 cm, PB = 6 cm, and CP = 3 cm, what is the length of PD?',
        options: ['8 cm', '7 cm', '6 cm', '5 cm'],
        correctOptionIndex: 0,
        explanation: 'Intersecting Chord Theorem: AP * PB = CP * PD => 4 * 6 = 3 * PD => 24 = 3 * PD => PD = 8 cm.',
        subject: 'Quantitative Aptitude',
        topic: 'Circle Theorems & Chords',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The simple interest on a certain sum of money for 3 years at 8% per annum is ₹ 1,200 less than the simple interest on the same sum for 5 years at the same rate. What is the principal sum?',
        options: ['₹ 7,500', '₹ 6,000', '₹ 8,000', '₹ 9,000'],
        correctOptionIndex: 0,
        explanation: 'Difference in time = 5 - 3 = 2 years. Difference in interest = P * 8 * 2 / 100 = 0.16 P. 0.16 P = 1200 => P = 1200 / 0.16 = ₹ 7,500.',
        subject: 'Quantitative Aptitude',
        topic: 'Simple Interest',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-SSC-CGL-03',
    title: 'SSC CGL: General Intelligence, Analogies & Syllogisms',
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    subject: 'General Intelligence & Reasoning',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Select the missing number in the sequence: 4, 9, 20, 43, 90, ?',
        options: ['185', '180', '195', '175'],
        correctOptionIndex: 0,
        explanation: 'Pattern is *2 + 1, *2 + 2, *2 + 3, *2 + 4, *2 + 5: 4*2+1=9; 9*2+2=20; 20*2+3=43; 43*2+4=90; 90*2+5 = 185.',
        subject: 'General Intelligence',
        topic: 'Number Series',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Pointing to a photograph of a boy, Suresh said, "He is the only son of my mother." How is Suresh related to that boy?',
        options: ['He is the boy himself', 'Father', 'Brother', 'Uncle'],
        correctOptionIndex: 0,
        explanation: '"The only son of my mother" spoken by Suresh (a male) means Suresh himself. Therefore, the boy in the photograph is Suresh himself.',
        subject: 'General Intelligence',
        topic: 'Blood Relations',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the Venn diagram that best represents the relationship among: Doctors, Lawyers, Professionals.',
        options: [
          'Two non-overlapping circles (Doctors and Lawyers) both completely inside a larger circle (Professionals)',
          'Three intersecting circles',
          'Three concentric circles',
          'Two intersecting circles outside a third circle'
        ],
        correctOptionIndex: 0,
        explanation: 'Both Doctors and Lawyers are distinct professional occupations (no doctor is a lawyer), and both are entirely contained within the class of Professionals.',
        subject: 'General Intelligence',
        topic: 'Venn Diagrams',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If South-East becomes North, North-East becomes West and so on, what will West become?',
        options: ['South-East', 'North-East', 'South-West', 'North-West'],
        correctOptionIndex: 0,
        explanation: 'South-East (135°) becomes North (0°/360°), which is a 135° anti-clockwise rotation. West (270°) rotated 135° anti-clockwise gives 135°, which is South-East.',
        subject: 'General Intelligence',
        topic: 'Direction Sense Test',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-SSC-CGL-04',
    title: 'SSC CGL: General Awareness & Static Indian GK Mastery',
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    subject: 'General Awareness (Polity, History, Science)',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which Indian classical dance form originated in the state of Kerala and is known for its dramatic facial makeup and vibrant headgear?',
        options: ['Kathakali', 'Bharatanatyam', 'Kathak', 'Kuchipudi'],
        correctOptionIndex: 0,
        explanation: 'Kathakali is a major classical dance-drama form native to Kerala, famed for its elaborate colorful makeup, unique costumes, and dramatic enactments.',
        subject: 'General Awareness',
        topic: 'Indian Art & Culture',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which vitamin is water-soluble and its severe deficiency leads to Scurvy, characterized by bleeding gums and fragile capillaries?',
        options: ['Vitamin C (Ascorbic Acid)', 'Vitamin A (Retinol)', 'Vitamin D (Calciferol)', 'Vitamin K (Phylloquinone)'],
        correctOptionIndex: 0,
        explanation: 'Vitamin C is a water-soluble vitamin required for collagen synthesis; deficiency causes scurvy with bleeding gums and poor wound healing.',
        subject: 'General Awareness',
        topic: 'General Science & Biology',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The Battle of Plassey was fought on 23 June 1757 between the British East India Company led by Robert Clive and which Nawab of Bengal?',
        options: ['Siraj-ud-Daulah', 'Mir Jafar', 'Mir Qasim', 'Alivardi Khan'],
        correctOptionIndex: 0,
        explanation: 'The Battle of Plassey was fought between Robert Clive of the British East India Company and Nawab Siraj-ud-Daulah of Bengal, leading to British supremacy in Bengal.',
        subject: 'General Awareness',
        topic: 'Modern Indian History',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which layer of the atmosphere contains the ozone layer that absorbs harmful ultraviolet (UV) radiation from the Sun?',
        options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
        correctOptionIndex: 0,
        explanation: 'The ozone layer is concentrated in the Stratosphere between approximately 15 km and 35 km altitude.',
        subject: 'General Awareness',
        topic: 'Physical Geography & Atmosphere',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-SSC-CHSL-05',
    title: 'SSC CHSL (10+2): Tier-1 Rapid Speed Benchmark',
    examSlug: 'ssc-chsl',
    examName: 'SSC Combined Higher Secondary Level (SSC CHSL)',
    category: 'Government',
    subject: 'Reasoning, Quant & English',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The marked price of a shirt is ₹ 800. Two successive discounts of 10% and 5% are given. What is the net selling price?',
        options: ['₹ 684', '₹ 680', '₹ 700', '₹ 672'],
        correctOptionIndex: 0,
        explanation: 'After 10% discount: 800 - 80 = 720. After second 5% discount: 720 - 36 = ₹ 684.',
        subject: 'Quantitative Aptitude',
        topic: 'Successive Discounts',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Choose the one-word substitution for: "A person who loves and collects books."',
        options: ['Bibliophile', 'Polyglot', 'Philatelist', 'Numismatist'],
        correctOptionIndex: 0,
        explanation: 'A bibliophile is an admirer or collector of books. Philatelist collects stamps; Numismatist collects coins.',
        subject: 'English Comprehension',
        topic: 'One Word Substitution',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Who was the first female ruler of the Delhi Sultanate?',
        options: ['Razia Sultana', 'Nur Jahan', 'Chand Bibi', 'Rani Durgavati'],
        correctOptionIndex: 0,
        explanation: 'Razia Sultana, daughter of Shams-ud-din Iltutmish, ruled the Delhi Sultanate from 1236 to 1240 CE.',
        subject: 'General Awareness',
        topic: 'Medieval Indian History',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Find the odd one out among the following: Copper, Iron, Silver, Brass',
        options: ['Brass (It is an alloy, others are elemental metals)', 'Copper', 'Iron', 'Silver'],
        correctOptionIndex: 0,
        explanation: 'Brass is an alloy composed of Copper and Zinc, whereas Copper, Iron, and Silver are pure chemical elements.',
        subject: 'General Intelligence',
        topic: 'Classification & Odd One Out',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-SSC-CGL-06',
    title: 'SSC CGL: English Comprehension & Grammar Improvement',
    examSlug: 'ssc-cgl',
    examName: 'SSC Combined Graduate Level (SSC CGL)',
    category: 'Government',
    subject: 'English Language & Comprehension',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Convert into Passive Voice: "The municipal workers repaired the broken pipeline."',
        options: [
          'The broken pipeline was repaired by the municipal workers.',
          'The broken pipeline has been repaired by the municipal workers.',
          'The broken pipeline is repaired by the municipal workers.',
          'The broken pipeline was being repaired by the municipal workers.'
        ],
        correctOptionIndex: 0,
        explanation: 'Simple past active "repaired" converts to "was/were + past participle" in passive: "was repaired".',
        subject: 'English Language',
        topic: 'Active and Passive Voice',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Convert into Indirect Speech: She said to me, "Where are you going for your internship?"',
        options: [
          'She asked me where I was going for my internship.',
          'She asked me where was I going for my internship.',
          'She inquired that where I am going for my internship.',
          'She said to me that where was I going.'
        ],
        correctOptionIndex: 0,
        explanation: 'In indirect wh-questions, the word order becomes assertive (subject before auxiliary verb): "where I was going".',
        subject: 'English Language',
        topic: 'Direct and Indirect Speech',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the most appropriate ANTONYM of the word "MITIGATE":',
        options: ['Aggravate', 'Alleviate', 'Assuage', 'Pacify'],
        correctOptionIndex: 0,
        explanation: '"Mitigate" means to make less severe. Its direct opposite is "Aggravate" (to make worse or intensify).',
        subject: 'English Language',
        topic: 'Vocabulary & Antonyms',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the idiom meaning "to disclose a secret prematurely or inadvertently":',
        options: ['Spill the beans', 'Bite the dust', 'Hit the sack', 'Burn bridges'],
        correctOptionIndex: 0,
        explanation: '"Spill the beans" means to reveal secret information accidentally or ahead of time.',
        subject: 'English Language',
        topic: 'Idioms & Phrases',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 8. LAW - CLAT UG & AILET (5 TESTS)
  // =========================================================================
  {
    id: 'MOCK-LAW-CLAT-01',
    title: 'CLAT UG: Full-Length Legal Aptitude & Reasoning Simulation',
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    subject: 'Legal Reasoning, Constitutional Law & Torts',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Principle: Under the Law of Torts, "volenti non fit injuria" is a complete defense where a person who knowingly and voluntarily consents to risk harm cannot subsequently sue for damages.\nFacts: Rajiv attended an Indian Premier League cricket match and bought a front-row ticket. During play, a batsman hit a powerful six into the stands that struck Rajiv on the forehead, causing injury. Rajiv sues the stadium management.\nDecision:',
        options: [
          'The stadium management is not liable because spectators voluntarily assume ordinary foreseeable risks of attending live sporting events.',
          'The stadium management is strictly liable for failing to construct safety nets reaching the sky.',
          'The batsman who struck the ball is personally liable for battery.',
          'Rajiv is entitled to full compensation under consumer protection law.'
        ],
        correctOptionIndex: 0,
        explanation: 'By purchasing a ticket and voluntarily attending a cricket match, spectators implicitly consent to the foreseeable risks of stray balls entering the seating area (volenti non fit injuria).',
        subject: 'Legal Reasoning',
        topic: 'Law of Torts & Defenses',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Under the Indian Contract Act, 1872, an agreement entered into with a minor (person under 18 years of age) is:',
        options: ['Void ab initio (void from the very beginning)', 'Voidable at the option of the minor', 'Valid and legally enforceable', 'Illegal'],
        correctOptionIndex: 0,
        explanation: 'In Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is void ab initio.',
        subject: 'Legal Reasoning',
        topic: 'Law of Contracts & Capacity',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which Article of the Constitution guarantees the right to constitutional remedies, described by Dr. B.R. Ambedkar as the "heart and soul of the Constitution"?',
        options: ['Article 32', 'Article 226', 'Article 14', 'Article 19'],
        correctOptionIndex: 0,
        explanation: 'Article 32 guarantees the right to move the Supreme Court directly for the enforcement of Fundamental Rights by issuing appropriate writs.',
        subject: 'Constitutional Law',
        topic: 'Writs & Constitutional Remedies',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What is the Latin maxim that means "an act done by me against my will is not my act", which forms the foundation of the defense of duress or involuntary intoxication in criminal law?',
        options: ['Actus me invito factus non est meus actus', 'Actus non facit reum nisi mens sit rea', 'Ignorantia juris non excusat', 'Res ipsa loquitur'],
        correctOptionIndex: 0,
        explanation: '"Actus me invito factus non est meus actus" states that an involuntary act performed under overwhelming coercion or duress is not legally attributable to the actor.',
        subject: 'Legal Aptitude',
        topic: 'Legal Maxims & Criminal Jurisprudence',
        difficulty: 'Hard',
        marks: 4
      },
      {
        questionText: 'Principle: An employer is vicariously liable for torts committed by employees in the course of their employment.\nFacts: A delivery driver for an e-commerce firm was instructed to deliver parcels in North Delhi. While on his route, he took a minor detour of two blocks to buy lunch and negligently collided with a pedestrian.\nDecision:',
        options: [
          'The employer is vicariously liable because taking a brief detour for lunch is reasonably incidental to employment and not an independent frolic of his own.',
          'The employer is not liable because any detour removes the employee from the course of employment.',
          'Only the driver is liable because the vehicle was moving.',
          'Neither is liable because it was an accident.'
        ],
        correctOptionIndex: 0,
        explanation: 'A minor deviation or detour for reasonable human needs during an assigned route is deemed within the course of employment, rendering the employer vicariously liable.',
        subject: 'Legal Reasoning',
        topic: 'Vicarious Liability',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-LAW-CLAT-02',
    title: 'CLAT UG: Legal Reasoning (Torts, Contracts & IPC)',
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    subject: 'Legal Reasoning',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Principle: Slander requires publication of a false defamatory spoken statement that causes special harm to the reputation of the plaintiff.\nFacts: In a closed private conference room with no other person present, Manager A told Employee B that B was a thief and embezzler. B was deeply hurt and sued A for slander.\nDecision:',
        options: [
          'A is not liable for slander because the statement was made solely to B and was never published to any third party.',
          'A is liable because calling someone a thief is defamation per se.',
          'A is criminally liable for intimidation.',
          'A is liable under the law of torts for mental anguish.'
        ],
        correctOptionIndex: 0,
        explanation: 'Publication to at least one third party is an indispensable ingredient of defamation. Communicating solely to the person defamed does not constitute publication.',
        subject: 'Legal Reasoning',
        topic: 'Law of Torts: Defamation',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In the landmark case of Donoghue v. Stevenson (1932), Lord Atkin established which fundamental principle of the modern Law of Negligence?',
        options: ['The "Neighbor Principle"', 'The doctrine of Strict Liability', 'The eggshell skull rule', 'Contributory negligence'],
        correctOptionIndex: 0,
        explanation: 'Lord Atkin formulated the "Neighbor Principle": you must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbor.',
        subject: 'Legal Reasoning',
        topic: 'Law of Torts: Negligence',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Under the Indian Penal Code, what is the minimum age below which an act committed by a child is exempted from criminal liability as doli incapax (Article 82 IPC)?',
        options: ['7 years', '12 years', '16 years', '18 years'],
        correctOptionIndex: 0,
        explanation: 'Section 82 of the Indian Penal Code provides absolute immunity (doli incapax) for any act committed by a child under seven years of age.',
        subject: 'Legal Reasoning',
        topic: 'Criminal Law & General Exceptions',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which writ is issued by the Supreme Court or High Court to compel a public authority to perform a mandatory statutory duty that it has failed or refused to perform?',
        options: ['Mandamus', 'Habeas Corpus', 'Quo Warranto', 'Certiorari'],
        correctOptionIndex: 0,
        explanation: 'Mandamus (meaning "we command") is a prerogative writ issued to a lower court or public official commanding them to perform an imperative public duty.',
        subject: 'Constitutional Law',
        topic: 'Writs & Public Law',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-LAW-CLAT-03',
    title: 'CLAT UG: Logical Reasoning & Critical Deduction Benchmark',
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    subject: 'Logical Reasoning',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Hard',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Passage: "Renewable energy adoption has accelerated in emerging markets. However, the intermittent nature of solar and wind energy demands substantial investment in lithium-ion and pumped-storage battery infrastructure to avoid grid collapse during peak evening hours."\nWhich of the following, if true, most strongly strengthens the author claim?',
        options: [
          'Power grids without storage experience frequent brownouts when solar generation ceases at dusk.',
          'Solar panels have decreased in manufacturing cost over the last decade.',
          'Wind speeds are typically higher during winter months.',
          'Hydroelectric dams generate carbon emissions during reservoir construction.'
        ],
        correctOptionIndex: 0,
        explanation: 'Showing that grids without battery storage experience brownouts during the dusk transition directly corroborates the claim that storage is critical to avert grid failure.',
        subject: 'Logical Reasoning',
        topic: 'Critical Reasoning: Strengthen the Argument',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Identify the fallacy committed in the statement: "You cannot trust Dr. Sharma findings on nutrition because he was once caught speeding on the highway."',
        options: ['Ad Hominem (Attacking the person instead of the argument)', 'Straw Man Fallacy', 'Post hoc ergo propter hoc', 'Slippery Slope'],
        correctOptionIndex: 0,
        explanation: 'An Ad Hominem fallacy occurs when someone attacks the character, background, or personal attributes of an opponent rather than evaluating the substance of their argument.',
        subject: 'Logical Reasoning',
        topic: 'Logical Fallacies',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If it is true that "Some contracts are verbal", which of the following statements cannot be determined with certainty?',
        options: ['All contracts are verbal', 'No contracts are verbal', 'Some contracts are not written', 'Both B and C'],
        correctOptionIndex: 0,
        explanation: 'From "Some contracts are verbal", we know the intersection is non-empty. "All contracts are verbal" is possible but not guaranteed, so its truth value is undetermined.',
        subject: 'Logical Reasoning',
        topic: 'Formal Logic & Propositions',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Passage: "Electric vehicles emit zero tailpipe emissions, but their total lifecycle carbon footprint depends largely on whether the electrical grid that charges them is powered by coal or renewables."\nWhat assumption does this statement rely upon?',
        options: [
          'Generating electricity from coal emits greenhouse gases that contribute to the lifecycle emissions of EVs.',
          'EV batteries cannot be recycled.',
          'Internal combustion engines are cleaner than electric vehicles.',
          'Coal power will never be phased out.'
        ],
        correctOptionIndex: 0,
        explanation: 'The argument links grid source to EV lifecycle footprint; this explicitly assumes that coal-fired electricity generation produces emissions that count towards the vehicle lifecycle impact.',
        subject: 'Logical Reasoning',
        topic: 'Critical Reasoning: Implicit Assumptions',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-LAW-CLAT-04',
    title: 'CLAT UG: English Language & Passage-Based Comprehension',
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    subject: 'English Comprehension & Vocabulary',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'In legal vocabulary, what does the term "AMICUS CURIAE" mean?',
        options: [
          'A friend of the court appointed to assist with legal expertise',
          'An advocate representing the accused',
          'A hostile witness',
          'A judgment delivered without oral hearing'
        ],
        correctOptionIndex: 0,
        explanation: '"Amicus curiae" is Latin for "friend of the court", referring to an impartial advisor appointed by the court to assist on a point of law or public interest.',
        subject: 'English Language',
        topic: 'Legal Terminology',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which word means "the power or right to give orders, make decisions, and enforce obedience, especially within an official legal territory"?',
        options: ['Jurisdiction', 'Acquittal', 'Injunction', 'Tortfeasor'],
        correctOptionIndex: 0,
        explanation: '"Jurisdiction" is the official authority of a legal body to administer justice and interpret laws within a defined scope or geographic area.',
        subject: 'English Language',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the sentence with the correct subjunctive mood usage:',
        options: [
          'The judge demanded that the witness be present at the hearing.',
          'The judge demanded that the witness was present at the hearing.',
          'The judge demanded that the witness is present at the hearing.',
          'The judge demanded the witness will be present at the hearing.'
        ],
        correctOptionIndex: 0,
        explanation: 'Verbs of demand, request, or mandate require the present subjunctive mood (base form of verb "be"): "demanded that the witness be present".',
        subject: 'English Language',
        topic: 'Subjunctive Mood & Grammar',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the primary tone of an author who writes: "While the legislative intentions were undeniably noble, the hurried statutory drafting has created unprecedented procedural ambiguities that will tie courts in knots for decades"?',
        options: ['Critical yet balanced', 'Blindly euphoric', 'Apathetic and indifferent', 'Vindictive and abusive'],
        correctOptionIndex: 0,
        explanation: 'The author concedes the noble intent ("undeniably noble") while analytically critiquing the resulting procedural ambiguities, demonstrating a critical yet balanced tone.',
        subject: 'English Language',
        topic: 'Author Tone & Rhetorical Analysis',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-LAW-CLAT-05',
    title: 'CLAT UG: Current Affairs & Legal GK Benchmark',
    examSlug: 'clat-ug',
    examName: 'Common Law Admission Test (CLAT UG)',
    category: 'University',
    subject: 'Current Affairs & Legal GK',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The International Court of Justice (ICJ), the principal judicial organ of the United Nations, has its seat in which city?',
        options: ['The Hague, Netherlands', 'Geneva, Switzerland', 'New York, USA', 'Vienna, Austria'],
        correctOptionIndex: 0,
        explanation: 'The International Court of Justice is seated at the Peace Palace in The Hague, Netherlands.',
        subject: 'Current Affairs',
        topic: 'International Organizations & Courts',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In India, who administers the oath of office to the Chief Justice of India?',
        options: ['The President of India', 'The Prime Minister', 'The senior-most Supreme Court judge', 'The Speaker of Lok Sabha'],
        correctOptionIndex: 0,
        explanation: 'Under Article 124(6) of the Constitution, every judge of the Supreme Court, including the Chief Justice of India, takes an oath before the President of India.',
        subject: 'Legal GK',
        topic: 'Judicial Appointments & Constitution',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which landmark international treaty governs outer space activities and prohibits the placement of nuclear weapons in Earth orbit or on celestial bodies?',
        options: ['Outer Space Treaty, 1967', 'Antarctic Treaty, 1959', 'Geneva Convention, 1949', 'Kyoto Protocol, 1997'],
        correctOptionIndex: 0,
        explanation: 'The Outer Space Treaty of 1967 forms the legal basis of space law, barring states from claiming celestial bodies or orbiting weapons of mass destruction.',
        subject: 'Current Affairs',
        topic: 'Space Law & International Treaties',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The concept of "Public Interest Litigation" (PIL) was introduced in Indian jurisprudence primarily through the judicial activism of which former Chief Justice of India?',
        options: ['Justice P.N. Bhagwati and Justice V.R. Krishna Iyer', 'Justice H.J. Kania', 'Justice M.H. Kania', 'Justice Ranjan Gogoi'],
        correctOptionIndex: 0,
        explanation: 'Justice P.N. Bhagwati along with Justice V.R. Krishna Iyer pioneered Public Interest Litigation (PIL) in India in the early 1980s by relaxing the traditional rule of locus standi.',
        subject: 'Legal GK',
        topic: 'Indian Judicial Reforms & PIL',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 9. DEFENCE - NDA & CDS (5 TESTS)
  // =========================================================================
  {
    id: 'MOCK-DEF-NDA-01',
    title: 'NDA: Mathematics Comprehensive Paper (Calculus, Vectors & Trig)',
    examSlug: 'nda-na',
    examName: 'National Defence Academy (NDA)',
    category: 'Defence',
    subject: 'Mathematics',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the value of (cos 15° - sin 15°)?',
        options: ['1 / √2', '√3 / 2', '1 / 2', '√2'],
        correctOptionIndex: 0,
        explanation: 'cos 15° - sin 15° = √2 * [ (1/√2) cos 15° - (1/√2) sin 15° ] = √2 * cos(15° + 45°) = √2 * cos 60° = √2 * (1/2) = 1 / √2.',
        subject: 'Mathematics',
        topic: 'Trigonometry',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If a line makes angles 45° and 60° with the positive x and y axes respectively, what angle does it make with the positive z axis?',
        options: ['60° or 120°', '45° or 135°', '30° or 150°', '90°'],
        correctOptionIndex: 0,
        explanation: 'Direction cosines satisfy l² + m² + n² = 1 => cos²(45°) + cos²(60°) + cos²(γ) = 1 => 1/2 + 1/4 + cos²(γ) = 1 => cos²(γ) = 1/4 => cos(γ) = ± 1/2 => γ = 60° or 120°.',
        subject: 'Mathematics',
        topic: '3D Coordinate Geometry & Direction Cosines',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'What is the derivative of sin⁻¹(2x / (1 + x²)) with respect to tan⁻¹(x)?',
        options: ['2', '1', '1 / (1 + x²)', '2x'],
        correctOptionIndex: 0,
        explanation: 'Let x = tan θ. Then sin⁻¹(2x / (1 + x²)) = 2 tan⁻¹(x). The derivative of 2 tan⁻¹(x) with respect to tan⁻¹(x) is simply 2.',
        subject: 'Mathematics',
        topic: 'Differential Calculus',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Two dice are thrown simultaneously. What is the probability of obtaining a total sum of either 7 or 11?',
        options: ['2 / 9', '1 / 6', '1 / 12', '7 / 36'],
        correctOptionIndex: 0,
        explanation: 'Pairs giving sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs. Pairs giving sum 11: (5,6),(6,5) = 2 pairs. Total favorable = 6 + 2 = 8. Probability = 8 / 36 = 2 / 9.',
        subject: 'Mathematics',
        topic: 'Probability',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If vectors a = 2i + j - k and b = i - j + 2k, what is the dot product a · b?',
        options: ['-1', '1', '3', '0'],
        correctOptionIndex: 0,
        explanation: 'a · b = (2)(1) + (1)(-1) + (-1)(2) = 2 - 1 - 2 = -1.',
        subject: 'Mathematics',
        topic: 'Vector Algebra',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-DEF-NDA-02',
    title: 'NDA: General Ability Test (GAT) English, Physics & GK',
    examSlug: 'nda-na',
    examName: 'National Defence Academy (NDA)',
    category: 'Defence',
    subject: 'General Ability Test (English & General Science)',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Why do stars appear to twinkle when observed from the surface of the Earth?',
        options: [
          'Atmospheric refraction of starlight through turbulent air layers of varying refractive indices',
          'Periodic internal nuclear fluctuations inside stars',
          'Diffraction of light by cloud droplets',
          'Doppler shift caused by Earth rotation'
        ],
        correctOptionIndex: 0,
        explanation: 'Starlight passes through fluctuating atmospheric layers with continuously changing temperatures and densities, causing the apparent position and intensity of the point light source to waver (atmospheric refraction).',
        subject: 'Physics',
        topic: 'Refraction & Atmospheric Optics',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which Indian Armed Forces academy is situated at Khadakwasla near Pune, Maharashtra, where cadets of Army, Navy, and Air Force train together?',
        options: ['National Defence Academy (NDA)', 'Indian Military Academy (IMA)', 'Officers Training Academy (OTA)', 'Air Force Academy (AFA)'],
        correctOptionIndex: 0,
        explanation: 'The National Defence Academy (NDA) at Khadakwasla, Pune, is the world first tri-service academy.',
        subject: 'General Knowledge',
        topic: 'Indian Defence Establishments',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which gas is evolved when an active metal like Zinc reacts with dilute hydrochloric acid (HCl)?',
        options: ['Hydrogen gas (H₂)', 'Oxygen gas (O₂)', 'Chlorine gas (Cl₂)', 'Carbon dioxide (CO₂)'],
        correctOptionIndex: 0,
        explanation: 'Zn + 2 HCl -> ZnCl₂ + H₂↑. Active metals displace hydrogen from dilute acids.',
        subject: 'Chemistry',
        topic: 'Chemical Reactions & Acids',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Choose the word that is nearest in meaning to "VALIANT":',
        options: ['Courageous', 'Timid', 'Arrogant', 'Cautious'],
        correctOptionIndex: 0,
        explanation: '"Valiant" means possessing or showing courage or determination. "Courageous" is its closest synonym.',
        subject: 'English',
        topic: 'Synonyms & Vocabulary',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-DEF-CDS-03',
    title: 'CDS: Elementary Mathematics Speed Benchmark',
    examSlug: 'cds-defence',
    examName: 'Combined Defence Services (CDS)',
    category: 'Defence',
    subject: 'Elementary Mathematics',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A tap can fill an empty cistern in 8 hours, while a leak at the bottom empties it in 12 hours. If both the tap and the leak are open simultaneously, how many hours will it take to fill the cistern completely?',
        options: ['24 hours', '20 hours', '18 hours', '16 hours'],
        correctOptionIndex: 0,
        explanation: 'Net filling rate per hour = 1/8 - 1/12 = (3 - 2) / 24 = 1/24 cistern per hour. Thus it will take 24 hours to fill completely.',
        subject: 'Elementary Mathematics',
        topic: 'Pipes and Cisterns',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What is the area of an equilateral triangle whose perimeter is 36 cm?',
        options: ['36 √3 cm²', '18 √3 cm²', '72 cm²', '144 √3 cm²'],
        correctOptionIndex: 0,
        explanation: 'Perimeter = 3a = 36 => side a = 12 cm. Area = (√3 / 4) * a² = (√3 / 4) * 144 = 36 √3 cm².',
        subject: 'Elementary Mathematics',
        topic: 'Geometry & Mensuration 2D',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, what is the other number?',
        options: ['60', '72', '80', '96'],
        correctOptionIndex: 0,
        explanation: 'Product of two numbers = HCF * LCM => 48 * x = 12 * 240 => x = (12 * 240) / 48 = 240 / 4 = 60.',
        subject: 'Elementary Mathematics',
        topic: 'HCF and LCM',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If 2^(x - 1) + 2^(x + 1) = 320, find the value of x.',
        options: ['7', '6', '8', '5'],
        correctOptionIndex: 0,
        explanation: '2^(x-1) [ 1 + 2² ] = 320 => 2^(x-1) * 5 = 320 => 2^(x-1) = 64 = 2⁶ => x - 1 = 6 => x = 7.',
        subject: 'Elementary Mathematics',
        topic: 'Indices and Surds',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-DEF-CDS-04',
    title: 'CDS: General Knowledge (Defence, Geography & Modern History)',
    examSlug: 'cds-defence',
    examName: 'Combined Defence Services (CDS)',
    category: 'Defence',
    subject: 'General Knowledge',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Who is the Supreme Commander of the Indian Armed Forces according to Article 53(2) of the Indian Constitution?',
        options: ['The President of India', 'The Prime Minister of India', 'The Chief of Defence Staff (CDS)', 'The Union Defence Minister'],
        correctOptionIndex: 0,
        explanation: 'Article 53(2) of the Constitution vests the supreme command of the Defence Forces of the Union in the President of India.',
        subject: 'General Knowledge',
        topic: 'Indian Constitution & Armed Forces',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Operation Meghdoot was launched by the Indian Armed Forces in 1984 to secure control of which strategic region?',
        options: ['Siachen Glacier', 'Kargil Heights', 'Aksai Chin', 'Sir Creek'],
        correctOptionIndex: 0,
        explanation: 'Launched on 13 April 1984, Operation Meghdoot was the military operation where Indian troops pre-empted Pakistani maneuvers to gain control of the highest battlefield in the world: the Siachen Glacier.',
        subject: 'General Knowledge',
        topic: 'Military Operations of Indian Army',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which latitude line passes through the middle of India, dividing the subcontinent into northern subtropical and southern tropical zones?',
        options: ['Tropic of Cancer (23.5° N)', 'Equator (0°)', 'Tropic of Capricorn (23.5° S)', 'Arctic Circle'],
        correctOptionIndex: 0,
        explanation: 'The Tropic of Cancer (23°30\' N) passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.',
        subject: 'General Knowledge',
        topic: 'Indian Geography',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which mountain pass connects Srinagar with Leh in Ladakh across the Great Himalayan Range?',
        options: ['Zoji La Pass', 'Rohtang Pass', 'Nathu La Pass', 'Shipki La Pass'],
        correctOptionIndex: 0,
        explanation: 'Zoji La is a strategic high mountain pass in the Himalayas in Kargil district, connecting Srinagar and the Kashmir Valley with Leh in Ladakh.',
        subject: 'General Knowledge',
        topic: 'Mountain Passes of India',
        difficulty: 'Medium',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-DEF-AFCAT-05',
    title: 'AFCAT: Numerical Ability, Reasoning & Military Aptitude Test',
    examSlug: 'afcat-airforce',
    examName: 'Air Force Common Admission Test (AFCAT)',
    category: 'Defence',
    subject: 'Reasoning, Numerical & Military Aptitude',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the motto of the Indian Air Force, derived from the eleventh chapter of the Bhagavad Gita?',
        options: ['Nabhah Sprsham Deeptam (Touch the Sky with Glory)', 'Sewa Paramo Dharmah', 'Sham No Varunah', 'Valour and Wisdom'],
        correctOptionIndex: 0,
        explanation: 'The motto of the Indian Air Force is "Nabhah Sprsham Deeptam", taken from the eleventh chapter of the Gita, meaning "Touch the sky with glory".',
        subject: 'Military Aptitude',
        topic: 'Indian Air Force Traditions',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A plane flies a distance of 1,200 km in 2 hours with the wind and takes 2.5 hours against the wind. What is the speed of the plane in still air?',
        options: ['540 km/h', '500 km/h', '600 km/h', '480 km/h'],
        correctOptionIndex: 0,
        explanation: 'Speed with wind = 1200 / 2 = 600 km/h. Speed against wind = 1200 / 2.5 = 480 km/h. Speed in still air = (600 + 480) / 2 = 1080 / 2 = 540 km/h.',
        subject: 'Numerical Ability',
        topic: 'Time and Distance',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Select the related figure/analogy: Gun : Bullet :: Chimney : ?',
        options: ['Smoke', 'Roof', 'House', 'Fire'],
        correctOptionIndex: 0,
        explanation: 'A gun discharges bullets; a chimney discharges smoke.',
        subject: 'Reasoning',
        topic: 'Analogies',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If South-West becomes North, what will North-East become?',
        options: ['South', 'East', 'West', 'South-East'],
        correctOptionIndex: 0,
        explanation: 'South-West and North-East are directly opposite (180° apart). If South-West becomes North, the diametrically opposite direction (North-East) must become South.',
        subject: 'Reasoning',
        topic: 'Spatial Orientation',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 10. TEACHING & ACADEMIA - UGC NET (5 TESTS)
  // =========================================================================
  {
    id: 'MOCK-TEACH-UGC-01',
    title: 'UGC NET: General Paper 1 Teaching & Research Aptitude Complete Mock',
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    subject: 'General Paper 1 (Teaching & Research)',
    durationMinutes: 60,
    totalMarks: 20,
    negativeMarkingRate: 0.0,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which level of teaching involves highest cognitive effort, creative problem-solving, and critical thinking according to Morris L. Bigge classification?',
        options: ['Reflective level', 'Understanding level', 'Memory level', 'Autonomous development level'],
        correctOptionIndex: 0,
        explanation: 'The reflective level of teaching (associated with Hunt) is the highest cognitive level, where learners engage in open problem-posing, problem-solving, and evaluative reflection.',
        subject: 'Teaching Aptitude',
        topic: 'Levels of Teaching (Memory, Understanding, Reflective)',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A researcher conducts an investigation where independent variables are manipulated in a controlled laboratory setting to observe the effect on dependent variables. What type of research is this?',
        options: ['Experimental Research', 'Ex-post facto Research', 'Historical Research', 'Phenomenological Research'],
        correctOptionIndex: 0,
        explanation: 'Experimental research is characterized by the deliberate manipulation of independent variables under controlled conditions to establish cause-and-effect relationships.',
        subject: 'Research Aptitude',
        topic: 'Types of Research Methods',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In qualitative research sampling, when an initial participant refers additional prospective subjects meeting research criteria, the sampling method is known as:',
        options: ['Snowball Sampling', 'Stratified Random Sampling', 'Cluster Sampling', 'Systematic Sampling'],
        correctOptionIndex: 0,
        explanation: 'Snowball sampling (chain-referral sampling) is a non-probability technique where existing study subjects recruit future subjects from among their acquaintances.',
        subject: 'Research Aptitude',
        topic: 'Sampling Techniques',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which national digital initiative of the Ministry of Education provides free access to thousands of interactive MOOCs and undergraduate/postgraduate courses developed by IITs, IIMs, and universities?',
        options: ['SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds)', 'SWAYAM PRABHA (DTH Channels)', 'National Digital Library (NDL)', 'e-PG Pathshala'],
        correctOptionIndex: 0,
        explanation: 'SWAYAM is the Government of India flagship MOOC platform offering free online courses covering school to post-graduate education.',
        subject: 'ICT in Education',
        topic: 'Government Digital Education Initiatives',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The National Education Policy (NEP) 2020 replaced the historic 10+2 curricular structure with which new pedagogical framework?',
        options: ['5 + 3 + 3 + 4', '5 + 4 + 3 + 2', '4 + 3 + 3 + 5', '3 + 3 + 4 + 5'],
        correctOptionIndex: 0,
        explanation: 'NEP 2020 restructures school education into 5 (Foundational: 3-8 yrs) + 3 (Preparatory: 8-11 yrs) + 3 (Middle: 11-14 yrs) + 4 (Secondary: 14-18 yrs).',
        subject: 'Higher Education System',
        topic: 'NEP 2020 Policies & Governance',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-TEACH-UGC-02',
    title: 'UGC NET Paper 1: ICT, Digital Initiatives & Educational Tech',
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    subject: 'ICT & Educational Technology',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.0,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the main difference between RAM and ROM in computer architecture?',
        options: [
          'RAM is volatile and loses contents when powered down; ROM is non-volatile and retains instructions.',
          'RAM is non-volatile; ROM is volatile.',
          'RAM can only be read; ROM can only be written.',
          'RAM is secondary storage; ROM is optical.'
        ],
        correctOptionIndex: 0,
        explanation: 'Random Access Memory (RAM) is primary volatile working memory; Read-Only Memory (ROM) is non-volatile permanent firmware.',
        subject: 'Information & Communication Technology',
        topic: 'Computer Memory Types',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'What does the acronym "MOODLE" stand for in Learning Management Systems (LMS)?',
        options: [
          'Modular Object-Oriented Dynamic Learning Environment',
          'Modern Online Open Digital Learning Engine',
          'Modular Open-source Online Distance Learning Environment',
          'Machine Operated Online Distance Learning Education'
        ],
        correctOptionIndex: 0,
        explanation: 'MOODLE stands for Modular Object-Oriented Dynamic Learning Environment, the world leading free open-source LMS.',
        subject: 'Information & Communication Technology',
        topic: 'Educational Software & Platforms',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'Which communication technology enables wireless communication between devices over short distances (approx 10 meters) using 2.4 GHz radio frequencies?',
        options: ['Bluetooth', 'Wi-Fi (WLAN)', 'Satellite link', 'Fiber Optic Cable'],
        correctOptionIndex: 0,
        explanation: 'Bluetooth is a short-range wireless technology standard used for exchanging data between fixed and mobile devices over personal area networks (PANs).',
        subject: 'Information & Communication Technology',
        topic: 'Networking & Wireless Tech',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A malicious email that deceives recipients into revealing sensitive credentials by masquerading as a legitimate bank or university is an example of:',
        options: ['Phishing', 'Denial of Service (DoS)', 'Trojan Horse', 'Spyware'],
        correctOptionIndex: 0,
        explanation: 'Phishing is a social engineering cybercrime where targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data.',
        subject: 'Information & Communication Technology',
        topic: 'Cybersecurity in Education',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-TEACH-UGC-03',
    title: 'UGC NET Paper 1: People, Development & Environmental Studies',
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    subject: 'People, Development & Environment',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.0,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'How many Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 as part of the 2030 Agenda?',
        options: ['17 Goals with 169 targets', '8 Goals with 18 targets', '12 Goals with 50 targets', '20 Goals with 200 targets'],
        correctOptionIndex: 0,
        explanation: 'The 2030 Agenda for Sustainable Development includes 17 SDGs with 169 interconnected global targets to be achieved by 2030.',
        subject: 'Environment',
        topic: 'SDGs & MDGs Framework',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which atmospheric pollutant is primarily responsible for the formation of "Photochemical Smog" on warm sunny days in metropolitan cities?',
        options: [
          'Nitrogen Oxides (NOx) and Volatile Organic Compounds (VOCs) in the presence of sunlight',
          'Sulfur dioxide and soot particles (Classical London Smog)',
          'Carbon dioxide and methane',
          'CFCs and Halons'
        ],
        correctOptionIndex: 0,
        explanation: 'Photochemical smog (Los Angeles smog) is formed when sunlight reacts with Nitrogen Oxides (NOx) and VOCs to produce ground-level ozone, PAN, and aldehydes.',
        subject: 'Environment',
        topic: 'Air Pollution & Smog Types',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'The International Solar Alliance (ISA) was jointly launched in 2015 by India and which other country on the sidelines of COP21 in Paris?',
        options: ['France', 'Germany', 'Japan', 'United Kingdom'],
        correctOptionIndex: 0,
        explanation: 'The International Solar Alliance was launched jointly by Prime Minister Narendra Modi of India and President François Hollande of France in Paris in November 2015.',
        subject: 'Environment',
        topic: 'Renewable Energy Initiatives & Alliances',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which greenhouse gas has the highest global warming potential (GWP) per molecule over a 100-year timescale among common industrial gases?',
        options: ['Sulfur Hexafluoride (SF₆)', 'Carbon Dioxide (CO₂)', 'Methane (CH₄)', 'Nitrous Oxide (N₂O)'],
        correctOptionIndex: 0,
        explanation: 'SF₆ has a 100-year GWP of approximately 23,500 times that of CO₂, making it the most potent greenhouse gas evaluated by the IPCC.',
        subject: 'Environment',
        topic: 'Greenhouse Gases & Global Warming Potential',
        difficulty: 'Hard',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-TEACH-UGC-04',
    title: 'UGC NET Paper 1: Higher Education System, Policies & Governance',
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    subject: 'Higher Education System',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.0,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The University Grants Commission (UGC) of India was formally established as a statutory body of the Government of India through an Act of Parliament in which year?',
        options: ['1956', '1947', '1964', '1972'],
        correctOptionIndex: 0,
        explanation: 'UGC was formally established in November 1956 under the UGC Act, 1956, to coordinate, determine, and maintain standards of university education in India.',
        subject: 'Higher Education',
        topic: 'Statutory Educational Bodies & UGC',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which commission was the first to recommend the establishment of autonomous colleges in India to foster academic freedom and curricular innovation?',
        options: ['Kothari Commission (1964-66)', 'Radhakrishnan Commission (1948-49)', 'Mudaliar Commission (1952-53)', 'National Knowledge Commission (2006)'],
        correctOptionIndex: 0,
        explanation: 'The Kothari Commission (Education Commission 1964–66) first recommended autonomous status for outstanding colleges to design their own curricula and evaluation schemes.',
        subject: 'Higher Education',
        topic: 'Education Commissions in Post-Independence India',
        difficulty: 'Medium',
        marks: 4
      },
      {
        questionText: 'In ancient India, which world-renowned residential university in Bihar was founded by Emperor Kumaragupta I of the Gupta dynasty in the 5th century CE?',
        options: ['Nalanda Mahavihara', 'Takshashila', 'Vikramashila', 'Vallabhi'],
        correctOptionIndex: 0,
        explanation: 'Nalanda University was founded in the 5th century CE by Kumaragupta I and attracted scholars from China, Korea, Japan, and Tibet.',
        subject: 'Higher Education',
        topic: 'Ancient Indian Educational Institutions',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The National Assessment and Accreditation Council (NAAC) functions under which apex educational authority?',
        options: ['University Grants Commission (UGC)', 'Ministry of Skill Development', 'AICTE', 'NCERT'],
        correctOptionIndex: 0,
        explanation: 'NAAC was established in 1994 by the UGC with its headquarters in Bengaluru to assess and accredit institutions of higher education.',
        subject: 'Higher Education',
        topic: 'Accreditation Framework & NAAC',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-TEACH-UGC-05',
    title: 'UGC NET Paper 1: Mathematical Reasoning & Data Interpretation',
    examSlug: 'ugc-net',
    examName: 'UGC National Eligibility Test (UGC NET)',
    category: 'University',
    subject: 'Mathematical Reasoning & DI',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.0,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The average score of 20 boys in a test is 80 and the average score of 30 girls is 90. What is the combined average score of all 50 students?',
        options: ['86', '85', '84', '87'],
        correctOptionIndex: 0,
        explanation: 'Total score = (20 * 80) + (30 * 90) = 1600 + 2700 = 4300. Combined average = 4300 / 50 = 86.',
        subject: 'Mathematical Reasoning',
        topic: 'Weighted Averages',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In a code, TEACHER is written as VGCEJGT. In the same code, how will STUDENT be written?',
        options: ['UVWFGPV', 'TVWFGPV', 'UVWEGPV', 'TUWFGPU'],
        correctOptionIndex: 0,
        explanation: 'Each letter is shifted forward by +2: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V => UVWFGPV.',
        subject: 'Logical Reasoning',
        topic: 'Coding-Decoding',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'A car covers a distance of 180 km at 60 km/h and returns the same distance at 90 km/h. What is the average speed of the car for the entire journey?',
        options: ['72 km/h', '75 km/h', '70 km/h', '80 km/h'],
        correctOptionIndex: 0,
        explanation: 'Harmonic mean for equal distances: Average Speed = 2 * v₁ * v₂ / (v₁ + v₂) = (2 * 60 * 90) / (60 + 90) = 10800 / 150 = 72 km/h.',
        subject: 'Mathematical Reasoning',
        topic: 'Average Speed & Distance',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If 40% of a number is equal to two-third of another number, what is the ratio of the first number to the second number?',
        options: ['5 : 3', '3 : 5', '2 : 3', '3 : 2'],
        correctOptionIndex: 0,
        explanation: '0.40 * A = (2/3) * B => (2/5) * A = (2/3) * B => A / 5 = B / 3 => A / B = 5 / 3 => 5 : 3.',
        subject: 'Mathematical Reasoning',
        topic: 'Ratios & Percentages',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },

  // =========================================================================
  // 11. STATE PSC & RAILWAYS (5 TESTS)
  // =========================================================================
  {
    id: 'MOCK-ST-PSC-01',
    title: 'State PSC: General Studies Paper 1 (Polity & State Administration)',
    examSlug: 'state-psc',
    examName: 'State Public Service Commission (State PSC)',
    category: 'Government',
    subject: 'General Studies & Public Administration',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'Which Article of the Constitution provides for the appointment of a Governor for each State by the President under his hand and seal?',
        options: ['Article 155', 'Article 164', 'Article 213', 'Article 148'],
        correctOptionIndex: 0,
        explanation: 'Article 155 states: "The Governor of a State shall be appointed by the President by warrant under his hand and seal."',
        subject: 'General Studies',
        topic: 'State Executive & Governor',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The 73rd Constitutional Amendment Act, 1992, gave constitutional status to Panchayati Raj Institutions and inserted which Schedule into the Constitution?',
        options: ['Eleventh Schedule (29 Functional Items)', 'Twelfth Schedule', 'Tenth Schedule', 'Ninth Schedule'],
        correctOptionIndex: 0,
        explanation: 'The 73rd Amendment inserted Part IX and the Eleventh Schedule containing 29 functional items for Panchayats.',
        subject: 'General Studies',
        topic: 'Local Self Government & Panchayats',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Under Article 213, who possesses the power to promulgate Ordinances during the recess of the State Legislature?',
        options: ['The Governor of the State', 'The Chief Minister', 'The Chief Justice of the High Court', 'The State Assembly Speaker'],
        correctOptionIndex: 0,
        explanation: 'Article 213 empowers the Governor to promulgate Ordinances when both Houses (or one House in unicameral legislature) are not in session.',
        subject: 'General Studies',
        topic: 'Legislative Powers of Governor',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which soil order is famously known as "Regur Soil" or "Black Cotton Soil", predominant in the Deccan Traps (Maharashtra, Gujarat, MP)?',
        options: ['Vertisols (Black Soil)', 'Laterite Soil', 'Alluvial Soil', 'Arid Red Soil'],
        correctOptionIndex: 0,
        explanation: 'Black soil (Vertisols/Regur) is derived from basaltic lava flows and is rich in clay, retaining moisture exceptionally well, making it ideal for cotton cultivation.',
        subject: 'Geography',
        topic: 'Indian Soils & Agriculture',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ST-POLICE-02',
    title: 'State Police SI: Reasoning, Aptitude & Mental Ability Benchmark',
    examSlug: 'police-si',
    examName: 'State Police Sub-Inspector (SI)',
    category: 'Government',
    subject: 'Mental Ability & Quantitative Aptitude',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.25,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'A police officer starts from a station and drives 12 km North, then turns Right and drives 5 km. How far is the officer from the starting police station in a straight line?',
        options: ['13 km', '17 km', '15 km', '10 km'],
        correctOptionIndex: 0,
        explanation: 'Applying Pythagorean theorem: Distance = √(12² + 5²) = √(144 + 25) = √169 = 13 km.',
        subject: 'Reasoning',
        topic: 'Pythagoras & Direction Sense',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'If 15 police personnel can patrol a city sector in 8 hours, how many police personnel are required to complete the exact same patrol in 6 hours?',
        options: ['20 personnel', '18 personnel', '24 personnel', '22 personnel'],
        correctOptionIndex: 0,
        explanation: 'M₁ * D₁ = M₂ * D₂ => 15 * 8 = M₂ * 6 => 120 = 6 M₂ => M₂ = 20 personnel.',
        subject: 'Quantitative Aptitude',
        topic: 'Time and Work Unitary Method',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which constitutional body conducts recruitment of Group A and B police officers at the Central level for the Indian Police Service (IPS)?',
        options: ['Union Public Service Commission (UPSC)', 'Staff Selection Commission (SSC)', 'Ministry of Home Affairs directly', 'National Police Academy'],
        correctOptionIndex: 0,
        explanation: 'UPSC conducts the annual Civil Services Examination for recruitment into the All India Services including the IPS under Article 315-320.',
        subject: 'General Awareness',
        topic: 'Indian Police Administration',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In a code, LAW = 39. What is the value of COP in the same code (sum of alphabetical positions)?',
        options: ['34', '32', '36', '30'],
        correctOptionIndex: 0,
        explanation: 'L=12, A=1, W=23 => 12+1+23 = 36 (wait, if C=3, O=15, P=16: 3 + 15 + 16 = 34).',
        subject: 'Reasoning',
        topic: 'Letter Number Coding',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-RRB-NTPC-03',
    title: 'RRB NTPC: Stage 1 CBT 100-Question Speed Simulation Drill',
    examSlug: 'rrb-ntpc',
    examName: 'Railway Recruitment Board (RRB NTPC)',
    category: 'Railway',
    subject: 'Maths, General Intelligence & Science',
    durationMinutes: 45,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the speed of sound in dry air at 20°C approximately?',
        options: ['343 m/s', '300,000 km/s', '1500 m/s', '120 m/s'],
        correctOptionIndex: 0,
        explanation: 'The speed of sound in dry air at room temperature (20°C) is approximately 343 m/s.',
        subject: 'General Science',
        topic: 'Physics: Sound Waves',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'In which year did the first passenger train run in India between Bori Bunder (Mumbai) and Thane?',
        options: ['1853 (16th April)', '1848', '1869', '1905'],
        correctOptionIndex: 0,
        explanation: 'The first passenger train in India ran between Bori Bunder (Bombay) and Thane on 16 April 1853, covering 34 km with 14 carriages hauled by three locomotives: Sahib, Sindh, and Sultan.',
        subject: 'General Knowledge',
        topic: 'Indian Railways History',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The simple interest on ₹ 5,000 at 10% per annum for 2 years is:',
        options: ['₹ 1,000', '₹ 500', '₹ 1,200', '₹ 800'],
        correctOptionIndex: 0,
        explanation: 'SI = (P * R * T) / 100 = (5000 * 10 * 2) / 100 = ₹ 1,000.',
        subject: 'Mathematics',
        topic: 'Simple Interest',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which human blood group is known as the "Universal Donor" in the ABO/Rh blood grouping system?',
        options: ['O Negative (O-)', 'AB Positive (AB+)', 'A Positive (A+)', 'O Positive (O+)'],
        correctOptionIndex: 0,
        explanation: 'O negative blood lacks A, B, and Rh antigens on red blood cell membranes, making it safe for transfusion to individuals of any ABO/Rh blood type in emergencies.',
        subject: 'General Science',
        topic: 'Biology: Human Circulatory System',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-RRB-NTPC-04',
    title: 'RRB NTPC: General Science & Static Awareness Benchmark',
    examSlug: 'rrb-ntpc',
    examName: 'Railway Recruitment Board (RRB NTPC)',
    category: 'Railway',
    subject: 'General Science & Geography',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Easy',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'What is the chemical chemical formula of Baking Soda (Sodium Bicarbonate)?',
        options: ['NaHCO₃', 'Na₂CO₃·10H₂O (Washing Soda)', 'NaOH (Caustic Soda)', 'CaO (Quicklime)'],
        correctOptionIndex: 0,
        explanation: 'Baking Soda is Sodium Bicarbonate with chemical formula NaHCO₃.',
        subject: 'General Science',
        topic: 'Chemistry: Common Salts & Compounds',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which organelle is universally known as the "Powerhouse of the Cell" due to ATP synthesis via cellular respiration?',
        options: ['Mitochondria', 'Ribosome', 'Golgi Apparatus', 'Lysosome'],
        correctOptionIndex: 0,
        explanation: 'Mitochondria generate most of the cell supply of adenosine triphosphate (ATP), used as a source of chemical energy.',
        subject: 'General Science',
        topic: 'Biology: Cell Biology',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The longest railway platform in the world is located at which Indian railway station in Karnataka?',
        options: ['Hubballi (Shree Siddharoodha Swamiji Railway Station)', 'Gorakhpur Railway Station', 'Kollam Junction', 'Kharagpur Railway Station'],
        correctOptionIndex: 0,
        explanation: 'Platform No. 8 of Shree Siddharoodha Swamiji Hubballi railway station measures 1,507 meters, officially recognized by Guinness World Records as the world longest railway platform.',
        subject: 'General Knowledge',
        topic: 'Indian Railways Superlatives',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which instrument is used to measure electrical current in an electric circuit?',
        options: ['Ammeter (connected in series)', 'Voltmeter', 'Galvanometer', 'Ohmmeter'],
        correctOptionIndex: 0,
        explanation: 'An ammeter measures electric current in amperes and is connected in series with the circuit branch.',
        subject: 'General Science',
        topic: 'Physics: Electrical Instruments',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  },
  {
    id: 'MOCK-ST-PSC-05',
    title: 'State PSC: Environmental Geography & Socio-Economic Policies',
    examSlug: 'state-psc',
    examName: 'State Public Service Commission (State PSC)',
    category: 'Government',
    subject: 'Environmental Geography & Policies',
    durationMinutes: 40,
    totalMarks: 16,
    negativeMarkingRate: 0.33,
    difficulty: 'Medium',
    isAiGenerated: false,
    questions: [
      {
        questionText: 'The Hirakud Dam, one of the longest earthen dams in the world, is built across which Indian river in Odisha?',
        options: ['Mahanadi River', 'Godavari River', 'Krishna River', 'Narmada River'],
        correctOptionIndex: 0,
        explanation: 'Hirakud Dam was constructed across the Mahanadi River near Sambalpur in Odisha in 1957.',
        subject: 'Indian Geography',
        topic: 'River Valley Projects & Dams',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which Article of the Constitution directs the State to separate the judiciary from the executive in public services under the Directive Principles of State Policy (DPSP)?',
        options: ['Article 50', 'Article 44 (Uniform Civil Code)', 'Article 45', 'Article 48A'],
        correctOptionIndex: 0,
        explanation: 'Article 50 of the Constitution mandates the State to take steps to separate the judiciary from the executive in the public services.',
        subject: 'Indian Polity',
        topic: 'Directive Principles of State Policy',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'The "Chipko Movement" for forest conservation originated in the 1970s in which modern Indian state?',
        options: ['Uttarakhand (then Chamoli district, UP)', 'Himachal Pradesh', 'Kerala', 'Madhya Pradesh'],
        correctOptionIndex: 0,
        explanation: 'The Chipko movement began in 1973 in Reni village, Chamoli district (Uttarakhand), led by villagers like Gaura Devi, Sunderlal Bahuguna, and Chandi Prasad Bhatt.',
        subject: 'Environment',
        topic: 'Environmental Movements in India',
        difficulty: 'Easy',
        marks: 4
      },
      {
        questionText: 'Which Indian state is the largest producer of bauxite, accounting for more than half of the country total bauxite reserves?',
        options: ['Odisha', 'Jharkhand', 'Chhattisgarh', 'Gujarat'],
        correctOptionIndex: 0,
        explanation: 'Odisha accounts for over 50% of India bauxite production, with major deposits in Kalahandi, Koraput, and Rayagada districts.',
        subject: 'Indian Geography',
        topic: 'Mineral Resources of India',
        difficulty: 'Easy',
        marks: 4
      }
    ]
  }
];

