<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

const props = defineProps<{
  variant?: "border" | "theme";
  size?: "sm" | "md";
  isDarkTheme?: boolean;
}>();

const handleLangSwitch = () => {
  changeLocale(locale.value === "vi" ? "en" : "vi");
};
</script>

<template>
  <Button
    :variant="props.variant ?? 'border'"
    :size="props.size ?? 'sm'"
    :class="{ 'lang-switch-dark': props.isDarkTheme }"
    :aria-label="locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale === "vi" ? "EN" : "VI" }}</Button
  >
</template>

<style scoped lang="scss">
.lang-switch-dark {
  background-color: var(--color-dark-blue-500);
  color: var(--color-white-400);
  --icon-color: var(--color-white-400);
}
</style>
