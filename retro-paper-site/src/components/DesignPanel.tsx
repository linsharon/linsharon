"use client";

import { useState } from "react";

type ToolCard = {
  name: string;
  summary: string;
  summaryZh?: string;
  github: string;
  vercel: string;
  previewEnabled?: boolean;
};

type HistoryItem = {
  period: string;
  project: string;
  detailZh: string;
  detailEn: string;
  github: string;
  archive: string;
};

type DesignPanelProps = {
  lang: "zh" | "en";
};

type ServicePanel = {
  title: string;
  lines: string[];
  purchaseCtaAfterLine?: string;
  purchaseCtas?: {
    label: string;
    href?: string;
    message?: string;
  }[];
};

const WECHAT_PURCHASE_MESSAGE = "请添加西西弗斯林的微信：wenrenws，通过转账付款。";
const DESIGN_SERVICE_PAYPAL_URL_1 = "https://www.paypal.com/ncp/payment/DJ2HCFHXLUXZG";
const DESIGN_SERVICE_PAYPAL_URL_2 = "https://www.paypal.com/ncp/payment/J6PHAJW28VARL";
const DESIGN_SERVICE_PAYPAL_URL_3 = "https://www.paypal.com/ncp/payment/KK7SYJEUCNZHU";

const tools: ToolCard[] = [
  {
    name: "Second-Brain",
    summary:
      "A mind-mapping tool for creating concept nodes and relationship lines to build knowledge maps individually or collaboratively, potentially with AI.",
    summaryZh:
      "一款用于创建概念节点和关系线的思维导图工具，可以单独或协作构建知识图谱，并可能与人工智能结合使用。",
    github: "https://github.com/linsharon/second-brain",
    vercel: "https://second-brain-rust-two.vercel.app/",
  },
  {
    name: "Research Workspace",
    summary:
      "A web tool to guide early-stage research students in reading and writing research papers.",
    summaryZh: "一款指导初级研究生阅读和撰写研究论文的网络工具。",
    github: "https://github.com/linsharon/researchworkspace",
    vercel: "https://researchworkspace.vercel.app/",
    previewEnabled: true,
  },
];

const history: HistoryItem[] = [
  {
    period: "2021 - 2024",
    project: "ResearchIC.com",
    detailZh:
      "面向研究者与研究生的线上 journal club 平台，支持研究素养提升、知识分享和社群共建。",
    detailEn:
      "Home to an online journal-club hosting platform for researchers and students, supporting research literacy, knowledge sharing, and community building.",
    github: "https://github.com/linsharon/researchic-com",
    archive: "https://web.archive.org/web/20240519102554/https://researchic.com/",
  },
  {
    period: "2019 - 2020",
    project: "StartupCan.ch",
    detailZh: "瑞士创业者点对点社区，支持课程、问答、活动与创业资源交易。",
    detailEn:
      "A Swiss peer-to-peer community for entrepreneurs, including learning, Q&A, events, and startup marketplace features.",
    github: "https://github.com/linsharon/startupcan-ch",
    archive: "https://web.archive.org/web/20200928050851/https://startupcan.ch/",
  },
  {
    period: "2017 - 2019",
    project: "Programship.com",
    detailZh:
      "服务准留学生与国际教育机构，提供申请流程支持、文档创建和沟通协作。",
    detailEn:
      "Served prospective students and international providers with application workflow support, communication tools, and document creation.",
    github: "https://github.com/linsharon/programship-com",
    archive: "https://web.archive.org/web/20190118044701/https://programship.com/",
  },
];

