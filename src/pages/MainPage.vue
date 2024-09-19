<script setup lang="ts">
import ResumeCardsGrid from "@/components/ResumeCard/ResumeCardsGrid.vue";

const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
</script>

<template>
  main page

  <ResumeCardsGrid :items="cards" />
</template>

<style scoped lang="scss"></style>
