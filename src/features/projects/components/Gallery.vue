<script setup lang="ts">
export interface Props {
  title?: string;
  text?: string;
  /** `src` is the image (or the poster when `video` is set); `href` overrides where an image links to. */
  images: { src: string; caption?: string; video?: string; href?: string }[];
  /** Columns on desktop (2 on mobile unless `mobileColumns` is set). */
  columns?: 2 | 3 | 4 | 5 | 6 | 9;
  mobileColumns?: 2 | 3;
  /** Crop every image to the same ratio (e.g. "3 / 4") and lay them out on an even grid instead of masonry. */
  aspect?: string;
  /** Where to anchor the crop, e.g. "top". */
  focus?: string;
  /**
   * Layout style: "masonry" (default), "collage" (tilted polaroids on an asymmetric grid with sticker captions)
   * or "marquee" (an endless, auto-scrolling strip that pauses on hover).
   */
  variant?: "masonry" | "collage" | "marquee";
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-gallery">
    <div v-if="props.title || props.text" class="project-gallery-header">
      <h3 v-if="props.title" class="project-gallery-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-gallery-text" v-html="props.text"></p>
    </div>
    <div v-if="props.variant === 'marquee'" class="project-gallery-marquee" data-lenis-prevent-horizontal>
      <div class="project-gallery-marquee-track" :style="{ '--marquee-duration': `${props.images.length * 6}s` }">
        <a
          v-for="(image, index) in [...props.images, ...props.images]"
          :key="index"
          :href="image.href ?? image.src"
          target="_blank"
          rel="noopener"
          class="project-gallery-sticker"
          :aria-hidden="index >= props.images.length ? 'true' : undefined"
          :tabindex="index >= props.images.length ? -1 : undefined"
          data-cursor="arrow-external"
        >
          <img :src="image.src" :alt="image.caption ?? ''" loading="lazy" decoding="async" />
          <span v-if="image.caption" class="project-gallery-tag">{{ image.caption }}</span>
        </a>
      </div>
    </div>
    <div
      v-else-if="props.variant === 'collage'"
      :class="['project-gallery-collage', { 'project-gallery-collage-reels': props.images.every((image) => !!image.video) }]"
    >
      <template v-for="(image, index) in props.images" :key="index">
        <div v-if="image.video" class="project-gallery-sticker project-gallery-sticker-video">
          <video :src="image.video" :poster="image.src" controls playsinline preload="none" :aria-label="image.caption"></video>
          <span v-if="image.caption" class="project-gallery-tag">{{ image.caption }}</span>
        </div>
        <a
          v-else
          :href="image.href ?? image.src"
          target="_blank"
          rel="noopener"
          class="project-gallery-sticker"
          data-cursor="arrow-external"
        >
          <img :src="image.src" :alt="image.caption ?? ''" loading="lazy" decoding="async" />
          <span v-if="image.caption" class="project-gallery-tag">{{ image.caption }}</span>
        </a>
      </template>
    </div>
    <div
      v-else
      :class="['project-gallery-grid', { 'project-gallery-grid-uniform': !!props.aspect }]"
      :style="{
        '--gallery-columns': props.columns ?? 3,
        '--gallery-mobile-columns': props.mobileColumns ?? 2,
        '--gallery-aspect': props.aspect,
        '--gallery-focus': props.focus ?? 'center',
      }"
    >
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
          :href="image.href ?? image.src"
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

  &-grid-uniform {
    columns: auto;
    display: grid;
    grid-template-columns: repeat(var(--gallery-mobile-columns), minmax(0, 1fr));
    gap: var(--space-xs);

    @include mixins.mq("md") {
      columns: auto;
      grid-template-columns: repeat(var(--gallery-columns), minmax(0, 1fr));
      gap: var(--space-sm);
    }

    .project-gallery-item {
      margin-bottom: 0;
      border-radius: var(--radius-md);
    }

    .project-gallery-item img {
      aspect-ratio: var(--gallery-aspect);
      object-fit: cover;
      object-position: var(--gallery-focus);
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

/* ---------- GenZ variants: collage & marquee ---------- */
.project-gallery-sticker {
  --tilt: 0deg;
  --tag: var(--color-accent-400);
  position: relative;
  display: block;
  padding: 8px 8px 8px;
  background: #fff;
  border-radius: 14px;
  box-shadow:
    0 1px 0 rgba(0, 0, 0, 0.04),
    0 18px 30px -18px rgba(20, 20, 60, 0.45);
  transform: rotate(var(--tilt));
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1.2),
    box-shadow 0.35s ease;
  color: inherit;
  text-decoration: none;

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9px;
    background: #000;
  }

  @media (hover: hover) {
    &:hover {
      transform: rotate(0deg) translateY(-6px) scale(1.03);
      z-index: 2;
      box-shadow: 0 28px 44px -20px rgba(20, 20, 60, 0.55);
    }
  }
}

