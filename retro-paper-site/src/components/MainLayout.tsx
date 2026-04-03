import { ReactNode } from "react";

type MainLayoutProps = {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
};

export default function MainLayout({ left, center, right }: MainLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
        <aside className="space-y-0 rounded-lg border border-amber-200/60 bg-amber-50/80 p-6 shadow-sm transition-shadow hover:shadow-md">
          {left}
        </aside>
        <article className="space-y-0 rounded-lg border border-rose-200/50 bg-rose-50/60 p-6 shadow-sm transition-shadow hover:shadow-md">
          {center}
        </article>
        <aside className="space-y-0 rounded-lg border border-teal-200/60 bg-teal-50/70 p-6 shadow-sm transition-shadow hover:shadow-md">
          {right}
        </aside>
      </section>
    </main>
  );
}