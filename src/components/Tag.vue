<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-gray {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-social {
      background-color: #1877f2;
      color: white;
    }

    &-content {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-ads {
      background-color: #ed9c55;
      color: #492708;
    }

    &-seo {
      background-color: #237d23;
      color: white;
    }

    &-strategy {
      background-color: #ce4036;
      color: white;
    }

    &-event {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-tiktok {
      background-color: #111111;
      color: white;
    }

    &-analytics {
      background-color: #2f6c92;
      color: white;
    }

    &-research {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }
  }
}
</style>
