<script setup lang="ts">
/**
 * A TikTok-livestream styled showcase: copy + stats on the left, a phone frame
 * with a photo, LIVE badge, floating hearts and a pinned "product" on the right.
 * Decorated with simple produce illustrations.
 */
export interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
  stats?: { value: string; label: string }[];
  image: string;
  imageAlt?: string;
  /** Viewer-count style number on the LIVE badge. */
  viewers?: string;
  /** Short chat bubbles shown over the stream (decorative). */
  comments?: string[];
  /** Pinned product card at the bottom of the stream. */
  pinned?: { title: string; meta: string };
}

const props = defineProps<Props>();
</script>

<template>
  <div class="live-banner">
    <!-- produce decor -->
    <svg class="live-fruit live-fruit-mango" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 6c3 0 6 2 7 5" fill="none" stroke="#3f8f3a" stroke-width="3" stroke-linecap="round" />
      <path d="M38 9c6-5 14-3 16 1-6 3-12 3-16-1z" fill="#55b04b" />
      <ellipse cx="30" cy="38" rx="20" ry="24" transform="rotate(-25 30 38)" fill="#ffb627" />
      <ellipse cx="24" cy="32" rx="6" ry="9" transform="rotate(-25 24 32)" fill="#ffd36e" />
    </svg>
    <svg class="live-fruit live-fruit-dragon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 4l5 12 12-5-4 12 13 3-11 7 7 11-13-1-1 13-8-10-8 10-1-13-13 1 7-11-11-7 13-3-4-12 12 5z" fill="#4caf50" />
      <circle cx="32" cy="34" r="18" fill="#e83e8c" />
      <circle cx="32" cy="34" r="12" fill="#fff4f8" />
      <g fill="#222">
        <circle cx="27" cy="30" r="1.2" /><circle cx="35" cy="29" r="1.2" /><circle cx="31" cy="36" r="1.2" />
        <circle cx="37" cy="37" r="1.2" /><circle cx="26" cy="38" r="1.2" /><circle cx="33" cy="42" r="1.2" />
      </g>
    </svg>
    <svg class="live-fruit live-fruit-melon" viewBox="0 0 64 40" aria-hidden="true">
      <path d="M4 6a28 28 0 0056 0z" fill="#3f9d3a" />
      <path d="M8 6a24 24 0 0048 0z" fill="#f4f1d8" />
      <path d="M11 6a21 21 0 0042 0z" fill="#ff5a5f" />
      <g fill="#2b2b2b"><ellipse cx="24" cy="14" rx="1.4" ry="2.2" /><ellipse cx="32" cy="18" rx="1.4" ry="2.2" /><ellipse cx="40" cy="14" rx="1.4" ry="2.2" /></g>
    </svg>
    <svg class="live-fruit live-fruit-leaf" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 56C8 28 28 8 56 8c0 28-20 48-48 48z" fill="#7cc36a" />
      <path d="M12 52L50 14" stroke="#3f8f3a" stroke-width="3" stroke-linecap="round" />
    </svg>

    <div class="live-copy">
      <p v-if="props.eyebrow" class="live-eyebrow">{{ props.eyebrow }}</p>
      <h3 class="live-title">{{ props.title }}</h3>
      <p v-if="props.text" class="live-text" v-html="props.text"></p>
      <div v-if="props.stats?.length" class="live-stats">
        <div v-for="stat in props.stats" :key="stat.label" class="live-stat">
          <p class="live-stat-value">{{ stat.value }}</p>
          <p class="live-stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <div class="live-phone">
      <img :src="props.image" :alt="props.imageAlt ?? ''" class="live-phone-image" loading="lazy" decoding="async" />
      <div class="live-phone-shade"></div>
      <div class="live-phone-top">
        <span class="live-badge">LIVE</span>
        <span v-if="props.viewers" class="live-viewers">👁 {{ props.viewers }}</span>
      </div>
      <div class="live-hearts" aria-hidden="true">
        <span>♥</span><span>♥</span><span>♥</span><span>♥</span><span>♥</span>
      </div>
      <div class="live-phone-bottom">
        <p v-for="comment in props.comments" :key="comment" class="live-comment">{{ comment }}</p>
        <div v-if="props.pinned" class="live-pinned">
          <span class="live-pinned-icon" aria-hidden="true">🛒</span>
          <div>
            <p class="live-pinned-title">{{ props.pinned.title }}</p>
            <p class="live-pinned-meta">{{ props.pinned.meta }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.live-banner {
  grid-column: 1 / 13;
  position: relative;
  display: grid;
  gap: var(--space-lg);
  padding: var(--space-lg) var(--space-md);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 182, 39, 0.28), transparent 42%),
    radial-gradient(circle at 88% 85%, rgba(124, 195, 106, 0.3), transparent 45%),
    var(--color-background-400);
  border: var(--stroke-md) solid var(--color-grayscale-400);
  overflow: hidden;

  @include mixins.mq("md") {
    grid-template-columns: 1.25fr 0.75fr;
    align-items: center;
    padding: var(--space-xl, 40px);
  }

  @include mixins.mq("lg") {
    grid-column: 2 / 12;
  }
}

