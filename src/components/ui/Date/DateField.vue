<template>
  <div>
    <input
      type=""
      @input="pressKeyHandler"
      placeholder="mm"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="2"
      v-model="month"
      @change="changeHandler"
    />
    <span class="text-yellow-400 mx-2">/</span>
    <input
      type="text"
      @input="pressKeyHandler"
      v-model="year"
      placeholder="yyyy"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="4"
      @change="changeHandler"
    />
  </div>
</template>
<script setup lang="ts">
import { mount } from "@vue/test-utils";
import { ref, defineModel } from "vue";

const date = defineModel<Date>();
const month = ref<number>();
const year = ref<number>();
const emits = defineEmits(["change"]);

function pressKeyHandler(event: Event) {
  (event.target as HTMLInputElement).value = (
    event.target as HTMLInputElement
  ).value.replaceAll(/[^0-9]/g, "");
  if (month.value && month.value > 11) month.value = 12;
}
function changeHandler() {
  const now = new Date();
  if (year.value && (year.value < 1900 || year.value > now.getFullYear()))
    year.value = 2024;
  if (month.value && year.value)
    date.value = new Date(year.value, month.value - 1, 5);
  // console.log(date.value?.toDateString());
  emits("change");
}
mount(() => {
  console.log("", date.value);
});
</script>
<style scoped></style>
