<template>
  <div>
    <span contenteditable="true">{{ model.month }}</span>
    <span class="text-yellow-400 mx-2">/</span>
    <span contenteditable="true">{{ model.year }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";

const model = defineModel<{ month: number; year: number }>({
  default: {
    month: "mm",
    year: "yyyy",
  },
});
</script>
<style scoped></style>