.live-fruit {
  position: absolute;
  pointer-events: none;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.12));
  animation: live-float 6s ease-in-out infinite;

  &-mango {
    width: 64px;
    top: 14px;
    right: 14px;

    @include mixins.mq("md") {
      right: auto;
      left: 52%;
      top: 22px;
    }
  }

  &-dragon {
    width: 54px;
    bottom: 18px;
    left: 14px;
    animation-delay: -2s;

    @include mixins.mq("md") {
      left: 46%;
      bottom: 26px;
    }
  }

  &-melon {
    width: 72px;
    top: 46%;
    right: -10px;
    animation-delay: -4s;
    display: none;

    @include mixins.mq("md") {
      display: block;
    }
  }

  &-leaf {
    width: 44px;
    top: -6px;
    left: -6px;
    opacity: 0.8;
    animation-delay: -1s;
  }
}

@keyframes live-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(6deg);
  }
}

.live-copy {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.live-eyebrow {
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 999px;
  background-color: var(--color-text-400);
  color: var(--color-background-300);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.live-title {
  font-size: clamp(24px, 3.2vw, 40px);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.live-text {
  line-height: var(--line-height-copy);
  color: var(--color-text-300);
  max-width: 620px;
}

.live-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-xs);
  margin-top: var(--space-xs);
}

.live-stat {
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  background-color: var(--color-background-300);
  border: var(--stroke-md) solid var(--color-grayscale-400);

  &-value {
    font-size: clamp(22px, 2.6vw, 34px);
    font-weight: 900;
    line-height: 1;
    color: var(--color-accent-400);
  }

  &-label {
    margin-top: 4px;
    font-size: var(--font-size-xs);
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-text-300);
  }
}

.live-phone {
  position: relative;
  justify-self: center;
  width: min(100%, 300px);
  aspect-ratio: 9 / 16;
  border-radius: 34px;
  border: 8px solid #121212;
  overflow: hidden;
  background-color: #121212;
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.55);
  transform: rotate(2deg);

  &-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, transparent 25%, transparent 55%, rgba(0, 0, 0, 0.7) 100%);
  }

  &-top {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    gap: 6px;
    align-items: center;
  }

  &-bottom {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}

.live-badge {
  padding: 3px 8px;
  border-radius: 6px;
  background: linear-gradient(90deg, #fe2c55, #ff5f7a);
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.live-viewers {
  padding: 3px 8px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
}

.live-comment {
  align-self: flex-start;
  max-width: 90%;
  padding: 5px 10px;
  border-radius: 14px;
  background-color: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
}

.live-pinned {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #161616;

  &-icon {
    font-size: 20px;
  }

  &-title {
    font-size: 12px;
    font-weight: 900;
    line-height: 1.2;
  }

  &-meta {
    font-size: 11px;
    color: #fe2c55;
    font-weight: 700;
  }
}

.live-hearts {
  position: absolute;
  right: 12px;
  bottom: 120px;
  width: 40px;
  height: 160px;
  pointer-events: none;

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    color: #fe2c55;
    font-size: 22px;
    opacity: 0;
    animation: live-heart 3.6s ease-in infinite;

    &:nth-child(2) {
      color: #ffb627;
      animation-delay: 0.7s;
      left: 20%;
    }
    &:nth-child(3) {
      color: #25f4ee;
      animation-delay: 1.4s;
      left: 65%;
    }
    &:nth-child(4) {
      color: #ff7aa2;
      animation-delay: 2.1s;
      left: 35%;
    }
    &:nth-child(5) {
      color: #7cc36a;
      animation-delay: 2.8s;
    }
  }
}

@keyframes live-heart {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translateY(-150px) scale(1.15) rotate(-12deg);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .live-fruit,
  .live-hearts span {
    animation: none;
  }

  .live-hearts {
    display: none;
  }
}
</style>