.project-gallery-tag {
  position: absolute;
  left: 14px;
  bottom: 14px;
  max-width: calc(100% - 28px);
  padding: 5px 11px;
  border-radius: 999px;
  background: var(--tag);
  color: #fff;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0.01em;
  transform: rotate(-2.5deg);
  box-shadow: 0 6px 14px -8px rgba(0, 0, 0, 0.5);
}

/* collage: asymmetric grid, tilted polaroids, asterisk stickers */
.project-gallery-collage {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 170px;
  grid-auto-flow: dense;
  gap: 18px 14px;
  padding: 10px 4px 18px;

  @media (min-width: 840px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: 190px;
    gap: 26px 22px;
  }

  .project-gallery-sticker:nth-child(6n + 1) {
    --tilt: -1.6deg;
    grid-column: span 2;
    grid-row: span 2;
  }
  .project-gallery-sticker:nth-child(6n + 2) {
    --tilt: 1.4deg;
    --tag: var(--color-accent-2, var(--color-text-400));
  }
  .project-gallery-sticker:nth-child(6n + 3) {
    --tilt: -0.8deg;
  }
  .project-gallery-sticker:nth-child(6n + 4) {
    --tilt: 1.8deg;
    --tag: var(--color-accent-2, var(--color-text-400));
  }
  .project-gallery-sticker:nth-child(6n + 5) {
    --tilt: -1.2deg;
  }
  .project-gallery-sticker:nth-child(6n) {
    --tilt: 0.9deg;
    --tag: var(--color-text-400);
  }

  @media (min-width: 840px) {
    .project-gallery-sticker:nth-child(6n + 1) {
      grid-column: span 3;
    }
    .project-gallery-sticker:nth-child(6n + 2),
    .project-gallery-sticker:nth-child(6n + 3) {
      grid-column: span 3;
    }
    .project-gallery-sticker:nth-child(6n + 4),
    .project-gallery-sticker:nth-child(6n + 5),
    .project-gallery-sticker:nth-child(6n) {
      grid-column: span 2;
      grid-row: span 2;
    }

    /* close the gaps left by an unfinished cycle */
    .project-gallery-sticker:nth-child(6n + 1):last-child,
    .project-gallery-sticker:nth-child(6n + 4):last-child {
      grid-column: 1 / -1;
    }
    .project-gallery-sticker:nth-child(6n + 4):nth-last-child(2),
    .project-gallery-sticker:nth-child(6n + 5):last-child {
      grid-column: span 3;
    }
  }

  /* a pair: two equal tiles side by side (stacked on mobile) */
  .project-gallery-sticker:nth-child(6n + 2):last-child {
    grid-column: 1 / -1;
    grid-row: span 2;

    @media (min-width: 840px) {
      grid-column: span 3;
    }
  }

  /* asterisk stickers */
  .project-gallery-sticker:nth-child(4n + 1)::after,
  .project-gallery-sticker:nth-child(4n + 3)::after {
    content: "✱";
    position: absolute;
    top: -18px;
    right: -10px;
    font-size: 38px;
    line-height: 1;
    color: var(--color-accent-2, var(--color-accent-400));
    transform: rotate(14deg);
    pointer-events: none;
  }
  .project-gallery-sticker:nth-child(4n + 3)::after {
    top: auto;
    bottom: -16px;
    right: auto;
    left: -12px;
    font-size: 28px;
    color: var(--color-accent-400);
  }

  .project-gallery-sticker-video video {
    background: #000;
  }
}

/* all-video collage: a row of tilted 9:16 phones */
.project-gallery-collage.project-gallery-collage-reels {
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
  grid-auto-rows: auto;
  gap: 30px 26px;

  @media (min-width: 840px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 300px));
  }

  .project-gallery-sticker {
    grid-column: auto !important;
    grid-row: auto !important;
    aspect-ratio: 9 / 16;
    border-radius: 22px;

    video {
      border-radius: 16px;
    }
  }

  .project-gallery-tag {
    top: 18px;
    bottom: auto;
  }
}

/* marquee: endless strip of tilted posts */
.project-gallery-marquee {
  overflow: hidden;
  padding: 22px 0 30px;
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

.project-gallery-marquee-track {
  display: flex;
  gap: 26px;
  width: max-content;
  animation: gallery-marquee var(--marquee-duration, 48s) linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  .project-gallery-sticker {
    flex: none;
    width: 230px;
    aspect-ratio: 4 / 5;

    @media (min-width: 840px) {
      width: 280px;
    }

    &:nth-child(odd) {
      --tilt: -2deg;
    }
    &:nth-child(even) {
      --tilt: 2deg;
      --tag: var(--color-accent-2, var(--color-text-400));
      margin-top: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}

@keyframes gallery-marquee {
  to {
    transform: translateX(calc(-50% - 13px));
  }
}
</style>
