<script setup lang="ts">
/** Final (100 %) stage of the About section: personality type. Right side, below the skills box. */
import { Vector3 } from "three";
import { t } from "../../../i18n/utils/translate";
import ProjectedElement from "../../../components/ProjectedElement.vue";

const point = new Vector3(0.75, 0.8, 6.75);
</script>

<template>
  <ProjectedElement :point="point">
    <div class="box-personality">
      <div class="box-personality-content">
        <span class="box-personality-badge">INTP</span>
        <p class="box-personality-copy">{{ t("personality") }}</p>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-personality {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    position: relative;
    left: 0;
    bottom: 0;
    width: 420px;
    max-width: calc(var(--svw) * 34);
    padding-left: var(--line-length);
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: var(--line-length);
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);
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

    @include mixins.landscape {
      flex-direction: row;
      gap: var(--space-xs);
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-badge {
    flex: none;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: var(--font-size-title-xxs);
    font-weight: 700;
    letter-spacing: 0.08em;
    background-color: var(--color-cyan-400);
    color: var(--color-hologram-bottom, #0b2a33);

    @include mixins.landscape {
      font-size: var(--font-size-sm);
    }
  }

  &-copy {
    font-size: var(--font-size-md);
    line-height: 1.45;

    @include mixins.landscape {
      font-size: var(--font-size-xs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-sm);
    }
  }
}
</style>
