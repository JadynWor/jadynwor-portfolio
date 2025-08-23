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
    title: "New Light Technologies",
    subtitle: "Software Engineer",
    start: "Jun 2024",
    end: "Present",
    details: [
      "Shipped end-to-end features in Java/TypeScript: REST APIs, UI updates, SQL changes; added unit/integration tests and seed data.",
      "Kept services healthy: Git/Jenkins/Maven builds, basic Linux config; wrote runbooks/release notes; supported users across dev/test/prod.",
      "Drafted simple logic flows/specs, compared design trade-offs, planned AWS (S3/RDS/Fargate) and documented handoff steps.",
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
    title: "Opila Laboratory (UD)",
    subtitle: "Software Engineer Intern",
    start: "May 2023",
    end: "Jan 2024",
    details: [
      "Installed/wired auxiliary electronics on an XPS system; handled preventative maintenance, calibrations, safety checks, and vacuum system work.",
      "Bench-tested and troubleshot with DMM/oscilloscope; documented symptoms and fixes.",
      "Built routines to analyze XPS datasets and instrument logs to boost research throughput.",
    ],
    colorClass: "bg-yellow-500",
  },
  {
    title: "NASA Aerospace Scholars",
    subtitle: "Intern",
    start: "Jan 2021",
    end: "Aug 2021",
    details: [
      "Completed a 6-month engineering design capstone tied to simulated NASA mission problems; presented recommendations to a NASA guest panel.",
      "Coordinated team timelines/deliverables during sprints.",
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
