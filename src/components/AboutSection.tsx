import { CheckCircle2, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

export function AboutSection() {
  return (
    <section className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          description="A quick look at who I am, what I build, and the direction of my current work."
          kicker="About Me"
          title="A builder at the intersection of Web3, AI, and product design."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-slate-200 bg-white/70 p-6 shadow-soft sm:p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <GraduationCap size={24} />
            </div>
            <p className="text-lg leading-8 text-slate-700">{profile.about}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              I care about simple interfaces, useful data, and products that help
              people understand complex technology without friction.
            </p>
          </div>

          <Card className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">Quick Facts</h3>
            <div className="mt-6 space-y-4">
              {profile.quickFacts.map((fact) => (
                <div className="flex items-center gap-3" key={fact}>
                  <CheckCircle2 className="text-indigo-600" size={20} />
                  <span className="font-semibold text-slate-700">{fact}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
