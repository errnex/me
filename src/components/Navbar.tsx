"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Button } from "./shared/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a className="flex items-center gap-3" href="#home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-soft">
            W3
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-950">
              {profile.name}
            </span>
            <span className="block text-xs font-medium text-slate-500">
              {profile.title}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#contact" size="sm">
            Contact Me
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-slate-100 bg-white px-4 py-4 shadow-soft transition lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => (
            <a
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2 w-full" href="#contact" size="sm">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}
