export const PORTFOLIO_DATA = {
  personal: {
    name: "Aryan Priyadarshi",
    role: "Computer Science Student & Developer",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    university: "Lovely Professional University",
    period: "August 2025 – Present",
    tagline: "Engineering multimodal bio-signal hardware arrays, low-latency Random Forest ML pipelines, and cloud-synchronized web platforms.",
    bio: "I am a B.Tech Computer Science & Engineering student specializing in **AI & Machine Learning** at Lovely Professional University. I focus on **bridging the gap between hardware sensor arrays and ML models**, translating complex bio-signals into **real-time low-latency feedback systems**.",
    location: "Punjab, India",
    email: "aryanpriyadarshi.dev@gmail.com",
    github: "https://github.com/aryanpriyadarshi",
    linkedin: "https://linkedin.com/in/aryan-priyadarshi",
    statusBadge: "Actively Learning & Building Real Projects",
    level: "LVL 25 STUDENT ENGINEER",
    xp: "9,280 / 10,000 XP"
  },

  achievements: [
    { id: "deep-diver", title: "The Deep Diver 🏆", desc: "Explored the entire stack down to the footer!" },
    { id: "tech-explorer", title: "Tech Explorer 🗺️", desc: "Surveyed 3 different skill chips in the Technical Arsenal!" },
    { id: "hardware-master", title: "Hardware Fusion Master ⚡", desc: "Inspected the multimodal ESP32 sensor array architecture!" },
    { id: "credential-verified", title: "Credential Verified 📜", desc: "Verified official Infosys Springboard certification!" },
    { id: "terminal-hacker", title: "Terminal Hacker 💻", desc: "Triggered the secret developer console!" }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Comfortable", desc: "ML pipelines, Flask API, Data manipulation", key: "python" },
      { name: "C++", level: "Comfortable", desc: "ESP32 firmware, System optimization", key: "cpp" },
      { name: "C", level: "Comfortable", desc: "Low-level memory & hardware logic", key: "c" }
    ],
    technologies: [
      { name: "HTML5", level: "Comfortable", desc: "Semantic layout & accessibility", key: "html" },
      { name: "CSS3", level: "Comfortable", desc: "Responsive design & modern styling", key: "css" },
      { name: "JavaScript", level: "Building", desc: "DOM manipulation & Chart integrations", key: "js" }
    ],
    databasesAndTools: [
      { name: "MySQL", category: "Database", key: "mysql" },
      { name: "PostgreSQL", category: "Database", key: "postgresql" },
      { name: "Supabase", category: "Backend / Auth", key: "supabase" },
      { name: "Git", category: "Version Control", key: "git" },
      { name: "GitHub", category: "Collaboration", key: "github" },
      { name: "VS Code", category: "IDE", key: "vscode" }
    ],
    softSkills: [
      "Problem Solving",
      "Time Management",
      "Adaptability"
    ]
  },

  currentlyLearning: [
    {
      category: "Data Structures & Algorithms",
      status: "Learning",
      badgeColor: "cyan",
      focus: "Algorithmic efficiency, recursion, and core data structures in C++ & Python."
    },
    {
      category: "Web Development",
      status: "Building",
      badgeColor: "emerald",
      focus: "Full-stack web workflows, responsive component design, and API integrations."
    },
    {
      category: "Python Ecosystem",
      status: "Comfortable",
      badgeColor: "teal",
      focus: "Data analytics, signal processing, Flask backends, and scikit-learn pipelines."
    },
    {
      category: "Databases & Cloud",
      status: "Building",
      badgeColor: "emerald",
      focus: "Relational database design in PostgreSQL/MySQL, local-first syncing with Supabase."
    },
    {
      category: "AI & Machine Learning",
      status: "Learning",
      badgeColor: "cyan",
      focus: "Multiclass classification, bio-signal feature extraction, and real-time model inference."
    }
  ],

  projects: [
    {
      id: "fluencyband-ai",
      title: "FluencyBand AI — Wearable Pre-Stutter Detection System",
      badge: "FEATURED BOSS QUEST #01",
      questLevel: "HARDWARE & ML BOSS FIGHT",
      dates: "25 Mar 2026 – 28 May 2026",
      isFeatured: true,

      bossFight: {
        theBoss: "Unpredictable pre-speech bio-signals and acoustic micro-arousals were causing unmanaged stuttering episodes without real-time feedback.",
        yourWeapons: "ESP32 Multimodal Hardware Sensor Array (MAX30102 PPG, GSR, MPU6050 6-Axis IMU, INMP441 MEMS Microphone), 10-Feature Random Forest ML Pipeline, Flask TCP Backend, and 3-Level Graded Haptic Motor Feedback.",
        theVictory: "Achieved 92.8% held-out test accuracy, a 500 ms inference processing window, and ~10 ms motor feedback response time."
      },

      metrics: [
        { label: "Held-Out Test Accuracy", value: "92.8%", sub: "Across Normal, Stressed & Pre-Stutter states", highlight: true },
        { label: "Processing Window", value: "500 ms", sub: "Real-time sensor-to-inference latency", highlight: true },
        { label: "Motor Response Time", value: "~10 ms", sub: "Graded vibrotactile feedback trigger", highlight: true }
      ],

      problem: "Speech stuttering often originates from pre-speech physiological and acoustic micro-arousals. Conventional biofeedback systems lack real-time physiological sensor integration and low-latency motor feedback.",
      solution: "Engineered an integrated multimodal wearable combining physiological (MAX30102, GSR, MPU6050) and acoustic (INMP441) signal acquisition via ESP32. Built a multiclass Random Forest pipeline running on a Python-Flask backend with TCP streaming and 3-level graded vibrotactile feedback.",
      techStack: ["Python", "C++", "ESP32", "Random Forest", "Flask", "TCP", "Arduino", "Scikit-Learn"],
      highlights: [
        "Multimodal hardware acquisition using MAX30102 (PPG), GSR (skin response), MPU6050 (motion), and INMP441 (acoustic).",
        "Feature extraction pipeline extracting 10 distinct physiological and acoustic signal features.",
        "Multiclass Random Forest classification discriminating Normal, Stressed, and Pre-Stutter physiological states.",
        "TCP streaming protocol with Flask backend maintaining prediction within a strict 500ms processing window.",
        "Closed-loop feedback delivering graded motor responses within ~10ms of state detection."
      ],
      sensors: [
        { name: "MAX30102", type: "Optical Pulse & Oximetry", function: "Heart rate variability & blood volume pulse acquisition" },
        { name: "GSR Sensor", type: "Galvanic Skin Response", function: "Electrodermal activity & emotional arousal tracking" },
        { name: "MPU6050", type: "6-Axis IMU", function: "Head/neck micro-tremors & motion artifact filtering" },
        { name: "INMP441", type: "I2S MEMS Microphone", function: "Acoustic audio signal capture & spectral feature extraction" }
      ],
      githubUrl: "https://github.com/aryanpriyadarshi/fluencyband-ai",
      demoAvailable: true
    },
    {
      id: "campuscare-companion",
      title: "CampusCare Companion — Mental Wellness & Peer Support Platform",
      badge: "EPIC QUEST #02",
      questLevel: "FULL-STACK & CLOUD QUEST",
      dates: "Nov 2025 – Dec 2025",
      isFeatured: false,

      bossFight: {
        theBoss: "University students faced mental health isolation, unmonitored stress spikes, and a lack of privacy-centric peer support systems.",
        yourWeapons: "Responsive HTML/CSS/JS interface, Supabase Cloud Auth, PostgreSQL database, Local-First storage fallback, Chart.js trend engine, and encrypted anonymous peer-support workflows.",
        theVictory: "Delivered 7-day/30-day visual progress trends, anonymous peer community threads, and seamless offline data export."
      },

      problem: "University students often struggle with mental well-being, mood tracking, and stress isolation without accessible, privacy-centric peer support systems.",
      solution: "Built a responsive wellness platform integrating mood and energy logging, 7-day/30-day visual progress trends, guided activities, and an anonymous peer-support ecosystem backed by Supabase authentication and PostgreSQL.",
      techStack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "Chart.js"],
      highlights: [
        "Integrated Supabase Auth with PostgreSQL-backed cloud synchronization for persistent wellness logs.",
        "Built privacy-first anonymous peer-support workflow allowing secure student interaction.",
        "Interactive 7-day trend analysis and 30-day visual historical progress using Chart.js.",
        "Local-first storage fallback allowing seamless offline mood logging and full JSON/CSV data export."
      ],
      features: [
        { title: "Mood & Energy Logger", desc: "Daily multi-parameter tracking for stress, energy, and emotional states." },
        { title: "Anonymous Peer Support", desc: "Encrypted community discussion threads without revealing user identity." },
        { title: "Analytics Dashboard", desc: "7-day trend graphs and 30-day behavioral pattern visualizations." },
        { title: "Data Privacy & Export", desc: "Local storage fallback and one-click data export." }
      ],
      githubUrl: "https://github.com/aryanpriyadarshi/campuscare-companion",
      demoAvailable: false
    }
  ],

  communityTeaching: {
    title: "Community Development Project — Introduction to Python Programming",
    organization: "Lovely Professional University & Gurukul, Sijua",
    location: "Gurukul, Sijua",
    dates: "17 Jul 2026 – 25 Jul 2026",
    quote: "I don't just build with technology — I enjoy helping others understand it.",
    stats: [
      { label: "Duration", value: "6 Days", sub: "Structured initiative" },
      { label: "Instruction Hours", value: "15 Hours", sub: "Live interactive teaching" },
      { label: "Target Cohort", value: "Classes 11–12", sub: "High school students" }
    ],
    details: [
      "Facilitated a six-day Python programming workshop empowering high school students with fundamental computational thinking.",
      "Delivered 15 hours of structured classroom instruction and hands-on coding practice.",
      "Covered core topics: Python syntax, variable scopes, data types, input/output operations, logical operators, and conditional decision-making.",
      "Utilized live coding demonstrations, interactive Q&A, problem-solving drills, and revision exercises."
    ]
  },

  journeyTimeline: [
    {
      year: "Aug 2025",
      title: "Started B.Tech CSE (AI & ML) at LPU",
      subtitle: "Lovely Professional University",
      desc: "Commenced undergraduate studies in Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning.",
      type: "education"
    },
    {
      year: "Oct 2025",
      title: "Leadership Fundamentals Certification",
      subtitle: "EduTech Hub",
      desc: "Earned certification in team dynamics, project coordination, and technical communication.",
      type: "certification"
    },
    {
      year: "Nov – Dec 2025",
      title: "Engineered CampusCare Companion",
      subtitle: "Full-Stack Web & Wellness Platform",
      desc: "Developed a mood tracking and anonymous peer-support platform using HTML/CSS, JS, Supabase, PostgreSQL, and Chart.js.",
      type: "project"
    },
    {
      year: "Mar – May 2026",
      title: "Engineered FluencyBand AI Wearable",
      subtitle: "Multimodal Pre-Stutter Biofeedback System",
      desc: "Designed and built an ESP32 wearable hardware sensor array, 10-feature Random Forest ML pipeline, Flask TCP backend, and ~10ms motor response feedback system.",
      type: "project"
    },
    {
      year: "Apr 2026",
      title: "Introduction to Cyber Security Certification",
      subtitle: "Infosys Springboard",
      desc: "Completed coursework covering fundamental security concepts, network defense principles, and data privacy protocols.",
      type: "certification"
    },
    {
      year: "Jul 2026",
      title: "Programming Fundamentals using Python",
      subtitle: "Infosys Springboard",
      desc: "Achieved certification validating object-oriented programming, data structures, and algorithmic logic in Python.",
      type: "certification"
    },
    {
      year: "Jul 2026",
      title: "Facilitated Python Teaching Initiative",
      subtitle: "Gurukul, Sijua (Community Development Project)",
      desc: "Delivered 15 hours of structured Python instruction over 6 days to high school students (Classes 11–12).",
      type: "community"
    }
  ],

  certifications: [
    {
      id: "cert-python",
      title: "Programming Fundamentals using Python",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      image: "./certificates/python.png",
      document: "./certificates/python.png",
      credentialId: "INF-SPRING-PY2026",
      category: "Programming & Algorithms",
      skills: ["Python Syntax", "Data Structures", "Algorithmic Logic", "Problem Solving"],
      desc: "Comprehensive assessment covering core Python concepts, object-oriented principles, algorithmic problem solving, and data structures."
    },
    {
      id: "cert-cybersecurity",
      title: "Introduction to Cyber Security",
      issuer: "Infosys Springboard",
      date: "Apr 2026",
      image: "./certificates/cybersecurity.pdf.png",
      document: "./certificates/cybersecurity.pdf",
      credentialId: "INF-SPRING-CS2026",
      category: "Cyber Security & Networks",
      skills: ["Network Security", "Threat Modeling", "Data Privacy", "Cyber Defense"],
      desc: "Foundational certification covering network security architecture, cyber threat vectors, encryption fundamentals, and risk mitigation strategies."
    },
    {
      id: "cert-leadership",
      title: "Leadership Fundamentals",
      issuer: "EduTech Hub",
      date: "Oct 2025",
      image: "./certificates/30a0c1d5-3e71-43f5-9bf2-ba91cba4cfc4.pdf.png",
      document: "./certificates/30a0c1d5-3e71-43f5-9bf2-ba91cba4cfc4.pdf",
      credentialId: "ETH-LEAD-2025",
      category: "Leadership & Management",
      skills: ["Team Leadership", "Project Coordination", "Communication", "Adaptability"],
      desc: "Professional training in collaborative leadership, cross-functional project management, team dynamics, and agile decision-making."
    }
  ],

  education: {
    institution: "Lovely Professional University",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    duration: "August 2025 – Present",
    location: "Phagwara, Punjab, India",
    focus: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core Computer Science Fundamentals (C, C++, Data Structures)",
      "Database Systems (MySQL, PostgreSQL)",
      "Applied Systems Engineering & Multimodal Hardware Integration"
    ]
  }
};
