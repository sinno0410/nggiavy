<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import ProjectHero from "./ProjectHero.vue";
import ProjectComponent from "./ProjectComponent.vue";
import Link from "../../../components/Link.vue";
import NextProject from "./NextProject.vue";
import Star from "./Star.vue";
import { star } from "../../../content/projects/star";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import { previews } from "../../../content/projects/previews";
import { ref, computed, watch, onMounted } from "vue";

import type { ProjectContent, ProjectPreview } from "../../../content/types";

const { content, projectId } = defineProps<{
  content: ProjectContent;
  projectId: string;
}>();

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const loadPreviews = async () => {
  const module = await previews[locale.value as keyof typeof previews]();
  loadedPreviews.value = module.default;
};

const nextProject = computed(() => {
  const previews = loadedPreviews.value;
  if (!previews) return null;

  const currentIndex = previews.findIndex((p) => p.slug === projectId);
  if (currentIndex === -1) {
    // A sub-page (e.g. one freelance job) links back to its hub instead.
    return previews.find((p) => p.slug === content.parent) ?? null;
  }

  const nextIndex = (currentIndex + 1) % previews.length;

  return previews[nextIndex];
});

const starSummary = computed(() => star[(locale.value ?? "vi") as keyof typeof star]?.[projectId] ?? null);

const isBackLink = computed(() => !!loadedPreviews.value && !loadedPreviews.value.some((p) => p.slug === projectId));

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <Layout class="project-content">
    <ProjectHero :content="content" :projectId="projectId" />
    <div class="project-content-components">
      <div v-if="starSummary" class="grid project-content-grid">
        <Star :summary="starSummary" />
      </div>
      <div
        v-for="(component, index) in content.components"
        :key="`${component.type}-${index}`"
        class="grid project-content-grid"
      >
        <ProjectComponent :type="component.type" :props="component.props" :index="index" />
      </div>
    </div>
    <div class="grid project-content-next-project-grid">
      <Link
        v-if="nextProject"
        :to="`/project/${nextProject.slug}`"
        replace
        class="project-content-next-project"
        data-cursor="arrow"
        data-sound="click"
      >
        <NextProject :project="nextProject" :prefix="isBackLink ? t('back-to') : undefined" />
      </Link>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.project-content {
  color: var(--color-text-400);

  &-grid {
    row-gap: var(--space-sm);

    @include mixins.mq("md") {
      row-gap: var(--space-xxl);
    }
  }

  &-next-project {
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 3 / 11;
    }

    @include mixins.mq("lg") {
      grid-column: 4 / 10;
    }

    @include mixins.mq("xl") {
      grid-column: 5 / 9;
    }

    &-grid {
      padding: 0 var(--space-outer);
      padding-top: var(--space-xl);
      padding-bottom: var(--space-xxxl);
    }
  }

  &-components {
    padding: 20px var(--space-outer);
    background-color: var(--color-background-400);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xxl);
    gap: var(--space-xxl);

    @include mixins.mq("md") {
      padding: 64px var(--space-outer);
    }
  }
}
</style>
