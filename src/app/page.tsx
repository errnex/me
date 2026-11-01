import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Zap
} from "lucide-react";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const tones = ["tone-pink", "tone-blue", "tone-mint"];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="sticky top-4 z-50 px-4 pt-4">
        <nav className="clay-nav mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a className="flex items-center gap-3" href="#">
            <span className="icon-tile tone-pink">
              <BookOpen size={22} />
            </span>
            <span className="text-xl font-black text-[var(--text)]">{profile.name}</span>
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
            <a className="px-4 py-2 text-sm font-bold hover:text-[var(--cta)]" href={profile.twitter}>
              X
            </a>
            <a className="clay-button primary small" href="#contact">
              Contact Me
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
                Hi, I&apos;m <span>{profile.name}.</span>
                <br />
                Community &amp; IT Support.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">{profile.shortBio}</p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a className="clay-button primary" href="#experience">
                  View Experience
                  <ArrowRight size={18} />
                </a>
                <a className="clay-button secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-5">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-[var(--text)]">{stat.value}</p>
                    <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scene-3d scroll-rise" aria-label="Sky profile card">
              <div className="hero-console clay-card">
                <div className="console-top">
                  <span />
                  <span />
                  <span />
                  <strong>About Sky</strong>
                </div>
                <div className="console-grid">
                  <div className="avatar-tile">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Sky avatar" height={72} src="/avatar.webp" width={72} />
                  </div>
                  <div>
                    <h2>{profile.name}</h2>
                    <p className="flex items-center gap-1">
                      <MapPin size={14} />
                      {profile.location}
                    </p>
                  </div>
                  <strong className="status-pill">Active</strong>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.quickFacts.map((fact) => (
                    <span className="mini-tag" key={fact}>
                      {fact}
                    </span>
                  ))}
                </div>
                <a className="clay-button primary full mt-5" href="#experience">
                  See My Journey
                </a>
              </div>

              <div className="floating-chip chip-top tone-pink">
                <Users size={25} />
              </div>
              <div className="floating-chip chip-right tone-mint">
                <Star size={25} />
              </div>
              <div className="floating-chip chip-left tone-blue">
                <Cpu size={25} />
              </div>

              <div className="cube-wrap">
                <div className="cube3d">
                  <span className="face face-front">SKY</span>
                  <span className="face face-back">MOD</span>
                  <span className="face face-right">WEB3</span>
                  <span className="face face-left">IT</span>
                  <span className="face face-top">CM</span>
                  <span className="face face-bottom">HELP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="about">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-heading left scroll-rise">
              <p className="eyebrow">About Me</p>
              <h2>Who Is Sky?</h2>
              <p>{profile.about}</p>
            </div>
            <article className="clay-card feature-card scroll-rise">
              <span className="icon-tile tone-mint">
                <GraduationCap size={28} />
              </span>
              <h3>Quick Facts</h3>
              <ul className="mt-4 space-y-3">
                {profile.quickFacts.map((fact) => (
                  <li className="flex items-center gap-2 font-bold" key={fact}>
                    <CheckCircle2 size={18} />
                    {fact}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-pad cream-band" id="experience">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Experience</p>
              <h2>Where I&apos;ve Contributed</h2>
              <p>Web3 communities I have moderated, led, and supported, plus my work in IT support.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {experiences.map((item, index) => (
                <article className="clay-card timeline-card scroll-rise" key={item.organization}>
                  <span className={`icon-tile ${tones[index % 3]}`}>
                    {item.organization === "PT. Multindo Auto Finance" ? <Headphones size={24} /> : <ShieldCheck size={24} />}
                  </span>
                  <div>
                    <p className="year">{item.year}</p>
                    <p className="text-xs font-bold text-[var(--muted)]">{item.type}</p>
                    <h3>{item.role}</h3>
                    <a
                      className="inline-flex items-center gap-1 font-black underline-offset-4 hover:underline"
                      href={item.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.organization}
                      <ExternalLink size={14} />
                    </a>
                    <p>{item.description}</p>
                    <ul>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Highlights</p>
              <h2>Roles I&apos;ve Been Trusted With</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {profile.achievements.map((item, index) => (
                <article className="clay-card feature-card scroll-rise" key={item}>
                  <span className={`icon-tile ${tones[index % 3]}`}>
                    <Award size={26} />
                  </span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad cream-band" id="skills">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading scroll-rise">
              <p className="eyebrow">Skills</p>
              <h2>What I Bring</h2>
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

        <section className="cta-band px-4 py-20" id="contact">
          <div className="clay-card cta-card mx-auto max-w-4xl scroll-rise">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-[var(--border)] bg-[var(--primary)]">
              <Zap size={30} />
            </div>
            <h2>Let&apos;s Connect</h2>
            <p>Need a moderator, community manager, or support person for your project? Reach out anytime.</p>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t-[3px] border-[var(--border)] pt-6 text-sm font-bold text-[var(--muted)] sm:flex-row">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <Users size={16} />
            Community · Support · IT
          </span>
        </div>
      </footer>
    </div>
  );
}
