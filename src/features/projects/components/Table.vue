<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";

export interface Props {
  title?: string;
  text?: string;
  columns: string[];
  /** Cell content may contain simple HTML (<b>, <br/>). */
  rows: string[][];
  /** Link to the original Google Sheet. */
  source?: string;
  /** Minimum table width in px before horizontal scrolling kicks in. */
  minWidth?: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-table">
    <div v-if="props.title || props.text" class="project-table-header">
      <h3 v-if="props.title" class="project-table-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-table-text" v-html="props.text"></p>
    </div>
    <div class="project-table-scroll" data-lenis-prevent-horizontal tabindex="0" :aria-label="props.title">
      <table :style="{ minWidth: `${props.minWidth ?? 720}px` }">
        <thead>
          <tr>
            <th v-for="column in props.columns" :key="column" scope="col">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in props.rows" :key="rowIndex">
            <template v-for="(cell, cellIndex) in row" :key="cellIndex">
              <th v-if="cellIndex === 0" scope="row" v-html="cell"></th>
              <td v-else v-html="cell"></td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <a
      v-if="props.source"
      :href="props.source"
      target="_blank"
      rel="noopener"
      class="project-table-source"
      data-cursor="arrow-external"
      data-hoversound="hover"
      >{{ t("view-source-file") }} ↗</a
    >
  </div>
</template>

<style scoped lang="scss">
.project-table {
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

  &-scroll {
    overflow-x: auto;
    border-radius: var(--radius-lg);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-400);
    -webkit-overflow-scrolling: touch;

    &:focus-visible {
      outline: var(--stroke-md) solid var(--color-accent-400);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--font-size-sm);
    line-height: 1.55;

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }
  }

  th,
  td {
    padding: var(--space-sm) var(--space-md);
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid var(--color-grayscale-400);
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: var(--color-accent-400);
    color: var(--color-accent-text-400);
    font-weight: 700;
    white-space: nowrap;
  }

  tbody th {
    font-weight: 700;
    min-width: 120px;
  }

  tbody tr:last-child th,
  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:nth-child(even) {
    background-color: var(--color-background-300);
  }

  &-source {
    width: fit-content;
    font-weight: 700;
    color: var(--color-accent-400);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}
</style>
