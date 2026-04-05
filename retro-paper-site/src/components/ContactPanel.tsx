type ContactPanelProps = {
  lang: "zh" | "en";
};

type FundingLink = {
  label: string;
  href: string;
  icon: "paypal" | "coffee";
};

const staticSocialLinks = [
  { label: "GitHub", value: "github.com/linsharon", href: "https://github.com/linsharon" },
];

const defaultFundingLinks: FundingLink[] = [
  {
    label: "PayPal",
    href: process.env.NEXT_PUBLIC_PAYPAL_URL || "https://paypal.me/researchic?locale.x=en_US&country.x=JP",
    icon: "paypal",
  },
  {
    label: "Buy Me a Coffee",
    href: process.env.NEXT_PUBLIC_BMAC_URL || "https://buymeacoffee.com/sisyphuslynn",
    icon: "coffee",
  },
];

function FundingIcon({ icon }: { icon: FundingLink["icon"] }) {
  if (icon === "paypal") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 20l1.1-6.8a2 2 0 0 1 2-1.7h3.5a4.4 4.4 0 1 0 0-8.8H8.2a2 2 0 0 0-2 1.7L4 20" />
        <path d="M9.7 13.8h3a3 3 0 1 1 0 6H8.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 9h14l-1.2 6.1A3 3 0 0 1 13.9 18H8.5a3 3 0 0 1-2.9-2.3L4 9Z" />
      <path d="M18 10h1.2a2.8 2.8 0 1 1 0 5.6H17" />
      <path d="M7 5.2c.8-.7.8-1.7 0-2.4M11 5.2c.8-.7.8-1.7 0-2.4" />
    </svg>
  );
}

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

        <div className="mt-4 rounded-md border border-violet-200/60 bg-white/70 p-3">
          <p className="font-design text-[11px] uppercase tracking-[0.18em] text-black/60">
            {lang === "zh" ? "支持这个站点" : "Support this site"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {defaultFundingLinks.map((item) => (
              <a
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 font-design text-[11px] uppercase tracking-[0.12em] text-black/80 transition hover:bg-violet-100/60"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <FundingIcon icon={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

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