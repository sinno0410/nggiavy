<script setup lang="ts">
/** Friendly 404 shown for any URL that is neither the home page nor a known project. */
import { computed, onMounted, onBeforeUnmount } from "vue";
import seo from "../content/seo.json";
import { locale } from "../i18n/store";

type SeoEntry = { title: string; description: string };
const pages = seo.pages as Record<string, Record<"vi" | "en", SeoEntry>>;

const lang = computed(() => (locale.value === "en" ? "en" : "vi"));

const copy = computed(() =>
  lang.value === "en"
    ? {
        title: "This page doesn't exist",
        text: "The link may have a typo, or the page has moved.",
        home: "Back to home",
        projects: "Or jump to a project",
      }
    : {
        title: "Trang này không tồn tại",
        text: "Có thể đường dẫn bị gõ sai, hoặc trang đã được chuyển đi.",
        home: "Về trang chủ",
        projects: "Hoặc xem một dự án",
      },
);

const projects = computed(() =>
  Object.entries(pages)
    .filter(([path]) => path !== "/")
    .map(([path, meta]) => ({ path, title: meta[lang.value].title.split(" | ")[0]!.split(" – ")[0]! })),
);

let robots: HTMLMetaElement | null = null;
onMounted(() => {
  robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex";
  document.head.appendChild(robots);
  document.body.classList.remove("is-loading");
});
onBeforeUnmount(() => robots?.remove());
</script>

<template>
  <main class="not-found">
    <div class="not-found-inner">
      <p class="not-found-code" aria-hidden="true">4<span>0</span>4</p>
      <h1 class="not-found-title">{{ copy.title }}</h1>
      <p class="not-found-text">{{ copy.text }}</p>
      <a href="/" class="not-found-home">{{ copy.home }} →</a>
      <p class="not-found-label">{{ copy.projects }}</p>
      <ul class="not-found-list">
        <li v-for="project in projects" :key="project.path">
          <a :href="project.path">{{ project.title }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
.not-found {
  position: fixed;
  inset: 0;
  z-index: 10000;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-outer, 24px);
  background-color: var(--color-beige-400, #f5efe6);
  color: var(--color-black-400, #141414);
  font-family: inherit;

  &-inner {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  &-code {
    font-size: clamp(96px, 22vw, 180px);
    font-weight: 900;
    line-height: 0.9;
    letter-spacing: -0.04em;

    span {
      display: inline-block;
      color: var(--color-orange-400, #ff8400);
      transform: rotate(-12deg);
    }
  }

  &-title {
    font-size: clamp(26px, 5vw, 40px);
    font-weight: 900;
    line-height: 1.1;
  }

  &-text {
    font-size: 17px;
    line-height: 1.5;
    opacity: 0.75;
  }

  &-home {
    margin-top: 8px;
    padding: 14px 24px;
    border-radius: 999px;
    background-color: var(--color-orange-400, #ff8400);
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }

  &-label {
    margin-top: 18px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
      display: inline-block;
      padding: 8px 14px;
      border-radius: 999px;
      border: 2px solid var(--color-beige-700, #dfd1bc);
      color: inherit;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        border-color: var(--color-orange-400, #ff8400);
      }
    }
  }
}
</style>
