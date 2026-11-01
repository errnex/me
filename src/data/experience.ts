export type Experience = {
  role: string;
  organization: string;
  link: string;
  type: string;
  year: string;
  description: string;
  responsibilities: string[];
};

// Ordered newest first by start date.
export const experiences: Experience[] = [
  {
    "role": "Community Manager (Admin) & Affiliate Ambassador",
    "organization": "Acepyr",
    "link": "https://x.com/acepyr",
    "type": "Full-time \u00b7 Remote (United States)",
    "year": "May 2026 - Present",
    "description": "Managing the Acepyr community as an admin and representing the project as an affiliate ambassador on X.",
    "responsibilities": [
      "Manage and administer community channels",
      "Engage members and keep discussions active and on-topic",
      "Promote the project on X as an affiliate ambassador"
    ]
  },
  {
    "role": "Team Lead / Regional Leader",
    "organization": "DLICOM",
    "link": "https://x.com/DlicomApp",
    "type": "Full-time \u00b7 Remote (Dubai, UAE)",
    "year": "May 2026 - Present",
    "description": "Leading the regional DLICOM community and connecting local members with the project.",
    "responsibilities": [
      "Lead and coordinate the regional team and members",
      "Organize regional community activities",
      "Relay regional feedback and updates between members and the team"
    ]
  },
  {
    "role": "Intern IT Support",
    "organization": "PT. Multindo Auto Finance",
    "link": "https://multindo.co.id/",
    "type": "Internship \u00b7 On-site (Semarang, Central Java)",
    "year": "Jan 2025 - Present",
    "description": "Assisting the company's IT team with day-to-day technical support.",
    "responsibilities": [
      "Assist the IT team with daily operations and requests",
      "Help staff with device, software, and network issues",
      "Support setup and maintenance of computers and devices"
    ]
  },
  {
    "role": "Community Manager / Regional Moderator",
    "organization": "GAIB AI",
    "link": "https://x.com/gaib_ai",
    "type": "Full-time \u00b7 Remote (Singapore)",
    "year": "Dec 2024 - Present",
    "description": "Managing and moderating the regional GAIB AI community, keeping it friendly, safe, and informative.",
    "responsibilities": [
      "Moderate regional community channels and enforce community rules",
      "Answer member questions and point them to official information",
      "Report feedback and issues from the community to the core team"
    ]
  },
  {
    "role": "Community Support Specialist",
    "organization": "Portal to Bitcoin",
    "link": "https://x.com/PortaltoBitcoin",
    "type": "Full-time \u00b7 Remote (San Francisco)",
    "year": "Nov 2024 - Present",
    "description": "Supporting the Portal to Bitcoin community and helping products launch smoothly.",
    "responsibilities": [
      "Assist in handling community issues",
      "Test products before public release",
      "Handle support tickets"
    ]
  }
];
