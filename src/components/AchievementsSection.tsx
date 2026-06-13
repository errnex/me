import { Award, CheckCircle2, Target } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

export function AchievementsSection() {
  return (
    <section className="bg-white/60 px-4 py-20 sm:px-6 lg:px-8" id="achievements">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Milestones and proof points you can replace as your portfolio grows."
          kicker="Achievements"
          title="Progress that keeps compounding."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Award size={24} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-950">
              Builder Highlights
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Keep this section updated with shipped projects, campaigns,
              hackathons, community roles, and measurable outcomes.
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.achievements.map((achievement) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                key={achievement}
              >
                <CheckCircle2 className="text-indigo-600" size={22} />
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
                  {achievement}
                </p>
              </div>
            ))}
            <div className="rounded-lg bg-indigo-600 p-5 text-white shadow-soft">
              <Target size={22} />
              <p className="mt-4 text-sm font-semibold leading-6">
                Current focus: practical Web3 products, AI-assisted dashboards,
                and creator-led education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
