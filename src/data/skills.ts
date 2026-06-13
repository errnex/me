export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern product UI with a clean component system.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Web3",
    description: "Wallet flows, onchain data, and blockchain integrations.",
    skills: [
      "Wagmi",
      "Viem",
      "Etherscan API",
      "Alchemy API",
      "Wallet Integration"
    ]
  },
  {
    title: "AI",
    description: "Practical AI workflows for product and automation use cases.",
    skills: ["Gemini API", "AI Agent", "Prompt Engineering", "Automation"]
  },
  {
    title: "Tools",
    description: "Shipping stack for web apps and dashboards.",
    skills: ["GitHub", "Vercel", "Supabase", "VS Code"]
  },
  {
    title: "Content & Community",
    description: "Education, research, and campaign narrative for Web3.",
    skills: ["X Content","Community Management","Campaign Strategy","Web3 Research"]
  }
];
