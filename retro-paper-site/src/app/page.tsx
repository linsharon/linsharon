"use client";

import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import BookProgress from "@/components/BookProgress";
import INovelPanel from "@/components/INovelPanel";
import DesignPanel from "@/components/DesignPanel";
import ContactPanel from "@/components/ContactPanel";

type Lang = "zh" | "en";
type SectionId = "about" | "researchsmith" | "inovel" | "design";

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string }[] =
    lang === "zh"
      ? [
          { id: "about", label: "关于" },
          { id: "researchsmith", label: "研究师" },
          { id: "inovel", label: "私小说作者" },
          { id: "design", label: "感觉编程者" },
        ]
      : [
          { id: "about", label: "About" },
          { id: "researchsmith", label: "Researchsmith" },
          { id: "inovel", label: "I-novelist" },
          { id: "design", label: "Designer" },
        ];

  const goSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <h1 className="font-academic text-[13px] font-normal tracking-[0.08em] text-slate-700 sm:text-[14px]">ResearchIC</h1>

          <nav className="hidden min-w-0 flex-1 md:block">
            <ul className="flex flex-nowrap items-center justify-end gap-3 overflow-x-auto whitespace-nowrap pr-1 text-[11px] font-medium text-slate-600">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goSection(item.id)}
                    className="transition hover:text-slate-950"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === "zh" ? "en" : "zh"))}
              className="rounded-full border border-slate-300/80 bg-white px-2.5 py-1 font-design text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-slate-50"
              aria-label="Toggle language"
            >
              {lang === "zh" ? "中/EN" : "ZH/EN"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex rounded-full border border-slate-300/80 bg-white px-2.5 py-1 font-design text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-slate-50 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? "−" : "Menu"}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <nav className="mt-3 md:hidden">
            <ul className="grid gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goSection(item.id)}
                    className="w-full rounded-md border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-left text-[11px] font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <MainLayout
        left={
          <section>
            <BookProgress lang={lang} />
          </section>
        }
        center={
          <section id="inovel" className="scroll-mt-24">
            <INovelPanel lang={lang} />
          </section>
        }
        right={
          <section id="design" className="scroll-mt-24">
            <DesignPanel lang={lang} />
          </section>
        }
      />

      <ContactPanel lang={lang} />
    </div>
  );
}
