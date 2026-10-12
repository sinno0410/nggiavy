<script setup lang="ts">
import { computed } from "vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { achievements } from "../../../content/achievements";

const content = computed(() => (locale.value ? achievements[locale.value] : null));
</script>

<template>
  <div class="achievements" v-if="content">
    <div class="grid">
      <div class="achievements-title">
        <Banner class="achievements-title-banner" :copy="t('journey')" size="sm" animated />
        <h2 class="achievements-title-copy">{{ t("education-awards") }}</h2>
      </div>
    </div>

    <div class="grid">
      <div class="achievements-body">
        <section class="achievements-group">
          <h3 class="achievements-group-title">{{ t("education") }}</h3>
          <div class="achievements-list">
            <article v-for="item in content.education" :key="item.school" class="achievements-card">
              <p class="achievements-card-meta">{{ item.period }}</p>
              <h4 class="achievements-card-title">{{ item.school }}</h4>
              <p class="achievements-card-subtitle">{{ item.major }}</p>
              <p v-if="item.note" class="achievements-card-badge">{{ item.note }}</p>
            </article>
          </div>
        </section>

        <section class="achievements-group">
          <h3 class="achievements-group-title">{{ t("awards") }}</h3>
          <div class="achievements-list achievements-list-awards">
            <article v-for="item in content.awards" :key="item.event" class="achievements-card">
              <img v-if="item.image" :src="item.image" :alt="item.event" class="achievements-card-image" />
              <p v-if="item.year" class="achievements-card-meta">{{ item.year }}</p>
              <h4 class="achievements-card-title">
                <span class="achievements-card-rank">{{ item.title }}</span> · {{ item.event }}
              </h4>
              <p v-if="item.description" class="achievements-card-text">{{ item.description }}</p>
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener"
                class="achievements-card-link"
                data-cursor="arrow-external"
                >{{ t("view-more") }} →</a
              >
            </article>
          </div>
        </section>

        <section class="achievements-group">
          <h3 class="achievements-group-title">{{ t("certificates") }}</h3>
          <div class="achievements-list achievements-list-certificates">
            <article v-for="item in content.certificates" :key="item.title" class="achievements-cert">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener"
                class="achievements-cert-image"
                data-cursor="arrow-external"
                :aria-label="item.title"
              >
                <img :src="item.image" :alt="`${item.title} – ${item.issuer}`" loading="lazy" decoding="async" />
              </a>
              <div class="achievements-cert-body">
                <p class="achievements-card-meta">{{ item.issuer }} · {{ item.date }}</p>
                <h4 class="achievements-cert-title">{{ item.title }}</h4>
                <a
                  v-if="item.verify"
                  :href="item.verify"
                  target="_blank"
                  rel="noopener"
                  class="achievements-card-link"
                  data-cursor="arrow-external"
                  >{{ t("verify-certificate") }} ↗</a
                >
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.achievements {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 100%;
  padding-top: var(--space-xxl);

  @include mixins.mq("md") {
    gap: var(--space-xxl);
    padding-top: 96px;
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 11;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-sm);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-md);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-body {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    &-title {
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--color-text-300);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  }

  &-list {
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }

  &-cert {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--color-beige-500);
    border: var(--stroke-md) solid var(--color-beige-700);

    &-image {
      display: block;
      background-color: var(--color-white-400);
      border-bottom: var(--stroke-md) solid var(--color-beige-700);

      img {
        display: block;
        width: 100%;
        aspect-ratio: 1210 / 935;
        object-fit: contain;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      padding: var(--space-md) var(--space-lg) var(--space-lg);
      flex: 1;
    }

    &-title {
      font-size: var(--font-size-lg);
      font-weight: 900;
      line-height: 1.3;
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    background-color: var(--color-beige-500);
    border: var(--stroke-md) solid var(--color-beige-700);

    &-image {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: var(--radius-md);
      margin-bottom: var(--space-xs);
    }

    &-meta {
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-text-300);
    }

    &-title {
      font-size: var(--font-size-xxl);
      font-weight: 900;
      line-height: 1.25;
    }

    &-rank {
      color: var(--color-orange-400);
    }

    &-subtitle {
      font-size: var(--font-size-lg);
    }

    &-text {
      font-size: var(--font-size-md);
      line-height: 1.6;
      color: var(--color-text-300);
    }

    &-badge {
      width: fit-content;
      margin-top: var(--space-xs);
      padding: var(--space-xxs) var(--space-sm);
      border-radius: var(--radius-md);
      background-color: var(--color-black-400);
      color: var(--color-white-400);
      font-size: var(--font-size-sm);
      font-weight: 700;
    }

    &-link {
      margin-top: auto;
      padding-top: var(--space-xs);
      font-weight: 700;
      color: var(--color-text-400);
    }
  }
}
</style>
