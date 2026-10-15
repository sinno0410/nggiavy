<script setup lang="ts">
/**
 * S-O-R research model drawn as an SVG: four stimulus factors → two organism
 * states → one response, with hypothesis labels (H1–H12), solid direct paths
 * and dashed mediation paths. Paths listed in `supported` are drawn in the accent colour.
 */
export interface Props {
  title?: string;
  text?: string;
  /** Column headers: S, O, R. */
  columns: [string, string, string];
  /** Four stimulus factors, top to bottom (two lines each: main + sub). */
  stimuli: [string, string][];
  /** Two organism states: [trust, flow]. */
  organisms: [string, string][];
  /** Response box: main lines…, last item is the sub-label. */
  response: string[];
  /** Hypothesis ids drawn as supported, e.g. ["H3", "H4", "H9", "H11"]. */
  supported?: string[];
  legend: { direct: string; mediation: string; supported?: string };
  note?: string;
}

const props = defineProps<Props>();

const W = 960;
const H = 640;
const S = { x: 30, w: 220, h: 78, ys: [110, 230, 350, 470] };
const O = { x: 375, w: 270, h: 92, ys: [150, 396] };
const R = { x: 720, w: 220, h: 130, y: 263 };

const sY = (i: number) => S.ys[i] ?? 0;
const oY = (j: number) => O.ys[j] ?? 0;
const sMid = (i: number) => sY(i) + S.h / 2;
const oMid = (j: number) => oY(j) + O.h / 2;
const colX = [S.x + S.w / 2, O.x + O.w / 2, R.x + R.w / 2];
const rMid = R.y + R.h / 2;

const isSupported = (id: string) => props.supported?.includes(id) ?? false;

// H1..H8: stimulus i → organism j (trust = 0, flow = 1)
const direct = Array.from({ length: 4 }).flatMap((_, i) =>
  [0, 1].map((j) => {
    const id = `H${i * 2 + j + 1}`;
    const x1 = S.x + S.w;
    const y1 = sMid(i) + (j === 0 ? -10 : 10);
    const x2 = O.x;
    const y2 = oMid(j) + (i - 1.5) * 10;
    const t = 0.22;
    return { id, x1, y1, x2, y2, lx: x1 + (x2 - x1) * t, ly: y1 + (y2 - y1) * t };
  }),
);

const outcome = [0, 1].map((j) => {
  const id = `H${9 + j}`;
  const x1 = O.x + O.w;
  const y1 = oMid(j);
  const x2 = R.x;
  const y2 = rMid + (j === 0 ? -14 : 14);
  return { id, x1, y1, x2, y2, lx: (x1 + x2) / 2, ly: (y1 + y2) / 2 };
});

const midX = O.x + O.w / 2;
const rX = R.x + R.w / 2;
const mediation = [
  { id: "H11", label: "H11 a–d", d: `M${midX} ${oY(0)} V${oY(0) - 48} H${rX} V${R.y - 4}`, lx: (midX + rX) / 2, ly: oY(0) - 48 },
  {
    id: "H12",
    label: "H12 a–d",
    d: `M${midX} ${oY(1) + O.h} V${oY(1) + O.h + 48} H${rX} V${R.y + R.h + 4}`,
    lx: (midX + rX) / 2,
    ly: oY(1) + O.h + 48,
  },
];
</script>

