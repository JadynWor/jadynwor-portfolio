// app/components/timeline.ts
export interface Milestone {
    title: string;
    subtitle?: string;
    start: string;        // e.g. "2020"
    end?: string;         // e.g. "2024" or "Now"
    details: string[];    // bullet points
    colorClass: string;   // e.g. "bg-blue-500"
  }
  
  export const timelineData: Milestone[] = [
    {
      title: "Amazon",
      subtitle: "Software Development Engineer",
      start: "2024",
      details: ["working on large scale messaging systems"],
      colorClass: "bg-blue-500",
    },
    {
      title: "Delaware State University",
      subtitle: "B.S. Computer Science",
      start: "2020",
      end: "2024",
      details: [
        "graduated with machine learning concentration",
        "served as president of Men of Distinction and BSU",
      ],
      colorClass: "bg-yellow-500",
    },
    // add more milestones here
  ];
  