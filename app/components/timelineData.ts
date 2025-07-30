// app/components/experience.ts
export interface Milestone {
  title: string;
  subtitle?: string;
  start: string;     // e.g. "2020"
  end?: string;      // e.g. "2024" or "Present"
  details: string[]; // bullet points
  colorClass: string; // Tailwind color, e.g. "bg-blue-500"
}

export const timelineData: Milestone[] = [
  {
    title: "New Light Technologies",
    subtitle: "Software Engineer",
    start: "June 2024",
    end: "Present",
    details: [
      "Modernized client websites with React, TypeScript, and ServiceNow APIs",
      "Built interactive Mapbox maps with dynamic polygon regions",
      "Automated test suites and CI pipelines for infrastructure‑as‑code deployments",
    ],
    colorClass: "bg-blue-600",
  },
  {
    title: "University of Delaware",
    subtitle: "B.S. Computer Science",
    start: "2020",
    end: "2024",
    details: [
      "Concentration in Machine Learning",
      "President, Men of Distinction & Black Student Union; Senator, SGA",
      "Built full‑stack projects including finance and e‑commerce apps",
    ],
    colorClass: "bg-blue-500",
  },
  {
    title: "KaiCoders LLC",
    subtitle: "Software Engineer Intern",
    start: "Dec 2023",
    end: "May 2024",
    details: [
      "Delivered AI/ML lesson plans and co‑taught K‑12 ethics in AI/ML",
      "Implemented object detection with OpenCV and Next.js, deployed on Vercel",
      "Streamlined REST API integrations and DevOps workflows",
    ],
    colorClass: "bg-green-500",
  },
  {
    title: "Opila Laboratory",
    subtitle: "Software Engineer Intern",
    start: "May 2023",
    end: "Jan 2024",
    details: [
      "Wrote C# tools to analyze XPS spectroscopy data, speeding analysis by 75%",
      "Maintained and serviced XPS instrumentation for optimal uptime",
      "Presented data insights to senior researchers, driving project decisions",
    ],
    colorClass: "bg-yellow-500",
  },
  {
    title: "Brookhaven National Laboratory",
    subtitle: "Lab Assistant",
    start: "May 2022",
    end: "Aug 2022",
    details: [
      "Collaborated on algorithms for visualizing experimental data in Python",
      "Translated complex math models into production‑ready code",
      "Contributed in cross‑team design reviews and test integrations",
    ],
    colorClass: "bg-purple-500",
  },
  {
    title: "NASA Aerospace Scholars",
    subtitle: "Intern",
    start: "Jan 2021",
    end: "Aug 2021",
    details: [
      "Researched lunar habitat systems, focusing on electrical & mechanical design",
      "Simulated habitat components and documented performance findings",
      "Worked under tight deadlines to meet multi‑disciplinary project goals",
    ],
    colorClass: "bg-red-500",
  }
];