<template>
  <div class="sor">
    <div v-if="props.title || props.text" class="sor-header">
      <h3 v-if="props.title" class="sor-title">{{ props.title }}</h3>
      <p v-if="props.text" class="sor-text" v-html="props.text"></p>
    </div>

    <div class="sor-scroll" data-lenis-prevent-horizontal>
      <svg class="sor-svg" :viewBox="`0 0 ${W} ${H}`" role="img" :aria-label="props.title">
        <defs>
          <marker id="sor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" class="sor-head" />
          </marker>
          <marker id="sor-arrow-on" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" class="sor-head-on" />
          </marker>
        </defs>

        <!-- column guides -->
        <line :x1="(S.x + S.w + O.x) / 2" y1="60" :x2="(S.x + S.w + O.x) / 2" :y2="H - 40" class="sor-guide" />
        <line :x1="(O.x + O.w + R.x) / 2" y1="60" :x2="(O.x + O.w + R.x) / 2" :y2="H - 40" class="sor-guide" />
        <text v-for="(col, k) in props.columns" :key="col" :x="colX[k]" y="36" class="sor-col">{{ col }}</text>

        <!-- paths -->
        <g v-for="edge in [...direct, ...outcome]" :key="edge.id">
          <line
            :x1="edge.x1"
            :y1="edge.y1"
            :x2="edge.x2 - 2"
            :y2="edge.y2"
            :class="['sor-edge', { 'sor-edge-on': isSupported(edge.id) }]"
            :marker-end="isSupported(edge.id) ? 'url(#sor-arrow-on)' : 'url(#sor-arrow)'"
          />
          <g :transform="`translate(${edge.lx} ${edge.ly})`">
            <rect x="-15" y="-10" width="30" height="20" rx="10" :class="['sor-tag', { 'sor-tag-on': isSupported(edge.id) }]" />
            <text y="4" :class="['sor-tag-text', { 'sor-tag-text-on': isSupported(edge.id) }]">{{ edge.id }}</text>
          </g>
        </g>
        <g v-for="m in mediation" :key="m.id">
          <path
            :d="m.d"
            :class="['sor-edge', 'sor-edge-dash', { 'sor-edge-on': isSupported(m.id) }]"
            :marker-end="isSupported(m.id) ? 'url(#sor-arrow-on)' : 'url(#sor-arrow)'"
          />
          <g :transform="`translate(${m.lx} ${m.ly})`">
            <rect x="-34" y="-11" width="68" height="22" rx="11" :class="['sor-tag', { 'sor-tag-on': isSupported(m.id) }]" />
            <text y="4" :class="['sor-tag-text', { 'sor-tag-text-on': isSupported(m.id) }]">{{ m.label }}</text>
          </g>
        </g>

        <!-- nodes -->
        <g v-for="(node, i) in props.stimuli" :key="node[0]">
          <rect :x="S.x" :y="sY(i)" :width="S.w" :height="S.h" rx="16" class="sor-node" />
          <text :x="S.x + S.w / 2" :y="sY(i) + 34" class="sor-node-main">{{ node[0] }}</text>
          <text :x="S.x + S.w / 2" :y="sY(i) + 56" class="sor-node-sub">{{ node[1] }}</text>
        </g>
        <g v-for="(node, j) in props.organisms" :key="node[0]">
          <rect :x="O.x" :y="oY(j)" :width="O.w" :height="O.h" rx="18" class="sor-node sor-node-o" />
          <text :x="O.x + O.w / 2" :y="oY(j) + 40" class="sor-node-main">{{ node[0] }}</text>
          <text :x="O.x + O.w / 2" :y="oY(j) + 62" class="sor-node-sub">{{ node[1] }}</text>
        </g>
        <rect :x="R.x" :y="R.y" :width="R.w" :height="R.h" rx="22" class="sor-node sor-node-r" />
        <text
          v-for="(line, k) in props.response"
          :key="line"
          :x="R.x + R.w / 2"
          :y="R.y + R.h / 2 - (props.response.length - 1) * 12 + k * 24 + 6"
          :class="k < props.response.length - 1 ? 'sor-node-main sor-node-main-r' : 'sor-node-sub sor-node-sub-r'"
        >
          {{ line }}
        </text>
      </svg>
    </div>

    <div class="sor-legend">
      <span class="sor-legend-item"><i class="sor-legend-line"></i>{{ props.legend.direct }}</span>
      <span class="sor-legend-item"><i class="sor-legend-line sor-legend-line-dash"></i>{{ props.legend.mediation }}</span>
      <span v-if="props.legend.supported" class="sor-legend-item"><i class="sor-legend-line sor-legend-line-on"></i>{{ props.legend.supported }}</span>
    </div>
    <p v-if="props.note" class="sor-note" v-html="props.note"></p>
  </div>
</template>

<style scoped lang="scss">
.sor {
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

  &-text,
  &-note {
    line-height: var(--line-height-copy);
    color: var(--color-text-300);
  }

  &-scroll {
    overflow-x: auto;
    border-radius: var(--radius-xl);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background-color: var(--color-background-400);
  }

  &-svg {
    display: block;
    width: 100%;
    min-width: 720px;
    height: auto;
    font-family: inherit;
  }

  &-guide {
    stroke: var(--color-grayscale-500);
    stroke-width: 2;
    stroke-dasharray: 4 6;
  }

  &-col {
    text-anchor: middle;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    fill: var(--color-accent-400);
  }

  &-edge {
    stroke: #b9c2b4;
    stroke-width: 2;
    fill: none;

    &-dash {
      stroke-dasharray: 8 6;
    }

    &-on {
      stroke: var(--color-accent-400);
      stroke-width: 2.6;
    }
  }

  &-head {
    fill: #b9c2b4;
  }

  &-head-on {
    fill: var(--color-accent-400);
  }

  &-tag {
    fill: var(--color-background-300);
    stroke: #b9c2b4;
    stroke-width: 1.5;

    &-on {
      fill: var(--color-accent-400);
      stroke: var(--color-accent-400);
    }

    &-text {
      text-anchor: middle;
      font-size: 11px;
      font-weight: 900;
      fill: var(--color-text-300);

      &-on {
        fill: var(--color-accent-text-400);
      }
    }
  }

  &-node {
    fill: var(--color-background-300);
    stroke: var(--color-text-400);
    stroke-width: 2;

    &-o {
      stroke-width: 2.5;
    }

    &-r {
      fill: var(--color-text-400);
      stroke: var(--color-text-400);
    }

    &-main {
      text-anchor: middle;
      font-size: 17px;
      font-weight: 900;
      fill: var(--color-text-400);

      &-r {
        fill: var(--color-background-300);
        font-size: 19px;
      }
    }

    &-sub {
      text-anchor: middle;
      font-size: 13px;
      font-weight: 700;
      fill: var(--color-text-300);

      &-r {
        fill: var(--color-grayscale-500);
      }
    }
  }

  &-legend {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs) var(--space-md);
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-300);

    &-item {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
    }

    &-line {
      display: inline-block;
      width: 32px;
      border-top: 2.5px solid #9aa596;

      &-dash {
        border-top-style: dashed;
      }

      &-on {
        border-top-color: var(--color-accent-400);
      }
    }
  }
}
</style>
