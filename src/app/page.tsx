import {
  ArrowRight,
  Bot,
  BookOpen,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageCircle,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Wallet,
  Zap
} from "lucide-react";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const serviceCards = [
  {
    title: "Wallet Intelligence",
    description: "Portfolio tracking, wallet score, transaction insights, and onchain risk signals.",
    icon: Wallet,
    tone: "tone-blue"
  },
  {
    title: "AI Agent Systems",
    description: "Prompt workflows, automation modules, and product-ready AI assistant interfaces.",
    icon: Bot,
    tone: "tone-pink"
  },
  {
    title: "Dashboard UI",
    description: "Clean analytics screens for Web3 products, campaigns, communities, and founders.",
    icon: Code2,
    tone: "tone-mint"
  },
    {
    title: "Community Moderator",
    description: "Managing community discussions, answering member questions, maintaining server quality, and helping create a healthy Web3 community environment.",
    icon: BookOpen,
    tone: "tone-pink"
  },
    {
    title: "Ambassador & Content Creator",
    description: "Creating Web3 educational content, campaign threads, project explainers, and helping projects reach wider audiences through social media.",
    icon: Sparkles,
    tone: "tone-mint"
  },
      {
    title: "Server Director",
    description: "Structuring Discord servers, managing roles, organizing channels, coordinating moderators, and improving community workflow for Web3 projects.",
    icon: ShieldCheck,
    tone: "tone-blue"
  }
  
];

