import { ref, watch, onMounted } from "vue";
import { resources } from "../utils/resources";
import gsap from "gsap";

export const preloaderVisible = ref(true);

export const usePreloader = () => {
  const progress = ref(0);
  const resourcesProgress = ref(0);

  onMounted(() => {
    resources.on("progress", (newProgress) => {
      resourcesProgress.value = newProgress;
    });
  });

  watch(
    resourcesProgress,
    (newProgress) => {
      progress.value = 0.25 + newProgress * 0.75;
    },
    { immediate: true },
  );

  watch(
    progress,
    (newProgress) => {
      const rect = document.querySelector(".preloader-rect") as HTMLElement;
      const preloader = document.querySelector(".preloader") as HTMLElement;
      if (newProgress === 1) {
        // Let the signature finish its first pass before revealing the page (max ~4s).
        const signed = (window as unknown as { __signatureFirstPass?: Promise<void> }).__signatureFirstPass;
        const timeout = new Promise<void>((resolve) => setTimeout(resolve, 4000));
        Promise.race([signed ?? Promise.resolve(), timeout]).then(() => {
          gsap.delayedCall(0.2, () => {
            document.body.classList.remove("is-loading");
            preloader.classList.add("preloader-hidden");
            preloaderVisible.value = false;
          });
        });
      }

      if (rect) rect.style.transform = `scaleX(${newProgress})`;
    },
    { immediate: true },
  );
};
