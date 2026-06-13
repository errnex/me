"use client";

import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "X / Twitter", href: profile.twitter, icon: Twitter },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }
];

export function ContactSection() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Contact form backend is not configured yet. Please use email link."
    );
  }

  return (
    <section
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Reach out for collaboration, Web3 dashboards, AI agent prototypes, or portfolio opportunities."
          kicker="Contact"
          title="Let's build something useful."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Contact Details
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Use the links below to connect directly. Replace all placeholder
              links in <span className="font-semibold">src/data/profile.ts</span>.
            </p>

            <div className="mt-6 grid gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <Icon size={20} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Name
                  <input
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Message
                <textarea
                  className="min-h-36 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  name="message"
                  placeholder="Tell me about your project or collaboration idea."
                  required
                />
              </label>

              {notice ? (
                <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                  {notice}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">
                  <Send size={18} />
                  Submit
                </Button>
                <Button href={`mailto:${profile.email}`} variant="secondary">
                  Email Directly
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
