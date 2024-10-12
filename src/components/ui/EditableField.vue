<template>
  <div
    contenteditable="true"
    class="focus-visible:outline-0 focus-visible:border-b break-words"
    style="word-break: break-word"
    @change="change"
  >
    {{ model }}
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
const model = defineModel({ type: String });

function change(e: Event) {
  model.value = (e.target as HTMLDivElement).innerText;
}
</script>

<style scoped></style>
