"use client";

import { useState } from "react";

type Locale = "zh" | "en" | "ja";

type DisclosureItem = {
  titleZh: string;
  titleEn: string;
  titleJa: string;
  zh: string;
  en: string;
  ja: string;
};

const localeLabels: { value: Locale; label: string }[] = [
  { value: "zh", label: "中文" },
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
];

const pageTitleByLocale: Record<Locale, string> = {
  zh: "商业披露",
  en: "Buisness Disclosure",
  ja: "特定商取引法に基づく表記",
};

const disclosures: DisclosureItem[] = [
  {
    titleZh: "商家名称",
    titleEn: "Merchant",
    titleJa: "販売業者",
    zh: "林晶晶（リンジンジン）",
    en: "Jingjing Lin",
    ja: "林晶晶（リンジンジン）",
  },
  {
    titleZh: "运营负责人",
    titleEn: "Responsible person",
    titleJa: "運営責任者",
    zh: "林晶晶（リンジンジン）",
    en: "Jingjing Lin",
    ja: "林晶晶（リンジンジン）",
  },
  {
    titleZh: "所在地",
    titleEn: "Address",
    titleJa: "所在地",
    zh: "440-0072 爱知県豊橋市船町128-29 フィオーレ豊橋1302",
    en: "440-0072, 128-29 Funamachi, Toyohashi-shi, Aichi, Fiore Toyohashi 1302, Japan",
    ja: "〒440-0072 愛知県豊橋市船町128-29 フィオーレ豊橋1302",
  },
  {
    titleZh: "电话号码",
    titleEn: "Telephone",
    titleJa: "電話番号",
    zh: "080-2188-2547",
    en: "080-2188-2547",
    ja: "080-2188-2547",
  },
  {
    titleZh: "电子邮箱",
    titleEn: "Email",
    titleJa: "メールアドレス",
    zh: "sisyphuslynn@gmail.com",
    en: "sisyphuslynn@gmail.com",
    ja: "sisyphuslynn@gmail.com",
  },
  {
    titleZh: "销售价格",
    titleEn: "Price of sales",
    titleJa: "販売価格",
    zh: "各计划的购买页面上显示的金额（标价通常包含消费税）。",
    en: "The amount displayed on the purchase page for each plan (the listed price usually includes GST).",
    ja: "各プランの購入ページに表示される金額（表示価格には通常、消費税が含まれます）。",
  },
  {
    titleZh: "商品外费用",
    titleEn: "Other costs",
    titleJa: "商品代金以外の必要料金",
    zh: "互联网连接费用及其他通信费用由客户自行承担。",
    en: "Internet connection fees and other communication costs are the responsibility of the customer.",
    ja: "インターネット接続料およびその他の通信費はお客様のご負担となります。",
  },
  {
    titleZh: "支付方式",
    titleEn: "Payment method",
    titleJa: "支払方法",
    zh: "信用卡付款。",
    en: "Credit Card Payments.",
    ja: "クレジットカード決済。",
  },
  {
    titleZh: "支付时期",
    titleEn: "Period of payment",
    titleJa: "支払時期",
    zh: "按月/按年订阅：初次付款在申请时扣费。次月起在每月/每年的同一天自动扣费。按次付费：根据选择的具体服务，单次计费。",
    en: "Monthly/Yearly Subscription: Initial payment is deducted upon application. From the following month, automatic payments are made on the same day each month/year. Pay-per-Use: Billed per use based on the specific service selected.",
    ja: "月額・年額サブスクリプション：初回決済は申込時に行われます。翌月以降は毎月・毎年の同日に自動課金されます。都度課金：選択した具体的なサービスに応じて1回ごとに課金されます。",
  },
  {
    titleZh: "交付时间",
    titleEn: "Delivery of goods/services",
    titleJa: "商品の引渡時期",
    zh: "支付流程完成后，通过微信或者邮件和商家取得联系，安排服务时间。",
    en: "After the payment process is completed, contact the merchant via WeChat or email to arrange a service time.",
    ja: "決済完了後、WeChatまたはメールで販売事業者へご連絡いただき、サービス実施日時を調整します。",
  },
  {
    titleZh: "退换与取消",
    titleEn: "Return or cancellation of goods/services",
    titleJa: "返品・交換・キャンセル",
    zh: "由于提供的是数字内容/服务，支付完成后不支持退款。如果是订阅服务，客户可以随时在设置页面取消下一次续费。取消后，服务可继续使用至当前计费周期结束。",
    en: "Since this is digital content/service, refunds are not supported after payment. For subscription services, customers can cancel the next renewal at any time through the settings page. After cancellation, the service can continue to be used until the end of the current billing cycle.",
    ja: "本サービスはデジタルコンテンツ・サービスのため、決済完了後の返金には対応していません。サブスクリプションの場合、設定ページから次回更新をいつでも解約できます。解約後も、現在の課金期間終了まではサービスをご利用いただけます。",
  },
  {
    titleZh: "运行环境",
    titleEn: "Operating environment",
    titleJa: "動作環境",
    zh: "可以在主流浏览器（Chrome, Safari, Firefox, Edge）的最新版本上运行。",
    en: "It can run on the latest versions of major browsers (Chrome, Safari, Firefox, Edge).",
    ja: "主要ブラウザ（Chrome、Safari、Firefox、Edge）の最新バージョンで動作します。",
  },
];

export default function BusinessDisclosurePage() {
  const [locale, setLocale] = useState<Locale>("zh");

  const getTitle = (item: DisclosureItem) => {
    if (locale === "en") {
      return item.titleEn;
    }

    if (locale === "ja") {
      return item.titleJa;
    }

    return item.titleZh;
  };

  const getContent = (item: DisclosureItem) => {
    if (locale === "en") {
      return item.en;
    }

    if (locale === "ja") {
      return item.ja;
    }

    return item.zh;
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <header className="border-b border-slate-200 pb-5">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {pageTitleByLocale[locale]}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            商业披露 / Buisness Disclosure / 特定商取引法に基づく表記
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {localeLabels.map((option) => {
              const active = option.value === locale;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLocale(option.value)}
                  className={`rounded-full border px-3 py-1.5 font-design text-[11px] uppercase tracking-[0.1em] transition ${
                    active
                      ? "border-slate-800 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                  aria-pressed={active}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </header>

        <section className="mt-6 space-y-4">
          {disclosures.map((item) => (
            <article
              key={item.titleEn}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                {getTitle(item)}
              </h2>
              <div className="mt-3">
                <p className="mt-1 text-sm leading-relaxed text-slate-800">{getContent(item)}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
