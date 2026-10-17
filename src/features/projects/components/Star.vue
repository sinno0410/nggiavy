<script setup lang="ts">
/** "At a glance" STAR summary (Situation · Task · Action · Result) shown at the top of a project page. */
import { computed } from "vue";
import { locale } from "../../../i18n/store";
import type { StarSummary } from "../../../content/projects/star";

const props = defineProps<{ summary: StarSummary }>();

const copy = computed(() =>
  locale.value === "en"
    ? {
        title: "At a glance",
        steps: { situation: "Situation", task: "Task", action: "Action", result: "Result" },
      }
    : {
        title: "Tóm tắt nhanh",
        steps: { situation: "Bối cảnh", task: "Nhiệm vụ", action: "Hành động", result: "Kết quả" },
      },
);

const cards = computed(() => [
  { key: "situation", letter: "S", text: props.summary.situation },
  { key: "task", letter: "T", text: props.summary.task },
  { key: "action", letter: "A", text: props.summary.action },
] as const);
</script>

<template>
  <section class="star" :aria-label="copy.title">
    <header class="star-header">
      <h2 class="star-title">{{ copy.title }}</h2>
      <span class="star-badge" aria-hidden="true">STAR</span>
    </header>
    <div class="star-grid">
      <article v-for="card in cards" :key="card.key" class="star-card">
        <span class="star-letter" aria-hidden="true">{{ card.letter }}</span>
        <p class="star-label">{{ copy.steps[card.key] }}</p>
        <p class="star-text" v-html="card.text"></p>
      </article>
      <article class="star-card star-card-result">
        <span class="star-letter" aria-hidden="true">R</span>
        <p class="star-label">{{ copy.steps.result }}</p>
        <div class="star-metrics">
          <div v-for="metric in props.summary.metrics" :key="metric.label" class="star-metric">
            <span class="star-metric-value">{{ metric.value }}</span>
            <span class="star-metric-label">{{ metric.label }}</span>
          </div>
        </div>
        <p class="star-text" v-html="props.summary.result"></p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.star {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  min-width: 0;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  &-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
  }

  &-badge {
    padding: 4px 10px;
    border-radius: 999px;
    background-color: var(--color-accent-400);
    color: var(--color-accent-text-400, #fff);
    font-size: var(--font-size-xs);
    font-weight: 900;
    letter-spacing: 0.14em;
    transform: rotate(-3deg);
  }

  &-grid {
    display: grid;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-card {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    background-color: var(--color-background-400);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    min-width: 0;

    &-result {
      background-color: var(--color-accent-400);
      border-color: var(--color-accent-400);
      color: var(--color-accent-text-400, #fff);

      @include mixins.mq("md") {
        grid-column: 1 / -1;
      }
    }
  }

  &-letter {
    position: absolute;
    top: -14px;
    right: 6px;
    font-size: 96px;
    font-weight: 900;
    line-height: 1;
    color: var(--color-accent-400);
    opacity: 0.14;
    pointer-events: none;
  }

  .star-card-result .star-letter {
    color: currentColor;
    opacity: 0.18;
  }

  &-label {
    font-size: var(--font-size-xs);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-400);
  }

  .star-card-result .star-label {
    color: inherit;
    opacity: 0.85;
  }

  &-text {
    position: relative;
    line-height: var(--line-height-copy);
    font-size: var(--font-size-sm);

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }
  }

  &-metrics {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-sm) var(--space-md);
    padding: var(--space-xs) 0;
  }

  &-metric {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &-value {
      font-size: clamp(28px, 3.4vw, 44px);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.01em;
    }

    &-label {
      font-size: var(--font-size-sm);
      font-weight: 700;
      opacity: 0.9;
    }
  }
}
</style>
