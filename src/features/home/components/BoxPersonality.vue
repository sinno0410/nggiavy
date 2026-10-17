<script setup lang="ts">
/** Portrait-only final stage of the About section: personality type. On landscape it lives inside BoxDescription. */
import { t } from "../../../i18n/utils/translate";
</script>

<template>
  <div class="box-personality">
    <div class="box-personality-content">
      <span class="box-personality-badge">INTP</span>
      <p class="box-personality-copy">{{ t("personality") }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-personality {
  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    display: none;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
  }

  &-badge {
    padding: 2px 10px;
    border-radius: 999px;
    font-size: var(--font-size-title-xxs);
    font-weight: 700;
    letter-spacing: 0.08em;
    background-color: var(--color-cyan-400);
    color: var(--color-hologram-bottom, #0b2a33);
  }

  &-copy {
    font-size: var(--font-size-md);
    line-height: 1.45;
  }
}
</style>
