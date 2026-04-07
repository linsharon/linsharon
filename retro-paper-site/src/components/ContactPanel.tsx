"use client";

import { useState } from "react";

type ContactPanelProps = {
  lang: "zh" | "en";
};

type FundingLink = {
  label: string;
  href: string;
  icon: "paypal";
};

const DONATE_URL = "https://www.paypal.com/ncp/payment/M4RT9PJLJHSG2";

const staticSocialLinks = [
  { label: "GitHub", value: "github.com/linsharon", href: "https://github.com/linsharon" },
];

const defaultFundingLinks: FundingLink[] = [
  {
    label: "Donate",
    href: DONATE_URL,
    icon: "paypal",
  },
];

function FundingIcon({ icon }: { icon: FundingLink["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 20l1.1-6.8a2 2 0 0 1 2-1.7h3.5a4.4 4.4 0 1 0 0-8.8H8.2a2 2 0 0 0-2 1.7L4 20" />
      <path d="M9.7 13.8h3a3 3 0 1 1 0 6H8.5" />
    </svg>
  );
}

export default function ContactPanel({ lang }: ContactPanelProps) {
  const [showWechatQr, setShowWechatQr] = useState(false);
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-design text-[11px] uppercase tracking-[0.18em] text-black/60">
              {lang === "zh" ? "支持这个站点" : "Support this site"}
            </p>
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
              {(() => {
                const isWeChatContact = item.value === "wenrenws";

                if (isWeChatContact) {
                  return (
                    <button
                      type="button"
                      onClick={() => setShowWechatQr(true)}
                      className="flex w-full items-center justify-between rounded-md border border-emerald-300/70 bg-emerald-50 px-3 py-2 text-left shadow-sm ring-1 ring-emerald-200/80 transition hover:bg-emerald-100/70"
                    >
                      <span className="font-academic text-sm font-semibold text-emerald-900">{item.label}</span>
                      <span className="font-design text-xs uppercase tracking-wide text-emerald-700">{item.value}</span>
                    </button>
                  );
                }

                return (
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
                );
              })()}
            </li>
          ))}
        </ul>

        {showWechatQr ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 sm:p-4" role="dialog" aria-modal="true" aria-label={lang === "zh" ? "微信二维码" : "WeChat QR code"}>
            <div className="max-h-[calc(100vh-1.5rem)] w-full max-w-[300px] overflow-y-auto rounded-xl border border-emerald-200 bg-white p-3 shadow-xl sm:max-h-[calc(100vh-2rem)] sm:max-w-[320px] sm:p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-design text-[11px] uppercase tracking-[0.18em] text-emerald-700">
                    {lang === "zh" ? "微信联系" : "WeChat Contact"}
                  </p>
                  <h3 className="mt-1 font-academic text-lg text-slate-900">wenrenws</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWechatQr(false)}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 transition hover:bg-slate-50"
                >
                  {lang === "zh" ? "关闭" : "Close"}
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {lang === "zh" ? "请扫码添加微信联系。" : "Scan the QR code to connect on WeChat."}
              </p>
              <div className="mt-3 overflow-hidden rounded-lg border border-emerald-100 bg-emerald-50 p-2.5 sm:p-3">
                <img
                  src="/images/wechat-code.png"
                  alt={lang === "zh" ? "微信二维码" : "WeChat QR code"}
                  className="mx-auto h-auto max-h-[45vh] w-auto max-w-full rounded-md bg-white sm:max-h-[42vh]"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}