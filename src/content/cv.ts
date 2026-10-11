import type { Locale } from "../i18n/types";

// Link CV theo ngôn ngữ đang xem
export const cvLinks = {
  en: "https://www.canva.com/design/DAGjqPOxnJA/1EjTJOH3gsmZpI0kN1hbKw/view?utm_content=DAGjqPOxnJA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68a2607118",
  vi: "https://www.canva.com/design/DAGjqGE5-5U/DWDv1iuI-q_JUVcvmpc-_A/view?utm_content=DAGjqGE5-5U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h34915e815d",
} as const satisfies Record<Locale, string>;
