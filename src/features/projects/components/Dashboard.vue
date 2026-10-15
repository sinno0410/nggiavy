<script setup lang="ts">
export interface Props {
  title?: string;
  text?: string;
  /** Panel heading, e.g. "TikTok analytics". */
  panel: string;
  /** Date range shown under the panel heading. */
  period?: string;
  kpis: { label: string; value: string; highlight?: boolean }[];
  /** Percent-based findings and what was done about them. */
  insights: { percent: number; label: string; action: string; /** Formatted percent, e.g. "18,8%". */ display?: string }[];
  insightsTitle?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-dash">
    <div v-if="props.title || props.text" class="project-dash-header">
      <h3 v-if="props.title" class="project-dash-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-dash-text" v-html="props.text"></p>
    </div>

    <div class="project-dash-panel">
      <div class="project-dash-top">
        <div>
          <p class="project-dash-panel-title">{{ props.panel }}</p>
          <p v-if="props.period" class="project-dash-period">{{ props.period }}</p>
        </div>
        <span class="project-dash-live"><span class="project-dash-dot"></span>Analytics</span>
      </div>

      <div class="project-dash-kpis">
        <div
          v-for="kpi in props.kpis"
          :key="kpi.label"
          :class="['project-dash-kpi', { 'project-dash-kpi-highlight': kpi.highlight }]"
        >
          <p class="project-dash-kpi-label">{{ kpi.label }}</p>
          <p class="project-dash-kpi-value">{{ kpi.value }}</p>
        </div>
      </div>

      <p v-if="props.insightsTitle" class="project-dash-subtitle">{{ props.insightsTitle }}</p>
      <div class="project-dash-insights">
        <div v-for="insight in props.insights" :key="insight.label" class="project-dash-insight">
          <div
            class="project-dash-ring"
            :style="{ '--percent': insight.percent }"
            role="img"
            :aria-label="`${insight.percent}% ${insight.label}`"
          >
            <span>{{ insight.display ?? `${insight.percent}%` }}</span>
          </div>
          <div class="project-dash-insight-body">
            <p class="project-dash-insight-label">{{ insight.label }}</p>
            <p class="project-dash-insight-action"><span aria-hidden="true">→</span> {{ insight.action }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-dash {
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

  &-text {
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-panel {
    border-radius: var(--radius-xl);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-300);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    box-shadow: 0 18px 40px -28px rgba(0, 0, 0, 0.35);

    @include mixins.mq("md") {
      padding: var(--space-lg);
    }
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  &-panel-title {
    font-size: var(--font-size-lg);
    font-weight: 900;
  }

  &-period {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    margin-top: 2px;
  }

  &-live {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 999px;
    background-color: var(--color-text-400);
    color: var(--color-background-300);
    font-size: var(--font-size-xs);
    font-weight: 700;
    white-space: nowrap;
  }

  &-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #25f4ee;
    box-shadow: 3px 0 0 #fe2c55;
    margin-right: 3px;
  }

  &-kpis {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-xs);

    @include mixins.mq("md") {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--space-sm);
    }
  }

  &-kpi {
    border-radius: var(--radius-md);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    padding: var(--space-sm);
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);

    &-label {
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-text-300);
    }

    &-value {
      font-size: clamp(22px, 2.6vw, 32px);
      font-weight: 900;
      line-height: 1.1;
    }

    &-highlight {
      border-color: var(--color-accent-400);
      background-color: var(--color-background-400);
    }
  }

  &-subtitle {
    font-size: var(--font-size-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-300);
    border-top: 1px dashed var(--color-grayscale-500);
    padding-top: var(--space-md);
  }

  &-insights {
    display: grid;
    gap: var(--space-sm);

    @include mixins.mq("lg") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-insight {
    display: flex;
    gap: var(--space-sm);
    align-items: center;
    padding: var(--space-sm);
    border-radius: var(--radius-lg);
    background-color: var(--color-background-400);

    &-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xxs);
      min-width: 0;
    }

    &-label {
      font-weight: 700;
      line-height: 1.3;
    }

    &-action {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
      color: var(--color-text-300);

      span {
        color: var(--color-accent-400);
        font-weight: 900;
      }
    }
  }

  &-ring {
    --size: 76px;
    flex: none;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(
      var(--color-accent-400) calc(var(--percent) * 1%),
      var(--color-grayscale-400) 0
    );
    position: relative;

    &::before {
      content: "";
      position: absolute;
      inset: 9px;
      border-radius: 50%;
      background-color: var(--color-background-400);
    }

    span {
      position: relative;
      font-size: 17px;
      font-weight: 900;
    }
  }
}
</style>
