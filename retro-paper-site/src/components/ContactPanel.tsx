type ContactPanelProps = {
  lang: "zh" | "en";
};

const staticSocialLinks = [
  { label: "GitHub", value: "github.com/linsharon", href: "https://github.com/linsharon" },
];

export default function ContactPanel({ lang }: ContactPanelProps) {
  const socialLinks = [
    ...staticSocialLinks,
    { label: lang === "zh" ? "公众号" : "WeChat Subscription Account", value: "thewriterway", href: "https://mp.weixin.qq.com/" },
  ];

  const priorityLinks = [
    {
      label: "Email",
      value: "sisyphuslynn@gmail.com",
      href: "mailto:sisyphuslynn@gmail.com",
    },
    {
      label: lang === "zh" ? "微信" : "WeChat",
      value: "wenrenws",
      href: "https://mp.weixin.qq.com/",
    },
  ];

  const allLinks = [...priorityLinks, ...socialLinks];

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="rounded-md border border-violet-200/50 bg-violet-50/80 p-5">
        <h2 className="font-design text-sm uppercase tracking-[0.2em] text-black/70">
          {lang === "zh" ? "联系" : "Contact"}
        </h2>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {allLinks.map((item) => (
            <li key={item.label}>
              <a
                className="flex items-center justify-between rounded-md border border-black/10 bg-white/75 px-3 py-2 transition hover:bg-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-academic text-sm text-black/80">{item.label}</span>
                <span className="font-design text-xs uppercase tracking-wide text-black/60">
                  {item.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}