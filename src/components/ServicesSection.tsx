import { Bot, LineChart, Megaphone, MonitorSmartphone } from "lucide-react";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

const services = [
  {
    title: "Web3 Dashboard Development",
    description:
      "Membangun dashboard wallet, portfolio, transaction tracking, dan analytics.",
    icon: LineChart
  },
  {
    title: "AI Agent Development",
    description:
      "Membangun AI assistant dan agent workflow untuk produk Web3.",
    icon: Bot
  },
  {
    title: "Frontend Development",
    description:
      "Membangun website modern, responsive, dan production-ready.",
    icon: MonitorSmartphone
  },
  {
    title: "Content & Community Strategy",
    description:
      "Membuat konten edukasi Web3, thread, dan campaign narrative.",
    icon: Megaphone
  }
];

export function ServicesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="A simple service map for portfolio visitors, collaborators, and potential clients."
          kicker="What I Do"
          title="Clean execution across product, Web3, AI, and community."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                className="p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200"
                key={service.title}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
