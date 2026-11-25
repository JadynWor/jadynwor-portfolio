// app/content.ts
// Everything on the home page lives here. Edit this file to update the site.

export interface LinkItem {
  label: string;
  href: string;
}

export const profile = {
  name: "Jadyn Worthington",
  avatar: "/jadynwor_avatar.png",
  lines: [
    "Software Engineer, Bloom Energy",
    "Incoming M.S. Computer Science, Georgia Tech (Spring 2027)",
  ],
  email: { user: "jadynmwor", domain: "gmail.com" },
  location: "Newark, DE. Open to NYC, SF, DC, Atlanta, Houston. U.S. citizen, clearance eligible.",
  links: [
    { label: "GitHub", href: "https://github.com/JadynWor" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jadynwor" },
    { label: "Hugging Face", href: "https://huggingface.co/jadynwor/aria-sar" },
    { label: "Substack", href: "https://jadynwor.substack.com" },
    { label: "X", href: "https://x.com/mekhijpg" },
  ] as LinkItem[],
};

export interface Update {
  date: string;
  text: string;
  link?: LinkItem;
}

// Newest first. The first few show by default; the rest sit behind "More".
export const updates: Update[] = [
  {
    date: "Spring 2027",
    text: "Starting my M.S. in Computer Science at Georgia Tech, focused on robotics and autonomous systems.",
  },
  {
    date: "Aug 2026",
    text: "Built Bearing Witness, a local bearing-failure detection agent, at the Dell x NVIDIA AI Hackathon in NYC.",
  },
  {
    date: "2026",
    text: "TerraWatch won Most Innovative Project at Code for Climate, NY Tech Week, and raised ~$10K from climate-focused backers.",
    link: { label: "terrawatch.app", href: "https://terrawatch.app" },
  },
  {
    date: "2026",
    text: "Open-sourced ARIA, a real-time drone search and rescue system. Submitted to the Gemma 4 Good Hackathon.",
    link: { label: "GitHub", href: "https://github.com/JadynWor/ARIA" },
  },
  {
    date: "Apr 2026",
    text: "Completed the Edge ML & Systems fellowship at Lola Vision Systems.",
  },
  {
    date: "Mar 2026",
    text: "Concluded BonaFyde after launching to 5 schools.",
  },
  {
    date: "Nov 2025",
    text: "Built Harvest Hub at an overnight hackathon and shipped Midas Core.",
    link: { label: "write-up", href: "/projects/harvest-hub" },
  },
  {
    date: "Oct 2025",
    text: "Joined Bloom Energy as a manufacturing engineer.",
  },
  {
    date: "Aug 2025",
    text: "Completed my time at New Light Technologies.",
  },
  {
    date: "2024",
    text: "Profiled by York College / CUNY on how NASA's STEM program kept me on track.",
    link: { label: "article", href: "/achievements/articles/nasa-stem-program" },
  },
  {
    date: "May 2024",
    text: "Graduated from the University of Delaware; named Outstanding RSO Leader.",
    link: { label: "award", href: "/achievements/awards/outstanding-rso-leader" },
  },
];

// One line shows; the bullets show when someone clicks to expand.
export interface Entry {
  title: string;
  role?: string;
  date?: string;
  summary: string;
  details: string[];
  stack?: string;
  links?: LinkItem[];
}

export const projects: Entry[] = [
  {
    title: "ARIA: Aerial Rescue Intelligence and Analysis",
    date: "2026",
    summary: "Open-source, real-time drone search and rescue system.",
    details: [
      "Fine-tuned YOLOv9c for person detection (0.861 mAP50), with ByteTrack for tracking across frames.",
      "EfficientNet distress classifier (92% accuracy).",
      "Fine-tuned a 4B Gemma model (Unsloth, Ollama) to write rescue briefings from detection data.",
      "Three concurrent loops for detection, classification and coordination; FastAPI backend and React dashboard.",
      "Dockerized for offline use, ONNX FP16 export, trained on GCP GPUs. Submitted to the Gemma 4 Good Hackathon on Kaggle.",
    ],
    stack: "Python, YOLOv9c, ByteTrack, EfficientNet, Gemma, FastAPI, React, Docker, ONNX",
    links: [
      { label: "GitHub", href: "https://github.com/JadynWor/ARIA" },
      { label: "Weights", href: "https://huggingface.co/jadynwor/aria-sar" },
    ],
  },
  {
    title: "TerraWatch",
    role: "Founder & Technical Lead",
    date: "2026",
    summary: "Prompt compression Chrome extension, web platform and CLI.",
    details: [
      "Most Innovative Project, Code for Climate, NY Tech Week 2026.",
      "Raised ~$10K from climate-focused backers; 64K+ organic views at launch.",
      "Chrome extension (WXT, TypeScript), Next.js 15 platform and Node.js CLI.",
      "Supabase for auth, data and pgvector; RAG with embedding-based search; Claude Haiku API; Stripe.",
      "I lead system design and product architecture, with Malcolm (growth), Rayan (engineering) and Favor (frontend, content).",
    ],
    stack: "TypeScript, Next.js, Node.js, Supabase, pgvector, Stripe, Claude API",
    links: [{ label: "terrawatch.app", href: "https://terrawatch.app" }],
  },
  {
    title: "BonaFyde",
    role: "Founding Engineer",
    date: "2025 – 2026",
    summary: "AI advising platform for first-generation college students.",
    details: [
      "Co-founded with Nicholai Williamson. Sole engineer; built the entire stack.",
      "FastAPI backend, React frontend, PostgreSQL, deployed on AWS.",
      "BERT for text classification, BART for summarization, LLM APIs for personalized guidance.",
      "Launched to 5 schools, including a Delaware high school pilot.",
    ],
    stack: "Python, FastAPI, React, PostgreSQL, AWS, BERT, BART",
  },
  {
    title: "Bearing Witness",
    date: "Aug 2026",
    summary: "Local bearing-failure detection agent for factory vibration monitoring.",
    details: [
      "Built at the Dell x NVIDIA AI Hackathon in NYC (Local AI on Dell Pro Max with GB10).",
      "Team Hermit Crab: Jadyn Worthington, Stephen Sookra, Vinh Le, Bharadhwaj K.",
    ],
  },
  {
    title: "Harvest Hub",
    date: "Nov 2025",
    summary: "Overnight hackathon app for verified community food sharing.",
    details: ["Built the backend and the AI check that verifies pickups from before and after photos."],
    stack: "Next.js, Supabase, OpenAI",
    links: [{ label: "Write-up", href: "/projects/harvest-hub" }],
  },
  {
    title: "Midas Core",
    date: "Nov 2025",
    summary: "Kafka-fed real-time balances API.",
    details: ["Spring Boot service that ingests transaction events from Kafka and serves balances over REST."],
    stack: "Java, Spring Boot, Kafka, PostgreSQL",
    links: [{ label: "Write-up", href: "/projects/midas-core" }],
  },
  {
    title: "Anime Directory",
    summary: "Video platform on GCP.",
    details: ["Signed-URL uploads, Pub/Sub-triggered FFmpeg transcoding on Cloud Run, metadata in Firestore."],
    stack: "GCP Cloud Run, FFmpeg, Firestore, Pub/Sub, Next.js",
    links: [{ label: "Write-up", href: "/projects/anime-directory" }],
  },
];

export const experience: Entry[] = [
  {
    title: "Bloom Energy",
    role: "Manufacturing Engineer, Test Systems & Automation",
    date: "Oct 2025 – present",
    summary: "Test automation on a fuel cell manufacturing line.",
    details: [
      "Built Python tools that pull sensor data from the OSIsoft PI historian and apply pass/fail thresholds (current, voltage, UF sweep bounds, cell performance) to decide whether units ship.",
      "Results save automatically to a shared cloud workspace, replacing a fully manual review.",
      "Troubleshoot electrical, mechanical and pneumatic systems on the line.",
      "Coordinate across engineering, quality and operations using Oracle ERP, Tulip MES and Agile PLM.",
    ],
  },
  {
    title: "Lola Vision Systems",
    role: "Edge ML & Systems Fellow",
    date: "Dec 2025 – Apr 2026",
    summary: "Real-time object detection on embedded edge hardware.",
    details: [
      "Built ML inference pipelines for real-time object detection on embedded Linux, in Python and C++.",
      "Optimized throughput and latency for high-frequency sensor data on resource-constrained hardware.",
      "Built automated benchmarks for latency, accuracy and throughput across hardware configurations; validated outputs against ground truth.",
      "Documented deployment failure modes and procedures.",
    ],
  },
  {
    title: "New Light Technologies",
    role: "Software Developer",
    date: "Jun 2024 – Aug 2025",
    summary: "Data platforms for USAF, UNICEF, Wellcome Trust and Peru's Ministry of Health.",
    details: [
      "Built and deployed Python and TypeScript services powering REST APIs for federal data platforms.",
      "Designed PostgreSQL databases behind paginated JSON endpoints; built S3 presigned URL workflows, RDS views and MapLibre geospatial views.",
      "Automated CI/CD with GitHub Actions, Docker and AWS Fargate across staging and production.",
      "Wrote Python validation and reporting scripts that cut manual reporting effort by 70%.",
      "PAGAF (The Opportunity Project): rebuilt a precision agriculture platform's frontend in React and presented it to investors and clients.",
      "NIBS-CMS migration: PHP 8, Apache, Docker Compose and MariaDB, including routing and SSL configuration.",
    ],
  },
  {
    title: "Opila Laboratory, University of Delaware",
    role: "Undergraduate Researcher",
    date: "May 2023 – Jan 2024",
    summary: "Data pipelines for a nanofabrication lab under Dr. Robert Opila.",
    details: [
      "Built Python analysis pipelines and visualization tools for nanofabrication experiments.",
      "Automated processing of microscopy and characterization data for the group.",
    ],
    links: [{ label: "Research summary", href: "/achievements/research/atomic-layer-etching" }],
  },
  {
    title: "NASA Aerospace Scholars",
    role: "Scholar",
    date: "Jan – Aug 2021",
    summary: "Selected from a national applicant pool.",
    details: [
      "Curriculum in mission design, rover prototyping and team engineering challenges.",
      "Designed the Odysseus lunar rover concept.",
    ],
    links: [{ label: "Rover paper", href: "/achievements/research/lunar-rover-design" }],
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. Computer Science (incoming)",
    date: "2027 – 2029",
    note: "Robotics and autonomous systems.",
  },
  {
    school: "University of Delaware",
    degree: "B.S. Computer Science, AI & Robotics concentration",
    date: "2024",
    note: "Founded Men of Distinction (Outstanding RSO Leader). Alpha Phi Alpha Fraternity, Inc., Xi Omicron chapter. Black Student Union, Student Government.",
  },
];

export const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "Python, TypeScript, JavaScript, C++, SQL, Java, Bash, PHP" },
  {
    label: "ML / AI",
    items: "YOLO, EfficientNet, ByteTrack, Gemma, BERT, BART, RAG, embeddings, fine-tuning (Unsloth, Ollama), ONNX, edge inference, Hugging Face, LangChain, LangGraph",
  },
  {
    label: "Web & data",
    items: "React, Next.js, FastAPI, Node.js, Spring Boot, MapLibre, PostgreSQL, Supabase, MariaDB",
  },
  {
    label: "Cloud & ops",
    items: "AWS (S3, EC2, Fargate, RDS, CloudWatch, IAM), GCP (Cloud Run, Firestore, Pub/Sub), Docker, GitHub Actions, Nginx",
  },
  { label: "Manufacturing", items: "OSIsoft PI, Tulip MES, Oracle ERP, Agile PLM, embedded Linux" },
];
