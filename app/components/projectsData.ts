export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Anime Directory",
    description:
      "YouTube-style video platform on GCP: users upload via signed URLs, Pub/Sub triggers a Cloud Run FFmpeg service (360p transcode + thumbnails), metadata in Firestore, videos served with short-lived signed URLs through a Next.js web client.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Docker",
      "FFmpeg",
      "Firebase Auth",
      "Cloud Functions (HTTPS Callable)",
      "Cloud Run",
      "Cloud Storage",
      "Firestore",
      "Pub/Sub"
    ],
    link: "https://yt-web-client-555517352372.us-east1.run.app"
  },
  {
    title: "HTTP Backends (Java & Node)",
    description:
      "Parallel backends in Spring Boot and Express that expose the same REST surface: CRUD, validation, JWT auth, pagination, rate limiting, background jobs, OpenAPI, k6 load tests—Dockerized with Postgres/Redis and basic observability.",
    technologies: [
      "Java", "Spring Boot", "Node.js", "Express",
      "PostgreSQL", "Supabase", "Redis",
      "Docker", "NGINX", "k6", "JWT"
    ],
    link: "https://github.com/jadynwor/studying-http-backends" // replace with your repo URL
  },
  {
    title: "Drop That",
    description:
      "AI-assisted toolkit for streetwear founders — plan launches, generate content, and manage day-to-day ops from one workspace. (Private beta, high-level only.)",
    technologies: ["TypeScript", "React", "Node.js", "REST", "WebSockets", "Relational DB", "Auth"],
    link: "/projects/drop-that"
  }
  
];
