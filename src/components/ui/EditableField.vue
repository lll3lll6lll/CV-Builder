<template>
  <div
    contenteditable="true"
    :class="{
      'break-words relative': true,
      'focus-visible:outline-0 focus-visible:border-b focus-visible:before:content-[attr(data-placeholder)] before:absolute before:left-0 before:opacity-60':
        isEmpty,
    }"
    style="word-break: break-word"
    @blur="change"
    :data-placeholder="props.plceholder"
    @focus="focusHandler"
    @input="inputHandler"
  >
    {{ model || props.plceholder }}
  </div>
</template>

<script setup lang="ts">
import { defineModel, ref } from "vue";
const model = defineModel({ type: String || Number || undefined });
const props = defineProps({ plceholder: String });
const isEmpty = ref(false);
const emits = defineEmits(["change"]);

function inputHandler(e: Event) {
  model.value = (e.target as HTMLDivElement).innerText.trim();
  isEmpty.value = false;
}

function change(e: Event) {
  emits("change");
  if ((e.target as HTMLDivElement).innerText.trim().length === 0) {
    (e.target as HTMLDivElement).innerText = props.plceholder || "";
  }
}
function focusHandler(e: Event) {
  console.log(model.value);
  if ((e.target as HTMLDivElement).innerText == props.plceholder) {
    (event!.target as HTMLDivElement).innerHTML = "";
    isEmpty.value = true;
  }
}
</script>

<style scoped></style>
