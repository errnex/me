import { Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "X", href: profile.twitter, icon: Twitter },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-950">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            Web3, AI, and digital product builder.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-slate-500">
          Copyright 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
