<template>
  <div
    contenteditable="true"
    class="focus-visible:outline-0 focus-visible:border-b break-words"
    style="word-break: break-word"
    @blur="change"
  >
    {{ model || props.plceholder }}
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
const model = defineModel({ type: String || Number || undefined });
const props = defineProps({ plceholder: String });
const emits = defineEmits(["change"]);

function change(e: Event) {
  model.value = (e.target as HTMLDivElement).innerText;
  emits("change");
}
</script>

<style scoped></style>
