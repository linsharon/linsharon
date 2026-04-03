"use client";

import Image from "next/image";

const PROJECT = {
  signDate: new Date("2025-08-22"),
  deadline: new Date("2027-07-01"),
  totalWords: 80000,
  currentWords: 40000,
  totalChapters: 9,
  currentChapter: 5,
};

function clampPercent(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, value));
}

function calcPercent(current: number, total: number): number {
  if (total <= 0) {
    return 0;
  }

  return clampPercent((current / total) * 100);
}

function calcTimePercent(now: Date): number {
  const startMs = PROJECT.signDate.getTime();
  const endMs = PROJECT.deadline.getTime();
  const nowMs = now.getTime();

  if (endMs <= startMs) {
    return 0;
  }

  return clampPercent(((nowMs - startMs) / (endMs - startMs)) * 100);
}

type ProgressBarProps = {
  label: string;
  percent: number;
  detail: string;
};

type BookProgressProps = {
  lang: "zh" | "en";
};

const ARTICLE_LINKS = [
  {
    zh: "作为博士生，为什么一定要了解研究范式（research paradigms）？",
    en: "Why doctoral students must understand research paradigms",
    url: "https://mp.weixin.qq.com/s/x_5zTKAjwm6VBPF4a_bXSg",
  },
  {
    zh: "研究范式与研究方法论的区别",
    en: "Difference between research paradigms and methodology",
    url: "https://mp.weixin.qq.com/s/4jnV3xQKp6MNNIftkLuA2g",
  },
  {
    zh: "年轻学者要去写专著",
    en: "Young scholars should write a monograph",
    url: "https://mp.weixin.qq.com/s/nYGM_Pl85gugXmLTF-22Mg?token=1365194783&lang=en_US",
  },
  {
    zh: "学术界的全球裁员开始了",
    en: "Global layoffs in academia",
    url: "https://mp.weixin.qq.com/s/qMxzMNCkqO9Dc44871DEKA?token=1365194783&lang=en_US",
  },
  {
    zh: "被导师托举与不被托举的博士生",
    en: "Supported vs unsupported PhD trajectories",
    url: "https://mp.weixin.qq.com/s/HxW-G27W3C48HzD6tdWVLg",
  },
  {
    zh: "如何判断研究问题是不是好问题",
    en: "How to evaluate a good research question",
    url: "https://mp.weixin.qq.com/s/6DzRLWlyRzzyZwv65J_U2A",
  },
  {
    zh: "研究范式、方法论、研究设计的区分",
    en: "Separating paradigm, design, and methods",
    url: "https://mp.weixin.qq.com/s/nJAkJQcgQYguA4V0ugt4jA",
  },
  {
    zh: "文献综述是策略性社交行为",
    en: "Literature review as strategic positioning",
    url: "https://mp.weixin.qq.com/s/PM3H58ZZelpPE56W-Y1NeA",
  },
  {
    zh: "什么是研究领域",
    en: "What defines a research field",
    url: "https://mp.weixin.qq.com/s/RDmDHMH_MKEEiXzVYM_U2w?token=1365194783&lang=en_US",
  },
  {
    zh: "滚雪球阅读法：从一篇到一个领域",
    en: "Snowball reading across a whole field",
    url: "https://mp.weixin.qq.com/s/1WHBsbS0lTB1DtjWrvQADg?token=1365194783&lang=en_US",
  },
];

const RESEARCH_SERVICE_PANELS_ZH = [
  {
    title: "第一，一对一咨询",
    lines: [
      "根据你面临的具体问题和需求，提供专业的意见、建议或方案。",
      "1小时收集客户需求，之后会需要几天时间做调查和草拟方案，然后我会花1-2小时通过腾讯会议回复客户需求。",
    ],
  },
  {
    title: "第二，一对一学术读写培训课程",
    lines: [
      "3小时的亲密且深度的认知重构，获得课程链接，通过飞书进行自主学习。",
      "课程将会教你如何进行系统的学术阅读和学术写作，将破碎的想法转化为符合学术范式的表达。",
      "课间提供1小时的微信答疑（打字）。",
    ],
  },
  {
    title: "第三，异步研究诊断",
    lines: [
      "用户提交一份研究计划或论文草稿，我将进行深度拆解和建议。",
      "并以PDF文档+30分钟微信答疑（打字）的形式给与反馈。",
    ],
  },
  {
    title: "第四，AI + 研究工作流定制",
    lines: [
      "利用开发的 research workspace 的工具逻辑，教学生如何搭建自己的数字外脑。",
      "包括配置一系列 AI 工具来支撑硕博生涯的学术活动。",
    ],
  },
  {
    title: "第五，小规模疗愈型共创工作坊",
    lines: [
      "通过reflective writing来记录与思考研究过程中的挫败、焦虑和自我怀疑。",
      "针对那些对学术体制感到幻灭、甚至有抑郁倾向的硕博生。",
      "通过个人叙事的方法，找回做研究的初心和动力。",
    ],
  },
];

