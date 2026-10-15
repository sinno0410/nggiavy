import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import { initAnalytics } from "./utils/analytics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

initAnalytics();

createApp(App).mount("#app");
