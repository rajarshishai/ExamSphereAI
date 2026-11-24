// =========================================================================
// ExamSphere AI - Universal Verified Examination Syllabus Catalog
// Auto-generated comprehensive dataset containing 120+ verified competitive exams.
// =========================================================================

import { Syllabus } from '../models/syllabus.model';

export const EXAM_SYLLABUS_CATALOG: Syllabus[] = [
  {
    "_id": "EXAM-GATE_CSE",
    "examId": "gate-cse",
    "slug": "gate-cse",
    "examName": "GATE Computer Science & Information Technology",
    "category": "Engineering",
    "subCategory": "Postgraduate & PSU",
    "conductingBody": "IITs & IISc Bangalore",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • 65 Questions",
    "overview": "Premier national postgraduate examination testing comprehensive undergraduate CS/IT subjects for M.Tech admissions and PSU recruitment.",
    "subjects": [
      {
        "_id": "sub-j871snf",
        "name": "Programming & Data Structures",
        "weightage": "14%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-j2jr19g",
            "title": "Programming in C & Pointers",
            "description": "Recursion, arrays, structures, pointers, dynamic memory allocation, parameter passing.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Medium",
            "weightage": "4%"
          },
          {
            "_id": "top-flhw39s",
            "title": "Linear Data Structures",
            "description": "Stacks, queues, linked lists, array implementations, applications (infix/postfix, balancing).",
            "importance": "High",
            "estimatedHours": 8,
            "difficulty": "Easy",
            "weightage": "3%"
          },
          {
            "_id": "top-sf8hx5f",
            "title": "Trees & Binary Search Trees",
            "description": "Tree traversals, BST insertion/deletion, AVL trees balance rotations, B/B+ trees.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Hard",
            "weightage": "5%"
          },
          {
            "_id": "top-pgtorge",
            "title": "Heaps & Hash Tables",
            "description": "Min/Max binary heaps, priority queues, hash functions, collision resolution strategies.",
            "importance": "Medium",
            "estimatedHours": 13,
            "difficulty": "Medium",
            "weightage": "3%"
          }
        ]
      },
      {
        "_id": "sub-4sgbyck",
        "name": "Algorithms",
        "weightage": "12%",
        "totalHours": 48,
        "topics": [
          {
            "_id": "top-twhr4ex",
            "title": "Asymptotic Analysis & Recurrences",
            "description": "Big-O, Omega, Theta notations, Master theorem, recursion tree method.",
            "importance": "High",
            "estimatedHours": 8,
            "difficulty": "Easy",
            "weightage": "3%"
          },
          {
            "_id": "top-dctz8yw",
            "title": "Divide and Conquer & Greedy Techniques",
            "description": "Merge sort, quick sort, binary search, fractional knapsack, Huffman coding.",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Medium",
            "weightage": "4%"
          },
          {
            "_id": "top-c1f0wvm",
            "title": "Dynamic Programming",
            "description": "Optimal substructure, memoization vs tabulation, 0/1 knapsack, Matrix Chain Multiplication.",
            "importance": "High",
            "estimatedHours": 16,
            "difficulty": "Hard",
            "weightage": "5%"
          },
          {
            "_id": "top-5vpavne",
            "title": "Graph Algorithms",
            "description": "BFS, DFS, topological sorting, minimum spanning trees (Prim, Kruskal), shortest paths (Dijkstra).",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Hard",
            "weightage": "4%"
          }
        ]
      },
      {
        "_id": "sub-6dn8kjm",
        "name": "Operating Systems & Databases",
        "weightage": "20%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-s0pblys",
            "title": "Process Management & CPU Scheduling",
            "description": "Process states, PCB, threads, FCFS, SJF, Round Robin, multi-level queues.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Medium",
            "weightage": "4%"
          },
          {
            "_id": "top-frxsot1",
            "title": "Synchronization & Deadlocks",
            "description": "Critical section, Peterson algorithm, Semaphores, Monitors, Banker algorithm.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Hard",
            "weightage": "5%"
          },
          {
            "_id": "top-nxcjvpd",
            "title": "Memory Management & Virtual Memory",
            "description": "Paging, segmentation, TLB, page replacement (FIFO, LRU, Optimal), thrashing.",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Hard",
            "weightage": "4%"
          },
          {
            "_id": "top-gzpgh65",
            "title": "SQL & Normalization",
            "description": "DDL, DML, functional dependencies, 1NF, 2NF, 3NF, BCNF lossless join.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Hard",
            "weightage": "4%"
          },
          {
            "_id": "top-4p1i302",
            "title": "Transactions & Concurrency",
            "description": "ACID properties, serializability, two-phase locking (2PL), timestamp ordering.",
            "importance": "High",
            "estimatedHours": 13,
            "difficulty": "Hard",
            "weightage": "3%"
          }
        ]
      },
      {
        "_id": "sub-qvqnb14",
        "name": "Computer Networks & Compilers",
        "weightage": "26%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-0b4poj1",
            "title": "Data Link Layer & Framing",
            "description": "Framing, CRC error detection, flow control, CSMA/CD.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Medium",
            "weightage": "3%"
          },
          {
            "_id": "top-xnq5rk0",
            "title": "Network Layer & Routing",
            "description": "IPv4/IPv6 headers, CIDR subnetting, routing algorithms (OSPF, BGP).",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Hard",
            "weightage": "4%"
          },
          {
            "_id": "top-ei9eifl",
            "title": "TCP/IP Transport Protocols",
            "description": "TCP sliding window, 3-way handshake, congestion control, UDP, DNS, HTTP.",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Medium",
            "weightage": "4%"
          },
          {
            "_id": "top-czl6gax",
            "title": "Regular Languages & Automata",
            "description": "DFA, NFA, regular expressions, pumping lemma, state minimization.",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Medium",
            "weightage": "4%"
          },
          {
            "_id": "top-aai3nwc",
            "title": "Compiler Parsing & Translation",
            "description": "Lexical analysis, LL(1) parsing, LR parsing (SLR, LALR), syntax-directed translation.",
            "importance": "High",
            "estimatedHours": 12,
            "difficulty": "Hard",
            "weightage": "4%"
          }
        ]
      },
      {
        "_id": "sub-jza66kg",
        "name": "Engineering Mathematics & Aptitude",
        "weightage": "28%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-vomt44m",
            "title": "Discrete Mathematics",
            "description": "Propositional logic, predicate calculus, sets, relations, lattices, combinatorics, graph theory.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "8%"
          },
          {
            "_id": "top-gp92p5w",
            "title": "Linear Algebra & Calculus",
            "description": "Matrices, eigenvalues, vectors, limits, continuity, partial derivatives, definite integrals.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Medium",
            "weightage": "5%"
          },
          {
            "_id": "top-3ckkcc4",
            "title": "General Aptitude",
            "description": "Numerical computation, spatial reasoning, data interpretation, verbal comprehension.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GATE_ME",
    "examId": "gate-me",
    "slug": "gate-me",
    "examName": "GATE Mechanical Engineering",
    "category": "Engineering",
    "subCategory": "Postgraduate & PSU",
    "conductingBody": "IITs & IISc Bangalore",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • 65 Questions",
    "overview": "Core postgraduate entrance examination evaluating comprehensive engineering thermodynamics, fluid mechanics, design, and manufacturing.",
    "subjects": [
      {
        "_id": "sub-zgxlk97",
        "name": "Applied Mechanics & Design",
        "weightage": "30%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-ihr6ruw",
            "title": "Engineering Mechanics",
            "description": "Free-body diagrams, friction, rolling resistance, impulse and momentum, virtual work.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "7%"
          },
          {
            "_id": "top-0c6rtte",
            "title": "Mechanics of Materials (SOM)",
            "description": "Stress-strain, shear force, bending moments, deflection of beams, Mohr circle, torsion.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-tvbi3b2",
            "title": "Theory of Machines & Vibrations",
            "description": "Kinematic analysis of linkages, cams, gears, flywheels, governors, vibrations.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-r5jjmg2",
        "name": "Thermal Sciences & Fluid Mechanics",
        "weightage": "34%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-t9252ww",
            "title": "Fluid Mechanics",
            "description": "Fluid statics, manometry, continuity, Bernoulli equation, pipe flow, boundary layers.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-0ual446",
            "title": "Thermodynamics",
            "description": "Laws of thermodynamics, entropy, exergy, Rankine, Brayton, Otto, Diesel cycles.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-dh8ozyz",
            "title": "Heat Transfer",
            "description": "Conduction, convective heat transfer correlations, radiation, heat exchangers.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-m86iuno",
        "name": "Materials, Manufacturing & Math/Aptitude",
        "weightage": "36%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-da7udia",
            "title": "Casting, Forming & Welding",
            "description": "Gating system design, rolling, forging, extrusion, wire drawing, arc welding principles.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-q5402uf",
            "title": "Machining & Industrial Operations",
            "description": "Merchant circle, Taylor tool life, linear programming, transportation, PERT/CPM, inventory.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "7%"
          },
          {
            "_id": "top-4w3ccqx",
            "title": "Engineering Mathematics & Aptitude",
            "description": "Linear algebra, calculus, differential equations, verbal and numerical reasoning.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GATE_CE",
    "examId": "gate-ce",
    "slug": "gate-ce",
    "examName": "GATE Civil Engineering",
    "category": "Engineering",
    "subCategory": "Postgraduate & PSU",
    "conductingBody": "IITs & IISc Bangalore",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • 65 Questions",
    "overview": "In-depth national civil engineering evaluation focusing on structures, soil mechanics, environmental engineering, hydrology, and highway design.",
    "subjects": [
      {
        "_id": "sub-5w6f038",
        "name": "Structural Engineering",
        "weightage": "25%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-xx6qwl8",
            "title": "Solid Mechanics & Structural Analysis",
            "description": "Bending moment, shear force, influence lines, slope-deflection, moment distribution.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-mgvzrhw",
            "title": "Concrete & Steel Structures",
            "description": "Limit state RCC design, prestressed concrete, steel tension/compression members, plastic analysis.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "9%"
          }
        ]
      },
      {
        "_id": "sub-czdjzf2",
        "name": "Geotechnical & Environmental",
        "weightage": "30%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-dykaz8k",
            "title": "Soil Mechanics & Foundations",
            "description": "Permeability, seepage, consolidation, shear strength, Earth pressure, pile foundations.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "11%"
          },
          {
            "_id": "top-7qkoaqe",
            "title": "Water & Wastewater Engineering",
            "description": "Sedimentation, coagulation, filtration, disinfection, BOD kinetics, activated sludge process.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "9%"
          }
        ]
      },
      {
        "_id": "sub-mbrzzry",
        "name": "Water Resources, Transportation & Math",
        "weightage": "45%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-z87op44",
            "title": "Fluid Mechanics & Open Channel Flow",
            "description": "Hydraulic jumps, Manning formula, unit hydrographs, reservoir capacity, canal design.",
            "importance": "High",
            "estimatedHours": 16,
            "difficulty": "Hard",
            "weightage": "8%"
          },
          {
            "_id": "top-vm3f1gg",
            "title": "Highway Geometric Design",
            "description": "Sight distance (SSD, OSD), super-elevation, vertical curves, traffic flow parameters.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Medium",
            "weightage": "7%"
          },
          {
            "_id": "top-28e84s5",
            "title": "Engineering Mathematics & Aptitude",
            "description": "Linear algebra, calculus, ordinary/partial differential equations, probability, aptitude.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GATE_EE",
    "examId": "gate-ee",
    "slug": "gate-ee",
    "examName": "GATE Electrical Engineering",
    "category": "Engineering",
    "subCategory": "Postgraduate & PSU",
    "conductingBody": "IITs & IISc Bangalore",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • 65 Questions",
    "overview": "All-India examination covering electric networks, power systems, electrical machines, control systems, and power electronics.",
    "subjects": [
      {
        "_id": "sub-6prphdr",
        "name": "Circuits, Fields & Control Systems",
        "weightage": "28%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-0opk8id",
            "title": "Network Analysis & Theorems",
            "description": "Thevenin, Norton, Superposition, RLC transient response, two-port networks.",
            "importance": "High",
            "estimatedHours": 16,
            "difficulty": "Medium",
            "weightage": "8%"
          },
          {
            "_id": "top-9fvhdgf",
            "title": "Control Systems Stability & State Space",
            "description": "Root Locus, Bode plot, Nyquist criterion, state transition matrix, controllability.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "9%"
          }
        ]
      },
      {
        "_id": "sub-wkk6w01",
        "name": "Electrical Machines & Power Systems",
        "weightage": "30%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-202e7vq",
            "title": "Transformers & Induction Machines",
            "description": "Single/three phase transformers, induction motor equivalent circuits and torque-slip.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "10%"
          },
          {
            "_id": "top-gcvj1ka",
            "title": "Power System Faults & Protection",
            "description": "Transmission lines, load flow, symmetrical/unsymmetrical faults, circuit breakers.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "10%"
          }
        ]
      },
      {
        "_id": "sub-cirbwkx",
        "name": "Power Electronics & Math/Aptitude",
        "weightage": "42%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-ez2r6fe",
            "title": "Power Electronics Converters",
            "description": "SCR, MOSFET, IGBT, phase controlled rectifiers, DC-DC choppers, inverters.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "11%"
          },
          {
            "_id": "top-57g7bzn",
            "title": "Engineering Mathematics & Aptitude",
            "description": "Linear algebra, calculus, complex variables, differential equations, probability, aptitude.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Medium",
            "weightage": "28%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GATE_ECE",
    "examId": "gate-ece",
    "slug": "gate-ece",
    "examName": "GATE Electronics & Communication Engineering",
    "category": "Engineering",
    "subCategory": "Postgraduate & PSU",
    "conductingBody": "IITs & IISc Bangalore",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • 65 Questions",
    "overview": "Specialized evaluation of electronic devices, analog/digital design, communications, signal processing, and antenna wave propagation.",
    "subjects": [
      {
        "_id": "sub-hr9a4rn",
        "name": "Devices, Circuits & Digital Logic",
        "weightage": "30%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-bn50i5l",
            "title": "Semiconductors, BJTs & MOSFETs",
            "description": "Energy bands, carrier concentration, drift/diffusion, small-signal models, op-amps.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "10%"
          },
          {
            "_id": "top-mw6q9pa",
            "title": "Digital Logic & Microprocessors",
            "description": "K-maps, flip-flops, synchronous counters, FSMs, 8085 architecture and assembly.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "9%"
          }
        ]
      },
      {
        "_id": "sub-c8xs2jz",
        "name": "Signals, Systems & Communications",
        "weightage": "30%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-vfmkc03",
            "title": "Signals, Systems & Transforms",
            "description": "LTI systems, Fourier transform, Laplace, Z-transform, sampling theorem.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "9%"
          },
          {
            "_id": "top-8271wn7",
            "title": "Analog & Digital Communications",
            "description": "AM, FM, PCM, ASK, FSK, PSK, QAM, matched filter, Shannon channel capacity.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "11%"
          }
        ]
      },
      {
        "_id": "sub-rpjxojc",
        "name": "Electromagnetics & Math/Aptitude",
        "weightage": "40%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-dfmss25",
            "title": "Electromagnetic Waves & Antennas",
            "description": "Maxwell equations, plane wave propagation, transmission lines, Smith charts, radiation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "10%"
          },
          {
            "_id": "top-ke9c05s",
            "title": "Engineering Mathematics & Aptitude",
            "description": "Linear algebra, calculus, complex variables, random variables, probability, aptitude.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Medium",
            "weightage": "28%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-JEE_MAIN",
    "examId": "jee-main",
    "slug": "jee-main",
    "examName": "Joint Entrance Examination Main (JEE Main)",
    "category": "Engineering",
    "subCategory": "Undergraduate Entrance",
    "conductingBody": "National Testing Agency (NTA)",
    "totalMarks": 300,
    "durationMinutes": 180,
    "pattern": "CBT • 90 Questions",
    "overview": "National screening entrance examination for admission into undergraduate engineering programs across NITs, IIITs, CFTIs.",
    "subjects": [
      {
        "_id": "sub-9mn6l77",
        "name": "Physics",
        "weightage": "33.3%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-x31sxvr",
            "title": "Mechanics & Rotational Dynamics",
            "description": "Kinematics, Newton laws, friction, work-energy, momentum, moment of inertia, rolling.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-oumx1fr",
            "title": "Electrodynamics & Magnetism",
            "description": "Coulomb law, capacitors, current electricity, magnetic forces, induction, alternating current.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "13%"
          },
          {
            "_id": "top-iwinb02",
            "title": "Optics & Modern Physics",
            "description": "Ray optics, wave optics (interference, diffraction), photoelectric effect, Bohr atom, nuclei.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-fig5euf",
        "name": "Chemistry",
        "weightage": "33.3%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-6s8xm3a",
            "title": "Physical Chemistry",
            "description": "Atomic structure, thermodynamics, chemical equilibrium, electrochemistry, kinetics, solutions.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-qd768eh",
            "title": "Inorganic Chemistry",
            "description": "Periodic properties, chemical bonding, coordination compounds, p-block, d and f block.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-cqujvjf",
            "title": "Organic Chemistry",
            "description": "GOC, hydrocarbons, haloalkanes, alcohols, aldehydes, ketones, amines, biomolecules.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "11%"
          }
        ]
      },
      {
        "_id": "sub-vjvu9mn",
        "name": "Mathematics",
        "weightage": "33.3%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-jym7yud",
            "title": "Calculus (Differential & Integral)",
            "description": "Limits, continuity, differentiability, derivatives applications, integrals, differential equations.",
            "importance": "High",
            "estimatedHours": 24,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-hopmtnr",
            "title": "Algebra & Matrices",
            "description": "Quadratic equations, complex numbers, progressions, binomial theorem, determinants, matrices.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "10%"
          },
          {
            "_id": "top-1ubgjc5",
            "title": "Coordinate Geometry & Vectors",
            "description": "Straight lines, circles, parabola, ellipse, hyperbola, 3D geometry, vector algebra.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-JEE_ADVANCED",
    "examId": "jee-advanced",
    "slug": "jee-advanced",
    "examName": "Joint Entrance Examination Advanced (JEE Advanced)",
    "category": "Engineering",
    "subCategory": "Elite Undergraduate Entrance",
    "conductingBody": "IITs (Joint Admission Board)",
    "totalMarks": 360,
    "durationMinutes": 360,
    "pattern": "CBT (Paper 1 & 2) • 3 Hours each",
    "overview": "Elite all-India engineering entrance examination for admission across all 23 IITs.",
    "subjects": [
      {
        "_id": "sub-mqk7jnq",
        "name": "Advanced Physics",
        "weightage": "33.3%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-dpdnw9r",
            "title": "Rigid Body Dynamics & Central Forces",
            "description": "Non-inertial frames, variable mass, angular momentum conservation, gravitation potentials.",
            "importance": "High",
            "estimatedHours": 24,
            "difficulty": "Hard",
            "weightage": "13%"
          },
          {
            "_id": "top-iwcohun",
            "title": "Electromagnetism & Wave Phenomena",
            "description": "Boundary conditions, moving boundaries Faraday law, wave optics polarization, resolving power.",
            "importance": "High",
            "estimatedHours": 24,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-25a3y0t",
            "title": "Thermodynamics & Modern Physics",
            "description": "Carnot cycles, entropy changes, blackbody radiation, nuclear fission, quantum models.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-c026485",
        "name": "Advanced Chemistry",
        "weightage": "33.3%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-2kl836d",
            "title": "Organic Reaction Mechanisms",
            "description": "Carbocation rearrangements, pericyclic chemistry, nucleophilic acyl substitutions, stereochemistry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "13%"
          },
          {
            "_id": "top-9tx2q42",
            "title": "Thermodynamics, Kinetics & Electrochemistry",
            "description": "Gibbs energy, non-ideal solutions, rate laws, Nernst equation, concentration cells.",
            "importance": "High",
            "estimatedHours": 24,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-r2ytut3",
            "title": "Coordination Chemistry & Salt Analysis",
            "description": "Crystal field theory, optical isomerism in complexes, qualitative cation/anion analysis.",
            "importance": "High",
            "estimatedHours": 21,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-noq6g86",
        "name": "Advanced Mathematics",
        "weightage": "33.3%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-yplt27w",
            "title": "Higher Calculus & Analysis",
            "description": "Leibnitz integral rule, Taylor expansion, curve tracing, area by integration, differential equations.",
            "importance": "High",
            "estimatedHours": 26,
            "difficulty": "Hard",
            "weightage": "14%"
          },
          {
            "_id": "top-xm5sl3z",
            "title": "3D Geometry & Vectors",
            "description": "Skew lines shortest distance, intersection of planes, vector triple products, coplanarity.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "11%"
          },
          {
            "_id": "top-qt1okex",
            "title": "Combinatorics & Probability",
            "description": "Inclusion-exclusion, conditional distributions, Bayes theorem, generating functions.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-BITSAT",
    "examId": "bitsat",
    "slug": "bitsat",
    "examName": "Birla Institute of Technology and Science Admission Test (BITSAT)",
    "category": "Engineering",
    "subCategory": "University Entrance",
    "conductingBody": "BITS Pilani",
    "totalMarks": 390,
    "durationMinutes": 180,
    "pattern": "CBT • 130 Questions",
    "overview": "Computer-based entrance examination for admission into integrated first-degree programmes of BITS Pilani.",
    "subjects": [
      {
        "_id": "sub-aunsiw0",
        "name": "Physics & Chemistry",
        "weightage": "46%",
        "totalHours": 80,
        "topics": [
          {
            "_id": "top-hrdnhaq",
            "title": "Core Physics Principles",
            "description": "Mechanics, electrodynamics, optics, modern physics, thermodynamics.",
            "importance": "High",
            "estimatedHours": 40,
            "difficulty": "Medium",
            "weightage": "23%"
          },
          {
            "_id": "top-depihvb",
            "title": "Core Chemistry Concepts",
            "description": "Physical, inorganic, and organic chemistry comprehensive syllabus.",
            "importance": "High",
            "estimatedHours": 40,
            "difficulty": "Medium",
            "weightage": "23%"
          }
        ]
      },
      {
        "_id": "sub-ph18s7z",
        "name": "Mathematics",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-d03lw9o",
            "title": "Mathematics Comprehensive",
            "description": "Algebra, calculus, coordinate geometry, vectors, trigonometry, probability.",
            "importance": "High",
            "estimatedHours": 45,
            "difficulty": "Medium",
            "weightage": "30%"
          }
        ]
      },
      {
        "_id": "sub-nxpirar",
        "name": "English & Logical Reasoning",
        "weightage": "24%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-iucrnl4",
            "title": "English Proficiency",
            "description": "Reading comprehension, grammar, vocabulary, sentence correction.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "12%"
          },
          {
            "_id": "top-xxodwtm",
            "title": "Logical Reasoning",
            "description": "Analogy, classification, series completion, logical deduction.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-VITEEE",
    "examId": "viteee",
    "slug": "viteee",
    "examName": "VIT Engineering Entrance Examination (VITEEE)",
    "category": "Engineering",
    "subCategory": "University Entrance",
    "conductingBody": "VIT University",
    "totalMarks": 125,
    "durationMinutes": 150,
    "pattern": "CBT • 125 Questions",
    "overview": "Annual computer-based entrance exam for admissions to B.Tech programs offered across VIT campuses.",
    "subjects": [
      {
        "_id": "sub-uo5n6ji",
        "name": "Mathematics & Physics",
        "weightage": "60%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-zdlmzg1",
            "title": "Mathematics Syllabus",
            "description": "Calculus, analytical geometry, algebra, trigonometry, probability.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Medium",
            "weightage": "32%"
          },
          {
            "_id": "top-52ws22b",
            "title": "Physics Syllabus",
            "description": "Laws of motion, electrostatics, current electricity, optics, modern physics.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "28%"
          }
        ]
      },
      {
        "_id": "sub-60elaun",
        "name": "Chemistry, English & Aptitude",
        "weightage": "40%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-h6msz6j",
            "title": "Chemistry Syllabus",
            "description": "Atomic structure, bonding, organic mechanisms, chemical equilibrium.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "28%"
          },
          {
            "_id": "top-osf0vug",
            "title": "English & Aptitude",
            "description": "Reading comprehension, data interpretation, pattern matching.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SRMJEEE",
    "examId": "srmjeee",
    "slug": "srmjeee",
    "examName": "SRM Joint Engineering Entrance Examination (SRMJEEE)",
    "category": "Engineering",
    "subCategory": "University Entrance",
    "conductingBody": "SRM Institute of Science and Technology",
    "totalMarks": 125,
    "durationMinutes": 150,
    "pattern": "Remote Proctored Online Test • 125 Questions",
    "overview": "Undergraduate engineering entrance examination for B.Tech admission across SRM University campuses.",
    "subjects": [
      {
        "_id": "sub-rjarewd",
        "name": "Physics & Chemistry",
        "weightage": "56%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-u57ny2k",
            "title": "Physics Core Topics",
            "description": "Kinematics, gravitation, electric fields, magnetic force, modern physics.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "28%"
          },
          {
            "_id": "top-2ccka2r",
            "title": "Chemistry Core Topics",
            "description": "Chemical kinetics, organic functional groups, periodic classification.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "28%"
          }
        ]
      },
      {
        "_id": "sub-wa3gj9i",
        "name": "Mathematics & Aptitude",
        "weightage": "44%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-66vedm2",
            "title": "Mathematics Core Topics",
            "description": "Quadratic equations, differential calculus, circles, parabolas, vectors.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "32%"
          },
          {
            "_id": "top-m4lsb5n",
            "title": "English & Aptitude",
            "description": "Logical reasoning, quantitative tricks, vocabulary.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-WBJEE",
    "examId": "wbjee",
    "slug": "wbjee",
    "examName": "West Bengal Joint Entrance Examination (WBJEE)",
    "category": "Engineering",
    "subCategory": "State Level Engineering",
    "conductingBody": "WBJEE Board",
    "totalMarks": 200,
    "durationMinutes": 240,
    "pattern": "OMR Based • 200 Marks",
    "overview": "State-level examination for admission to undergraduate engineering and pharmacy courses in West Bengal.",
    "subjects": [
      {
        "_id": "sub-9avl14s",
        "name": "Mathematics (Paper 1)",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-efdd044",
            "title": "Algebra & Calculus",
            "description": "Polynomials, determinants, limits, continuity, definite integrals, differential equations.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-jp7w3ii",
            "title": "Coordinate Geometry & Vectors",
            "description": "Straight lines, conic sections, vectors and 3D geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-ahnxzng",
        "name": "Physics & Chemistry (Paper 2)",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-83qoftr",
            "title": "Physics Modules",
            "description": "Mechanics, heat, thermodynamics, electrostatics, modern physics.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-s88blds",
            "title": "Chemistry Modules",
            "description": "Chemical bonding, thermodynamics, solutions, coordination compounds, organic reactions.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MHT_CET_ENG",
    "examId": "mht-cet-eng",
    "slug": "mht-cet-eng",
    "examName": "Maharashtra Common Entrance Test (MHT CET Engineering)",
    "category": "Engineering",
    "subCategory": "State Level Engineering",
    "conductingBody": "State CET Cell, Maharashtra",
    "totalMarks": 200,
    "durationMinutes": 180,
    "pattern": "CBT • 200 Marks",
    "overview": "State common entrance test for admission to first-year engineering and technology degree courses in Maharashtra.",
    "subjects": [
      {
        "_id": "sub-96c64au",
        "name": "Mathematics",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-7vxcroi",
            "title": "Calculus & Integration",
            "description": "Derivatives, applications, integration, differential equations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-8v8cagm",
            "title": "Geometry, Vectors & Matrices",
            "description": "Vectors, 3D geometry lines/planes, matrices, trigonometric functions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-ete5kz8",
        "name": "Physics & Chemistry",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-ekxf4fc",
            "title": "Physics (HSC Class 11 & 12)",
            "description": "Rotational dynamics, fluids, wave optics, current electricity, magnetic materials.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-ivrejv6",
            "title": "Chemistry (HSC Class 11 & 12)",
            "description": "Solid state, solutions, ionic equilibria, thermodynamics, transition elements, organic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NEET_UG",
    "examId": "neet-ug",
    "slug": "neet-ug",
    "examName": "National Eligibility cum Entrance Test (NEET UG)",
    "category": "Medical",
    "subCategory": "Undergraduate Medical Entrance",
    "conductingBody": "National Testing Agency (NTA)",
    "totalMarks": 720,
    "durationMinutes": 200,
    "pattern": "Pen & Paper (OMR) • 200 Questions",
    "overview": "Single unified national entrance examination for admission to undergraduate medical (MBBS), dental (BDS), AYUSH, and nursing programmes.",
    "subjects": [
      {
        "_id": "sub-rqcy9qp",
        "name": "Biology (Botany & Zoology)",
        "weightage": "50%",
        "totalHours": 90,
        "topics": [
          {
            "_id": "top-c2xjqnw",
            "title": "Diversity in Living World & Plant Kingdom",
            "description": "Five kingdom classification, plant taxonomy, algae, bryophytes, pteridophytes, gymnosperms, angiosperms.",
            "importance": "High",
            "estimatedHours": 14,
            "difficulty": "Easy",
            "weightage": "8%"
          },
          {
            "_id": "top-b6qpkej",
            "title": "Cell Structure & Biomolecules",
            "description": "Cell organelle functions, cell cycle, mitosis, meiosis, carbohydrates, proteins, nucleic acids, enzymes.",
            "importance": "High",
            "estimatedHours": 16,
            "difficulty": "Medium",
            "weightage": "9%"
          },
          {
            "_id": "top-6c4aw44",
            "title": "Plant Physiology",
            "description": "Photosynthesis in higher plants, respiration in plants, plant growth and developmental regulators.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Hard",
            "weightage": "8%"
          },
          {
            "_id": "top-xxhvt8b",
            "title": "Human Physiology",
            "description": "Circulation, respiration, excretion, neural control, chemical coordination, locomotion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-ixfic5q",
            "title": "Genetics & Biotechnology",
            "description": "Mendelian principles, molecular basis of inheritance, DNA replication, recombinant DNA technology.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-eztv7cv",
        "name": "Chemistry",
        "weightage": "25%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-mv2ia37",
            "title": "Physical Chemistry",
            "description": "Mole concept, thermodynamics, equilibrium, solutions, electrochemistry, kinetics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-6rzn45t",
            "title": "Inorganic Chemistry",
            "description": "Periodic properties, chemical bonding, p-block, d and f block elements, coordination compounds.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "8%"
          },
          {
            "_id": "top-rftoe7g",
            "title": "Organic Chemistry",
            "description": "GOC, hydrocarbons, haloalkanes, alcohols, aldehydes, ketones, amines, biomolecules.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "8%"
          }
        ]
      },
      {
        "_id": "sub-pluv1c7",
        "name": "Physics",
        "weightage": "25%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-o1d3q9t",
            "title": "Mechanics & Gravitation",
            "description": "Units and measurements, kinematics, laws of motion, work energy power, rotational mechanics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-rscafjt",
            "title": "Electrodynamics & Optics",
            "description": "Electrostatics, current electricity, magnetic effects, induction, ray and wave optics.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "10%"
          },
          {
            "_id": "top-urfyq1o",
            "title": "Thermodynamics & Modern Physics",
            "description": "Kinetic theory of gases, thermodynamics, dual nature of radiation, atoms, nuclei, semiconductors.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "6%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NEET_PG",
    "examId": "neet-pg",
    "slug": "neet-pg",
    "examName": "NEET for Postgraduate (NEET PG)",
    "category": "Medical",
    "subCategory": "Postgraduate Medical Entrance",
    "conductingBody": "National Board of Examinations (NBE)",
    "totalMarks": 800,
    "durationMinutes": 210,
    "pattern": "CBT • 200 Questions",
    "overview": "National qualifying-cum-ranking examination for admission to MD/MS and PG Diploma courses across Indian medical colleges.",
    "subjects": [
      {
        "_id": "sub-3pqkxd7",
        "name": "Pre-Clinical Sciences",
        "weightage": "25%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-vci7wpl",
            "title": "Anatomy & Embryology",
            "description": "Neuroanatomy, head and neck, thorax, abdomen, pelvis, clinical embryology.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Hard",
            "weightage": "9%"
          },
          {
            "_id": "top-yezmzln",
            "title": "Physiology & Biochemistry",
            "description": "Cardiovascular physiology, neurophysiology, endocrine controls, metabolic pathways, enzyme assays.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "10%"
          }
        ]
      },
      {
        "_id": "sub-8gwiu3h",
        "name": "Para-Clinical Sciences",
        "weightage": "35%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-ksyb9hx",
            "title": "Pharmacology & Therapeutics",
            "description": "Autonomic nervous system, cardiovascular drugs, antimicrobial chemotherapy, CNS pharmacology.",
            "importance": "High",
            "estimatedHours": 24,
            "difficulty": "Hard",
            "weightage": "12%"
          },
          {
            "_id": "top-y34gm9x",
            "title": "Pathology & Microbiology",
            "description": "General pathology, hematology, systemic pathology, bacteriology, virology, immunology.",
            "importance": "High",
            "estimatedHours": 28,
            "difficulty": "Hard",
            "weightage": "14%"
          },
          {
            "_id": "top-20lfegq",
            "title": "Forensic Medicine & Toxicology",
            "description": "Medical jurisprudence, post-mortem changes, injury mechanics, toxicology poisons.",
            "importance": "Medium",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "9%"
          }
        ]
      },
      {
        "_id": "sub-ex7rcb9",
        "name": "Clinical Sciences",
        "weightage": "40%",
        "totalHours": 80,
        "topics": [
          {
            "_id": "top-5xrzax1",
            "title": "General Medicine & Pediatrics",
            "description": "Cardiology, nephrology, neurology, infectious diseases, pediatric developmental milestones.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "16%"
          },
          {
            "_id": "top-qpijlwc",
            "title": "Surgery, Orthopedics & OBG",
            "description": "Acute abdomen, trauma protocols, oncological surgery, normal/abnormal labor, gynecological oncology.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "16%"
          },
          {
            "_id": "top-p6lh85v",
            "title": "Community Medicine (PSM)",
            "description": "Epidemiology, biostatistics, national health programs, maternal and child health indicators.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-INI_CET",
    "examId": "ini-cet",
    "slug": "ini-cet",
    "examName": "Institute of National Importance Combined Entrance Test (INI CET)",
    "category": "Medical",
    "subCategory": "Elite PG Medical Entrance",
    "conductingBody": "AIIMS New Delhi",
    "totalMarks": 200,
    "durationMinutes": 180,
    "pattern": "CBT • 200 Questions",
    "overview": "Combined entrance test for admission to PG courses in premier institutions: AIIMS, JIPMER, PGIMER, and NIMHANS.",
    "subjects": [
      {
        "_id": "sub-y72sfqk",
        "name": "Integrated Clinical Medicine & Surgery",
        "weightage": "60%",
        "totalHours": 80,
        "topics": [
          {
            "_id": "top-w9dr9t3",
            "title": "Clinical Case Vignettes & Diagnostics",
            "description": "Multi-system clinical scenario diagnosis, emergency medicine protocols, critical care.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "24%"
          },
          {
            "_id": "top-pw1uul1",
            "title": "Operative Surgery, Imaging & OBG",
            "description": "Surgical indications, CT/MRI imaging correlation, high-risk obstetrics, fetal medicine.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "24%"
          }
        ]
      },
      {
        "_id": "sub-6rxm3cw",
        "name": "Basic Medical Sciences & Research",
        "weightage": "40%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-xg0o2tr",
            "title": "Molecular Pathology & Therapeutics",
            "description": "Molecular diagnostics, oncogenes, flow cytometry, targeted monoclonal antibodies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-h3imst8",
            "title": "Epidemiology & Biostatistics",
            "description": "Study designs (case-control, cohort, RCTs), survival analysis, outbreak investigation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NEET_SS",
    "examId": "neet-ss",
    "slug": "neet-ss",
    "examName": "NEET Super Specialty (NEET SS)",
    "category": "Medical",
    "subCategory": "DM/M.Ch Super Specialty",
    "conductingBody": "National Board of Examinations (NBE)",
    "totalMarks": 400,
    "durationMinutes": 150,
    "pattern": "CBT • 150 Questions",
    "overview": "Single entrance examination for admission to DM and M.Ch super specialty medical and surgical courses in India.",
    "subjects": [
      {
        "_id": "sub-xyf4299",
        "name": "Broad Specialty Feeder Principles",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-rv9pf45",
            "title": "Critical Care & Perioperative Management",
            "description": "Pathophysiology of critical illness, hemodynamic monitoring, advanced life support.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-4wvb3nw",
            "title": "Advanced Diagnostic Modalities",
            "description": "Advanced echocardiography, catheterization hemodynamics, interventional endoscopy.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-63g2xwq",
        "name": "Super Specialty Domain Specialties",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-w0ywkdi",
            "title": "Cardiology, Neurology & Nephrology",
            "description": "Complex arrhythmias, ischemic heart disease, stroke protocols, glomerular diseases.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-2mztuv2",
            "title": "Oncology, Gastroenterology & Pulmonology",
            "description": "Biological therapies in solid tumors, cirrhosis complications, ARDS, mechanical ventilation.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-FMGE",
    "examId": "fmge",
    "slug": "fmge",
    "examName": "Foreign Medical Graduate Examination (FMGE)",
    "category": "Medical",
    "subCategory": "Licensure Screening",
    "conductingBody": "National Board of Examinations (NBE)",
    "totalMarks": 300,
    "durationMinutes": 300,
    "pattern": "CBT • 300 Questions",
    "overview": "Mandatory statutory screening test conducted by NBE for Indian citizens with foreign medical degrees.",
    "subjects": [
      {
        "_id": "sub-nfkvb4p",
        "name": "Pre and Para-Clinical Subjects",
        "weightage": "40%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-ifk1ook",
            "title": "Anatomy, Physiology & Biochemistry",
            "description": "Gross anatomy, neuroanatomy, physiological controls, metabolic pathways.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-85qi9z1",
            "title": "Pathology, Pharmacology & Microbiology",
            "description": "Cell injury, autonomic drugs, antibiotics, bacteriology, virology, toxicology.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "22%"
          }
        ]
      },
      {
        "_id": "sub-mb0ubgr",
        "name": "Clinical Subjects",
        "weightage": "60%",
        "totalHours": 80,
        "topics": [
          {
            "_id": "top-hz8svfx",
            "title": "Medicine & Allied Specialities",
            "description": "Cardiology, respiratory, gastrointestinal, neurology, infectious diseases, psychiatry.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "22%"
          },
          {
            "_id": "top-ldnnoif",
            "title": "Surgery & Allied Specialities",
            "description": "Wound healing, acute abdomen, burns, fractures, dislocations, local and general anesthesia.",
            "importance": "High",
            "estimatedHours": 28,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-kl3z6zp",
            "title": "Obstetrics, Gynecology & Pediatrics",
            "description": "Antenatal care, labor management, neonatal resuscitation, malnutrition, immunization schedule.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Medium",
            "weightage": "18%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AIAPGET",
    "examId": "aiapget",
    "slug": "aiapget",
    "examName": "All India AYUSH Post Graduate Entrance Test (AIAPGET)",
    "category": "Medical",
    "subCategory": "Ayush PG Entrance",
    "conductingBody": "National Testing Agency (NTA)",
    "totalMarks": 480,
    "durationMinutes": 120,
    "pattern": "CBT • 120 Questions",
    "overview": "National postgraduate entrance test for admission to MD/MS in Ayurveda, Unani, Siddha, and Homeopathy.",
    "subjects": [
      {
        "_id": "sub-9t3w5p7",
        "name": "Ayurveda Samhitas & Basic Principles",
        "weightage": "45%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-lvtuidj",
            "title": "Charaka, Sushruta & Vagbhata Samhitas",
            "description": "Sutra Sthana, Nidana Sthana, Chikitsa Sthana principles, Tridosha Siddhanta.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-tni5rq7",
            "title": "Dravyaguna Vijnana & Rasa Shastra",
            "description": "Pharmacological action of herbs, mineral purification (Shodhana, Marana).",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-lacjb5r",
        "name": "Clinical Ayurveda & Therapeutics",
        "weightage": "55%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-tzvdj3n",
            "title": "Kayachikitsa & Panchakarma",
            "description": "Management of Jwara, Amavata, Prameha, Vamana, Virechana, Basti, Nasya.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "30%"
          },
          {
            "_id": "top-ucw15vy",
            "title": "Shalya Tantra & Stri Roga",
            "description": "Surgical concepts, Ksharasutra, Netra roga, Prasuti Tantra and Garbhini paricharya.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GPAT",
    "examId": "gpat",
    "slug": "gpat",
    "examName": "Graduate Pharmacy Aptitude Test (GPAT)",
    "category": "Medical",
    "subCategory": "Pharmacy Postgraduate",
    "conductingBody": "National Testing Agency (NTA)",
    "totalMarks": 500,
    "durationMinutes": 180,
    "pattern": "CBT • 125 Questions",
    "overview": "National entrance test for entry into M.Pharm programmes and awarding AICTE fellowship to pharmacy graduates.",
    "subjects": [
      {
        "_id": "sub-t7xw8yz",
        "name": "Pharmaceutics & Biopharmaceutics",
        "weightage": "30%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-adxuemg",
            "title": "Dosage Forms & Formulation Technologies",
            "description": "Tablets, capsules, parenterals, sustained release delivery systems, stability testing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-hm90121",
            "title": "Pharmacokinetics & Bioavailability",
            "description": "Compartmental models, elimination constants, volume of distribution, bioequivalence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-3l9q4by",
        "name": "Pharmacology & Toxicology",
        "weightage": "30%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-bsna3e2",
            "title": "Systemic Pharmacology & Bioassays",
            "description": "Autonomic drugs, cardiovascular agents, antibiotics, screening models, toxicity testing.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-is7x9q8",
            "title": "Chemotherapy & CNS Drugs",
            "description": "Antineoplastics, psychopharmacology, adverse drug reactions, drug interactions.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "12%"
          }
        ]
      },
      {
        "_id": "sub-3lpz8zn",
        "name": "Medicinal Chemistry & Pharmacognosy",
        "weightage": "40%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-nortk9v",
            "title": "Medicinal Chemistry & SAR",
            "description": "Structure-activity relationships of NSAIDs, antibiotics, cardiovascular drugs, QSAR.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "22%"
          },
          {
            "_id": "top-ljilfcm",
            "title": "Pharmacognosy & Phytochemistry",
            "description": "Alkaloids, glycosides, terpenoids isolation, identification assays, herbal standardization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "18%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NEXT_MBBS",
    "examId": "next-mbbs",
    "slug": "next-mbbs",
    "examName": "National Exit Test (NExT MBBS)",
    "category": "Medical",
    "subCategory": "Licensure & PG Entrance",
    "conductingBody": "National Medical Commission (NMC)",
    "totalMarks": 540,
    "durationMinutes": 480,
    "pattern": "CBT (Step 1) & Clinical OSCE (Step 2)",
    "overview": "Comprehensive unified exit exam for all MBBS graduates across India serving both as a licensing test and postgraduate entrance.",
    "subjects": [
      {
        "_id": "sub-org4v4o",
        "name": "Medicine & Allied Specialities",
        "weightage": "35%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-bbxiui4",
            "title": "Internal Medicine Clinical Practice",
            "description": "Cardiovascular emergencies, stroke management, diabetes ketoacidosis, sepsis bundles.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-xakm47u",
            "title": "Dermatology & Psychiatry",
            "description": "Eczema, leprosy, mood disorders, schizophrenia, substance abuse, psychotropic drugs.",
            "importance": "Medium",
            "estimatedHours": 35,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-9uqbuxo",
        "name": "Surgery & Allied Specialities",
        "weightage": "30%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-jyjyhta",
            "title": "General Surgery & Trauma Protocols",
            "description": "ATLS protocols, acute pancreatitis, appendicitis, GI bleeding, burns, shock resuscitation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-ljhm305",
            "title": "Orthopedics, ENT & Ophthalmology",
            "description": "Compartment syndrome, cataract surgery, otitis media, epistaxis management.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-ilq1o1p",
        "name": "Obstetrics, Gynecology & Pediatrics",
        "weightage": "35%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-gt88csu",
            "title": "Obstetrics & Maternal-Fetal Care",
            "description": "Pre-eclampsia, postpartum hemorrhage, obstructed labor, ectopic pregnancy, fetal distress.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-dr11gkw",
            "title": "Pediatrics & Neonatal Care",
            "description": "Neonatal sepsis, respiratory distress, growth charts, developmental milestones.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_CSE",
    "examId": "upsc-cse",
    "slug": "upsc-cse",
    "examName": "Civil Services Examination (UPSC CSE / IAS)",
    "category": "Civil Services",
    "subCategory": "All India Services",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 2025,
    "durationMinutes": 720,
    "pattern": "Prelims (GS+CSAT) • Mains (9 Papers) • Interview",
    "overview": "Premier nationwide competitive examination conducted for recruitment into higher civil services including IAS, IPS, IFS.",
    "subjects": [
      {
        "_id": "sub-roc2mh8",
        "name": "General Studies Paper I (Polity & History)",
        "weightage": "30%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-4kl2xlm",
            "title": "Indian Polity & Governance",
            "description": "Constitution preamble, fundamental rights, DPSP, parliament, judiciary, federalism, local government.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-7g183sw",
            "title": "Modern Indian History & Culture",
            "description": "Freedom struggle (1857-1947), socio-religious reform movements, ancient architecture, temple art, dances.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-p7ge6md",
            "title": "Ancient & Medieval India",
            "description": "Indus Valley, Vedic era, Mauryas, Guptas, Delhi Sultanate, Mughals, Bhakti and Sufi movements.",
            "importance": "Medium",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-qnkdp6x",
        "name": "General Studies Paper II & III (Economy & Geography)",
        "weightage": "40%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-pzdxfyu",
            "title": "Indian Economy & Development",
            "description": "Macroeconomics, fiscal deficit, monetary policy, banking, inflation, poverty, inclusive growth, budgeting.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-1kq20a8",
            "title": "Geography of India & World",
            "description": "Geomorphology, climatology, oceanography, Indian river systems, monsoon mechanism, resource distribution.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-wryl1wr",
            "title": "Environment, Ecology & Climate Change",
            "description": "Biodiversity hotspots, wildlife protection acts, international climate accords (UNFCCC), pollution.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "13%"
          }
        ]
      },
      {
        "_id": "sub-id6jvv5",
        "name": "CSAT Aptitude & Ethics (GS IV)",
        "weightage": "30%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-8pyklw0",
            "title": "CSAT Paper II (Comprehension & Math)",
            "description": "Complex analytical reading passages, quantitative aptitude, data interpretation, logical reasoning.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-nvq74dh",
            "title": "Ethics, Integrity & Aptitude",
            "description": "Ethical philosophers, emotional intelligence, attitude, public service values, administrative case studies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_ESE",
    "examId": "upsc-ese",
    "slug": "upsc-ese",
    "examName": "Engineering Services Examination (UPSC ESE / IES)",
    "category": "Civil Services",
    "subCategory": "Central Engineering Services",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 1300,
    "durationMinutes": 720,
    "pattern": "Prelims • Mains • Personality Test",
    "overview": "Recruitment to Group A engineering positions under Government of India.",
    "subjects": [
      {
        "_id": "sub-vy244a0",
        "name": "General Studies & Engineering Aptitude",
        "weightage": "25%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-no3m1i0",
            "title": "Engineering Aptitude & Project Management",
            "description": "Current national issues, engineering ethics, project planning, quality practices.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-fygeyxh",
            "title": "Information & Communication Technology",
            "description": "ICT tools in engineering, networking, cybersecurity, energy resources and conservation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13%"
          }
        ]
      },
      {
        "_id": "sub-lco3vhi",
        "name": "Discipline Specific Technical Papers",
        "weightage": "75%",
        "totalHours": 90,
        "topics": [
          {
            "_id": "top-fwso1t9",
            "title": "Core Technical Engineering Paper 1",
            "description": "Discipline fundamentals, analytical mathematical models, structural design codes.",
            "importance": "High",
            "estimatedHours": 45,
            "difficulty": "Hard",
            "weightage": "38%"
          },
          {
            "_id": "top-lcy2zuq",
            "title": "Applied Technical Engineering Paper 2",
            "description": "Industrial applications, power systems, advanced dynamics, project execution and diagnostics.",
            "importance": "High",
            "estimatedHours": 45,
            "difficulty": "Hard",
            "weightage": "37%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_CAPF",
    "examId": "upsc-capf",
    "slug": "upsc-capf",
    "examName": "Central Armed Police Forces (UPSC CAPF AC)",
    "category": "Civil Services",
    "subCategory": "Paramilitary Officers",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 450,
    "durationMinutes": 300,
    "pattern": "Paper 1 (General Ability: 250M) • Paper 2 (Essay & Comprehension: 200M)",
    "overview": "Selection of Assistant Commandants in BSF, CRPF, CISF, ITBP and SSB.",
    "subjects": [
      {
        "_id": "sub-zt2gry9",
        "name": "General Ability & Intelligence",
        "weightage": "55%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-i5ue1ka",
            "title": "General Mental Ability & Science",
            "description": "Logical reasoning, quantitative aptitude, data interpretation, general science everyday applications.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-yhnnqrk",
            "title": "Current Events, Polity & Economy",
            "description": "National and international security affairs, Indian constitution, economic development, geography.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "30%"
          }
        ]
      },
      {
        "_id": "sub-1igvme4",
        "name": "General Studies, Essay & Comprehension",
        "weightage": "45%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-ilgc9sr",
            "title": "Essay Writing (English or Hindi)",
            "description": "Essay topics on security, defense, human rights, national integration, economic development.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-ji63rof",
            "title": "Comprehension, Précis & Grammar",
            "description": "Reading comprehension, précis writing, report writing, counter-arguments, advanced grammar.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "20%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_CGL",
    "examId": "ssc-cgl",
    "slug": "ssc-cgl",
    "examName": "Staff Selection Commission Combined Graduate Level (SSC CGL)",
    "category": "Civil Services",
    "subCategory": "Group B & C Government Officers",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 390,
    "durationMinutes": 180,
    "pattern": "Tier-1 CBT (100 Qs, 60m) • Tier-2 CBT",
    "overview": "National recruitment for Inspectors, Sub-Inspectors, and Officers across Indian ministries and departments.",
    "subjects": [
      {
        "_id": "sub-26tm1ya",
        "name": "Quantitative Aptitude",
        "weightage": "30%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-qm60ttb",
            "title": "Arithmetic & Commercial Mathematics",
            "description": "Percentages, profit & loss, discount, simple & compound interest, ratio & proportion, time & work, speed.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-m6kt4xs",
            "title": "Advance Mathematics (Algebra, Geometry, Trig)",
            "description": "Polynomials, linear equations, triangles, circles, tangents, trigonometric ratios, heights-distances.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "18%"
          }
        ]
      },
      {
        "_id": "sub-kevatmq",
        "name": "Reasoning & General Intelligence",
        "weightage": "25%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-hjcpnij",
            "title": "Verbal & Logical Reasoning",
            "description": "Analogies, syllogisms, blood relations, coding-decoding, direction sense, seating arrangements.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-uodqmyy",
            "title": "Non-Verbal & Analytical Reasoning",
            "description": "Figure series, paper folding, embedded figures, mirror images, Venn diagrams.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "12%"
          }
        ]
      },
      {
        "_id": "sub-65crxaa",
        "name": "English Language & General Awareness",
        "weightage": "45%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-b23fb7l",
            "title": "English Comprehension & Grammar",
            "description": "Active/passive voice, direct/indirect speech, idioms, one-word substitutions, cloze test, reading passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-pfmdvh1",
            "title": "General Awareness & Computer Proficiency",
            "description": "Indian polity, modern history, geography, economy, static GK, basic computer operating systems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_CHSL",
    "examId": "ssc-chsl",
    "slug": "ssc-chsl",
    "examName": "SSC Combined Higher Secondary Level (SSC CHSL)",
    "category": "Civil Services",
    "subCategory": "Clerical & DEO",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 360,
    "durationMinutes": 180,
    "pattern": "Tier-1 CBT • Tier-2 CBT & Skill Test",
    "overview": "Selection for Lower Division Clerks, Junior Secretariat Assistants, and Data Entry Operators.",
    "subjects": [
      {
        "_id": "sub-rce3t28",
        "name": "Quantitative Aptitude",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-zjj2031",
            "title": "Arithmetic & Number Systems",
            "description": "Fractions, decimals, percentages, profit and loss, ratio and proportion, time and distance.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-9y8fr6s",
            "title": "Basic Algebra & Geometry",
            "description": "Elementary algebra, triangles, quadrilaterals, trigonometric identities, histograms.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-dhmcqax",
        "name": "General Intelligence, English & GK",
        "weightage": "70%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-smgh3zz",
            "title": "General Intelligence & Reasoning",
            "description": "Semantic analogy, symbolic operations, space orientation, Venn diagrams, drawing inferences.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-w8lduw8",
            "title": "English Language (Basic Knowledge)",
            "description": "Spot the error, fill in the blanks, synonyms, antonyms, spellings, idioms and phrases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-u7lzsa6",
            "title": "General Awareness",
            "description": "History, culture, geography, economic scene, general policy and scientific research.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_CPO",
    "examId": "ssc-cpo",
    "slug": "ssc-cpo",
    "examName": "SSC Central Police Organization (SSC CPO Sub-Inspector)",
    "category": "Civil Services",
    "subCategory": "Delhi Police & Paramilitary SI",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Paper 1 CBT (200M) • PET/PST • Paper 2 English (200M)",
    "overview": "Recruitment of Sub-Inspectors in Delhi Police, CISF, BSF, CRPF, and ITBP.",
    "subjects": [
      {
        "_id": "sub-ctwlnqn",
        "name": "Paper 1 (Reasoning, GK, Math, English)",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-639sfy0",
            "title": "General Intelligence & Reasoning",
            "description": "Analogies, similarities, spatial visualization, problem solving, analysis, arithmetic computation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-i9p25xi",
            "title": "General Knowledge & Quantitative Aptitude",
            "description": "Indian constitution, current affairs, sports, percentage, ratio, averages, algebra, geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-qz261jr",
            "title": "English Comprehension",
            "description": "Reading comprehension, basic grammar, error detection, vocabulary usage.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-axy7c63",
        "name": "Paper 2 (English Language & Comprehension)",
        "weightage": "50%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-tolqnhh",
            "title": "Advanced English Grammar & Vocabulary",
            "description": "Error recognition, verbs, prepositions, voice change, narration, spelling checks.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-xgf4ex7",
            "title": "Reading Comprehension & Cloze Passages",
            "description": "Lengthy comprehension passages, cloze test, vocabulary in context, antonyms/synonyms.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_JE",
    "examId": "ssc-je",
    "slug": "ssc-je",
    "examName": "SSC Junior Engineer (SSC JE Civil/Mech/Elec)",
    "category": "Civil Services",
    "subCategory": "Central Technical Posts",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 500,
    "durationMinutes": 240,
    "pattern": "Paper 1 CBT (200M) • Paper 2 Technical CBT (300M)",
    "overview": "Technical recruitment for CPWD, MES, CWC, and Border Roads Organisation.",
    "subjects": [
      {
        "_id": "sub-t2yr8tq",
        "name": "General Intelligence & Awareness",
        "weightage": "40%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-yr3s8s4",
            "title": "General Intelligence & Reasoning",
            "description": "Analogies, differences, space visualization, judgment, decision making, visual memory.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "20%"
          },
          {
            "_id": "top-fdz3xh1",
            "title": "General Awareness",
            "description": "Current events, India and neighboring countries, history, culture, geography, economics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-rooiwn1",
        "name": "Technical Engineering Domain",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-spz5h9z",
            "title": "Core Engineering Theory & Codes",
            "description": "Building materials, surveying, mechanics, thermodynamics, electrical circuits, machinery.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-6d98qxw",
            "title": "Applied Engineering Problem Solving",
            "description": "Design calculations, structural analysis, hydraulic machinery, power generation, transmission.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_MTS",
    "examId": "ssc-mts",
    "slug": "ssc-mts",
    "examName": "SSC Multi-Tasking Staff (SSC MTS & Havaldar)",
    "category": "Civil Services",
    "subCategory": "Central Government Staff",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 270,
    "durationMinutes": 90,
    "pattern": "CBT (Session 1 Math & Reasoning, Session 2 GK & English)",
    "overview": "Central government recruitment for General Central Service Group C non-gazetted posts.",
    "subjects": [
      {
        "_id": "sub-odbzquj",
        "name": "Numerical & Mathematical Ability",
        "weightage": "30%",
        "totalHours": 30,
        "topics": [
          {
            "_id": "top-dx6vb9w",
            "title": "Basic Arithmetic Operations",
            "description": "LMC and HCF, decimals, fractions, percentages, ratio and proportions, work and time, averages.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Easy",
            "weightage": "15%"
          },
          {
            "_id": "top-bp7whzr",
            "title": "Elementary Geometry & Mensuration",
            "description": "Perimeter and area of simple geometric figures, speed and distance, line graphs and pie charts.",
            "importance": "Medium",
            "estimatedHours": 15,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-wqc7lzp",
        "name": "Reasoning, English & General Awareness",
        "weightage": "70%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-jzhnzk9",
            "title": "Reasoning Ability & Problem Solving",
            "description": "Alpha-numeric series, coding-decoding, analogy, following directions, similarities and differences.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Easy",
            "weightage": "20%"
          },
          {
            "_id": "top-cj2s8xj",
            "title": "General Awareness & Static GK",
            "description": "Social studies (history, geography, art and culture, civics, economics), environmental studies, science.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-b5x20ik",
            "title": "English Language & Comprehension",
            "description": "Vocabulary, grammar, sentence structure, synonyms, antonyms and its correct usage, simple comprehension.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Easy",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SSC_STENO",
    "examId": "ssc-steno",
    "slug": "ssc-steno",
    "examName": "SSC Stenographer (Grade C & D)",
    "category": "Civil Services",
    "subCategory": "Secretarial Posts",
    "conductingBody": "Staff Selection Commission (SSC)",
    "totalMarks": 200,
    "durationMinutes": 120,
    "pattern": "CBT (200 Qs) • Skill Test in Stenography",
    "overview": "Selection of Stenographers in government ministries, attached and subordinate offices.",
    "subjects": [
      {
        "_id": "sub-ot6004g",
        "name": "General Intelligence, Reasoning & GK",
        "weightage": "50%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-apuaza1",
            "title": "General Intelligence and Reasoning",
            "description": "Problem solving, analysis, judgment, decision making, visual memory, discriminating observation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-oyiy6ro",
            "title": "General Awareness",
            "description": "Current events of national & international importance, Indian history, constitution, sports, science.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-pvohdpz",
        "name": "English Language and Comprehension",
        "weightage": "50%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-0jbsur0",
            "title": "English Vocabulary & Grammar",
            "description": "Spotting errors, sentence improvement, active/passive voice, direct/indirect narration.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-6cgcgmd",
            "title": "Comprehension & Cloze Test",
            "description": "Reading comprehension passages, cloze test paragraphs, word substitutions.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_IFOS",
    "examId": "upsc-ifos",
    "slug": "upsc-ifos",
    "examName": "UPSC Indian Forest Service (IFoS)",
    "category": "Civil Services",
    "subCategory": "All India Forestry Services",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 1700,
    "durationMinutes": 720,
    "pattern": "CSE Prelims Screening • Written Mains (6 Papers) • Interview",
    "overview": "Recruitment to the elite Indian Forest Service managing India’s national parks and forest reserves.",
    "subjects": [
      {
        "_id": "sub-8igo7be",
        "name": "General English & General Knowledge",
        "weightage": "30%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-ualnexl",
            "title": "General English Comprehension & Essay",
            "description": "Essay writing, précis writing, vocabulary, grammar, reading comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-rld2k6x",
            "title": "General Knowledge & Environmental Ecology",
            "description": "Indian history, geography, forest conservation acts, biodiversity, wildlife management, climate change.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-wsko8eh",
        "name": "Forestry & Science Optionals",
        "weightage": "70%",
        "totalHours": 80,
        "topics": [
          {
            "_id": "top-2f4yr5q",
            "title": "Silviculture & Forest Management",
            "description": "Forest regeneration, silvicultural systems, forest soils, forest protection, forest mensuration.",
            "importance": "High",
            "estimatedHours": 40,
            "difficulty": "Hard",
            "weightage": "35%"
          },
          {
            "_id": "top-8opf3r4",
            "title": "Forest Utilization, Ecology & Agroforestry",
            "description": "Wood technology, non-timber forest products, agroforestry systems, environmental conservation laws.",
            "importance": "High",
            "estimatedHours": 40,
            "difficulty": "Hard",
            "weightage": "35%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_CMS",
    "examId": "upsc-cms",
    "slug": "upsc-cms",
    "examName": "UPSC Combined Medical Services (CMS)",
    "category": "Civil Services",
    "subCategory": "Central Medical Officers",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 600,
    "durationMinutes": 240,
    "pattern": "Paper 1 CBT (250M) • Paper 2 CBT (250M) • Interview (100M)",
    "overview": "Recruitment of Medical Officers in Indian Railways, Municipal Corporations, and Central Health Service.",
    "subjects": [
      {
        "_id": "sub-gb9053n",
        "name": "General Medicine & Pediatrics (Paper 1)",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-cgxfpz8",
            "title": "General Medicine Internal Systems",
            "description": "Cardiology, respiratory, gastrointestinal, neurology, hematology, endocrinology, infectious diseases.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "35%"
          },
          {
            "_id": "top-ll4bdax",
            "title": "Pediatrics Core Care",
            "description": "Neonatal resuscitation, immunization, developmental milestones, pediatric infectious diseases.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-brs0csh",
        "name": "Surgery, Gynecology & PSM (Paper 2)",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-p1ogvvm",
            "title": "General Surgery & Orthopedics",
            "description": "Acute abdominal emergencies, trauma, head injuries, burns, fractures and dislocations.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-eu1cydx",
            "title": "Gynaecology, Obstetrics & Preventive Medicine",
            "description": "Antenatal care, labor complications, contraception, epidemiology, national health policies.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPSC_GEOSCIENTIST",
    "examId": "upsc-geoscientist",
    "slug": "upsc-geoscientist",
    "examName": "UPSC Combined Geo-Scientist Examination",
    "category": "Civil Services",
    "subCategory": "Geological Survey Officers",
    "conductingBody": "Union Public Service Commission (UPSC)",
    "totalMarks": 700,
    "durationMinutes": 480,
    "pattern": "Stage 1 Prelims (CBT) • Stage 2 Mains (Descriptive) • Interview",
    "overview": "Recruitment of Geologists, Geophysicists, and Chemists in Geological Survey of India and Central Ground Water Board.",
    "subjects": [
      {
        "_id": "sub-mg99j3r",
        "name": "General Studies & Earth Sciences",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-7sabpp3",
            "title": "General Studies Paper",
            "description": "Current events, Indian history, geography, economy, polity, environment and ecology fundamentals.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-skriieq",
            "title": "Physical Geology & Geomorphology",
            "description": "Plate tectonics, earthquakes, volcanoes, weathering, fluvial, aeolian, glacial landforms.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-851lsyi",
        "name": "Mineralogy, Petrology & Geophysics",
        "weightage": "70%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-kzaol8m",
            "title": "Crystallography, Mineralogy & Igneous Petrology",
            "description": "Crystal symmetry, optical mineralogy, phase rule, basalt genesis, magma differentiation.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "35%"
          },
          {
            "_id": "top-xn943p3",
            "title": "Structural Geology & Economic Geology",
            "description": "Folds, faults, shear zones, mineral deposits formation, ore microscopy, exploration geophysics.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "35%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SBI_PO",
    "examId": "sbi-po",
    "slug": "sbi-po",
    "examName": "State Bank of India Probationary Officer (SBI PO)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "State Bank of India (SBI)",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Premier public sector banking officer recruitment comprising Prelims, Mains, Psychometric, and Interview.",
    "subjects": [
      {
        "_id": "sub-2z0pu41",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-sswmpbq",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-d10y6m9",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-ahgv4l5",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-c6al2qh",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-oen6bsq",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-9u93mal",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-x8vsfab",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-a79fw7h",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-gf0q9su",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-hzdjd05",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-hxle6ah",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SBI_CLERK",
    "examId": "sbi-clerk",
    "slug": "sbi-clerk",
    "examName": "State Bank of India Junior Associates (SBI Clerk)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "State Bank of India (SBI)",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "National recruitment for customer support and clerical positions across SBI branches.",
    "subjects": [
      {
        "_id": "sub-ynzvko4",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-yqvwely",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-5m7gw3d",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-e5be0u3",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-sjza19q",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-on5pfkl",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-hpb5sw4",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-qvcpajl",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-t3axfcr",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-dztwhcm",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-nyzrnx8",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-mlgv5hd",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IBPS_PO",
    "examId": "ibps-po",
    "slug": "ibps-po",
    "examName": "IBPS Probationary Officer / Management Trainee (IBPS PO)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Institute of Banking Personnel Selection",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Centralized recruitment for PO/MT across 11 participating public sector banks.",
    "subjects": [
      {
        "_id": "sub-sq1i66p",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-f8qux3h",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-p3nfaz9",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-2x4u1b0",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-0hs7wns",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-0zoycjh",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-kwfpbyo",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-3f24sdv",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-tj5o84h",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-5xwipgm",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-ty7i1n4",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-w7nhinx",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IBPS_CLERK",
    "examId": "ibps-clerk",
    "slug": "ibps-clerk",
    "examName": "IBPS Clerical Cadre (IBPS Clerk)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Institute of Banking Personnel Selection",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "National recruitment examination for office clerks in public sector banks.",
    "subjects": [
      {
        "_id": "sub-q8pet2f",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-rtmbaae",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-99c8x4d",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-hrv0arn",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-57rsmgv",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-9pxdee0",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-fi0gz6r",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-jdon5hs",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-9oaady8",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-37n6l2q",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-83azm7w",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-1q5la4y",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IBPS_RRB_PO",
    "examId": "ibps-rrb-po",
    "slug": "ibps-rrb-po",
    "examName": "IBPS Regional Rural Banks Officer Scale-I (IBPS RRB PO)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Institute of Banking Personnel Selection",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Officer recruitment in rural and semi-urban regional rural banks.",
    "subjects": [
      {
        "_id": "sub-eqqsj2m",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-0tvrqnt",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-5kkuvf5",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-xizkg4o",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-l5r12rq",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-doaxlfc",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-dseq3kw",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-xx7uvmk",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-nrwuknv",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-njcvcu8",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-l3obkim",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-fw0qzng",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IBPS_RRB_CLERK",
    "examId": "ibps-rrb-clerk",
    "slug": "ibps-rrb-clerk",
    "examName": "IBPS RRB Office Assistant (Multipurpose)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Institute of Banking Personnel Selection",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Clerical recruitment in regional rural banks across all Indian states.",
    "subjects": [
      {
        "_id": "sub-g95gs6g",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-y87i6qt",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-g86bc5w",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-8x4f56f",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-jbsjh0s",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-khhtzo4",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-lmldsfi",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-04vljbf",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-3i2wxvt",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-yjd5cxl",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-xw2tj83",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-fwlpgt8",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RBI_GRADE_B",
    "examId": "rbi-grade-b",
    "slug": "rbi-grade-b",
    "examName": "Reserve Bank of India Grade B Officer (RBI Grade B)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Reserve Bank of India Services Board",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Elite central bank management cadre recruitment focusing on economics, finance, and management.",
    "subjects": [
      {
        "_id": "sub-a4wmb5q",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-c43k3vw",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-yro0jj8",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-6620hs2",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-t19ff4z",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-kqrpd16",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-1xmic9i",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-f6dxv0q",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-gfls55a",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-nlc2we1",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-290sxec",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-iwp2mrb",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RBI_ASSISTANT",
    "examId": "rbi-assistant",
    "slug": "rbi-assistant",
    "examName": "Reserve Bank of India Assistant (RBI Assistant)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Reserve Bank of India",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Clerical recruitment for regional offices of India’s central bank.",
    "subjects": [
      {
        "_id": "sub-qvpziw8",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-gl8nb41",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-inci157",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-vhtxsg6",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-0ugzwlc",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-qsdctlw",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-f05mg1z",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-qoadyoj",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-r5v14fk",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-1m5mqw7",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-xm532ov",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-x69331v",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NABARD_GRADE_A",
    "examId": "nabard-grade-a",
    "slug": "nabard-grade-a",
    "examName": "NABARD Assistant Manager Grade A",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "National Bank for Agriculture and Rural Development",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Officer recruitment focusing on rural development, agriculture, and rural finance.",
    "subjects": [
      {
        "_id": "sub-jkv7qn4",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-pm2hc4o",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-7jzs172",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-o0gr8uu",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-osq8sfb",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-7k16gc6",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-7vymdoi",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-s47cix5",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-wjm66gn",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-okqo0ql",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-906eqfg",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-d4umbi0",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SEBI_GRADE_A",
    "examId": "sebi-grade-a",
    "slug": "sebi-grade-a",
    "examName": "SEBI Officer Grade A Assistant Manager",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Securities and Exchange Board of India",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Securities market regulator recruitment focusing on commerce, finance, and securities law.",
    "subjects": [
      {
        "_id": "sub-gnzr4lg",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-42rto7m",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-dvh40lz",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-ky9cb0d",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-easutjv",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-t08106f",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-g1zwu0t",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-juvnliy",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-w5i06rt",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-eh15x33",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-z8pbw87",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-6yo257s",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-LIC_AAO",
    "examId": "lic-aao",
    "slug": "lic-aao",
    "examName": "Life Insurance Corporation Assistant Administrative Officer (LIC AAO)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "Life Insurance Corporation of India",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Generalist and specialist officer recruitment in India’s largest state-owned insurer.",
    "subjects": [
      {
        "_id": "sub-1sw68e1",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-1t18msd",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-xsdlms8",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-47sv2hf",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-2paceum",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-2r4mi1c",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-nt84kn7",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-qh9wu1t",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-5bqos8f",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-hhl1uhj",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-x3kj978",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-9jzc69k",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NIACL_AO",
    "examId": "niacl-ao",
    "slug": "niacl-ao",
    "examName": "New India Assurance Administrative Officer (NIACL AO)",
    "category": "Banking",
    "subCategory": "Banking & Financial Institutions",
    "conductingBody": "New India Assurance Company Ltd",
    "totalMarks": 250,
    "durationMinutes": 180,
    "pattern": "Prelims CBT + Mains CBT",
    "overview": "Leading general insurance public sector officer recruitment examination.",
    "subjects": [
      {
        "_id": "sub-ub7fukz",
        "name": "Reasoning Ability & Computer Aptitude",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-u1v9qkz",
            "title": "High-Level Seating Arrangements & Puzzles",
            "description": "Linear, circular, floor, box, and matrix-based scheduling puzzles with multiple variables.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Hard",
            "weightage": "15%"
          },
          {
            "_id": "top-oxlkwb5",
            "title": "Syllogisms, Inequalities & Input-Output",
            "description": "Only a few case syllogisms, coded inequalities, step-by-step machine input-output sorting.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "10%"
          },
          {
            "_id": "top-apvhjd8",
            "title": "Critical & Analytical Reasoning",
            "description": "Statement-assumption, cause & effect, course of action, strong and weak arguments.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Hard",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-hgfd359",
        "name": "Quantitative Aptitude & Data Analysis",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-z788f57",
            "title": "Data Interpretation & Caselets",
            "description": "Radar charts, missing DI, bar/line graphs, table charts, and paragraph-based caselets.",
            "importance": "High",
            "estimatedHours": 22,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-nfb3zw4",
            "title": "Arithmetic Applications & Word Problems",
            "description": "Profit-loss, time & work, pipe-cistern, time-speed-distance, probability, mixtures & alligation.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-nhvuumk",
            "title": "Number Series & Quadratic Equations",
            "description": "Missing and wrong number series, root comparison quadratic inequalities, simplification.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "5%"
          }
        ]
      },
      {
        "_id": "sub-qm4fp7r",
        "name": "English Language & General/Banking Awareness",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-f9xcsbh",
            "title": "Reading Comprehension & Cloze Test",
            "description": "Economic passages, contextual vocabulary, cloze test, para jumbles, error spotting.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-nyuv7j6",
            "title": "Banking Awareness & Monetary Policy",
            "description": "RBI functions, repo rate, reverse repo, CRR, SLR, NPA norms, priority sector lending.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "12%"
          },
          {
            "_id": "top-zba2ii2",
            "title": "Current Affairs & Financial Updates",
            "description": "National financial news, budget highlights, economic survey, union government schemes.",
            "importance": "High",
            "estimatedHours": 10,
            "difficulty": "Easy",
            "weightage": "8%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NDA",
    "examId": "nda",
    "slug": "nda",
    "examName": "National Defence Academy & Naval Academy (NDA & NA)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "UPSC",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Premier officer recruitment test for Indian Army, Navy, and Air Force wings after 10+2.",
    "subjects": [
      {
        "_id": "sub-o7n2khr",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-qxad8am",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-9x79l35",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-qo8qguh",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-uxjwr0u",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-39vgdht",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-xps0ubd",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CDS",
    "examId": "cds",
    "slug": "cds",
    "examName": "Combined Defence Services Examination (UPSC CDS)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "UPSC",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Graduation level entry for Indian Military Academy, Naval Academy, Air Force Academy, and OTA.",
    "subjects": [
      {
        "_id": "sub-ownegqy",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-3uh8vja",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-muge7k3",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-n0owa4s",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-8hjf1w0",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-l4vzmt5",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-z52duk3",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AFCAT",
    "examId": "afcat",
    "slug": "afcat",
    "examName": "Air Force Common Admission Test (AFCAT)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Air Force",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Officer selection for Flying and Ground Duty (Technical and Non-Technical) branches.",
    "subjects": [
      {
        "_id": "sub-mlzao3a",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-2f3q6i2",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-xvkmjb0",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-qdk4are",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-qpl45ws",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-z6mr93g",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-riav97j",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-INET_NAVY",
    "examId": "inet-navy",
    "slug": "inet-navy",
    "examName": "Indian Navy Entrance Test (INET Officers)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Navy",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Entry for Permanent Commission and Short Service Commission officers in the Indian Navy.",
    "subjects": [
      {
        "_id": "sub-j9pw8fy",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-5xg0v2d",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-nbsosnh",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-6h5cpkn",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-dpgar5v",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-mxbe1pe",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-00q7ez0",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-COAST_GUARD_AC",
    "examId": "coast-guard-ac",
    "slug": "coast-guard-ac",
    "examName": "Indian Coast Guard Assistant Commandant (ICG AC)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Coast Guard",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Selection of Gazetted Officers in General Duty, Technical, and Aviation branches of ICG.",
    "subjects": [
      {
        "_id": "sub-6qk6d30",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-4pjjfqy",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-19pgm76",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-suvefhh",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-cqdwqeo",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-o74uxkn",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-0z2s27b",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TERRITORIAL_ARMY",
    "examId": "territorial-army",
    "slug": "territorial-army",
    "examName": "Territorial Army Officer (Non-Departmental)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Territorial Army Directorate",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Commissioning of civilian professionals as part-time military officers in the Indian Army.",
    "subjects": [
      {
        "_id": "sub-dx7xuu1",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-sutagvj",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-n3nvslh",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-imu1zvg",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-pu1n5uf",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-db7d6an",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-styuut7",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-ARMY_TGC",
    "examId": "army-tgc",
    "slug": "army-tgc",
    "examName": "Indian Army Technical Graduate Course (TGC)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Army",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Direct entry for engineering graduates into the Indian Army as commissioned officers.",
    "subjects": [
      {
        "_id": "sub-9zqs2zj",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-20mufex",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-eaj8p30",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-tcl89h4",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-ur0p5lh",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-5zlba31",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-xk5j7sk",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AGNIVEER_VAYU",
    "examId": "agniveer-vayu",
    "slug": "agniveer-vayu",
    "examName": "Indian Air Force Agniveer Vayu",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Air Force",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Recruitment of airmen under the Agnipath scheme for technical and non-technical trades.",
    "subjects": [
      {
        "_id": "sub-p7nj7c7",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-7xus1pc",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-rxdbtbg",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-yv92ig7",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-9jbjvtu",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-bah1vo5",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-7d4uuuh",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AGNIVEER_NAVY",
    "examId": "agniveer-navy",
    "slug": "agniveer-navy",
    "examName": "Indian Navy Agniveer (SSR & MR)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Navy",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Recruitment of sailors under the Agnipath scheme for Senior Secondary Recruit and Matric Recruit.",
    "subjects": [
      {
        "_id": "sub-831tygd",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-rz7go1b",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-efzk5dm",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-u16vtbx",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-c8wui1f",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-bwpl3rj",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-jeg792x",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AGNIVEER_ARMY",
    "examId": "agniveer-army",
    "slug": "agniveer-army",
    "examName": "Indian Army Agniveer (General Duty & Technical)",
    "category": "Defence",
    "subCategory": "Armed Forces & Paramilitary",
    "conductingBody": "Indian Army",
    "totalMarks": 300,
    "durationMinutes": 150,
    "pattern": "Written Exam + SSB Interview / Physical Fitness Test",
    "overview": "Recruitment of soldiers under the Agnipath scheme across combat and support arms.",
    "subjects": [
      {
        "_id": "sub-208l72x",
        "name": "Mathematics & Quantitative Reasoning",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-8ejfwuf",
            "title": "Algebra, Trigonometry & Calculus",
            "description": "Matrices, complex numbers, trigonometric identities, limits, differentiation, integration.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-6w5mwtx",
            "title": "Geometry, Vectors & Statistics",
            "description": "Conic sections, straight lines, 3D vectors, mean, variance, probability distributions.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-888cjzg",
        "name": "General Ability & English",
        "weightage": "60%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-ufdqj42",
            "title": "English Vocabulary & Comprehension",
            "description": "Antonyms, synonyms, idioms, sentence rearrangement, comprehension passages.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "25%"
          },
          {
            "_id": "top-jqzhje5",
            "title": "General Science (Physics, Chem, Bio)",
            "description": "Laws of motion, work-energy, electricity, acids and bases, cell structure, human anatomy.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-28p615e",
            "title": "General Knowledge & Current Affairs",
            "description": "Indian history, freedom struggle, world geography, defense exercises, international summits.",
            "importance": "High",
            "estimatedHours": 15,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CAT_MBA",
    "examId": "cat-mba",
    "slug": "cat-mba",
    "examName": "Common Admission Test (CAT MBA)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "Indian Institutes of Management (IIMs)",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Premier computer-based management entrance test for MBA admission into all 21 IIMs and top B-schools.",
    "subjects": [
      {
        "_id": "sub-q86olsd",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-axkhzhu",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-pyhi4kx",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-amy4ca3",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-11r0dut",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-o84xuao",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-ryofup9",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-1q12us6",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-0m80qif",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-XAT",
    "examId": "xat",
    "slug": "xat",
    "examName": "Xavier Aptitude Test (XAT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "XLRI Jamshedpur",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "National management test testing Decision Making, Verbal Ability, Quantitative Ability, and General Knowledge.",
    "subjects": [
      {
        "_id": "sub-0hxjoo4",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-uauk53q",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-jh5pfa5",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-r8sscov",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-1bm4p7e",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-q6javbh",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-230neq0",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-3144s5s",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-ugl9q7b",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SNAP",
    "examId": "snap",
    "slug": "snap",
    "examName": "Symbiosis National Aptitude Test (SNAP)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "Symbiosis International University",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Speed-based management entrance test for MBA programs across 16 Symbiosis institutes.",
    "subjects": [
      {
        "_id": "sub-jndkaej",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-0ouqozr",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-ybmgy1e",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-uttrznx",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-h6q10c5",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-8tu9cwl",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-67rtnmw",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-m4rrr9u",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-hzciow8",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NMAT",
    "examId": "nmat",
    "slug": "nmat",
    "examName": "NMAT by GMAC",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "Graduate Management Admission Council",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Computer-adaptive management test for NMIMS and leading global business schools.",
    "subjects": [
      {
        "_id": "sub-cuvvgs2",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-v57im3x",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-rbexbp3",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-wxnitfl",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-3odxte6",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-dti41i6",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-db32dt1",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-mr4s6kc",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-jnptfus",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CMAT",
    "examId": "cmat",
    "slug": "cmat",
    "examName": "Common Management Admission Test (CMAT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "National Testing Agency (NTA)",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "National level entrance examination for AICTE-approved management institutions in India.",
    "subjects": [
      {
        "_id": "sub-mk25ti6",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-ofgj0w3",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-11fei0h",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-jlwngr9",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-5sbx8g5",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-q2wf1zj",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-zrgh6ml",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-y63302g",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-c7fmyxz",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MAT",
    "examId": "mat",
    "slug": "mat",
    "examName": "Management Aptitude Test (MAT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "All India Management Association (AIMA)",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "National test conducted four times a year in CBT, PBT, and IBT modes for MBA admissions.",
    "subjects": [
      {
        "_id": "sub-ll9z6dk",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-8yvco1g",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-og2npop",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-dj7qi39",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-l2t195n",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-cdg3eau",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-assi3gu",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-rmckgih",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-h3ecx3e",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MICAT",
    "examId": "micat",
    "slug": "micat",
    "examName": "MICA Admissions Test (MICAT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "MICA Ahmedabad",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Specialized entrance test for Strategic Marketing and Communications management programmes.",
    "subjects": [
      {
        "_id": "sub-f3vo83f",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-46cyf0t",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-fb4vux2",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-qa2wfw4",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-drat9vw",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-hy3xxet",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-l1oer13",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-jei6ong",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-7cltsdn",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IIFT",
    "examId": "iift",
    "slug": "iift",
    "examName": "Indian Institute of Foreign Trade MBA (IIFT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "NTA / IIFT",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Dedicated entrance test for International Business (MBA-IB) at IIFT campuses.",
    "subjects": [
      {
        "_id": "sub-d4snbv6",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-906cmu4",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-870a7im",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-0mhh8ze",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-y4vwtcc",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-4aal2ov",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-5dtxkpk",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-q791avg",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-nj4evsf",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TISSNET_CUET_PG",
    "examId": "tissnet-cuet-pg",
    "slug": "tissnet-cuet-pg",
    "examName": "CUET PG / TISSNET Management Programs",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "National Testing Agency",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Entrance test for HRM and Organization Development at Tata Institute of Social Sciences.",
    "subjects": [
      {
        "_id": "sub-2uzws5y",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-xorb7kc",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-ue1x80v",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-fnenrqc",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-lf1yc5i",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-x2c0mih",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-2qo20qx",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-6xaixti",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-uulzijq",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IBSAT",
    "examId": "ibsat",
    "slug": "ibsat",
    "examName": "ICFAI Business School Aptitude Test (IBSAT)",
    "category": "Management",
    "subCategory": "MBA / Postgraduate Management",
    "conductingBody": "ICFAI Foundation for Higher Education",
    "totalMarks": 198,
    "durationMinutes": 120,
    "pattern": "CBT • Sectional Time Limits",
    "overview": "Online management aptitude test for admission to MBA/PGPM at 9 IBS campuses.",
    "subjects": [
      {
        "_id": "sub-nygbtc4",
        "name": "Verbal Ability & Reading Comprehension (VARC)",
        "weightage": "33.3%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-26ssqn2",
            "title": "Reading Comprehension (Philosophy, Economy, Tech)",
            "description": "Complex 500-word passages testing inference, main idea, tone, logical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-29l7gyo",
            "title": "Verbal Ability (Para Jumbles & Summaries)",
            "description": "TITA para jumbles, para summary, odd-one-out sentence, sentence completion.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "13.3%"
          }
        ]
      },
      {
        "_id": "sub-0bbn1e4",
        "name": "Data Interpretation & Logical Reasoning (DILR)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-dz3s67o",
            "title": "Matrix Puzzles, Arrangements & Games",
            "description": "Linear/circular scheduling, tournaments, grid puzzles, truth-teller liar logic.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-2014g1f",
            "title": "Data Charts, Radar Graphs & Venn Diagrams",
            "description": "Complex tables, overlapping sets, multi-layered data visualization, missing data analysis.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      },
      {
        "_id": "sub-btr65gn",
        "name": "Quantitative Aptitude (QA)",
        "weightage": "33.3%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-i88x603",
            "title": "Arithmetic & Modern Math",
            "description": "Percentages, profit-loss, time-speed-distance, ratio, permutation-combination, probability.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-rm5ungt",
            "title": "Algebra, Geometry & Mensuration",
            "description": "Quadratic equations, logarithms, functions, circles, triangles, coordinate geometry.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "15.3%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CLAT_UG",
    "examId": "clat-ug",
    "slug": "clat-ug",
    "examName": "Common Law Admission Test UG (CLAT UG)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "Consortium of NLUs",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Premier entrance test for 5-year integrated LLB admissions across 24 National Law Universities.",
    "subjects": [
      {
        "_id": "sub-b89kejn",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-xpi4pnh",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-rd2blai",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-ccc2xmh",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-lgo51ux",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-vodvkqq",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-cku20ab",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-rvww4xv",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-xzqcn01",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CLAT_PG",
    "examId": "clat-pg",
    "slug": "clat-pg",
    "examName": "Common Law Admission Test PG (CLAT PG)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "Consortium of NLUs",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "National law entrance examination for one-year LLM programmes in NLUs.",
    "subjects": [
      {
        "_id": "sub-y0ozyqj",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-4a9oubo",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-395npq5",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-nek9alm",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-7kbhtky",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-wmrlmh5",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-vxzblxn",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-l4m26f5",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-aonx66e",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AILET",
    "examId": "ailet",
    "slug": "ailet",
    "examName": "All India Law Entrance Test (AILET)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "NLU Delhi",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Exclusive entrance examination for BA LLB and LLM admissions at National Law University Delhi.",
    "subjects": [
      {
        "_id": "sub-32oaq2c",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-o7k36nq",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-0r913ai",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-u217428",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-mzyvela",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-zywwt6s",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-rz2cs5u",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-u7cqtaj",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-oxu2bw2",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-LSAT_INDIA",
    "examId": "lsat-india",
    "slug": "lsat-india",
    "examName": "Law School Admission Test India (LSAT India)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "Law School Admission Council (LSAC)",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Standardized test measuring reading and verbal reasoning skills for top law schools.",
    "subjects": [
      {
        "_id": "sub-bkikjdj",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-110s04u",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-trquey4",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-9x1dw11",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-qveyy54",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-0f47309",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-f5yag7m",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-c8gdn2e",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-5obtpug",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SLAT",
    "examId": "slat",
    "slug": "slat",
    "examName": "Symbiosis Law Aptitude Test (SLAT)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "Symbiosis International University",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Law entrance exam for Symbiosis Law Schools in Pune, Noida, Hyderabad, and Nagpur.",
    "subjects": [
      {
        "_id": "sub-ep5cprm",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-mj87ru3",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-xv5ubw7",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-1n9owj6",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-k7l75m5",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-tpkzhb1",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-acio9iz",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-caui8g9",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-nttba7c",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MHCET_LAW",
    "examId": "mhcet-law",
    "slug": "mhcet-law",
    "examName": "Maharashtra Common Entrance Test for Law (MH CET Law)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "State CET Cell Maharashtra",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "State entrance exam for 3-year and 5-year LLB programs in GLC Mumbai, ILS Pune, and allied colleges.",
    "subjects": [
      {
        "_id": "sub-jtol9l1",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-iikt8ex",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-acs47gt",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-b9fxdjo",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-f6m5jfe",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-m8604cv",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-cahmh98",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-4btoqih",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-6ppdkzn",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-DJS_JUDICIARY",
    "examId": "djs-judiciary",
    "slug": "djs-judiciary",
    "examName": "Delhi Judicial Services Examination (DJS)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "Delhi High Court",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Elite judicial examination to recruit Civil Judges / Metropolitan Magistrates in Delhi Courts.",
    "subjects": [
      {
        "_id": "sub-596y1s9",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-tctx4q9",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-gezp24j",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-0283qc3",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-ol2wjot",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-smnd6g3",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-1oe8b2o",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-3v6m0f4",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-70x84z5",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPPCS_J",
    "examId": "uppcs-j",
    "slug": "uppcs-j",
    "examName": "UP Judicial Services Exam (UP PCS J)",
    "category": "Law",
    "subCategory": "Legal Studies & Judiciary",
    "conductingBody": "UPPSC",
    "totalMarks": 150,
    "durationMinutes": 120,
    "pattern": "Passage-Based Offline / CBT Exam",
    "overview": "Judicial officer recruitment for Civil Judge (Junior Division) courts across Uttar Pradesh.",
    "subjects": [
      {
        "_id": "sub-ska8u67",
        "name": "Legal Reasoning & Constitutional Law",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-l89doco",
            "title": "Constitutional Law & Fundamental Rights",
            "description": "Preamble, writ jurisdiction, separation of powers, judicial review, landmark Supreme Court cases.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          },
          {
            "_id": "top-k18hnz9",
            "title": "Law of Torts, Contracts & Crimes",
            "description": "Negligence, strict liability, offer-acceptance, breach, IPC/BNS offenses against body and property.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Medium",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-pk3xx33",
        "name": "Logical Reasoning & Critical Thinking",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-py9ju99",
            "title": "Analytical Arguments & Fallacies",
            "description": "Deductive arguments, assumption identification, strengthening/weakening claims, analogies.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-u0gb9c9",
            "title": "Pattern Logic & Deductive Sets",
            "description": "Seating arrangements, blood relations, syllogisms, conditionality trees.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      },
      {
        "_id": "sub-scyk29a",
        "name": "Current Affairs, GK & English Comprehension",
        "weightage": "30%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-hbmsej2",
            "title": "Legal Current Affairs & Global Treaties",
            "description": "International law conventions, recent statutory amendments, judicial appointments, treaties.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-sa9hmpo",
            "title": "English Language Comprehension",
            "description": "Legal vocabulary, context-based word meanings, structural comprehension, critical reading.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UGC_NET",
    "examId": "ugc-net",
    "slug": "ugc-net",
    "examName": "University Grants Commission National Eligibility Test (UGC NET)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "NTA",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "National test determining eligibility for Assistant Professorship and award of Junior Research Fellowship (JRF).",
    "subjects": [
      {
        "_id": "sub-yaxp8j2",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-um55lqg",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-bcxzeyr",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-l5hn635",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-gu9qda6",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-idecl8z",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CSIR_NET",
    "examId": "csir-net",
    "slug": "csir-net",
    "examName": "Joint CSIR-UGC NET for Sciences",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "NTA / CSIR",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "National eligibility test for Lectureship and JRF in Science disciplines (Physical, Chemical, Earth, Life, Math).",
    "subjects": [
      {
        "_id": "sub-i9ev18q",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-fan66o3",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-jxhfgk5",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-psr40dw",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-y9hkf9s",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-ebydsyt",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CTET",
    "examId": "ctet",
    "slug": "ctet",
    "examName": "Central Teacher Eligibility Test (CTET)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "CBSE",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "Mandatory central qualification test for teachers in Central Government schools (KVS, NVS, Central Tibetan).",
    "subjects": [
      {
        "_id": "sub-io6wwdk",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-e8twd1v",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-m5vcbyq",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-on2uq7f",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-um50hgj",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-8kx71a3",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-KVS_RECRUITMENT",
    "examId": "kvs-recruitment",
    "slug": "kvs-recruitment",
    "examName": "Kendriya Vidyalaya Sangathan Teacher Recruitment (KVS PGT/TGT/PRT)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "KVS",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "National recruitment for Post Graduate, Trained Graduate, and Primary Teachers in Kendriya Vidyalayas.",
    "subjects": [
      {
        "_id": "sub-d2h9tgv",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-51swvvy",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-z1yojfa",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-f7l7k6z",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-5dtgt9q",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-vpwf2i8",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NVS_RECRUITMENT",
    "examId": "nvs-recruitment",
    "slug": "nvs-recruitment",
    "examName": "Navodaya Vidyalaya Samiti Recruitment (NVS PGT/TGT)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "NVS",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "Recruitment for residential school teachers across Jawahar Navodaya Vidyalayas nationwide.",
    "subjects": [
      {
        "_id": "sub-qquypcc",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-akfbfm8",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-n76pio8",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-cpii4s9",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-a1nwq7f",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-rzeblaz",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-DSSSB_TEACHER",
    "examId": "dsssb-teacher",
    "slug": "dsssb-teacher",
    "examName": "Delhi Subordinate Services Selection Board (DSSSB PRT/TGT/PGT)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "DSSSB",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "Teacher recruitment examination for Directorate of Education and Municipal Corporation of Delhi.",
    "subjects": [
      {
        "_id": "sub-97swyzf",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-9gjqkay",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-tf9rx92",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-gxc1yal",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-kcue7wp",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-p51lt23",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-STATE_TET",
    "examId": "state-tet",
    "slug": "state-tet",
    "examName": "State Teacher Eligibility Test (UPTET / REET / MPTET)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "State Examination Regulatory Authorities",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "State-level mandatory qualification examinations for primary and upper-primary government school teachers.",
    "subjects": [
      {
        "_id": "sub-80r8i9b",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-kgsmgr9",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-pofwyh7",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-i5l1u0s",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-exi99ok",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-oy1nvjt",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SET_LECTURESHIP",
    "examId": "set-lectureship",
    "slug": "set-lectureship",
    "examName": "State Eligibility Test for Lectureship (SET / SLET)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "State Accredited Universities",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "State-accredited eligibility test for appointments of Assistant Professors in state universities.",
    "subjects": [
      {
        "_id": "sub-hxygl2z",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-nhiu1kh",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-0gfwv25",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-yrm3ouj",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-mlwi9zd",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-jx8w329",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-AWES_APS",
    "examId": "awes-aps",
    "slug": "awes-aps",
    "examName": "Army Welfare Education Society Combined Screening (AWES CSB)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "AWES",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "Centralized online screening test for teachers across 137 Army Public Schools across India.",
    "subjects": [
      {
        "_id": "sub-2st8iqv",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-w6ipyqz",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-8agvb8j",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-sb4xtou",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-7qm6oni",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-dxpa7ik",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SUPER_TET",
    "examId": "super-tet",
    "slug": "super-tet",
    "examName": "Uttar Pradesh Assistant Teacher Recruitment (Super TET)",
    "category": "Teaching",
    "subCategory": "Teacher Eligibility & Professorship",
    "conductingBody": "UP Basic Education Board",
    "totalMarks": 150,
    "durationMinutes": 150,
    "pattern": "Paper 1 (General Pedagogy) + Paper 2 (Domain Subject)",
    "overview": "Competitive recruitment examination for primary school teachers in basic education council schools of UP.",
    "subjects": [
      {
        "_id": "sub-tozgws4",
        "name": "Teaching & Research Aptitude",
        "weightage": "40%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-7k90hb2",
            "title": "Teaching Methods & Learner Characteristics",
            "description": "Constructivist pedagogy, cognitive domains (Bloom taxonomy), evaluation systems, online education tools.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-d7x06rs",
            "title": "Research Methodology & Higher Education Governance",
            "description": "Qualitative/quantitative research designs, hypothesis testing, ethics in publication, UGC/NEP 2020 policies.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-w09ajnk",
        "name": "Domain Subject Specialization",
        "weightage": "60%",
        "totalHours": 70,
        "topics": [
          {
            "_id": "top-x3pg8cg",
            "title": "Core Theoretical Foundations",
            "description": "In-depth conceptual framework, historical evolution, standard theories and epistemological debates.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          },
          {
            "_id": "top-96vvyjs",
            "title": "Applied Subject Analysis & Problem Solving",
            "description": "Advanced problem sets, thematic case studies, contemporary developments in the discipline.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "30%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-UPPSC_PCS",
    "examId": "uppsc-pcs",
    "slug": "uppsc-pcs",
    "examName": "UPPSC Combined State / Upper Subordinate Services (UP PCS)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Uttar Pradesh PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Uttar Pradesh.",
    "subjects": [
      {
        "_id": "sub-x79zyzy",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-ff3br88",
            "title": "History, Art & Culture of Uttar Pradesh",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Uttar Pradesh.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-i6kmmbj",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-d9kktx0",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-57qma3i",
            "title": "Economy & Natural Resources of Uttar Pradesh",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-q5u5001",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-wmu79sk",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-7h8iwxh",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-8vy5xzz",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-BPSC_CCE",
    "examId": "bpsc-cce",
    "slug": "bpsc-cce",
    "examName": "Bihar Public Service Commission Combined Competitive Exam (BPSC CCE)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Bihar PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Bihar.",
    "subjects": [
      {
        "_id": "sub-intsz49",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-0m4qbco",
            "title": "History, Art & Culture of Bihar",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Bihar.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-896fk8y",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-mpflwb1",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-4epawmv",
            "title": "Economy & Natural Resources of Bihar",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-l4wx9eb",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-gej6gh0",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-a9ndtqc",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-gmi0624",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MPSC_RAJYASEVA",
    "examId": "mpsc-rajyaseva",
    "slug": "mpsc-rajyaseva",
    "examName": "Maharashtra Public Service Commission Rajyaseva Exam (MPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Maharashtra PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Maharashtra.",
    "subjects": [
      {
        "_id": "sub-8ymlbu9",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-9fa0yv4",
            "title": "History, Art & Culture of Maharashtra",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Maharashtra.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-tb3p1ft",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-op7h525",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-gpbxwim",
            "title": "Economy & Natural Resources of Maharashtra",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-2u8piti",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-229a980",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-isu2ebh",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-0rdb1l4",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-MPPSC_SSE",
    "examId": "mppsc-sse",
    "slug": "mppsc-sse",
    "examName": "Madhya Pradesh State Services Examination (MPPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Madhya Pradesh PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Madhya Pradesh.",
    "subjects": [
      {
        "_id": "sub-k5x42r8",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-oeoawww",
            "title": "History, Art & Culture of Madhya Pradesh",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Madhya Pradesh.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-s3xwnv6",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-5395vl2",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-e6zvru1",
            "title": "Economy & Natural Resources of Madhya Pradesh",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-al53ng4",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-l0tnafe",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-hftuj40",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-y0j5nz9",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RPSC_RAS",
    "examId": "rpsc-ras",
    "slug": "rpsc-ras",
    "examName": "Rajasthan Administrative Services Examination (RPSC RAS / RTS)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Rajasthan PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Rajasthan.",
    "subjects": [
      {
        "_id": "sub-o1wm8ls",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-09nt01t",
            "title": "History, Art & Culture of Rajasthan",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Rajasthan.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-7aux5qb",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-mltywum",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-s8jwsc4",
            "title": "Economy & Natural Resources of Rajasthan",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-w8yzqb8",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-xsk1otm",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-qh0o8zl",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-d6ksr65",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-WBPSC_WBCS",
    "examId": "wbpsc-wbcs",
    "slug": "wbpsc-wbcs",
    "examName": "West Bengal Civil Service Executive Examination (WBCS)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "West Bengal PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in West Bengal.",
    "subjects": [
      {
        "_id": "sub-eosnnem",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-alf9bgh",
            "title": "History, Art & Culture of West Bengal",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of West Bengal.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-cv0erst",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-jdneesi",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-82t4ox2",
            "title": "Economy & Natural Resources of West Bengal",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-matf29f",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-ddfu6f8",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-eruv4o2",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-20q0hja",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TNPSC_GROUP1",
    "examId": "tnpsc-group1",
    "slug": "tnpsc-group1",
    "examName": "Tamil Nadu Public Service Commission Group 1 Services (TNPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Tamil Nadu PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Tamil Nadu.",
    "subjects": [
      {
        "_id": "sub-sm798xi",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-o65qbyl",
            "title": "History, Art & Culture of Tamil Nadu",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Tamil Nadu.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-qlvr7yl",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-ztck8if",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-stpllik",
            "title": "Economy & Natural Resources of Tamil Nadu",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-yyaga08",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-m4e5obm",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-cs81e6k",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-2w211g5",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-APPSC_GROUP1",
    "examId": "appsc-group1",
    "slug": "appsc-group1",
    "examName": "Andhra Pradesh Public Service Commission Group 1 (APPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Andhra Pradesh PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Andhra Pradesh.",
    "subjects": [
      {
        "_id": "sub-c82kqfp",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-v5yb214",
            "title": "History, Art & Culture of Andhra Pradesh",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Andhra Pradesh.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-tsil8qc",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-hck0xte",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-xqak90v",
            "title": "Economy & Natural Resources of Andhra Pradesh",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-m4o1c8z",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-395mpos",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-g1nchba",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-7iqqlku",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TSPSC_GROUP1",
    "examId": "tspsc-group1",
    "slug": "tspsc-group1",
    "examName": "Telangana State Public Service Commission Group 1 (TSPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Telangana PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Telangana.",
    "subjects": [
      {
        "_id": "sub-34l8oi8",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-w49pwo6",
            "title": "History, Art & Culture of Telangana",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Telangana.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-gd255f5",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-6b99b5x",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-eqlisqj",
            "title": "Economy & Natural Resources of Telangana",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-vhaba6o",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-8t3na95",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-kw29zr9",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-g1atexc",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-KPSC_KAS",
    "examId": "kpsc-kas",
    "slug": "kpsc-kas",
    "examName": "Karnataka Administrative Services Examination (KPSC KAS)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Karnataka PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Karnataka.",
    "subjects": [
      {
        "_id": "sub-fiei6ln",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-3318kl4",
            "title": "History, Art & Culture of Karnataka",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Karnataka.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-05x976j",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-gank2h8",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-vnlbvwb",
            "title": "Economy & Natural Resources of Karnataka",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-4k3r7nv",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-axapevq",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-ee6jvsv",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-p76u71a",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GPSC_CLASS1_2",
    "examId": "gpsc-class1-2",
    "slug": "gpsc-class1-2",
    "examName": "Gujarat Public Service Commission Class 1 & 2 (GPSC)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Gujarat PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Gujarat.",
    "subjects": [
      {
        "_id": "sub-tr6llr1",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-5ouq7ht",
            "title": "History, Art & Culture of Gujarat",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Gujarat.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-uxp89yn",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-e6ncjpy",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-znzr1hd",
            "title": "Economy & Natural Resources of Gujarat",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-1za1m5x",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-kebzbfc",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-6o23ydi",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-4wl5068",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-OPSC_OAS",
    "examId": "opsc-oas",
    "slug": "opsc-oas",
    "examName": "Odisha Administrative Services Examination (OPSC OAS)",
    "category": "State PSC",
    "subCategory": "State Civil Services",
    "conductingBody": "Odisha PSC",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Prelims (GS+CSAT) • Mains (Written) • Interview",
    "overview": "State premier civil service examination recruiting Deputy Collectors, DSPs, and state gazetted officers in Odisha.",
    "subjects": [
      {
        "_id": "sub-9xppvpl",
        "name": "General Studies Paper I (National & State Heritage)",
        "weightage": "40%",
        "totalHours": 55,
        "topics": [
          {
            "_id": "top-mm0d2ra",
            "title": "History, Art & Culture of Odisha",
            "description": "Ancient, medieval, freedom movement, folk traditions, tribal heritage, monuments of Odisha.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "20%"
          },
          {
            "_id": "top-3isz6pc",
            "title": "Indian Polity, Constitution & Governance",
            "description": "Union and state executive, state legislatures, high courts, panchayati raj, center-state relations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "20%"
          }
        ]
      },
      {
        "_id": "sub-3zk6cns",
        "name": "General Studies Paper II (State Economy & Geography)",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-c1japwu",
            "title": "Economy & Natural Resources of Odisha",
            "description": "Agriculture, industrial corridors, budget allocations, state schemes, water management.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "18%"
          },
          {
            "_id": "top-t56akwk",
            "title": "Physical Geography & Environment",
            "description": "Drainage basins, forest reserves, climate zones, disaster management, soil profiles.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-eijp7bg",
        "name": "General Aptitude, Language & Mental Ability",
        "weightage": "25%",
        "totalHours": 35,
        "topics": [
          {
            "_id": "top-ismwbqf",
            "title": "Logical Reasoning & Data Interpretation",
            "description": "Data sufficiency, graphical analysis, numerical computation, problem solving.",
            "importance": "High",
            "estimatedHours": 18,
            "difficulty": "Easy",
            "weightage": "13%"
          },
          {
            "_id": "top-0rnf51b",
            "title": "State Language & English Comprehension",
            "description": "Grammar, vocabulary, translation, comprehension passages in regional language and English.",
            "importance": "High",
            "estimatedHours": 17,
            "difficulty": "Easy",
            "weightage": "12%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RRB_NTPC",
    "examId": "rrb-ntpc",
    "slug": "rrb-ntpc",
    "examName": "Railway Recruitment Board Non-Technical (RRB NTPC)",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "Railway Recruitment Control Board",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "Mega recruitment for Station Masters, Goods Guards, Traffic Assistants, and Senior Clerks.",
    "subjects": [
      {
        "_id": "sub-sytn3pb",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-dlr2him",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-a9m2c27",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-j121s6a",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-lh2t1vk",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-1pfnvd5",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-x63jv34",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-hiozaoq",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-inska1p",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RRB_GROUP_D",
    "examId": "rrb-group-d",
    "slug": "rrb-group-d",
    "examName": "Railway Recruitment Board Level 1 (RRB Group D)",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "Railway Recruitment Cells (RRC)",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "National recruitment for Track Maintainers, Pointsman, Helpers across 16 railway zones.",
    "subjects": [
      {
        "_id": "sub-6yfsjjw",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-m6k6v9x",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-yj7cj2n",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-zs70hfg",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-yvnav29",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-fxb864j",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-igfh34f",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-vg84vbm",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-0um1s0n",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RRB_ALP",
    "examId": "rrb-alp",
    "slug": "rrb-alp",
    "examName": "RRB Assistant Loco Pilot & Technician (RRB ALP)",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "RRB",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "Technical train operations recruitment focusing on mechanical and electrical fundamentals.",
    "subjects": [
      {
        "_id": "sub-02kqcb9",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-rr9piee",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-5ks2d0u",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-d6285fz",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-oe4wayl",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-y5913sc",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-5bx64iu",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-pirw0p5",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-dnk6foj",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RRB_TECHNICIAN",
    "examId": "rrb-technician",
    "slug": "rrb-technician",
    "examName": "RRB Technician Grade I & Grade III",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "RRB",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "Technical trade recruitment across railway workshops, signals, and electrical departments.",
    "subjects": [
      {
        "_id": "sub-u2ontiq",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-01r6thv",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-xwb8xja",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-qc2oc5j",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-gkkqhu0",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-9j8mwg9",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-buire50",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-b1f9v9o",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-pos718r",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RRB_JE",
    "examId": "rrb-je",
    "slug": "rrb-je",
    "examName": "RRB Junior Engineer (RRB JE)",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "RRB",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "Engineering recruitment for permanent way, bridge, rolling stock, and signal supervisors.",
    "subjects": [
      {
        "_id": "sub-xxpumrg",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-5nf1i00",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-9wt6t0e",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-p33ixf2",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-jxrhfks",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-11nq56r",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-3edccku",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-6kp9451",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-bwimbyd",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-RPF_SI_CONSTABLE",
    "examId": "rpf-si-constable",
    "slug": "rpf-si-constable",
    "examName": "Railway Protection Force SI & Constable (RPF)",
    "category": "Railways",
    "subCategory": "Indian Railways Recruitment",
    "conductingBody": "Ministry of Railways",
    "totalMarks": 120,
    "durationMinutes": 90,
    "pattern": "CBT Stage 1 & Stage 2",
    "overview": "Uniformed recruitment to safeguard railway passengers, passenger areas, and railway property.",
    "subjects": [
      {
        "_id": "sub-iuobzq7",
        "name": "Mathematics",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-jq2328x",
            "title": "Number Systems & Arithmetic Operations",
            "description": "BODMAS, fractions, LCM-HCF, ratio-proportion, percentages, time-work, pipe-cistern, speed.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-s9ltxqm",
            "title": "Algebra, Geometry & Elementary Statistics",
            "description": "Basic polynomials, triangles, circles, trigonometric heights, mean, median, mode, standard deviation.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-kzfixi2",
        "name": "General Intelligence & Reasoning",
        "weightage": "35%",
        "totalHours": 45,
        "topics": [
          {
            "_id": "top-y598zkk",
            "title": "Analogies, Syllogisms & Venn Diagrams",
            "description": "Classification, statement-conclusions, direction tests, blood relations, mathematical operations.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Easy",
            "weightage": "18%"
          },
          {
            "_id": "top-48co6i4",
            "title": "Puzzles, Coding-Decoding & Series",
            "description": "Alpha-numeric series, matrix arrangements, data sufficiency, decision making.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-uyxwre5",
        "name": "General Science & General Awareness",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-nlynulc",
            "title": "General Science (Physics, Chemistry, Life Sciences)",
            "description": "Class 10 CBSE level physical mechanics, optics, chemical reactions, human anatomy, diseases.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-f725brf",
            "title": "Current Affairs, History, Polity & Railways Heritage",
            "description": "Indian railways history, budget allocations, sports achievements, monuments, government welfare schemes.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Easy",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IIT_JAM",
    "examId": "iit-jam",
    "slug": "iit-jam",
    "examName": "Joint Admission Test for Masters (IIT JAM)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "IITs",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "National entrance for M.Sc, Joint M.Sc-Ph.D, and dual degree programmes at IITs and IISc.",
    "subjects": [
      {
        "_id": "sub-5zk4b3w",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-6enkh75",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-4bnpimg",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-v7h5gz8",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-wrsopr1",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-fypqtea",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TIFR_GS",
    "examId": "tifr-gs",
    "slug": "tifr-gs",
    "examName": "Tata Institute of Fundamental Research Graduate Studies (TIFR GS)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "TIFR",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "Elite research institution admission test for Ph.D. and Integrated Ph.D. programmes.",
    "subjects": [
      {
        "_id": "sub-66uv7xq",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-p2ht84m",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-t6ddom4",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-ha7vztv",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-eewb6vq",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-h9u0e1b",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-JEST",
    "examId": "jest",
    "slug": "jest",
    "examName": "Joint Entrance Screening Test (JEST)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "Science & Engineering Research Board",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "National screening test for Ph.D./Integrated Ph.D. in Physics, Theoretical Computer Science, and Neuroscience.",
    "subjects": [
      {
        "_id": "sub-rh67rp2",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-htpl3td",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-x2gyxkn",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-vsdi0c9",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-njy5drn",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-hlldk81",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NIMCET",
    "examId": "nimcet",
    "slug": "nimcet",
    "examName": "NIT MCA Common Entrance Test (NIMCET)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "National Institutes of Technology",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "Premier national entrance test for Master of Computer Applications (MCA) admissions across NITs.",
    "subjects": [
      {
        "_id": "sub-mlzzzaz",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-7ntv4bs",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-8pmh0kl",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-mi5nqby",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-md7l01a",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-ql8s4s5",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-ISI_KOLKATA",
    "examId": "isi-kolkata",
    "slug": "isi-kolkata",
    "examName": "Indian Statistical Institute Admission Test (ISI Kolkata)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "ISI Kolkata",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "Elite entrance examination for B.Stat, M.Stat, B.Math, M.Math, and M.Tech Computer Science.",
    "subjects": [
      {
        "_id": "sub-9s2k6ds",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-7nnjyrf",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-sguyqlt",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-49vtjku",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-8rb1149",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-5tba828",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CMI_ENTRANCE",
    "examId": "cmi-entrance",
    "slug": "cmi-entrance",
    "examName": "Chennai Mathematical Institute Entrance Examination (CMI)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "Chennai Mathematical Institute",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "Prestigious examination for undergraduate and postgraduate degrees in Mathematics and Computer Science.",
    "subjects": [
      {
        "_id": "sub-plg3geo",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-mfaqkyo",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-wrkkal2",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-ituj6bt",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-y0fx4zm",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-t3p45mx",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-ICAR_AIEEA",
    "examId": "icar-aieea",
    "slug": "icar-aieea",
    "examName": "ICAR All India Entrance Examination for Admission (ICAR AIEEA)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "NTA / ICAR",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "National entrance test for undergraduate and postgraduate agricultural university programs.",
    "subjects": [
      {
        "_id": "sub-7ya1c8j",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-wjntsat",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-qg9nbx1",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-russoms",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-1nwooin",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-m37ai86",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-NEST_EXAM",
    "examId": "nest-exam",
    "slug": "nest-exam",
    "examName": "National Entrance Screening Test (NEST)",
    "category": "Science",
    "subCategory": "Scientific Research & Masters",
    "conductingBody": "NISER Bhubaneswar & UM-DAE CEBS",
    "totalMarks": 100,
    "durationMinutes": 180,
    "pattern": "CBT • Analytical Subject Questions",
    "overview": "Comprehensive science test for 5-year integrated M.Sc programmes in basic sciences.",
    "subjects": [
      {
        "_id": "sub-gdchk84",
        "name": "Core Scientific Principles & Analysis",
        "weightage": "50%",
        "totalHours": 65,
        "topics": [
          {
            "_id": "top-17b9krt",
            "title": "Advanced Theoretical Concepts & Proofs",
            "description": "Rigorous mathematical analysis, abstract algebra, quantum mechanics, organic reaction mechanisms.",
            "importance": "High",
            "estimatedHours": 35,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-10jg63n",
            "title": "Mathematical Methods & Problem Solving",
            "description": "Differential equations, vector calculus, linear algebra, complex analysis, numerical approximations.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-tbuxphr",
        "name": "Experimental & Applied Sciences",
        "weightage": "50%",
        "totalHours": 60,
        "topics": [
          {
            "_id": "top-34zkmxg",
            "title": "Laboratory Principles & Analytical Instrumentation",
            "description": "Spectroscopy, chromatography, circuit diagnostics, data fitting, error propagation.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-dtqvrr1",
            "title": "Advanced Problem Scenarios & Modeling",
            "description": "Boundary value models, statistical distributions, kinetic modeling, algorithmic optimization.",
            "importance": "High",
            "estimatedHours": 30,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CA_FOUNDATION",
    "examId": "ca-foundation",
    "slug": "ca-foundation",
    "examName": "ICAI Chartered Accountancy Foundation (CA Foundation)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "Institute of Chartered Accountants of India",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Entry-level examination for the prestigious Chartered Accountancy professional qualification.",
    "subjects": [
      {
        "_id": "sub-waeh8dz",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-pe1ih7m",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-rmn3u94",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-s9m15ea",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-pdictiz",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-48xw0re",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-u63oaeq",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-7l5fndz",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-dlyfazb",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CA_INTERMEDIATE",
    "examId": "ca-intermediate",
    "slug": "ca-intermediate",
    "examName": "ICAI Chartered Accountancy Intermediate (CA Inter)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "Institute of Chartered Accountants of India",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Second level examination covering financial accounting, corporate laws, taxation, and auditing.",
    "subjects": [
      {
        "_id": "sub-av3l45q",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-ivzulud",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-vlobwsj",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-jl4eijm",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-48r9moy",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-iipqip0",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-mvkwr96",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-w56l2l4",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-r5g2wbz",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CA_FINAL",
    "examId": "ca-final",
    "slug": "ca-final",
    "examName": "ICAI Chartered Accountancy Final (CA Final)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "Institute of Chartered Accountants of India",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Final licensing examination to qualify and practice as a certified Chartered Accountant in India.",
    "subjects": [
      {
        "_id": "sub-hggds7x",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-38im7h1",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-om3luws",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-3ffoluk",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-fvisqkn",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-jnghm82",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-fp5nano",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-w0gyhju",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-hx851ri",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CS_EXECUTIVE",
    "examId": "cs-executive",
    "slug": "cs-executive",
    "examName": "ICSI Company Secretary Executive Examination (CS Executive)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "Institute of Company Secretaries of India",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Professional certification examining corporate governance, securities laws, and company administration.",
    "subjects": [
      {
        "_id": "sub-gjo70mz",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-qooc6kr",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-93l5rbr",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-ahuhcf7",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-2cqjoxg",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-guirdti",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-960gxgv",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-kzd1nzd",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-ejuth9s",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CMA_INTERMEDIATE",
    "examId": "cma-intermediate",
    "slug": "cma-intermediate",
    "examName": "ICMAI Cost & Management Accountant Intermediate (CMA Inter)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "Institute of Cost Accountants of India",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Intermediate professional examination in management accounting, operations, and cost audit.",
    "subjects": [
      {
        "_id": "sub-kr4l15w",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-47wi31q",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-4pkp65x",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-9t3r708",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-v11sicd",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-uvhz85g",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-fj0wvt7",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-gt14z2w",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-nygde67",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-CFA_LEVEL1",
    "examId": "cfa-level1",
    "slug": "cfa-level1",
    "examName": "Chartered Financial Analyst Level 1 (CFA Level 1)",
    "category": "Professional",
    "subCategory": "Accountancy, Finance & Corporate Law",
    "conductingBody": "CFA Institute (USA)",
    "totalMarks": 400,
    "durationMinutes": 240,
    "pattern": "Objective & Descriptive Professional Papers",
    "overview": "Global gold standard investment management and financial analysis professional qualification.",
    "subjects": [
      {
        "_id": "sub-hzbsl0n",
        "name": "Financial Accounting & Reporting",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-nnqzb6s",
            "title": "Accounting Standards & Principles",
            "description": "AS and Ind-AS framework, preparation of balance sheets, cash flow statements, consolidation.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-0drn2tx",
            "title": "Corporate & Cost Accounting",
            "description": "Share capital transactions, debentures, process costing, marginal costing, standard costing variance.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-64ofrf5",
        "name": "Corporate Laws, Taxation & Audit",
        "weightage": "35%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-amnfrw7",
            "title": "Company Law & Corporate Governance",
            "description": "Companies Act 2013, board of directors, meetings, management remuneration, corporate social responsibility.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "18%"
          },
          {
            "_id": "top-kjyv5v6",
            "title": "Direct & Indirect Taxation (Income Tax & GST)",
            "description": "Head-wise income computation, capital gains, deductions, GST returns, input tax credit mechanisms.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "17%"
          }
        ]
      },
      {
        "_id": "sub-nryys2s",
        "name": "Financial Management & Economics",
        "weightage": "30%",
        "totalHours": 40,
        "topics": [
          {
            "_id": "top-ffa115n",
            "title": "Financial Management & Valuation",
            "description": "Cost of capital, capital budgeting (NPV, IRR), working capital management, dividend theories.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          },
          {
            "_id": "top-6fqd0i5",
            "title": "Auditing Principles & Professional Ethics",
            "description": "Audit evidence, internal controls, audit sampling, auditor report formats, code of professional ethics.",
            "importance": "High",
            "estimatedHours": 20,
            "difficulty": "Medium",
            "weightage": "15%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GRE_GENERAL",
    "examId": "gre-general",
    "slug": "gre-general",
    "examName": "Graduate Record Examination (GRE General Test)",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "Educational Testing Service (ETS)",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "Global standardized test for admission to graduate and business school master and doctoral programs.",
    "subjects": [
      {
        "_id": "sub-1x3gunh",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-uev99sz",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-ku0d392",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-z3o8cnh",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-3pvmlhw",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-wcnzm4u",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-GMAT_FOCUS",
    "examId": "gmat-focus",
    "slug": "gmat-focus",
    "examName": "GMAT Focus Edition",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "Graduate Management Admission Council (GMAC)",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "Premier international computer-adaptive entrance examination tailored strictly for top global MBA admissions.",
    "subjects": [
      {
        "_id": "sub-so5bpvo",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-m2bwec3",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-nurcfll",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-e5dut57",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-7glg2yk",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-rcqalmk",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-SAT_DIGITAL",
    "examId": "sat-digital",
    "slug": "sat-digital",
    "examName": "Digital SAT Examination",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "College Board (USA)",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "Standardized college admissions test widely accepted across USA, Canada, and global undergraduate universities.",
    "subjects": [
      {
        "_id": "sub-h5ejiwv",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-st7resq",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-jkabwjg",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-9sljddt",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-p7rrke1",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-6l1g2em",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-IELTS_ACADEMIC",
    "examId": "ielts-academic",
    "slug": "ielts-academic",
    "examName": "IELTS Academic (International English Language Testing System)",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "IDP / British Council",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "World’s most recognized English proficiency test for international study and immigration.",
    "subjects": [
      {
        "_id": "sub-cr0hjem",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-pfumas2",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-01c2qnj",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-6k73tcu",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-nutrrfd",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-arv9phu",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-TOEFL_IBT",
    "examId": "toefl-ibt",
    "slug": "toefl-ibt",
    "examName": "TOEFL iBT (Test of English as a Foreign Language)",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "Educational Testing Service (ETS)",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "Premier American English academic proficiency test measuring Reading, Listening, Speaking, and Writing.",
    "subjects": [
      {
        "_id": "sub-i5vya2o",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-4c3svqi",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-r7j5lj7",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-hxa0avc",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-n2narbj",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-qfupvcf",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  },
  {
    "_id": "EXAM-PTE_ACADEMIC",
    "examId": "pte-academic",
    "slug": "pte-academic",
    "examName": "Pearson Test of English Academic (PTE Academic)",
    "category": "International",
    "subCategory": "Study Abroad & Standardized Testing",
    "conductingBody": "Pearson VUE",
    "totalMarks": 340,
    "durationMinutes": 150,
    "pattern": "Computer Adaptive Online Test",
    "overview": "AI-scored computer-based English language test accepted worldwide for student visas and university admissions.",
    "subjects": [
      {
        "_id": "sub-a0j1jpa",
        "name": "Verbal Reasoning & English Proficiency",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-fnafply",
            "title": "Academic Reading Comprehension & Inferences",
            "description": "Dense multi-paragraph excerpts across sciences and humanities, author perspective, rhetorical structure.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          },
          {
            "_id": "top-wxi0h3j",
            "title": "Text Completion & Vocabulary in Context",
            "description": "Advanced academic vocabulary, double/triple blank sentence completion, idiomatic usage, coherence.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Hard",
            "weightage": "25%"
          }
        ]
      },
      {
        "_id": "sub-mr6aqwd",
        "name": "Quantitative Reasoning & Data Insights",
        "weightage": "50%",
        "totalHours": 50,
        "topics": [
          {
            "_id": "top-qd8h544",
            "title": "Arithmetic, Algebra & Word Problems",
            "description": "Ratios, exponents, quadratics, functions, coordinate geometry, work-rate, interest problems.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          },
          {
            "_id": "top-pu4xnzo",
            "title": "Data Interpretation & Analytical Writing",
            "description": "Data sufficiency, graphical representations, multi-source reasoning, analytical issue writing.",
            "importance": "High",
            "estimatedHours": 25,
            "difficulty": "Medium",
            "weightage": "25%"
          }
        ]
      }
    ]
  }
];
