// app/content.ts
// Everything on the home page lives here. Edit this file to update the site.

export const profile = {
  name: "Jadyn Worthington",
  role: "Software Engineer",
  avatar: "/jadynwor_avatar.png",
  status: "starting ms cs @ georgia tech, spring 2027",
  facts: [
    "Newark, DE",
    "open to NYC, SF, DC, Atlanta, Houston",
    "U.S. citizen, clearance eligible",
  ],
  links: [
    { label: "email", href: "mailto:jadynmwor@gmail.com" },
    { label: "github", href: "https://github.com/JadynWor" },
    { label: "linkedin", href: "https://linkedin.com/in/jadynwor" },
    { label: "hugging face", href: "https://huggingface.co/jadynwor/aria-sar" },
    { label: "substack", href: "https://jadynwor.substack.com" },
    { label: "x", href: "https://x.com/mekhijpg" },
  ],
};

export interface LinkItem {
  label: string;
  href: string;
}

export interface Update {
  date: string;
  text: string;
  link?: LinkItem;
}

// Newest first. The first few show by default; the rest sit behind "more".
export const updates: Update[] = [
  {
    date: "Spring 2027",
    text: "Starting my MS in Computer Science at Georgia Tech, focused on robotics and autonomous systems.",
  },
  {
    date: "Aug 2026",
    text: "Built Bearing Witness with Team Hermit Crab at the Dell x NVIDIA AI Hackathon in NYC: a local agent that flags bearing failures from factory vibration data.",
  },
  {
    date: "2026",
    text: "TerraWatch won Most Innovative Project at Code for Climate during NY Tech Week, then raised ~$10K pitching to climate-focused backers. 64K+ organic views at launch.",
    link: { label: "terrawatch.app", href: "https://terrawatch.app" },
  },
  {
    date: "2026",
    text: "Open-sourced ARIA, a real-time drone search and rescue system, with model weights on Hugging Face. Submitted to the Gemma 4 Good Hackathon.",
    link: { label: "github", href: "https://github.com/JadynWor/ARIA" },
  },
  {
    date: "Apr 2026",
    text: "Wrapped my Edge ML & Systems fellowship at Lola Vision Systems.",
  },
  {
    date: "Mar 2026",
    text: "Wrapped a year as founding engineer at BonaFyde after launching to 5 schools.",
  },
  {
    date: "Nov 2025",
    text: "Built Harvest Hub at an overnight hackathon and shipped Midas Core, a Kafka-fed balances API.",
    link: { label: "harvest hub", href: "/projects/harvest-hub" },
  },
  {
    date: "Oct 2025",
    text: "Joined Bloom Energy as a manufacturing engineer, automating fuel cell test checks.",
  },
  {
    date: "Aug 2025",
    text: "Wrapped up at New Light Technologies after shipping data platforms for USAF, UNICEF, Wellcome Trust and Peru's Ministry of Health.",
  },
  {
    date: "2024",
    text: "York College / CUNY profiled how a NASA STEM program I joined at 10 kept me on track.",
    link: { label: "article", href: "/achievements/articles/nasa-stem-program" },
  },
  {
    date: "May 2024",
    text: "Graduated from the University of Delaware and was named Outstanding RSO Leader.",
    link: { label: "award", href: "/achievements/awards/outstanding-rso-leader" },
  },
];

export interface Project {
  name: string;
  subtitle?: string;
  date: string;
  blurb: string;
  metrics?: string[];
  stack: string[];
  links?: LinkItem[];
}

export const projects: Project[] = [
  {
    name: "ARIA",
    subtitle: "Aerial Rescue Intelligence and Analysis",
    date: "2026",
    blurb:
      "Open-source drone search and rescue. Finds people in aerial footage, classifies distress, tracks them across frames, and has a fine-tuned Gemma model write the rescue briefing. Runs fully offline in Docker.",
    metrics: ["0.861 mAP50 detection", "92% distress accuracy"],
    stack: ["YOLOv9c", "ByteTrack", "EfficientNet", "Gemma 4B", "FastAPI", "React", "ONNX FP16"],
    links: [
      { label: "github", href: "https://github.com/JadynWor/ARIA" },
      { label: "weights", href: "https://huggingface.co/jadynwor/aria-sar" },
    ],
  },
  {
    name: "TerraWatch",
    subtitle: "Founder & technical lead",
    date: "2026",
    blurb:
      "Prompt compression for leaner, lower-energy AI usage, shipped as a Chrome extension, web platform and CLI. Raised ~$10K from climate-focused backers. I own the system design and product architecture.",
    metrics: ["Most Innovative, NY Tech Week", "~$10K raised", "64K+ launch views"],
    stack: ["TypeScript", "WXT", "Next.js 15", "Supabase pgvector", "Stripe", "Claude Haiku", "RAG"],
    links: [{ label: "terrawatch.app", href: "https://terrawatch.app" }],
  },
  {
    name: "BonaFyde",
    subtitle: "Founding engineer",
    date: "2025 – 2026",
    blurb:
      "AI advising platform for first-gen college students. As the sole engineer I built the whole stack, from the FastAPI backend to BERT and BART models and LLM guidance.",
    metrics: ["Launched to 5 schools"],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "AWS", "BERT", "BART"],
  },
  {
    name: "Bearing Witness",
    subtitle: "Dell x NVIDIA AI Hackathon, NYC",
    date: "Aug 2026",
    blurb:
      "Local AI agent that catches bearing failures from factory vibration monitoring. Built with Team Hermit Crab: Stephen Sookra, Vinh Le and Bharadhwaj K.",
    stack: ["Local AI", "Dell Pro Max GB10"],
  },
  {
    name: "Harvest Hub",
    subtitle: "Overnight hackathon",
    date: "Nov 2025",
    blurb:
      "Community food sharing app. I built the backend and the AI check that verifies pickups from before and after photos.",
    stack: ["Next.js", "Supabase", "OpenAI"],
    links: [{ label: "write-up", href: "/projects/harvest-hub" }],
  },
];

