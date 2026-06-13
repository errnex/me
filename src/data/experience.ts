export type Experience = {
  role: string;
  organization: string;
  year: string;
  description: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Web3 Content Creator",
    organization: "Independent",
    year: "2022 - Present",
    description:
      "Creating educational Web3 content, research notes, and product narratives for beginner-friendly onboarding.",
    responsibilities: [
      "Write educational threads and short-form content",
      "Research ecosystem updates and campaign opportunities",
      "Translate technical topics into simple product stories"
    ]
  },
  {
    role: "Community Contributor",
    organization: "Web3 Ecosystem",
    year: "2022 - Present",
    description:
      "Supporting community education, campaign participation, and builder-focused conversations.",
    responsibilities: [
      "Help users understand campaign flows",
      "Share product feedback and user insights",
      "Support onboarding for new Web3 users"
    ]
  },
  {
    role: "Web3 Dashboard Builder",
    organization: "Personal Projects",
    year: "2022 - Present",
    description:
      "Building wallet analytics, portfolio tracking, transaction history, and AI-assisted Web3 dashboard prototypes.",
    responsibilities: [
      "Design dashboard information architecture",
      "Integrate wallet and onchain data APIs",
      "Build responsive analytics interfaces"
    ]
  },
  {
    role: "AI Agent Builder",
    organization: "Personal Labs",
    year: "2022 - Present",
    description:
      "Experimenting with AI assistants, prompt workflows, automation, and Web3-specific agent modules.",
    responsibilities: [
      "Design agent workflows for Web3 tasks",
      "Prototype AI-assisted product experiences",
      "Evaluate model responses for practical utility"
    ]
  },
  {
    role: "Informatics Student",
    organization: "University",
    year: "2022 - Present",
    description:
      "Learning software engineering foundations while exploring AI, blockchain, and product development.",
    responsibilities: [
      "Study programming, systems, and product foundations",
      "Build portfolio projects outside coursework",
      "Practice full-stack and frontend implementation"
    ]
  },
  

];
