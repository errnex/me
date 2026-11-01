export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Community",
    description: "Building and leading healthy Web3 communities.",
    skills: ["Community Management", "Moderation", "Regional Leadership", "Ambassador Programs"]
  },
  {
    title: "Support",
    description: "Helping users and teams solve problems quickly.",
    skills: ["Ticket Support", "Product Testing", "Bug Reporting", "User Feedback"]
  },
  {
    title: "IT Support",
    description: "Keeping devices, software, and networks running.",
    skills: ["Troubleshooting", "Hardware & Software Setup", "Networking Basics"]
  },
  {
    title: "Content & Frontend",
    description: "Content on X plus web basics.",
    skills: ["X Content", "Next.js", "React", "TypeScript", "Tailwind CSS"]
  }
];
