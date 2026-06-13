import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/experience";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

export function ExperienceSection() {
  return (
    <section
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      id="experience"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Roles and ongoing activities that shape my practical experience across Web3, AI, content, and software development."
          kicker="Experience"
          title="Builder path and community involvement."
        />

        <div className="grid gap-5">
          {experiences.map((item) => (
            <Card className="p-6" key={`${item.role}-${item.year}`}>
              <div className="grid gap-5 lg:grid-cols-[0.3fr_1fr]">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <p className="text-sm font-semibold text-indigo-700">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item.organization}
                  </p>
                </div>

                <div>
                  <p className="text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {item.responsibilities.map((responsibility) => (
                      <div
                        className="rounded-lg bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700"
                        key={responsibility}
                      >
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
