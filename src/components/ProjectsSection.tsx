import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "./shared/Badge";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

export function ProjectsSection() {
  return (
    <section
      className="scroll-mt-24 bg-white/60 px-4 py-20 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Selected builds and prototypes that combine frontend craft, onchain data, AI workflows, and practical product thinking."
          kicker="Featured Projects"
          title="Work designed to be useful, editable, and ready to evolve."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              className="overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-indigo-200"
              key={project.title}
            >
              <div className="flex h-44 items-end justify-between bg-gradient-to-br from-sky-100 via-indigo-100 to-white p-5">
                <div>
                  <p className="text-xs font-bold uppercase text-indigo-700">
                    Project Preview
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-950">
                    0{index + 1}
                  </p>
                </div>
                <Badge className="bg-white/80">{project.status}</Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      className="border-slate-200 bg-slate-50 text-slate-700"
                      key={tech}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={project.github} size="sm" variant="secondary">
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button href={project.demo} size="sm">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