const processSteps = [
  "Research user flow",
  "Design interface system",
  "Build responsive app",
  "Ship and improve"
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="sticky top-4 z-50 px-4 pt-4">
        <nav className="clay-nav mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a className="flex items-center gap-3" href="#">
            <span className="icon-tile tone-pink">
              <BookOpen size={22} />
            </span>
            <span className="text-xl font-black text-[var(--text)]">
              {profile.name === "Your Name" ? "PortfolioHub" : profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                className="text-sm font-bold text-[var(--muted)] transition hover:text-[var(--text)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a className="px-4 py-2 text-sm font-bold hover:text-[var(--cta)]" href={profile.github}>
              GitHub
            </a>
            <a className="clay-button primary small" href="#contact">
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section px-4 pb-14 pt-16 sm:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="scroll-rise">
              <div className="pill-badge mb-7">
                <span />
                {profile.heroBadge}
              </div>

              <h1 className="hero-title">
                {profile.name === "Your Name" ? "Build Web3," : `${profile.name} builds`}
                <span> AI,</span>
                <br />
                and Useful Products.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                {profile.shortBio}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a className="clay-button primary" href="#projects">
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a className="clay-button secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-5">
                {profile.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-[var(--text)]">{stat.value}</p>
                    <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scene-3d scroll-rise" aria-label="Animated 3D portfolio preview">
              <div className="hero-console clay-card">
                <div className="console-top">
                  <span />
                  <span />
                  <span />
                  <strong>Sky Portfolio</strong>
                </div>
                <div className="console-grid">
                  <div className="icon-tile tone-blue">
                    <PlayCircle size={24} />
                  </div>
                  <div>
                    <h2>Product Builder</h2>
                    <p>Next.js, Web3, AI workflows</p>
                  </div>
                  <strong className="status-pill">Live</strong>
                </div>
                <div className="progress-row">
                  <p>Shipping progress</p>
                  <strong>85%</strong>
                </div>
                <div className="progress-bar">
                  <span />
                </div>
                <button className="clay-button primary full">Open Case Study</button>
              </div>

              <div className="floating-chip chip-top tone-pink">
                <Rocket size={25} />
              </div>
              <div className="floating-chip chip-right tone-mint">
                <Star size={25} />
              </div>
              <div className="floating-chip chip-left tone-blue">
                <Cpu size={25} />
              </div>

              <div className="cube-wrap">
                <div className="cube3d">
                  <span className="face face-front">AI</span>
                  <span className="face face-back">UX</span>
                  <span className="face face-right">WEB3</span>
                  <span className="face face-left">CODE</span>
                  <span className="face face-top">BUILD</span>
                  <span className="face face-bottom">SHIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="projects">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Selected Work</p>
              <h2>Projects Built for Real Utility</h2>
              <p>Portfolio pieces shaped like the reference style: playful, bold, clean, and scannable.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <article className="clay-card project-card scroll-rise" key={project.title}>
                  <div className={`icon-tile ${index % 3 === 0 ? "tone-pink" : index % 3 === 1 ? "tone-blue" : "tone-mint"}`}>
                    <Code2 size={26} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                      <h3>{project.title}</h3>
                      <span className="rating-pill">
                        <Star size={14} />
                        {project.status}
                      </span>
                    </div>
                    <p>{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span className="mini-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <a className="mini-link" href={project.github}>
                        <Github size={16} />
                        Code
                      </a>
                      <a className="mini-link" href={project.demo}>
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad cream-band">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Services</p>
              <h2>Everything Needed to Ship</h2>
              <p>From idea to interface, prototype, dashboard, and launch-ready product experience.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="clay-card feature-card scroll-rise" key={service.title}>
                    <span className={`icon-tile ${service.tone}`}>
                      <Icon size={28} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad" id="skills">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="section-heading left scroll-rise">
              <p className="eyebrow">Skill Map</p>
              <h2>Clean Stack, Practical Execution</h2>
              <p>
                Skill categories are displayed like course tiles, using the same chunky border, pastel accents,
                and animated hover depth.
              </p>
              <div className="process-list">
                {processSteps.map((step, index) => (
                  <div className="process-item" key={step}>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {skillCategories.map((category, index) => (
                <article className="clay-card skill-card scroll-rise" key={category.title}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`icon-tile ${index % 2 === 0 ? "tone-blue" : "tone-pink"}`}>
                      <Sparkles size={22} />
                    </span>
                    <h3>{category.title}</h3>
                  </div>
                  <p>{category.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span className="mini-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad cream-band" id="experience">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Journey</p>
              <h2>Experience and Builder Track</h2>
              <p>Structured like a learning roadmap, but focused on Web3, AI, community, and product work.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {experiences.slice(0, 4).map((item, index) => (
                <article className="clay-card timeline-card scroll-rise" key={`${item.role}-${item.year}`}>
                  <span className={`icon-tile ${index % 2 === 0 ? "tone-mint" : "tone-blue"}`}>
                    {index % 2 === 0 ? <GraduationCap size={24} /> : <ShieldCheck size={24} />}
                  </span>
                  <div>
                    <p className="year">{item.year}</p>
                    <h3>{item.role}</h3>
                    <strong>{item.organization}</strong>
                    <p>{item.description}</p>
                    <ul>
                      {item.responsibilities.slice(0, 2).map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band px-4 py-20" id="contact">
          <div className="clay-card cta-card mx-auto max-w-4xl scroll-rise">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-[var(--text)] bg-[var(--primary)]">
              <Zap size={30} />
            </div>
            <h2>Ready to Build the Next Web3 Product?</h2>
            <p>
              Replace the placeholder profile links with your real channels, then use this page as your public
              portfolio for clients, communities, and builder campaigns.
            </p>
            <div className="mt-8 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
              <a className="clay-button primary" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Email Me
              </a>
              <a className="clay-button secondary" href={profile.telegram}>
                <MessageCircle size={18} />
                Telegram
              </a>
              <a className="clay-button secondary social-button" href={profile.linkedin}>
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a className="clay-button secondary social-button" href={profile.github}>
                <Github size={18} />
                GitHub
              </a>
              <a className="clay-button secondary social-button" href={profile.twitter}>
                <Twitter size={18} />
                X
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t-[3px] border-[var(--text)] pt-6 text-sm font-bold text-[var(--muted)] sm:flex-row">
          <span></span>
          <span className="flex items-center gap-2">
            <Users size={16} />
            {}
          </span>
        </div>
      </footer>
    </div>
  );
}
