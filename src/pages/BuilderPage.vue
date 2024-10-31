<script setup lang="ts">
import { useRoute } from "vue-router";
import MainMenu from "@/components/BulderMenu/MainMenu.vue";
import BuilderHeader from "@/components/BuilderHeader/BuilderHeader.vue";
import Works from "@/components/Work/Works.vue";
import store from "@/store/index";
const props = defineProps({
  items: { type: Array, required: false },
});

const route = useRoute();
const resume = store.getters.resume();
</script>

<template>
  <div class="builder">
    <div class="container">
      <router-link :to="{ name: 'main' }">back</router-link>
      <MainMenu />
      <div class="builder__page">
        <BuilderHeader></BuilderHeader>
        <main class="p-4">
          <Works></Works>
        </main>
      </div>
    </div>
    <div>builder page {{ route.params }}</div>
  </div>
</template>

<style scoped lang="scss">
.builder {
  &__page {
    width: 840px;
    height: 1188px;
    background: #fff;
    margin: 0 auto;
  }
}
</style>