const RESEARCH_SERVICE_PANELS_EN = [
  {
    title: "1. Strategic Research Consultation",
    lines: [
      "Based on your specific problems and needs, I will provide professional opinions, suggestions, or solutions.",
      "I will spend one hour gathering client needs, followed by several days of research and drafting of solutions.",
      "Then, I will spend 1-2 hours responding to client needs via Tencent Meeting.",
    ],
  },
  {
    title: "2. Academic Literacy Mentoring",
    lines: [
      "Experience three hours of intimate and in-depth cognitive restructuring, gain access to the course link, and engage in self-directed learning via Lark.",
      "The course will teach you how to conduct systematic academic reading and writing, transforming fragmented ideas into expressions conforming to academic paradigms.",
      "One hour of WeChat Q&A (text-based) is provided during breaks.",
    ],
  },
  {
    title: "3. Async Research Audit",
    lines: [
      "Users submit a research plan or paper draft, which I will analyze in depth and offer suggestions, providing feedback in the form of a PDF document plus a 30-minute WeChat Q&A session (written).",
    ],
  },
  {
    title: "4. AI-Powered Research Workflow Design",
    lines: [
      "Using the tools and logic of the developed research workspace, students are taught how to build their own digital brain, including configuring a series of AI tools to support their academic activities during their master's and doctoral studies.",
    ],
  },
  {
    title: "5. Reflective Writing Workshop",
    lines: [
      "This activity uses reflective writing to record and reflect on the frustrations, anxieties, and self-doubt experienced during the research process.",
      "It is aimed at master's and doctoral students who feel disillusioned with the academic system or even have depressive tendencies.",
      "Through personal narratives, it helps them rediscover their initial passion and motivation for research.",
    ],
  },
];

