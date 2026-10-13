<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";

export interface CalendarEvent {
  day: number;
  label: string;
  /** Key from `legend`; events without a matching key use the neutral style. */
  tag?: string;
  href?: string;
}

export interface Props {
  title?: string;
  text?: string;
  /** Monday-first weekday labels. */
  weekdays: string[];
  legend: { key: string; label: string; color: string }[];
  months: { label: string; year: number; month: number; events: CalendarEvent[] }[];
}

const props = defineProps<Props>();

const colorOf = (tag?: string) => props.legend.find((item) => item.key === tag)?.color;

/** Cells for a month grid, Monday first; `null` = empty cell before day 1. */
const cellsOf = (year: number, month: number) => {
  const first = new Date(year, month - 1, 1).getDay(); // 0 = Sunday
  const offset = (first + 6) % 7;
  const days = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);
  return cells;
};

const eventsOn = (events: CalendarEvent[], day: number | null) =>
  day === null ? [] : events.filter((event) => event.day === day);
</script>

<template>
  <div class="project-calendar">
    <div v-if="props.title || props.text" class="project-calendar-header">
      <h3 v-if="props.title" class="project-calendar-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-calendar-text" v-html="props.text"></p>
    </div>

    <ul class="project-calendar-legend">
      <li v-for="item in props.legend" :key="item.key">
        <span class="project-calendar-swatch" :style="{ backgroundColor: item.color }"></span>{{ item.label }}
      </li>
    </ul>

    <p class="project-calendar-hint">{{ t("swipe-table") }}</p>
    <div class="project-calendar-scroll" data-lenis-prevent-horizontal tabindex="0" :aria-label="props.title">
      <div class="project-calendar-months">
        <section v-for="month in props.months" :key="`${month.year}-${month.month}`" class="project-calendar-month">
          <h4 class="project-calendar-month-title">{{ month.label }}</h4>
          <div class="project-calendar-grid">
            <div v-for="weekday in props.weekdays" :key="weekday" class="project-calendar-weekday">{{ weekday }}</div>
            <div
              v-for="(day, index) in cellsOf(month.year, month.month)"
              :key="index"
              :class="['project-calendar-cell', { 'project-calendar-cell-empty': day === null }]"
            >
              <span v-if="day !== null" class="project-calendar-day">{{ day }}</span>
              <template v-for="(event, eventIndex) in eventsOn(month.events, day)" :key="eventIndex">
                <a
                  v-if="event.href"
                  :href="event.href"
                  target="_blank"
                  rel="noopener"
                  class="project-calendar-event project-calendar-event-link"
                  :style="{ backgroundColor: colorOf(event.tag) }"
                  data-cursor="arrow-external"
                  >{{ event.label }} ↗</a
                >
                <span
                  v-else
                  :class="['project-calendar-event', { 'project-calendar-event-neutral': !colorOf(event.tag) }]"
                  :style="{ backgroundColor: colorOf(event.tag) }"
                  >{{ event.label }}</span
                >
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-calendar {
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

  &-legend {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs) var(--space-md);
    list-style: none;
    padding: 0;
    font-size: var(--font-size-sm);
    font-weight: 700;

    li {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }
  }

  &-swatch {
    width: 14px;
    height: 14px;
    border-radius: 4px;
  }

  &-hint {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    margin-bottom: calc(var(--space-xs) * -1);

    @include mixins.mq("lg") {
      display: none;
    }
  }

  &-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  &-months {
    display: grid;
    gap: var(--space-lg);
    min-width: 680px;

    @include mixins.mq("xl") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      min-width: 0;
    }
  }

  &-month {
    border-radius: var(--radius-lg);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-400);
    overflow: hidden;

    &-title {
      padding: var(--space-sm) var(--space-md);
      background-color: var(--color-accent-400);
      color: var(--color-accent-text-400);
      font-size: var(--font-size-lg);
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  &-weekday {
    padding: var(--space-xs);
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-align: center;
    color: var(--color-text-300);
    border-bottom: 1px solid var(--color-grayscale-400);
  }

  &-cell {
    min-height: 78px;
    padding: var(--space-xxs);
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    border-right: 1px solid var(--color-grayscale-400);
    border-bottom: 1px solid var(--color-grayscale-400);
    background-color: var(--color-background-300);

    &:nth-child(7n) {
      border-right: none;
    }

    &-empty {
      background-color: transparent;
    }
  }

  &-day {
    font-size: var(--font-size-xs);
    font-weight: 700;
    color: var(--color-text-300);
  }

  &-event {
    display: block;
    padding: 3px 5px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.3;
    color: #1d1d1d;
    text-decoration: none;
    word-break: break-word;

    &-neutral {
      background-color: transparent;
      border: 1px dashed var(--color-grayscale-500);
      color: var(--color-text-300);
    }

    &-link {
      @include mixins.hover {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
