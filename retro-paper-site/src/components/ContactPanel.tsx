type ContactPanelProps = {
  lang: "zh" | "en";
};

const socialLinks = [
  { label: "GitHub", value: "github.com/linsharon", href: "https://github.com/linsharon" },
  { label: "YouTube", value: "@DrLittleLin", href: "https://www.youtube.com/@DrLittleLin" },
  { label: "X", value: "@linjingjing", href: "https://x.com/linjingjing" },
  { label: "LinkedIn", value: "/in/linjingjing", href: "https://www.linkedin.com/in/linjingjing/" },
  {
    label: "Bilibili",
    value: "627199096",
    href: "https://space.bilibili.com/627199096?spm_id_from=333.337.0.0",
  },
  { label: "ORCID", value: "0000-0002-4846-6817", href: "https://orcid.org/0000-0002-4846-6817" },
  { label: "公众号", value: "thewriterway", href: "https://mp.weixin.qq.com/" },
];

export default function ContactPanel({ lang }: ContactPanelProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="rounded-md border border-black/15 bg-white/65 p-5">
        <h2 className="font-design text-sm uppercase tracking-[0.2em] text-black/70">
          {lang === "zh" ? "联系" : "Contact"}
        </h2>
        <p className="mt-2 font-academic text-base text-black/80">
          {lang === "zh"
            ? "无论你有明确项目需求，还是想聊聊研究与设计，欢迎联系我。"
            : "Whether you have a project in mind or just want to chat about design and research, feel free to reach out."}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            className="inline-flex items-center rounded-full border border-black/20 bg-white px-4 py-2 font-design text-xs uppercase tracking-[0.16em] text-black/75 transition hover:bg-black hover:text-white"
            href="mailto:pandalinjingjing@gmail.com"
          >
            {lang === "zh" ? "发邮件 Say Hello" : "Say Hello"}
          </a>
        </div>

        <div className="mt-4 rounded-md border border-[#8a6a3a]/30 bg-[#f2e6cf] px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="font-academic text-sm text-[#5a4629]">
              {lang === "zh" ? "微信优先联系" : "WeChat Priority Contact"}
            </span>
            <span className="font-design text-xs tracking-wide text-[#6b4f24]">wenrenws</span>
          </div>
        </div>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((item) => (
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