function ProgressBar({ label, percent, detail }: ProgressBarProps) {
  const normalized = clampPercent(percent);

  return (
    <div className="space-y-1.5">
      <div className="flex items-end justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-900">{label}</p>
        <p className="text-xs font-medium text-slate-600">{normalized.toFixed(1)}%</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
        <div
          className="h-full rounded-full bg-slate-900 transition-all duration-500 ease-out"
          style={{ width: `${normalized}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="text-xs text-slate-600">{detail}</p>
    </div>
  );
}

export default function BookProgress({ lang }: BookProgressProps) {
  const now = new Date();
  const locale = lang === "zh" ? "zh-CN" : "en-US";
  const timePercent = calcTimePercent(now);
  const wordPercent = calcPercent(PROJECT.currentWords, PROJECT.totalWords);
  const chapterPercent = calcPercent(PROJECT.currentChapter, PROJECT.totalChapters);
  const coverSrc = "/images/image2.png";
  const researchServicePanels = lang === "zh" ? RESEARCH_SERVICE_PANELS_ZH : RESEARCH_SERVICE_PANELS_EN;

  return (
    <section className="space-y-8 font-serif">
      <section id="about" className="rounded-lg border border-slate-200/50 bg-white p-5 scroll-mt-24">
        <h3 className="mb-4 text-base font-semibold tracking-tight text-slate-900">{lang === "zh" ? "关于" : "About"}</h3>
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-slate-200/80">
            <Image src="/images/profile-photo.jpg" alt="Dr. Jingjing Lin" fill className="object-cover" sizes="80px" />
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {lang === "zh"
              ? "我是林晶晶博士（西西弗斯林），致力于打造以人为本、人工智能驱动的数字工具和服务，为学习、研究和知识管理领域的用户带来愉悦的体验。"
              : "I am Dr. Jingjing Lin (pen-name: Sisyphus Lynn). I craft AI-driven, human-centered digital tools and services that delight users in Learning, Research, and Knowledge Management Scenarios."}
          </p>
        </div>
      </section>

      <header id="researchsmith" className="rounded-lg border border-amber-200/50 bg-amber-50 p-5 scroll-mt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-900/60">The Researchsmith</p>
        <h2 className="mt-2 text-lg font-semibold text-amber-950">
          {lang === "zh" ? "为科研人打辅助。" : "Assist researchers to achieve better processes and outcomes."}
        </h2>
      </header>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "新书进度" : "New Book Progress"}
        </h3>
        <div className="flex gap-5">
          <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200">
            <Image src={coverSrc} alt="Rooting cover" fill className="object-cover" sizes="96px" />
          </div>
          <div className="flex-1 space-y-2 text-sm text-slate-700">
            <div>
              <p className="font-medium text-slate-900">
                {lang === "zh"
                  ? "Conducting Educational Research with AI"
                  : "Conducting Educational Research with AI"}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === "zh"
                  ? "Updating the Processes of Academic Reading, Writing, and Publishing"
                  : "Updating the Processes of Academic Reading, Writing, and Publishing"}
              </p>
            </div>
            <p className="text-slate-600">
              {lang === "zh" ? "出版社：" : "Publisher: "} <span className="font-medium text-slate-900">Routledge</span>
            </p>
            <p className="text-slate-600">
              {lang === "zh" ? "签约日期：" : "Signed: "} <span className="font-medium text-slate-900">{PROJECT.signDate.toLocaleDateString(locale)}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <ProgressBar
            label={lang === "zh" ? "日期进度" : "Date Progress"}
            percent={timePercent}
            detail={lang === "zh" ? `截至 ${now.toLocaleDateString(locale)}` : `As of ${now.toLocaleDateString(locale)}`}
          />
          <ProgressBar
            label={lang === "zh" ? "字数进度" : "Word Progress"}
            percent={wordPercent}
            detail={`${PROJECT.currentWords.toLocaleString(locale)} / ${PROJECT.totalWords.toLocaleString(locale)} ${lang === "zh" ? "字" : "words"}`}
          />
          <ProgressBar
            label={lang === "zh" ? "章节进度" : "Chapter Progress"}
            percent={chapterPercent}
            detail={lang === "zh" ? `第 ${PROJECT.currentChapter} 章 / 共 ${PROJECT.totalChapters} 章` : `Chapter ${PROJECT.currentChapter} / ${PROJECT.totalChapters}`}
          />
        </div>
      </div>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "精选阅读" : "Featured Articles"}
        </h3>
        <ol className="space-y-2 text-sm text-slate-700">
          {ARTICLE_LINKS.map((article) => (
            <li key={article.url} className="flex items-start gap-2">
              <span className="mt-1.5 text-xs font-medium text-slate-400 shrink-0">•</span>
              <a
                className="hover:text-slate-900 underline underline-offset-2 decoration-transparent hover:decoration-slate-400 transition"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "zh" ? article.zh : article.en}
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <a
            href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTUwNTMwNQ==&action=getalbum&album_id=4441820203487903745#wechat_redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-md border border-slate-200 bg-slate-50/50 p-3 transition hover:bg-slate-50 hover:shadow-sm"
          >
            <div className="relative mb-3 h-28 w-full overflow-hidden rounded border border-slate-200 bg-white">
              <Image src="/images/image3a.png" alt="Research notes cover A" fill className="object-contain p-1.5" sizes="220px" />
            </div>
            <p className="text-xs font-medium text-slate-700 group-hover:text-slate-900">《西西弗斯林的研究笔记》</p>
          </a>

          <a
            href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTUwNTMwNQ==&action=getalbum&album_id=4444744998521192449#wechat_redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-md border border-slate-200 bg-slate-50/50 p-3 transition hover:bg-slate-50 hover:shadow-sm"
          >
            <div className="relative mb-3 h-28 w-full overflow-hidden rounded border border-slate-200 bg-white">
              <Image src="/images/image4a.png" alt="Academic reading album cover A" fill className="object-contain p-1.5" sizes="220px" />
            </div>
            <p className="text-xs font-medium text-slate-700 group-hover:text-slate-900">《学术阅读的艺术与实战》</p>
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "研究辅助服务" : "Research Assistance Services"}
        </h3>
        <div className="space-y-2">
          {researchServicePanels.map((panel) => (
            <details
              key={panel.title}
              className="group rounded-md border border-slate-200/80 bg-slate-50/50 transition-colors open:bg-blue-50/50 open:border-blue-200/80"
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-medium text-slate-900 text-sm hover:bg-slate-100/50">
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

        <div className="mt-4 flex gap-3 rounded-md border border-slate-200/80 bg-slate-50/50 p-3">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded border border-slate-200">
            <Image src="/images/image8.png" alt="WeChat QR code" fill className="object-cover" sizes="64px" />
          </div>
          <p className="flex items-center text-xs text-slate-700">
            {lang === "zh"
              ? "咨询以上服务可添加微信 wenrenws"
              : "For these services, contact via WeChat: wenrenws"}
          </p>
        </div>
      </div>
    </section>
  );
}