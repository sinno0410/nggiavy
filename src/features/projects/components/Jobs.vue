<script setup lang="ts">
import Link from "../../../components/Link.vue";

export interface Job {
  /** Project slug of the job's own page. */
  slug: string;
  title: string;
  thumbnail: string;
  role?: string;
  period?: string;
  text?: string;
}

export interface Props {
  title?: string;
  text?: string;
  jobs: Job[];
  /** Label for the card button, e.g. "View project". */
  cta?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-jobs">
    <div v-if="props.title || props.text" class="project-jobs-header">
      <h3 v-if="props.title" class="project-jobs-title">{{ props.title }}</h3>
      <p v-if="props.text" class="project-jobs-text" v-html="props.text"></p>
    </div>

    <div class="project-jobs-grid">
      <Link
        v-for="job in props.jobs"
        :key="job.slug"
        :to="`/project/${job.slug}`"
        class="project-jobs-card"
        data-cursor="arrow"
        data-sound="click"
      >
        <div class="project-jobs-image">
          <img :src="job.thumbnail" :alt="job.title" loading="lazy" decoding="async" />
        </div>
        <div class="project-jobs-body">
          <p v-if="job.period" class="project-jobs-period">{{ job.period }}</p>
          <h4 class="project-jobs-name">{{ job.title }}</h4>
          <p v-if="job.role" class="project-jobs-role">{{ job.role }}</p>
          <p v-if="job.text" class="project-jobs-desc" v-html="job.text"></p>
          <span v-if="props.cta" class="project-jobs-cta">{{ props.cta }} →</span>
        </div>
      </Link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-jobs {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
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

  &-grid {
    display: grid;
    gap: var(--space-md);

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-lg);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-300);
    overflow: hidden;
    color: var(--color-text-400);
    text-decoration: none;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease;

    @include mixins.hover {
      &:hover {
        transform: translateY(-4px);
        border-color: var(--color-accent-400);

        img {
          transform: scale(1.04);
        }
      }
    }
  }

  &-image {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-bottom: var(--stroke-md) solid var(--color-grayscale-400);

    img {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    flex: 1;
  }

  &-period {
    font-size: var(--font-size-xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-accent-400);
  }

  &-name {
    font-size: var(--font-size-lg);
    font-weight: 900;
    line-height: 1.2;
  }

  &-role {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-300);
  }

  &-desc {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-cta {
    margin-top: auto;
    padding-top: var(--space-xs);
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-accent-400);
  }
}
</style>