const servicePanelsZh: ServicePanel[] = [
  {
    title: "1. 个人品牌网站设计和开发",
    lines: [
      "为研究者设计一个能体现其研究品味和学术影响力的数字主页。",
      "包含 SEO 优化（让同行更容易搜到你）、学术成果自动化展示，以及与个人叙事相结合的风格设计。",
    ],
    purchaseCtaAfterLine: "包含 SEO 优化（让同行更容易搜到你）、学术成果自动化展示，以及与个人叙事相结合的风格设计。",
    purchaseCtas: [
      {
        label: "PayPal购买",
        href: DESIGN_SERVICE_PAYPAL_URL_1,
      },
      {
        label: "微信购买",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
  {
    title: "2. 敏捷教学环境搭建",
    lines: ["针对小型研究团队或独立教育者，快速部署轻量化 Moodle 学习管理系统。"],
    purchaseCtaAfterLine: "针对小型研究团队或独立教育者，快速部署轻量化 Moodle 学习管理系统。",
    purchaseCtas: [
      {
        label: "PayPal购买",
        href: DESIGN_SERVICE_PAYPAL_URL_2,
      },
      {
        label: "微信购买",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
  {
    title: "3. 用氛围编程开发研究工具",
    lines: [
      "利用氛围编程（Vibe Coding）工具，开发服务研究需求的在线工具。",
      "比如做一个特定的文本爬虫，或者做一个分析学生行为数据的看板。",
    ],
    purchaseCtaAfterLine: "比如做一个特定的文本爬虫，或者做一个分析学生行为数据的看板。",
    purchaseCtas: [
      {
        label: "PayPal购买",
        href: DESIGN_SERVICE_PAYPAL_URL_3,
      },
      {
        label: "微信购买",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
];

const servicePanelsEn: ServicePanel[] = [
  {
    title: "1. Personal Brand Website Design and Development",
    lines: [
      "Design a digital homepage for researchers that reflects their research taste and academic influence.",
      "This includes SEO optimization (making it easier for peers to find you), automated display of academic achievements, and a style design that integrates personal narrative.",
    ],
    purchaseCtaAfterLine: "This includes SEO optimization (making it easier for peers to find you), automated display of academic achievements, and a style design that integrates personal narrative.",
    purchaseCtas: [
      {
        label: "Buy via PayPal",
        href: DESIGN_SERVICE_PAYPAL_URL_1,
      },
      {
        label: "Buy via WeChat",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
  {
    title: "2. Agile LMS Implementation",
    lines: [
      "Quickly deploy a lightweight Moodle learning management system for small research teams or independent educators.",
    ],
    purchaseCtaAfterLine: "Quickly deploy a lightweight Moodle learning management system for small research teams or independent educators.",
    purchaseCtas: [
      {
        label: "Buy via PayPal",
        href: DESIGN_SERVICE_PAYPAL_URL_2,
      },
      {
        label: "Buy via WeChat",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
  {
    title: "3. Develop research tools using vibe coding",
    lines: [
      "Utilize Vibe Coding tools to develop online tools that serve research needs.",
      "For example, create a specific text crawler or a dashboard for analyzing student behavior data.",
    ],
    purchaseCtaAfterLine: "For example, create a specific text crawler or a dashboard for analyzing student behavior data.",
    purchaseCtas: [
      {
        label: "Buy via PayPal",
        href: DESIGN_SERVICE_PAYPAL_URL_3,
      },
      {
        label: "Buy via WeChat",
        message: WECHAT_PURCHASE_MESSAGE,
      },
    ],
  },
];

export default function DesignPanel({ lang }: DesignPanelProps) {
  const servicePanels = lang === "zh" ? servicePanelsZh : servicePanelsEn;
  const [openDevPanels, setOpenDevPanels] = useState<string[]>([]);

  const expandAllDevPanels = () => {
    setOpenDevPanels(servicePanels.map((panel) => panel.title));
  };

  const collapseAllDevPanels = () => {
    setOpenDevPanels([]);
  };

  const toggleDevPanel = (title: string, isOpen: boolean) => {
    setOpenDevPanels((prev) => {
      if (isOpen) {
        if (prev.includes(title)) {
          return prev;
        }

        return [...prev, title];
      }

      return prev.filter((item) => item !== title);
    });
  };

  return (
    <section className="space-y-6 font-serif">
      <header className="rounded-lg border border-slate-200/50 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Designer</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">
          {lang === "zh" ? "设计显影" : "The Digital Manifestation of Creativity"}
        </h2>
      </header>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-3 font-semibold text-slate-900">
          {lang === "zh" ? "工具" : "Tools"}
        </h3>

        <div className="space-y-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-md border border-slate-200/80 bg-slate-50/50 p-4 hover:bg-slate-50 transition"
            >
              <h4 className="font-semibold text-slate-900 text-sm">{tool.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                {lang === "zh" && tool.summaryZh ? tool.summaryZh : tool.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-3 py-1.5 font-design text-xs uppercase tracking-wider text-slate-700 transition hover:bg-slate-50"
                  href={tool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {tool.previewEnabled === false ? (
                  <span
                    className="inline-flex cursor-not-allowed items-center rounded-full border border-slate-300/80 bg-slate-100 px-3 py-1.5 font-design text-xs uppercase tracking-wider text-slate-400"
                    aria-disabled="true"
                  >
                    {lang === "zh" ? "预览" : "Preview"}
                  </span>
                ) : (
                  <a
                    className="inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-50/60 px-3 py-1.5 font-design text-xs uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-100"
                    href={tool.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lang === "zh" ? "预览" : "Preview"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">
            {lang === "zh" ? "开发服务" : "Development Services"}
          </h3>
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <button
              type="button"
              onClick={expandAllDevPanels}
              className="rounded-full border border-slate-300/80 bg-white px-2.5 py-1 text-slate-700 transition hover:bg-slate-50"
            >
              {lang === "zh" ? "全部展开" : "Expand all"}
            </button>
            <button
              type="button"
              onClick={collapseAllDevPanels}
              className="rounded-full border border-slate-300/80 bg-white px-2.5 py-1 text-slate-700 transition hover:bg-slate-50"
            >
              {lang === "zh" ? "全部折叠" : "Collapse all"}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {servicePanels.map((panel) => (
            <details
              key={panel.title}
              open={openDevPanels.includes(panel.title)}
              onToggle={(event) => toggleDevPanel(panel.title, event.currentTarget.open)}
              className="group rounded-md border border-slate-200/80 bg-slate-50/50 transition-colors open:bg-teal-50/50 open:border-teal-200/80"
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-medium text-slate-900 text-sm hover:bg-slate-100/50 transition">
                <div className="flex items-center justify-between">
                  <span>{panel.title}</span>
                  <span className="text-slate-400 group-open:hidden text-xs shrink-0">+</span>
                  <span className="text-slate-400 hidden group-open:inline text-xs shrink-0">−</span>
                </div>
              </summary>
              <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-700 space-y-2 leading-relaxed">
                {panel.lines.map((line) => (
                  <div key={line} className="space-y-2">
                    <p>{line}</p>
                    {panel.purchaseCtaAfterLine === line && panel.purchaseCtas?.length ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {panel.purchaseCtas.map((cta) => (
                          cta.href ? (
                            <a
                              key={cta.label}
                              className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-1.5 text-xs font-medium text-white transition hover:border-slate-700 hover:bg-slate-700"
                              href={cta.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {cta.label}
                            </a>
                          ) : (
                            <button
                              key={cta.label}
                              type="button"
                              onClick={() => {
                                if (cta.message) {
                                  window.alert(cta.message);
                                }
                              }}
                              className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-1.5 text-xs font-medium text-white transition hover:border-slate-700 hover:bg-slate-700"
                            >
                              {cta.label}
                            </button>
                          )
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "项目历程" : "Projects"}
        </h3>

        <ol className="space-y-4">
          {history.map((item) => (
            <li key={item.project} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
              <p className="font-design text-xs uppercase tracking-wider text-slate-600 mb-1">
                {item.period}
              </p>
              <p className="font-semibold text-sm text-slate-900 mb-2">{item.project}</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {lang === "zh" ? item.detailZh : item.detailEn}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-3 py-1 font-design text-[11px] uppercase tracking-wide text-slate-700 hover:bg-slate-50 transition"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-3 py-1 font-design text-[11px] uppercase tracking-wide text-slate-700 hover:bg-slate-50 transition"
                  href={item.archive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "zh" ? "存档" : "Archive"}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}