export const moreProjects: { name: string; blurb: string; href?: string }[] = [
  {
    name: "PAGAF",
    blurb: "precision agriculture modeling from GIS and satellite imagery; I rebuilt the frontend in React (The Opportunity Project)",
  },
  {
    name: "Midas Core",
    blurb: "Kafka-fed balances API in Java and Spring Boot",
    href: "/projects/midas-core",
  },
  {
    name: "Anime Directory",
    blurb: "video platform on GCP with a Cloud Run FFmpeg pipeline",
    href: "/projects/anime-directory",
  },
];

export interface Role {
  org: string;
  title: string;
  dates: string;
  summary: string;
  href?: string;
}

export const experience: Role[] = [
  {
    org: "Bloom Energy",
    title: "Manufacturing Engineer, Test Systems & Automation",
    dates: "Oct 2025 – now",
    summary:
      "Python tools that pull sensor data from the OSIsoft PI historian and run pass/fail checks on fuel cell units, replacing a fully manual ship review. Troubleshoot electrical, mechanical and pneumatic systems on the line.",
  },
  {
    org: "Lola Vision Systems",
    title: "Edge ML & Systems Fellow",
    dates: "Dec 2025 – Apr 2026",
    summary:
      "Real-time object detection pipelines on embedded Linux in Python and C++, plus automated benchmarking of latency, accuracy and throughput across hardware configs.",
  },
  {
    org: "New Light Technologies",
    title: "Software Developer",
    dates: "Jun 2024 – Aug 2025",
    summary:
      "Python and TypeScript services behind REST APIs for federal data platforms serving USAF, UNICEF, Wellcome Trust and Peru's Ministry of Health. CI/CD on GitHub Actions, Docker and Fargate; reporting automation that cut manual effort by 70%.",
  },
  {
    org: "Opila Lab, University of Delaware",
    title: "Undergraduate Researcher",
    dates: "May 2023 – Jan 2024",
    summary: "Python pipelines and visualization tools for nanofabrication and microscopy data.",
    href: "/achievements/research/atomic-layer-etching",
  },
  {
    org: "NASA Aerospace Scholars",
    title: "Scholar",
    dates: "Jan – Aug 2021",
    summary: "Selected nationally; mission design and rover prototyping, including the Odysseus lunar rover concept.",
    href: "/achievements/research/lunar-rover-design",
  },
];

export const education: Role[] = [
  {
    org: "Georgia Institute of Technology",
    title: "M.S. Computer Science",
    dates: "2027 – 2029",
    summary: "Incoming. Robotics and autonomous systems.",
  },
  {
    org: "University of Delaware",
    title: "B.S. Computer Science, AI & Robotics",
    dates: "2024",
    summary:
      "Founded Men of Distinction (Outstanding RSO Leader). Alpha Phi Alpha, Xi Omicron chapter. Black Student Union, Student Government.",
  },
];

export const skills: { label: string; items: string }[] = [
  { label: "languages", items: "Python, TypeScript, JavaScript, C++, SQL, Java, Bash, PHP" },
  {
    label: "ml / ai",
    items: "YOLO, EfficientNet, ByteTrack, Gemma, BERT, BART, RAG, embeddings, fine-tuning (Unsloth, Ollama), ONNX, edge inference, Hugging Face, LangChain, LangGraph",
  },
  {
    label: "web & data",
    items: "React, Next.js, FastAPI, Node.js, Spring Boot, WXT, MapLibre, PostgreSQL, Supabase (pgvector), MariaDB",
  },
  {
    label: "cloud & ops",
    items: "AWS (S3, EC2, Fargate, RDS, CloudWatch, IAM, SST), GCP (Cloud Run, Firestore, Pub/Sub), Docker, GitHub Actions, Nginx",
  },
  {
    label: "manufacturing",
    items: "OSIsoft PI, Tulip MES, Oracle ERP, Agile PLM, embedded Linux",
  },
];
