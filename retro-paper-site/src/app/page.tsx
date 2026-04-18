"use client";

import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import AboutPanel from "@/components/AboutPanel";
import BookProgress from "@/components/BookProgress";
import INovelPanel from "@/components/INovelPanel";
import DesignPanel from "@/components/DesignPanel";
import ContactPanel from "@/components/ContactPanel";

type Lang = "zh" | "en";
type SectionId = "about" | "researchsmith" | "inovel" | "design" | "contact";

const DONATE_URL = "https://www.paypal.com/ncp/payment/M4RT9PJLJHSG2";

function DonateDropdown({
  lang,
}: {
  lang: Lang;
}) {
  return (
    <a
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex list-none cursor-pointer items-center rounded-full border border-amber-300/80 bg-amber-100/90 px-3 py-1.5 font-design text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-900 transition hover:bg-amber-200/80"
      aria-label={lang === "zh" ? "前往 PayPal 赞助页面" : "Open PayPal donation page"}
    >
      Donate
    </a>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const navItems: { id: SectionId; label: string }[] =
    lang === "zh"
      ? [
          { id: "about", label: "关于" },
          { id: "researchsmith", label: "研究师" },
          { id: "inovel", label: "私小说作者" },
          { id: "design", label: "氛围编程者" },
          { id: "contact", label: "联络" },
        ]
      : [
          { id: "about", label: "About" },
          { id: "researchsmith", label: "Researchsmith" },
          { id: "inovel", label: "I-novelist" },
          { id: "design", label: "Designer" },
          { id: "contact", label: "Contact" },
        ];

  const goSection = (id: SectionId) => {
    const el = document.getElementById(id);
    setMobileMenuOpen(false);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <h1>
            <button
              type="button"
              onClick={() => goSection("about")}
              className="font-rounded text-[20px] font-bold tracking-[0.06em] text-slate-700 transition hover:text-slate-900"
            >
              ResearchIC
            </button>
          </h1>

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
            <DonateDropdown lang={lang} />
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

      <AboutPanel lang={lang} />

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

      <footer className="mt-4 border-t border-slate-200/70 bg-slate-50/80 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
          <p className="font-design text-[11px] uppercase tracking-[0.1em] text-slate-500">
            © {currentYear} ResearchIC. {lang === "zh" ? "保留所有权利。" : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
