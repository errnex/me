import { ArrowRight, BarChart3, Bot, CheckCircle2, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "./shared/Badge";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";

const stack = ["Next.js", "TypeScript", "Web3", "AI Agents", "Dashboards"];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="home"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-indigo-100/70 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge className="gap-2">
            <Sparkles size={14} />
            {profile.heroBadge}
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.shortBio}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects
              <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-6">
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-100 via-indigo-100 to-sky-100" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-lg font-bold text-indigo-700 shadow-sm">
                  W3
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Profile Summary
                  </p>
                  <h2 className="text-xl font-bold text-slate-950">
                    {profile.name}
                  </h2>
                </div>
              </div>
              <Badge className="bg-white/80">Available</Badge>
            </div>

            <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <BarChart3 size={22} />
                </span>
                <div>
                  <p className="font-bold text-slate-950">Builder Dashboard</p>
                  <p className="text-sm text-slate-500">
                    Web3 products, AI workflows, and creator systems.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge className="border-slate-200 bg-slate-50 text-slate-700" key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-indigo-600 p-4 text-white">
                <Bot className="mb-4" size={24} />
                <p className="text-sm font-semibold">AI Agent Builds</p>
                <p className="mt-1 text-2xl font-bold">03+</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mb-4 text-emerald-500" size={24} />
                <p className="text-sm font-semibold text-slate-700">
                  Product Focus
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-950">Utility</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
