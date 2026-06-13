import { Code2, Cpu, PenTool, Wrench, WalletCards } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Badge } from "./shared/Badge";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

const icons = [Code2, WalletCards, Cpu, Wrench, PenTool];

export function SkillsSection() {
  return (
    <section className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="A focused stack for shipping modern interfaces, Web3 dashboards, AI workflows, and content systems."
          kicker="Skills"
          title="Practical skills for product-first building."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Card
                className="p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-200"
                key={category.title}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      className="border-slate-200 bg-slate-50 text-slate-700"
                      key={skill}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
