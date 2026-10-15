import type { Props as ImageTextProps } from "./components/ImageText.vue";
import type { Props as TextProps } from "./components/Text.vue";
import type { Props as ListProps } from "./components/List.vue";
import type { Props as MediaProps } from "./components/Media.vue";
import type { Props as TableProps } from "./components/Table.vue";
import type { Props as StatsProps } from "./components/Stats.vue";
import type { Props as GalleryProps } from "./components/Gallery.vue";
import type { Props as CalendarProps } from "./components/Calendar.vue";
import type { Props as RoundsProps } from "./components/Rounds.vue";
import type { Props as JobsProps } from "./components/Jobs.vue";
import type { Props as EmbedProps } from "./components/Embed.vue";
import type { Props as BentoProps } from "./components/Bento.vue";
import type { Props as DashboardProps } from "./components/Dashboard.vue";
import type { Props as LiveProps } from "./components/LiveBanner.vue";
import type { Props as ModelProps } from "./components/Model.vue";

export interface ProjectComponents {
  imageText: ImageTextProps;
  text: TextProps;
  list: ListProps;
  media: Omit<MediaProps, "index">;
  table: TableProps;
  stats: StatsProps;
  gallery: GalleryProps;
  calendar: CalendarProps;
  rounds: RoundsProps;
  jobs: JobsProps;
  embed: EmbedProps;
  bento: BentoProps;
  dashboard: DashboardProps;
  live: LiveProps;
  model: ModelProps;
}

export type ProjectComponent = {
  [K in keyof ProjectComponents]: {
    type: K;
    props: ProjectComponents[K];
  };
}[keyof ProjectComponents];

type ProjectComponentMap<K extends keyof ProjectComponents> = {
  type: K;
  props: ProjectComponents[K];
};

export type ProjectComponentProps = ProjectComponentMap<keyof ProjectComponents>;
