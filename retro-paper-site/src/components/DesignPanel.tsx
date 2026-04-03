type ToolCard = {
  name: string;
  summary: string;
  github: string;
  vercel: string;
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
};

const tools: ToolCard[] = [
  {
    name: "Second-Brain",
    summary:
      "A mind-mapping tool for creating concept nodes and relationship lines to build knowledge maps individually or collaboratively, potentially with AI.",
    github: "https://github.com/linsharon/second-brain",
    vercel: "https://second-brain.vercel.app",
  },
  {
    name: "Research Workspace",
    summary:
      "A web tool to guide early-stage research students in reading and writing research papers.",
    github: "https://github.com/linsharon/researchworkspace",
    vercel: "https://researchworkspace.vercel.app/",
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
    period: "2017 - 2019",
    project: "Programship.com",
    detailZh:
      "服务准留学生与国际教育机构，提供申请流程支持、文档创建和沟通协作。",
    detailEn:
      "Served prospective students and international providers with application workflow support, communication tools, and document creation.",
    github: "https://github.com/linsharon/programship-com",
    archive: "https://web.archive.org/web/20190118044701/https://programship.com/",
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
];

const servicePanelsZh: ServicePanel[] = [
  {
    title: "个人品牌显影",
    lines: [
      "为研究者设计一个能体现其研究品味和学术影响力的数字主页。",
      "包含 SEO 优化（让同行更容易搜到你）、学术成果自动化展示，以及与个人叙事相结合的风格设计。",
    ],
  },
  {
    title: "敏捷教学环境搭建",
    lines: ["针对小型研究团队或独立教育者，快速部署轻量化 Moodle 学习管理系统。"],
  },
  {
    title: "科研外脑系统定制",
    lines: [
      "提供科研知识管理系统的咨询与搭建服务，帮研究者把 Zotero、Obsidian、Notion 和 AI 工具串联起来。",
      "设计一套从文献输入到论文输出的自动化流水线。",
      "适合那些被碎片化信息淹没、感觉大脑内存不足的博士生和青年教师。",
    ],
  },
  {
    title: "AI 辅助研究工作流设计",
    lines: [
      "教研究者利用感觉编程工具，开发适合他们自己需求的小工具。",
      "比如做一个特定的文本爬虫，或者做一个分析学生行为数据的看板。",
    ],
  },
];

const servicePanelsEn: ServicePanel[] = [
  {
    title: "1. Academic Digital Presence",
    lines: [
      "Design a digital homepage for researchers that reflects their research taste and academic influence.",
      "This includes SEO optimization (making it easier for peers to find you), automated display of academic achievements, and a style design that integrates personal narrative.",
    ],
  },
  {
    title: "2. Agile LMS Implementation",
    lines: [
      "Quickly deploy a lightweight Moodle learning management system for small research teams or independent educators.",
    ],
  },
  {
    title: "3. Personal Knowledge Management Architecture",
    lines: [
      "We offer consulting and development services for scientific knowledge management systems, helping researchers connect Zotero, Obsidian, Notion, and AI tools to design an automated pipeline from literature input to paper output.",
      "This is suitable for doctoral students and young faculty members who are overwhelmed by fragmented information and feel their brains are running out of memory.",
    ],
  },
  {
    title: "4. Vibe Coding for Researchers",
    lines: [
      "Guide teachers or researchers to use the Vibe coding tool to develop micro-tools tailored to their experimental needs.",
      "For example, they could create a specific text crawler or a dashboard for analyzing student behavior data.",
    ],
  },
];

export default function DesignPanel({ lang }: DesignPanelProps) {
  const servicePanels = lang === "zh" ? servicePanelsZh : servicePanelsEn;

  return (
    <section className="space-y-6 font-serif">
      <header className="rounded-lg border border-slate-200/50 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Designer</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">The Digital Manifestation of Creativity</h2>
      </header>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-3 font-semibold text-slate-900">
          {lang === "zh" ? "工具" : "Tools"}
        </h3>
        <p className="mb-4 text-sm text-slate-700">
          {lang === "zh"
            ? "我构建 AI 驱动、以人为中心的数字工具，服务学习、研究与知识服务场景。"
            : "I craft AI-driven, human-centered digital tools for learning, research, and knowledge service scenarios."}
        </p>

        <div className="space-y-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-md border border-slate-200/80 bg-slate-50/50 p-4 hover:bg-slate-50 transition"
            >
              <h4 className="font-semibold text-slate-900 text-sm">{tool.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                {tool.summary}
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
                <a
                  className="inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-50/60 px-3 py-1.5 font-design text-xs uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-100"
                  href={tool.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "zh" ? "预览" : "Preview"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "服务" : "Services"}
        </h3>
        <div className="space-y-2">
          {servicePanels.map((panel) => (
            <details
              key={panel.title}
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
                  <p key={line}>{line}</p>
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