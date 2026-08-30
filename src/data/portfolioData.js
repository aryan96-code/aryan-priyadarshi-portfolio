export const PORTFOLIO_DATA = {
  personal: {
    name: "Aryan Priyadarshi",
    role: "Computer Science & Engineering Student",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    university: "Lovely Professional University",
    period: "August 2025 – Present",
    tagline: "Building practical systems where software meets real-world problems.",
    bio: "I'm Aryan, a Computer Science & Engineering student specializing in AI & ML at Lovely Professional University. I enjoy building practical systems where software meets real-world problems — from wearable hardware and machine learning to web applications and databases. I'm currently strengthening my foundations in programming, DSA and web development while learning by building real projects.",
    location: "Punjab, India",
    email: "aryanpriyadarshi.dev@gmail.com",
    github: "https://github.com/aryan96-code",
    linkedin: "https://linkedin.com/in/aryan-priyadarshi",
    statusBadge: "Currently learning & building"
  },

  // Easter egg achievements — hidden, triggered by subtle interactions
  achievements: [
    { id: "deep-diver", title: "Deep Diver", desc: "Explored the entire portfolio!" },
    { id: "tech-explorer", title: "Tech Explorer", desc: "Explored 3+ skills in the stack." },
    { id: "hardware-master", title: "Hardware Curious", desc: "Dove into the sensor architecture." },
    { id: "credential-verified", title: "Credential Checked", desc: "Verified a certification." },
    { id: "terminal-hacker", title: "Terminal Unlocked", desc: "Found the hidden developer console." }
  ],

  // Key highlights — real, verifiable numbers
  highlights: [
    { value: "2", label: "Major Projects", sub: "Hardware & Web" },
    { value: "92.8%", label: "Best ML Accuracy", sub: "Held-out test set" },
    { value: "15 hrs", label: "Python Teaching", sub: "6-day initiative" },
    { value: "3", label: "Certifications", sub: "Infosys & EduTech Hub" }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Comfortable", desc: "ML pipelines, Flask APIs, data processing", key: "python" },
      { name: "C++", level: "Comfortable", desc: "ESP32 firmware, system-level logic", key: "cpp" },
      { name: "C", level: "Comfortable", desc: "Low-level programming fundamentals", key: "c" }
    ],
    technologies: [
      { name: "HTML", level: "Comfortable", desc: "Semantic markup and page structure", key: "html" },
      { name: "CSS", level: "Comfortable", desc: "Responsive design and modern styling", key: "css" }
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
      focus: "Core data structures, recursion, and algorithmic problem-solving in C++ and Python."
    },
    {
      category: "Web Development",
      status: "Building",
      focus: "Responsive design, HTML/CSS/JS fundamentals, and integrating backend services."
    },
    {
      category: "Python",
      status: "Strengthening",
      focus: "Applied Python for data processing, scripting, signal analysis, and Flask backends."
    },
    {
      category: "Databases",
      status: "Building",
      focus: "Relational database design with PostgreSQL and MySQL, cloud sync with Supabase."
    },
    {
      category: "AI & Machine Learning",
      status: "Exploring",
      focus: "Classification models, feature extraction, and applying ML to real hardware problems."
    }
  ],

  projects: [
    {
      id: "fluencyband-ai",
      title: "FluencyBand AI",
      subtitle: "Wearable Pre-Stutter Detection System",
      number: "01",
      dates: "Mar 2026 – May 2026",
      isFeatured: true,

      summary: "A multimodal wearable that detects pre-stutter physiological signals in real time and delivers haptic biofeedback via an ESP32-based hardware array and a Python Random Forest pipeline.",

      metrics: [
        { label: "Held-Out Test Accuracy", value: "92.8%", sub: "Normal / Stressed / Pre-Stutter classification" },
        { label: "Processing Window", value: "500 ms", sub: "Sensor-to-inference latency" },
        { label: "Vibrotactile Response", value: "~10 ms", sub: "Graded haptic motor feedback" }
      ],

      problem: "Speech stuttering is often preceded by measurable physiological changes — elevated heart rate, skin conductance shifts, and micro-tremors — that occur before a stutter event. Existing biofeedback systems don't capture this in real time.",
      solution: "Built a wearable system using MAX30102, GSR, MPU6050, and INMP441 sensors on ESP32 to stream multi-channel physiological data to a Python Flask backend. A 10-feature Random Forest classifier distinguishes Normal, Stressed, and Pre-Stutter states, triggering graded haptic motor feedback.",

      techStack: ["Python", "C++", "ESP32", "Random Forest", "Flask", "TCP", "Arduino", "Scikit-Learn"],
      highlights: [
        "Multi-sensor acquisition: MAX30102 (optical pulse), GSR (skin conductance), MPU6050 (6-axis motion), INMP441 (MEMS audio).",
        "10-feature extraction pipeline across physiological and acoustic signal domains.",
        "Multiclass Random Forest classifier: Normal, Stressed, and Pre-Stutter states.",
        "Flask TCP streaming backend maintaining inference within a 500 ms window.",
        "Closed-loop graded haptic feedback response within ~10 ms of state detection."
      ],
      sensors: [
        { name: "MAX30102", type: "Optical Pulse & Oximetry", function: "Heart rate variability & blood volume pulse" },
        { name: "GSR Sensor", type: "Galvanic Skin Response", function: "Electrodermal activity & arousal tracking" },
        { name: "MPU6050", type: "6-Axis IMU", function: "Head/neck micro-tremors & motion filtering" },
        { name: "INMP441", type: "I2S MEMS Mic", function: "Acoustic signal capture & spectral features" }
      ],
      githubUrl: "https://github.com/aryan96-code/stutter-detection"
    },
    {
      id: "campuscare-companion",
      title: "CampusCare Companion",
      subtitle: "Mental Wellness & Peer Support Platform",
      number: "02",
      dates: "Nov 2025 – Dec 2025",
      isFeatured: false,

      summary: "A web platform for university students to log mood and energy, track wellness trends over 7 and 30 days, and participate in anonymous peer support — backed by Supabase and PostgreSQL.",

      problem: "University students often lack accessible tools to monitor their mental well-being or seek peer support in a private, low-pressure way.",
      solution: "Built a responsive web app with HTML, CSS, and JavaScript, using Supabase authentication and PostgreSQL for persistent data storage. Includes daily mood/energy logging, Chart.js analytics dashboards, guided wellness activities, anonymous peer discussion, and local-first storage with CSV/JSON export.",

      techStack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "Chart.js"],
      highlights: [
        "Supabase authentication with PostgreSQL-backed cloud sync for persistent wellness logs.",
        "7-day and 30-day visual trend dashboards built with Chart.js.",
        "Anonymous peer support threads — no user identity revealed.",
        "Local-first storage fallback for offline mood logging.",
        "One-click JSON and CSV data export for personal records."
      ],
      features: [
        { title: "Mood & Energy Logger", desc: "Daily tracking for mood, stress level, and energy — logged with timestamps." },
        { title: "Peer Support", desc: "Anonymous discussion threads for students to share and support each other." },
        { title: "Progress Analytics", desc: "7-day and 30-day visualizations using Chart.js." },
        { title: "Offline & Export", desc: "Local-first storage fallback and one-click JSON/CSV data export." }
      ],
      githubUrl: "https://github.com/aryan96-code/mental-health-companion"
    }
  ],

  communityTeaching: {
    title: "Community Development Project — Introduction to Python Programming",
    organization: "",
    location: "",
    dates: "17 Jul 2026 – 25 Jul 2026",
    quote: "I don't just build with technology — I enjoy helping others understand it.",
    stats: [
      { label: "Duration", value: "6 Days", sub: "Structured sessions" },
      { label: "Teaching Hours", value: "15 Hours", sub: "Live instruction" },
      { label: "Audience", value: "Classes 11–12", sub: "High school students" }
    ],
    details: [
      "Facilitated a six-day Python programming workshop for high school students as part of a community development initiative.",
      "Delivered 15 hours of structured instruction covering Python syntax, data types, variables, input/output, conditional logic, and loops.",
      "Used live coding demonstrations, hands-on exercises, and interactive Q&A to make concepts accessible.",
      "Designed sessions for students with no prior programming background."
    ]
  },

  journeyTimeline: [
    {
      year: "Aug 2025",
      title: "Started B.Tech CSE (AI & ML) at LPU",
      subtitle: "Lovely Professional University",
      desc: "Commenced undergraduate studies in Computer Science & Engineering with specialization in AI & ML.",
      type: "education"
    },
    {
      year: "Oct 2025",
      title: "Leadership Fundamentals Certification",
      subtitle: "EduTech Hub",
      desc: "Completed certification covering team dynamics, coordination, and communication.",
      type: "certification"
    },
    {
      year: "Nov – Dec 2025",
      title: "Built CampusCare Companion",
      subtitle: "Mental Wellness Web Platform",
      desc: "Developed a mood tracking and peer support web platform using HTML/CSS/JS, Supabase, PostgreSQL, and Chart.js.",
      type: "project"
    },
    {
      year: "Mar – May 2026",
      title: "Built FluencyBand AI Wearable",
      subtitle: "Multimodal Pre-Stutter Detection System",
      desc: "Designed and built an ESP32 wearable sensor array with a Random Forest ML pipeline achieving 92.8% held-out accuracy and ~10 ms haptic feedback.",
      type: "project"
    },
    {
      year: "Apr 2026",
      title: "Introduction to Cyber Security",
      subtitle: "Infosys Springboard",
      desc: "Completed coursework covering fundamental security concepts, network defense, and data privacy.",
      type: "certification"
    },
    {
      year: "Jul 2026",
      title: "Programming Fundamentals using Python",
      subtitle: "Infosys Springboard",
      desc: "Certification covering object-oriented programming, data structures, and algorithmic logic in Python.",
      type: "certification"
    },
    {
      year: "Jul 2026",
      title: "Python Teaching Initiative",
      subtitle: "Community Development Project",
      desc: "Facilitated 15 hours of Python programming instruction over 6 days for Classes 11–12 students.",
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
      category: "Programming",
      skills: ["Python", "Data Structures", "Algorithmic Logic", "Problem Solving"],
      desc: "Covers core Python concepts, object-oriented principles, and algorithmic problem solving."
    },
    {
      id: "cert-cybersecurity",
      title: "Introduction to Cyber Security",
      issuer: "Infosys Springboard",
      date: "Apr 2026",
      image: "./certificates/cybersecurity.pdf.png",
      document: "./certificates/cybersecurity.pdf",
      credentialId: "INF-SPRING-CS2026",
      category: "Cyber Security",
      skills: ["Network Security", "Threat Awareness", "Data Privacy"],
      desc: "Foundational certification covering network security concepts, cyber threats, and data privacy fundamentals."
    },
    {
      id: "cert-leadership",
      title: "Leadership Fundamentals",
      issuer: "EduTech Hub",
      date: "Oct 2025",
      image: "./certificates/30a0c1d5-3e71-43f5-9bf2-ba91cba4cfc4.pdf.png",
      document: "./certificates/30a0c1d5-3e71-43f5-9bf2-ba91cba4cfc4.pdf",
      credentialId: "ETH-LEAD-2025",
      category: "Leadership",
      skills: ["Team Leadership", "Project Coordination", "Communication"],
      desc: "Training in leadership, project coordination, team dynamics, and effective communication."
    }
  ],

  education: {
    institution: "Lovely Professional University",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    duration: "August 2025 – Present",
    location: "Phagwara, Punjab, India",
    focus: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core Computer Science: C, C++, Data Structures & Algorithms",
      "Database Systems: MySQL, PostgreSQL",
      "Applied Engineering: Hardware integration & ML systems"
    ]
  }
};
