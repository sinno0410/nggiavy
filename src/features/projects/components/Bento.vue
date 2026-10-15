<script setup lang="ts">
export interface BentoTile {
  /** Big number or short headline. */
  value?: string;
  label?: string;
  /** Photo tile (fills the tile). */
  image?: string;
  /** Small label on top of a photo tile. */
  tag?: string;
  /** wide = 2 columns, tall = 2 rows, big = 2×2. */
  span?: "wide" | "tall" | "big";
  tone?: "accent" | "dark" | "light" | "soft";
}

export interface Props {
  title?: string;
  text?: string;
  tiles: BentoTile[];
  note?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-bento">
    <div v-if="props.title || props.text" class="project-bento-header">
      <h3 v-if="props.title" class="project-bento-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-bento-text" v-html="props.text"></p>
    </div>

    <div class="project-bento-grid">
      <div
        v-for="(tile, index) in props.tiles"
        :key="index"
        :class="[
          'project-bento-tile',
          tile.span && `project-bento-tile-${tile.span}`,
          `project-bento-tile-${tile.image ? 'image' : (tile.tone ?? 'light')}`,
        ]"
      >
        <template v-if="tile.image">
          <img :src="tile.image" :alt="tile.tag ?? ''" loading="lazy" decoding="async" />
          <span v-if="tile.tag" class="project-bento-tag">{{ tile.tag }}</span>
        </template>
        <template v-else>
          <p class="project-bento-value">{{ tile.value }}</p>
          <p v-if="tile.label" class="project-bento-label" v-html="tile.label"></p>
        </template>
      </div>
    </div>

    <p v-if="props.note" class="project-bento-note" v-html="props.note"></p>
  </div>
</template>

<style scoped lang="scss">
.project-bento {
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

  &-note {
    font-size: var(--font-size-sm);
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 150px;
    grid-auto-flow: dense;
    gap: var(--space-xs);

    @include mixins.mq("md") {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-auto-rows: 170px;
      gap: var(--space-sm);
    }

    @include mixins.mq("xl") {
      grid-auto-rows: 190px;
    }
  }

  &-tile {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-xl);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: var(--space-xxs);

    &-wide {
      grid-column: span 2;
    }

    &-tall {
      grid-row: span 2;
    }

    &-big {
      grid-column: span 2;
      grid-row: span 2;
    }

    &-light {
      background-color: var(--color-background-400);
      border: var(--stroke-md) solid var(--color-grayscale-400);
      color: var(--color-text-400);
    }

    &-soft {
      background-color: var(--color-grayscale-400);
      color: var(--color-text-400);
    }

    &-accent {
      background-color: var(--color-accent-400);
      color: var(--color-accent-text-400);
    }

    &-dark {
      background-color: var(--color-text-400);
      color: var(--color-background-300);
    }

    &-image {
      padding: 0;

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      @include mixins.hover {
        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }

  &-value {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .project-bento-tile-big .project-bento-value {
    font-size: clamp(48px, 8vw, 104px);
  }

  &-label {
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1.3;
    opacity: 0.85;
  }

  &-tag {
    position: absolute;
    left: var(--space-sm);
    bottom: var(--space-sm);
    padding: 4px 10px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1d1d1d;
    font-size: var(--font-size-xs);
    font-weight: 700;
  }
}
</style>
