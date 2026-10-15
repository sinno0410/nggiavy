<script setup lang="ts">
import ImageText from "./ImageText.vue";
import Text from "./Text.vue";
import List from "./List.vue";
import Media from "./Media.vue";
import Table from "./Table.vue";
import Stats from "./Stats.vue";
import Gallery from "./Gallery.vue";
import Calendar from "./Calendar.vue";
import Rounds from "./Rounds.vue";
import Jobs from "./Jobs.vue";

import type { ProjectComponents, ProjectComponentProps } from "../types";

type Props = ProjectComponentProps & {
  index: number;
};

const { type, props, index } = defineProps<Props>();

const components = {
  imageText: ImageText,
  text: Text,
  list: List,
  media: Media,
  table: Table,
  stats: Stats,
  gallery: Gallery,
  calendar: Calendar,
  rounds: Rounds,
  jobs: Jobs,
} as const satisfies Record<keyof ProjectComponents, any>;

const Component = components[type];
</script>

<template>
  <Component v-bind="props" :index="index" />
</template>
