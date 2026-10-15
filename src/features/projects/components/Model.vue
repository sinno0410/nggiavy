<script setup lang="ts">
/** A left-to-right research model (e.g. S-O-R) with highlighted significant factors. */
export interface ModelStage {
  /** Short letter/code, e.g. "S". */
  code: string;
  title: string;
  subtitle?: string;
  items: { label: string; highlight?: boolean }[];
}

export interface Props {
  title?: string;
  text?: string;
  stages: ModelStage[];
  /** Legend text for highlighted items. */
  legend?: string;
  note?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-model">
    <div v-if="props.title || props.text" class="project-model-header">
      <h3 v-if="props.title" class="project-model-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-model-text" v-html="props.text"></p>
    </div>

    <div class="project-model-flow">
      <template v-for="(stage, index) in props.stages" :key="stage.code">
        <section class="project-model-stage">
          <div class="project-model-stage-head">
            <span class="project-model-code">{{ stage.code }}</span>
            <div>
              <h4 class="project-model-stage-title">{{ stage.title }}</h4>
              <p v-if="stage.subtitle" class="project-model-stage-subtitle">{{ stage.subtitle }}</p>
            </div>
          </div>
          <ul class="project-model-items">
            <li
              v-for="item in stage.items"
              :key="item.label"
              :class="['project-model-item', { 'project-model-item-highlight': item.highlight }]"
            >
              <span v-if="item.highlight" class="project-model-check" aria-hidden="true">✓</span>{{ item.label }}
            </li>
          </ul>
        </section>
        <div v-if="index < props.stages.length - 1" class="project-model-arrow" aria-hidden="true">
          <svg viewBox="0 0 48 24"><path d="M2 12h40M32 3l10 9-10 9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </div>
      </template>
    </div>

    <p v-if="props.legend" class="project-model-legend">
      <span class="project-model-item project-model-item-highlight project-model-legend-chip"><span class="project-model-check">✓</span></span>
      {{ props.legend }}
    </p>
    <p v-if="props.note" class="project-model-note" v-html="props.note"></p>
  </div>
</template>

<style scoped lang="scss">
.project-model {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
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

  &-text,
  &-note {
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-flow {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-xs);

    @include mixins.mq("lg") {
      flex-direction: row;
      align-items: center;
    }
  }

  &-stage {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-md);
    border-radius: var(--radius-xl);
    background-color: var(--color-background-400);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    align-self: stretch;

    &:first-child {
      flex: 1.3;
    }

    &-head {
      display: flex;
      gap: var(--space-sm);
      align-items: center;
    }

    &-title {
      font-size: var(--font-size-lg);
      font-weight: 900;
      line-height: 1.2;
    }

    &-subtitle {
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-text-300);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  }

  &-code {
    flex: none;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background-color: var(--color-accent-400);
    color: var(--color-accent-text-400);
    font-size: 22px;
    font-weight: 900;
  }

  &-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  &-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 999px;
    background-color: var(--color-background-300);
    border: var(--stroke-md) solid var(--color-grayscale-500);
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1.2;
    color: var(--color-text-300);

    &-highlight {
      background-color: var(--color-accent-400);
      border-color: var(--color-accent-400);
      color: var(--color-accent-text-400);
    }
  }

  &-check {
    font-weight: 900;
  }

  &-arrow {
    flex: none;
    align-self: center;
    width: 40px;
    color: var(--color-accent-400);
    transform: rotate(90deg);

    @include mixins.mq("lg") {
      transform: none;
    }

    svg {
      display: block;
      width: 100%;
    }
  }

  &-legend {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-300);

    &-chip {
      padding: 2px 8px;
    }
  }
}
</style>
