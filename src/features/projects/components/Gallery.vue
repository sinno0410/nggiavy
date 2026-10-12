<script setup lang="ts">
export interface Props {
  title?: string;
  text?: string;
  /** `src` is the image (or the poster when `video` is set). */
  images: { src: string; caption?: string; video?: string }[];
  /** Columns on desktop (2 on mobile). */
  columns?: 2 | 3 | 4;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-gallery">
    <div v-if="props.title || props.text" class="project-gallery-header">
      <h3 v-if="props.title" class="project-gallery-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-gallery-text" v-html="props.text"></p>
    </div>
    <div class="project-gallery-grid" :style="{ '--gallery-columns': props.columns ?? 3 }">
      <template v-for="(image, index) in props.images" :key="index">
        <div v-if="image.video" class="project-gallery-item project-gallery-item-video">
          <video
            :src="image.video"
            :poster="image.src"
            controls
            playsinline
            muted
            loop
            preload="none"
            :aria-label="image.caption"
          ></video>
          <span v-if="image.caption" class="project-gallery-caption">{{ image.caption }}</span>
        </div>
        <a
          v-else
          :href="image.src"
          target="_blank"
          rel="noopener"
          class="project-gallery-item"
          data-cursor="arrow-external"
        >
          <img :src="image.src" :alt="image.caption ?? ''" loading="lazy" decoding="async" />
          <span v-if="image.caption" class="project-gallery-caption">{{ image.caption }}</span>
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-gallery {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

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

  &-grid {
    columns: 2;
    column-gap: var(--space-sm);

    @include mixins.mq("md") {
      columns: var(--gallery-columns);
      column-gap: var(--space-md);
    }
  }

  &-item {
    display: block;
    break-inside: avoid;
    margin-bottom: var(--space-sm);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--color-background-400);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    color: inherit;
    text-decoration: none;

    @include mixins.mq("md") {
      margin-bottom: var(--space-md);
    }

    img,
    video {
      display: block;
      width: 100%;
      height: auto;
      transition: transform 0.4s ease;
    }

    video {
      aspect-ratio: 9 / 16;
      object-fit: cover;
      background-color: #000;
    }

    @include mixins.hover {
      &:hover img {
        transform: scale(1.03);
      }
    }
  }

  &-caption {
    display: block;
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1.4;
  }
}
</style>
