export interface Milestone {
  title: string;
  subtitle?: string;
  start: string;
  end?: string;
  details: string[];
  colorClass: string;
}

export const timelineData: Milestone[] = [
  {
    title: "BonaFyde",
    subtitle: "TypeScript, React, Supabase, Serverless Functions · Side Project / Startup",
    start: "2025",
    details: [
      "Built end-to-end flows for profiles, college browsing, and mentor booking; designed SQL tables and indexes, exposed JSON REST APIs, and added logging to debug slow queries and improve response time.",
      "Platform connecting prospective students with verified college students for authentic insights about campus life, academics, and more.",
    ],
    colorClass: "bg-purple-600",
  },
  {
    title: "New Light Technologies",
    subtitle: "Software Engineer · Washington, D.C.",
    start: "Jun 2024",
    end: "Aug 2025",
    details: [
      "Implemented data endpoints in TypeScript with SST on AWS, querying RDS views and returning paginated, filterable JSON so analysts could pull exact geography/date/scenario slices instead of requesting custom CSVs. Stored uploads and exports in S3 behind presigned URLs, giving scheduled jobs and downstream tools a single reusable source of truth.",
      "Optimized React / MapLibre views for heavy geospatial payloads by adding server side filtering and pagination so large maps and tables stayed responsive and reviewers could work inside the app instead of exporting to spreadsheets.",
      "Standardized delivery with GitHub Actions, Docker, and Fargate tasks feeding an EC2 data simulation service, cutting manual release steps and keeping CI/CD consistent across environments.",
      "Worked across the SDLC in an Agile team: joined design and estimation sessions, participated in code reviews, and demoed increments to a client team in Peru, then folded their feedback into follow up tickets.",
    ],
    colorClass: "bg-blue-600",
  },
  {
    title: "KaiCoders LLC",
    subtitle: "Software Engineer Intern",
    start: "Dec 2023",
    end: "May 2024",
    details: [
      "Taught K–12 ML & AI ethics (fairness, bias mitigation).",
      "Co-designed curriculum and delivered hands-on AI safety workshops.",
    ],
    colorClass: "bg-green-600",
  },
  {
    title: "Opila Laboratory",
    subtitle: "Software Engineer Intern · University of Delaware, Newark, DE",
    start: "May 2023",
    end: "Jan 2024",
    details: [
      "Wrote Python pipelines to parse instrument logs and spectra into clean tables with SQL transforms and validation checks, supporting technical troubleshooting and faster reviews.",
      "Curated XPS datasets and produced figures and notes for a summer presentation, improving research handoff and documenting assumptions and results for the team.",
    ],
    colorClass: "bg-yellow-500",
  },
  {
    title: "NASA Aerospace Scholars",
    subtitle: "Intern · Tulsa, OK",
    start: "Jan 2021",
    end: "Aug 2021",
    details: [
      "Team design challenge on early lunar and Mars habitat operations; chose the computer systems track and proposed a simple telemetry schema and alert thresholds for environmental sensors.",
      "Scoped interfaces and project risks with teammates, broke down tasks, and presented recommendations to NASA guests; incorporated feedback into the final proposal and documentation.",
    ],
    colorClass: "bg-red-500",
  },
  {
    title: "University of Delaware",
    subtitle: "B.S. Computer Science",
    start: "May 2024",
    details: ["Bachelor of Science in Computer Science · Newark, DE"],
    colorClass: "bg-indigo-500",
  },
];
