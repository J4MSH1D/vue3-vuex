import { createApp } from "vue";
import App from "./App.vue";
import "./axios.config.js";

import store from "./store";
import "./sass/styles.scss";

createApp(App).use(store).mount("#app");
