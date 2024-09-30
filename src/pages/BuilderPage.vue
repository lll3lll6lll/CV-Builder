<script setup lang="ts">
import { useRoute } from "vue-router";
import MainMenu from "@/components/BulderMenu/MainMenu.vue";

const props = defineProps({
  items: { type: Array, required: false },
});

const route = useRoute();
</script>

<template>
  <div class="builder-page">
    <router-link :to="{ name: 'main' }">back</router-link>
    <MainMenu class="menu" />

    <!--    <div>builder page {{ route.params }}</div>-->
  </div>
</template>

<style scoped lang="scss">
.builder-page {
  //border: 1px solid red;
}
.menu {
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
}
</style>
