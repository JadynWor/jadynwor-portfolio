// app/components/hobbiesData.ts
export interface Hobby {
    title: string;
    description: string;
    statText: string;
    statColor: string; // Tailwind color class, e.g. "text-red-500"
    statLink?: string; // optional URL
  }
  
  export const hobbies: Hobby[] = [
    {
      title: "YouTube",
      description: "documenting my life as a software engineer",
      statText: "19 videos",
      statColor: "text-red-500",
      statLink: "/videos",
    },
    {
      title: "Real Estate Investing",
      description: "playing monopoly but with real money",
      statText: "0 properties",
      statColor: "text-blue-500",
      statLink: "/investing",
    },
    {
      title: "Stocks and Crypto",
      description: "buying high and selling low is my philosophy",
      statText: "-$25,000 profit",
      statColor: "text-green-500",
      statLink: "/portfolio",
    },
    {
      title: "Mechanical Keyboards",
      description: "fun but will be the reason why I’m homeless",
      statText: "3 custom keyboards",
      statColor: "text-purple-500",
      statLink: "/keyboards",
    },
  ];
  