<script setup lang="ts">
import { useRoute } from "vue-router";
import MainMenu from "@/components/BulderMenu/MainMenu.vue";

const props = defineProps({
  items: { type: Array, required: false },
});

const route = useRoute();
</script>

<template>
  <div>
    <router-link :to="{ name: 'main' }">back</router-link>

    <MainMenu />
  </div>

  <div>builder page {{ route.params }}</div>
</template>

<style scoped lang="scss"></style>
