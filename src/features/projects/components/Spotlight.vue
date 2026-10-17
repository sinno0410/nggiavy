<script setup lang="ts">
/**
 * A bold "big idea" block: product truths → consumer insight → tagline, plus the author's role.
 * Uses the project accent colours (--color-accent-400 and --color-accent-2) and asterisk decor.
 */
export interface Props {
  title?: string;
  strengthsTitle?: string;
  strengths?: string[];
  insightTitle?: string;
  insight: string;
  taglineTitle?: string;
  tagline: string;
  role?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="spot">
    <h3 v-if="props.title" class="spot-title">{{ props.title }}</h3>
    <div class="spot-grid">
      <div v-if="props.strengths?.length" class="spot-card spot-card-strengths">
        <p class="spot-label">{{ props.strengthsTitle }}</p>
        <ul class="spot-list">
          <li v-for="item in props.strengths" :key="item"><span class="spot-star" aria-hidden="true">✱</span>{{ item }}</li>
        </ul>
      </div>
      <div class="spot-card spot-card-insight">
        <p class="spot-label">{{ props.insightTitle }}</p>
        <p class="spot-quote">“{{ props.insight }}”</p>
      </div>
      <div class="spot-card spot-card-tagline">
        <svg class="spot-burst" viewBox="0 0 100 100" aria-hidden="true">
          <path
            d="M50 2 L56 36 L84 16 L64 44 L98 50 L64 56 L84 84 L56 64 L50 98 L44 64 L16 84 L36 56 L2 50 L36 44 L16 16 L44 36 Z"
          />
        </svg>
        <p class="spot-label">{{ props.taglineTitle }}</p>
        <p class="spot-tagline">{{ props.tagline }}</p>
        <p v-if="props.role" class="spot-role" v-html="props.role"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spot {
  --spot-a: var(--color-accent-400);
  --spot-b: var(--color-accent-2, var(--color-text-400));

  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  min-width: 0;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
  }

  &-grid {
    display: grid;
    gap: var(--space-sm);

    @include mixins.mq("lg") {
      grid-template-columns: 1fr 1.2fr;
      grid-template-rows: auto auto;
    }
  }

  &-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-xl);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-strengths {
      background-color: var(--color-background-400);
      border: var(--stroke-md) solid var(--color-grayscale-400);

      @include mixins.mq("lg") {
        grid-row: 1 / span 2;
      }
    }

    &-insight {
      background-color: var(--spot-b);
      color: #fff;
    }

    &-tagline {
      background-color: var(--spot-a);
      color: #fff;
      min-height: 220px;
      justify-content: flex-end;
    }
  }

  &-label {
    font-size: var(--font-size-xs);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  .spot-card-strengths .spot-label {
    color: var(--spot-a);
    opacity: 1;
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    li {
      display: flex;
      gap: var(--space-xs);
      font-weight: 700;
      line-height: 1.4;
    }
  }

  &-star {
    color: var(--spot-a);
    font-size: 1.1em;
    line-height: 1.25;
  }

  &-quote {
    font-size: clamp(16px, 1.6vw, 20px);
    line-height: 1.55;
    font-style: italic;
  }

  &-tagline {
    position: relative;
    font-size: clamp(30px, 4.4vw, 54px);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    max-width: 14ch;
  }

  &-role {
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 1.5;
    padding-top: var(--space-xs);
    border-top: 1px solid rgba(255, 255, 255, 0.35);
  }

  &-burst {
    position: absolute;
    top: -26px;
    right: -26px;
    width: 150px;
    fill: var(--spot-b);
    opacity: 0.9;
    animation: spot-spin 18s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
}

@keyframes spot-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
