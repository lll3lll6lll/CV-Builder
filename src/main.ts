import { createApp, Directive } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "@iconify/vue";
import "@/assets/styles/index.scss";

const app = createApp(App);
app.use(store);
app.use(router);

// https://iconify.design/docs/icon-components/vue/
app.component("Icon", Icon);
app.directive("click-outside", <Directive>{
  mounted: (el, { value }) => {
    el.clickOutside = function (event: Event) {
      if (!(el == event.target || el.contains(event.target))) value(event);
    };
    document.body.addEventListener("click", el.clickOutside);
  },
  unmounted: (el, { value }) => {
    document.body.removeEventListener("click", el.clickOutside);
  },
});

app.mount("#app");
