<script setup lang="ts">
import ResumeCardsGrid from "@/components/ResumeCard/ResumeCardsGrid.vue";
import store from "@/store";

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
const resumeList = store.getters.resumeAll;
console.log(resumeList);
</script>

<template>
  main page

  <ResumeCardsGrid :items="resumeList" />
</template>

<style scoped lang="scss"></style>
