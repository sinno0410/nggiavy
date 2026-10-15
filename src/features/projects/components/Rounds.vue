<script setup lang="ts">
export interface Round {
  /** Short label above the title, e.g. "Round 1". */
  label: string;
  title: string;
  subtitle?: string;
  text: string;
  link?: { label: string; href: string };
  /** Accent-filled card for the final outcome. */
  highlight?: boolean;
}

export interface Props {
  title?: string;
  text?: string;
  rounds: Round[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-rounds">
    <div v-if="props.title || props.text" class="project-rounds-header">
      <h3 v-if="props.title" class="project-rounds-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-rounds-text" v-html="props.text"></p>
    </div>

    <ol
      :class="['project-rounds-list', { 'project-rounds-list-wrap': props.rounds.length > 4 }]"
      :style="{ '--rounds-count': props.rounds.length > 4 ? 3 : props.rounds.length }"
    >
      <li
        v-for="(round, index) in props.rounds"
        :key="index"
        :class="['project-rounds-item', { 'project-rounds-item-highlight': round.highlight }]"
      >
        <span class="project-rounds-dot" aria-hidden="true">{{ index + 1 }}</span>
        <div class="project-rounds-card">
          <p class="project-rounds-label">{{ round.label }}</p>
          <h4 class="project-rounds-name">{{ round.title }}</h4>
          <p v-if="round.subtitle" class="project-rounds-subtitle">{{ round.subtitle }}</p>
          <p class="project-rounds-body" v-html="round.text"></p>
          <a
            v-if="round.link"
            :href="round.link.href"
            target="_blank"
            rel="noopener"
            class="project-rounds-link"
            data-cursor="arrow-external"
            >{{ round.link.label }} ↗</a
          >
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.project-rounds {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  min-width: 0;

  @include mixins.mq("lg") {
    grid-column: 2 / 12;
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    max-width: 760px;
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
  }

  &-text {
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--space-md);
    position: relative;

    @include mixins.mq("lg") {
      grid-template-columns: repeat(var(--rounds-count, 4), minmax(0, 1fr));
    }
  }

  .project-rounds-list-wrap .project-rounds-item:nth-child(3n)::before {
    @include mixins.mq("lg") {
      display: none;
    }
  }

  &-item {
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: var(--space-sm);

    // connector line (vertical on mobile, horizontal on desktop)
    &:not(:last-child)::before {
      content: "";
      position: absolute;
      left: 19px;
      top: 40px;
      bottom: calc(var(--space-md) * -1);
      width: 2px;
      background-color: var(--color-grayscale-500);
    }

    @include mixins.mq("lg") {
      grid-template-columns: 1fr;
      grid-template-rows: 40px 1fr;

      &:not(:last-child)::before {
        left: 40px;
        right: calc(var(--space-md) * -1);
        top: 19px;
        bottom: auto;
        width: auto;
        height: 2px;
      }
    }
  }

  &-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 900;
    background-color: var(--color-background-300);
    border: 2px solid var(--color-accent-400);
    color: var(--color-accent-400);
    position: relative;
    z-index: 1;
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-300);
    height: 100%;
  }

  &-label {
    font-size: var(--font-size-xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-accent-400);
  }

  &-name {
    font-size: var(--font-size-lg);
    font-weight: 900;
    line-height: 1.2;
  }

  &-subtitle {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-300);
  }

  &-body {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-link {
    margin-top: auto;
    padding-top: var(--space-xs);
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-accent-400);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &-item-highlight {
    .project-rounds-dot {
      background-color: var(--color-accent-400);
      color: var(--color-accent-text-400);
    }

    .project-rounds-card {
      background-color: var(--color-accent-400);
      border-color: var(--color-accent-400);
    }

    .project-rounds-label,
    .project-rounds-name,
    .project-rounds-subtitle,
    .project-rounds-body,
    .project-rounds-link {
      color: var(--color-accent-text-400);
    }
  }
}
</style>
