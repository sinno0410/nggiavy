import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    // ?lang=vi / ?lang=en (used by hreflang links) wins over the stored preference
    const urlLocale = new URLSearchParams(window.location.search).get("lang");
    const storedLocale = window.localStorage.getItem("portfolio-locale");
    const initial = urlLocale && urlLocale in LOCALES ? urlLocale : storedLocale;
    locale.value = initial && initial in LOCALES ? (initial as Locale) : null;
    if (!locale.value) {
      const preferredLocale = navigator.language.split("-")[0] as Locale;

      if (preferredLocale in LOCALES) {
        locale.value = preferredLocale;
      } else {
        locale.value = "en";
      }
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
    document.documentElement.lang = locale.value;
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
