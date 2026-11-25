// app/content.ts
// Everything on the home page lives here. Edit this file to update the site.

export const profile = {
  name: "Jadyn Worthington",
  role: "Software Engineer",
  location: "Delaware, USA",
  avatar: "/jadynwor_avatar.png",
  now: "building BonaFyde",
  links: [
    { label: "Email", href: "mailto:jadynwor@gmail.com" },
    { label: "GitHub", href: "https://github.com/jadynwor" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jadynwor" },
  ],
};

export interface Update {
  date: string;
  text: string;
  href?: string;
  linkText?: string;
}

// Newest first. The first few show by default; the rest sit behind "More".
export const updates: Update[] = [
  {
    date: "Nov 2025",
    text: "Built Harvest Hub with Joseph, Dean & Mercedes in a 24-hour hackathon: neighbors claim surplus meals, and an image model verifies the pickup.",
    href: "/projects/harvest-hub",
    linkText: "Read the write-up",
  },
  {
    date: "Nov 2025",
    text: "Shipped Midas Core, a Spring Boot service that streams Kafka transactions into real-time balances.",
    href: "/projects/midas-core",
    linkText: "Architecture",
  },
  {
    date: "Aug 2025",
    text: "Wrapped up 14 months as a software engineer at New Light Technologies, building geospatial data tools on AWS.",
  },
  {
    date: "2025",
    text: "Started building BonaFyde, a platform that connects prospective students with verified college students.",
  },
  {
    date: "Spring 2025",
    text: "Spoke on a Tech Council of Delaware panel about how to get started in tech.",
  },
  {
    date: "2024",
    text: "York College / CUNY profiled how a NASA STEM program I joined at 10 kept me on track.",
    href: "/achievements/articles/nasa-stem-program",
    linkText: "Article",
  },
  {
    date: "May 2024",
    text: "Named Outstanding RSO Leader at the University of Delaware YoUDee Leadership Awards.",
    href: "/achievements/awards/outstanding-rso-leader",
    linkText: "Details",
  },
  {
    date: "May 2024",
    text: "Graduated from the University of Delaware with a B.S. in Computer Science.",
  },
];

export interface FeaturedProject {
  title: string;
  blurb: string;
  stack: string[];
  href: string;
  image?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Harvest Hub",
    blurb: "Hackathon app for verified community food sharing.",
    stack: ["Next.js", "Supabase", "OpenAI"],
    href: "/projects/harvest-hub",
    image: "/project/harvesthub.png.png",
  },
  {
    title: "Midas Core",
    blurb: "Kafka-fed balances API in one Spring Boot deployable.",
    stack: ["Java", "Spring Boot", "Kafka"],
    href: "/projects/midas-core",
    image: "/project/midas_core_arch.png",
  },
  {
    title: "Anime Directory",
    blurb: "Video platform on GCP with an FFmpeg transcode pipeline.",
    stack: ["Next.js", "Cloud Run", "Pub/Sub"],
    href: "/projects/anime-directory",
    image: "/project/anime-directory-sys.avif",
  },
];

export const moreProjects = [
  {
    title: "HTTP Backends",
    blurb: "The same REST API in Spring Boot and Express, load-tested with k6.",
    href: "/projects/http-backend",
  },
  {
    title: "Drop That",
    blurb: "AI-assisted toolkit for streetwear founders (private beta).",
    href: "/projects/dropthat",
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
    org: "New Light Technologies",
    title: "Software Engineer",
    dates: "2024 – 2025",
    summary:
      "Data APIs on AWS (SST, RDS, S3) and React/MapLibre views for large geospatial datasets. CI/CD with GitHub Actions and Fargate.",
  },
  {
    org: "BonaFyde",
    title: "Founder",
    dates: "2025",
    summary:
      "Profiles, college browsing and mentor booking on React, Supabase and serverless functions.",
  },
  {
    org: "KaiCoders",
    title: "Software Engineer Intern",
    dates: "2023 – 2024",
    summary: "Taught K–12 students ML and AI ethics; co-designed AI safety workshops.",
  },
  {
    org: "Opila Lab, UD",
    title: "Software Engineer Intern",
    dates: "2023",
    summary: "Python and SQL pipelines for instrument data behind atomic layer etching research.",
    href: "/achievements/research/atomic-layer-etching",
  },
  {
    org: "NASA Aerospace Scholars",
    title: "Intern",
    dates: "2021",
    summary: "Lunar habitat design challenge; designed the Odysseus lunar rover concept.",
    href: "/achievements/research/lunar-rover-design",
  },
  {
    org: "University of Delaware",
    title: "B.S. Computer Science",
    dates: "2024",
    summary: "Founded Men of Distinction; Outstanding RSO Leader.",
  },
];
