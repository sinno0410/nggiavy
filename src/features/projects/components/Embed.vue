<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";

export interface Props {
  title?: string;
  text?: string;
  /** Embeddable URL, e.g. a Google Drive `/preview` link. */
  src: string;
  /** Link to open the original file in a new tab. */
  href?: string;
  /** Frame height on desktop, in px (mobile is shorter). */
  height?: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-embed">
    <div v-if="props.title || props.text" class="project-embed-header">
      <h3 v-if="props.title" class="project-embed-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-embed-text" v-html="props.text"></p>
    </div>
    <div class="project-embed-frame" :style="{ '--embed-height': `${props.height ?? 640}px` }" data-lenis-prevent>
      <iframe :src="props.src" :title="props.title ?? 'Embedded file'" loading="lazy" allow="autoplay" allowfullscreen></iframe>
    </div>
    <a
      v-if="props.href"
      :href="props.href"
      target="_blank"
      rel="noopener"
      class="project-embed-link"
      data-cursor="arrow-external"
      >{{ t("view-source-file") }} ↗</a
    >
  </div>
</template>

<style scoped lang="scss">
.project-embed {
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

  &-frame {
    border-radius: var(--radius-lg);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    overflow: hidden;
    background-color: var(--color-background-300);
    height: min(70vh, 480px);

    @include mixins.mq("md") {
      height: var(--embed-height);
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  &-link {
    align-self: flex-start;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-accent-400);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
