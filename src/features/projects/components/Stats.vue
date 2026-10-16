<script setup lang="ts">
export interface Props {
  title?: string;
  items: { value: string; label: string }[];
  /** Small print under the numbers, e.g. the data source. */
  note?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-stats">
    <h3 v-if="props.title" class="project-stats-title">{{ props.title }}</h3>
    <div class="project-stats-grid">
      <div v-for="item in props.items" :key="item.label" class="project-stats-item">
        <p class="project-stats-value">{{ item.value }}</p>
        <p class="project-stats-label">{{ item.label }}</p>
      </div>
    </div>
    <p v-if="props.note" class="project-stats-note" v-html="props.note"></p>
  </div>
</template>

<style scoped lang="scss">
.project-stats {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  @include mixins.mq("lg") {
    grid-column: 2 / 12;
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
  }

  &-grid {
    display: grid;
    gap: var(--space-sm);
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @include mixins.mq("md") {
      gap: var(--space-md);
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    background-color: var(--color-accent-400);
    color: var(--color-accent-text-400);
  }

  &-value {
    font-size: var(--font-size-title-sm);
    font-weight: 900;
    line-height: 1.1;

    @include mixins.mq("md") {
      font-size: var(--font-size-title-md);
    }
  }

  &-label {
    font-size: var(--font-size-sm);
    font-weight: 700;
    opacity: 0.9;
  }

  &-note {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
  }
}
</style>
