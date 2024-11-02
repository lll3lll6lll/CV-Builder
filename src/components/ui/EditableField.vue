<template>
  <div
    contenteditable="true"
    :class="{
      true: 'break-words relative',
      isEmpty:
        'focus-visible:outline-0 focus-visible:border-b focus-visible:before:content-[attr(data-placeholder)] before:absolute before:left-0 before:text-opacity-50',
    }"
    style="word-break: break-word}"
    @blur="change"
    :data-placeholder="props.plceholder"
    @focus="focusHandler"
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

function change(e: Event) {
  model.value = (e.target as HTMLDivElement).innerText;
  isEmpty.value = false;
  console.log(model.value);
  emits("change");
}
function focusHandler(e: Event) {
  console.log("in");

  if (model.value === props.plceholder) {
    (event!.target as HTMLDivElement).innerHTML = "";
    isEmpty.value = true;
  }
}
</script>

<style scoped></style>
