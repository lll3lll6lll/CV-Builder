<script setup lang="ts">
import ResumeCardsGrid from "@/components/ResumeCard/ResumeCardsGrid.vue";
import store from "@/store";

const resumeList = store.getters.resumeAll;
console.log(resumeList);
</script>

<template>
  main page

  <ResumeCardsGrid :items="resumeList" />
</template>

<style scoped lang="scss"></style>
