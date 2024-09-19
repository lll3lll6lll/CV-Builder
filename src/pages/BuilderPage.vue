<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps({
  items: { type: Array, required: false },
});

const route = useRoute();
</script>

<template>
  <div>
    <router-link :to="{ name: 'main' }">back</router-link>
  </div>

  <div>builder page {{ route.params }}</div>
</template>

<style scoped lang="scss"></style>
