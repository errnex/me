export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "Prototype" | "MVP" | "Live" | "In Progress";
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "Sailor Web3 Wallet Intelligence Dashboard",
    description:
      "A multichain wallet intelligence dashboard for portfolio tracking, wallet score, transaction history, security risk, wallet journey card, and AI wallet assistance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Alchemy",
      "Etherscan",
      "Gemini"
    ],
    status: "MVP",
    github: "https://github.com/errnex/sky-the-sailor",
    demo: "#"
  },
  {
    title: "Sailor Web3 AI Agent",
    description:
      "A modular Web3 AI agent dashboard that combines DeFi position analysis, DAO voting insights, contract debugging, multi-wallet aggregation, and onchain onboarding.",
    tech: [
      "Next.js",
      "TypeScript",
      "AI Gateway",
      "Gemini",
      "Pharos Skill Engine",
      "Snapshot",
      "DefiLlama"
    ],
    status: "Prototype",
    github: "https://github.com/errnex/sky-second",
    demo: "#"
  },
  {
    title: "CV Builder ATS & Modern Resume Generator",
    description:
      "A resume builder that allows users to create ATS-friendly and modern CV templates, preview them in real time, and export to PDF or DOCX.",
    tech: ["Next.js", "TypeScript", "Tailwind", "docx", "PDF Export"],
    status: "Live",
    github: "https://github.com/errnex/job",
    demo: "https://job-two-chi.vercel.app/"
  },
  {
    title: "Voting Web App with X Login",
    description:
      "A simple voting platform where users authenticate using X account and submit one verified vote.",
    tech: ["Next.js", "Auth", "Database", "Vercel"],
    status: "Live",
    github: "https://github.com/errnex/mbg-vote",
    demo: "https://mbg-vote.vercel.app/"
  },
    {
    title: "XMatch",
    description:
      "Anonymous random voice and text chat for X users.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    status: "Live",
    github: "https://github.com/errnex/voice-x",
    demo: "https://voice-x-kappa.vercel.app/"
  },
      {
    title: "AI Clipper Agent Lokal",
    description:
      "AI Clipper Agent is a local workflow to take YouTube videos, create transcripts with local Whisper, select interesting moments, cut the video into many short clips.",
    tech: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    status: "Live",
    github: "https://github.com/errnex/auto-clip",
    demo: "#"
  },
      {
    title: "Solana Meme Intelligence",
    description:
      "Telegram intelligence + real trading agent for Solana meme coin based on real-time data.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Telegraf.js", "Solana Web3.js","Express / Fastify"],
    status: "Live",
    github: "https://github.com/errnex/auto-sol",
    demo: "#"
  },
];
