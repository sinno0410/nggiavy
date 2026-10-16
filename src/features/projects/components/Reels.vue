<script setup lang="ts">
/** A row of vertical (9:16) players: local videos with sound, or embedded players such as TikTok. */
export interface Reel {
  /** Local video file. */
  src?: string;
  poster?: string;
  /** Embeddable player URL (e.g. https://www.tiktok.com/player/v1/<id>). */
  embed?: string;
  caption?: string;
  /** Optional link to the original post. */
  href?: string;
  hrefLabel?: string;
}

export interface Props {
  title?: string;
  text?: string;
  reels: Reel[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="reels">
    <div v-if="props.title || props.text" class="reels-header">
      <h3 v-if="props.title" class="reels-title">{{ props.title }}</h3>
      <p v-if="props.text" class="reels-text" v-html="props.text"></p>
    </div>
    <div class="reels-row">
      <figure v-for="(reel, index) in props.reels" :key="index" class="reels-item">
        <div class="reels-frame">
          <iframe
            v-if="reel.embed"
            :src="reel.embed"
            :title="reel.caption ?? 'Video'"
            loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <video v-else :src="reel.src" :poster="reel.poster" controls playsinline preload="none"></video>
        </div>
        <figcaption v-if="reel.caption || reel.href" class="reels-caption">
          <span v-if="reel.caption">{{ reel.caption }}</span>
          <a v-if="reel.href" :href="reel.href" target="_blank" rel="noopener" data-cursor="arrow-external"
            >{{ reel.hrefLabel ?? "↗" }} ↗</a
          >
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reels {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  min-width: 0;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    max-width: 820px;
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
  }

  &-text {
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 340px));
    gap: var(--space-md);
  }

  &-item {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &-frame {
    aspect-ratio: 9 / 16;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: #000;
    border: var(--stroke-md) solid var(--color-grayscale-400);

    iframe,
    video {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      object-fit: cover;
    }
  }

  &-caption {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    font-weight: 700;

    a {
      color: var(--color-accent-400);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
