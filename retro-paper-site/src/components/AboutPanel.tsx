import Image from "next/image";

type AboutPanelProps = {
  lang: "zh" | "en";
};

export default function AboutPanel({ lang }: AboutPanelProps) {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pt-8 sm:px-6 lg:px-8">
      <section className="rounded-lg border border-violet-200/50 bg-violet-50/80 p-5">
        <h3 className="mb-4 text-base font-semibold tracking-tight text-slate-900">{lang === "zh" ? "关于" : "About"}</h3>
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-slate-200/80">
            <Image src="/images/profile-photo.jpg" alt="Dr. Jingjing Lin" fill className="object-cover" sizes="80px" />
          </div>
          {lang === "zh" ? (
            <div className="space-y-3 text-sm leading-relaxed text-slate-700">
              <p>我是西西弗斯林，这里是一个学界遁逃者的“三界”。用学术利他，用文学利己，用设计显影。</p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-slate-900">学术利他：</span>
                  我用过往15年学术研究的职业经验积累的知识和技能进行价值变现。不再为体制和机构写作，而是为具体的、挣扎的个体（硕博生）写作，为他们提供在学术界生存和发展的培训和咨询。这让我在财务上保持体面，在社会关系上保持活跃。
                </li>
                <li>
                  <span className="font-semibold text-slate-900">文学利己：</span>
                  我的“精神避难所”和“心境手术室”。通过私小说的写作形式，直观坦诚地凝视关于自我的真相。
                </li>
                <li>
                  <span className="font-semibold text-slate-900">设计显影：</span>
                  我的“实验室”和“游乐场”。通过感觉编程/氛围编程（Vibe Coding），将脑中那些突如其来的灵感和创意，尽快地转化为可见、可互动的数字实体。我构建 AI 驱动、以人为中心的数字工具，服务学习、研究与知识服务场景。
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-3 text-sm leading-relaxed text-slate-700">
              <p>
                I am Sisyphus Lynn, and here is the &quot;Three Realms&quot; of an academic escapee. I offer scientific training and consulting for altruism, write i-novels for seeking self-understanding, and design and develop digital artifacts for creativity manifestation.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Researchsmith:</span> I monetize the knowledge and skills accumulated from 15 years of academic research. I no longer write for academic institutions, but for specific, struggling individuals (Master&apos;s and PhD students), providing them with training and consulting on survival and development within academia. This allows me to maintain financial dignity and remain active in social relationships.
              </p>
              <p>
                <span className="font-semibold text-slate-900">i-Novelist:</span> My &quot;spiritual sanctuary&quot; and &quot;psychological operating room.&quot; Through the writing form of i-novels, I directly and honestly gaze upon the truth about myself.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Designer:</span> My &quot;laboratory&quot; and &quot;playground.&quot; Through Vibe Coding, I quickly transform sudden inspirations and ideas into visible, interactive digital entities. I build AI-driven, human-centered digital tools to serve learning, research, and knowledge service scenarios.
              </p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}