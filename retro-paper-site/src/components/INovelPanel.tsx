import Image from "next/image";

type INovelPanelProps = {
  lang: "zh" | "en";
};

export default function INovelPanel({ lang }: INovelPanelProps) {
  const title = lang === "zh" ? "私小说作者" : "Towards a better understanding of self via writing.";
  const coverSrc = lang === "zh" ? "/images/image10.png" : "/images/image9.png";

  return (
    <section className="space-y-6 font-serif">
      <header className="rounded-lg border border-slate-200/50 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">I-novelist</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">{title}</h2>
      </header>

      <article className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "《生根》连载" : "Rooting: Searching for Meaning in Unfinished Paths"}
        </h3>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="relative h-48 w-36 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image src={coverSrc} alt="Shenggen cover" fill className="object-contain p-1" sizes="144px" />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-sm leading-relaxed text-slate-700">
              {lang === "zh"
                ? "《生根》讲述一位曾在学术体制中长期奋斗的人，如何在职业倦怠、创伤经历与中年 ADHD 诊断之后，离开既有轨道，重新理解未完成的人生。全书通过六个互相关联的章节，回看童年分离、学术生涯、创业实践与跨国迁徙中的身份撕裂，并在反复开始中重建意义。"
                : "Rooting follows a former tenure-track academic who leaves institutional certainty after burnout, trauma, and a midlife ADHD diagnosis. Across six interlinked chapters, it revisits childhood separation, academia, entrepreneurship, and transnational life, asking how to build meaning while living with unfinished paths."}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                className="inline-flex items-center rounded-full border border-amber-300/50 bg-amber-50/80 px-4 py-2 text-xs font-medium text-amber-900 transition hover:bg-amber-100"
                href="https://www.amazon.com/Rooting-Searching-Meaning-Unfinished-Paths-ebook/dp/B0FJ2GGQXV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon
              </a>
              <a
                className="inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-50/80 px-4 py-2 text-xs font-medium text-emerald-900 transition hover:bg-emerald-100"
                href="https://www.goodreads.com/book/show/239089779-rooting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Goodreads
              </a>
              <a
                className="inline-flex items-center rounded-full border border-green-300/50 bg-green-50/80 px-4 py-2 text-xs font-medium text-green-900 transition hover:bg-green-100"
                href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTUwNTMwNQ==&action=getalbum&album_id=4441770263470456838#wechat_redirect"
                target="_blank"
                rel="noopener noreferrer"
              >
                微信
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-lg border border-slate-200/50 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          {lang === "zh" ? "私小说栏目" : "I-novel Collections"}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            className="group rounded-lg border border-slate-200/80 bg-slate-50/50 overflow-hidden transition hover:shadow-md hover:bg-slate-50"
            href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTUwNTMwNQ==&action=getalbum&album_id=4456191652847943696#wechat_redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-t-lg border-b border-slate-200">
              <Image src="/images/image11.jpg" alt="Review cover" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(min-width: 640px) 50vw, 100vw" />
            </div>
            <p className="px-3 pb-3 text-sm font-medium text-slate-900 group-hover:text-slate-950">
              {lang === "zh" ? "阅读私小说（书评）" : "Reading I-novels (Book Reviews)"}
            </p>
          </a>

          <a
            className="group rounded-lg border border-slate-200/80 bg-slate-50/50 overflow-hidden transition hover:shadow-md hover:bg-slate-50"
            href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTUwNTMwNQ==&action=getalbum&album_id=4456203616781336585#wechat_redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-t-lg border-b border-slate-200">
              <Image src="/images/image00.jpg" alt="Creative I-novel cover" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(min-width: 640px) 50vw, 100vw" />
            </div>
            <p className="px-3 pb-3 text-sm font-medium text-slate-900 group-hover:text-slate-950">
              {lang === "zh" ? "西西的私小说（原创）" : "Lynn's I-novels (Creative Writing)"}
            </p>
          </a>
        </div>
      </article>
    </section>
  );
}