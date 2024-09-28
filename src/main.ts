import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(store);
app.use(router);

// https://iconify.design/docs/icon-components/vue/
app.component("Icon", Icon);

app.mount("#app");
