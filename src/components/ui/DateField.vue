<template>
  <div>
    <input
      type="text"
      @input="pressKeyHandler"
      placeholder="mm"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="2"
      v-model="model.day"
      @change="changeHandler"
    />
    <span class="text-yellow-400 mx-2">/</span>
    <input
      type="text"
      @input="pressKeyHandler"
      placeholder="yyyy"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="4"
      v-model="model.year"
      @change="changeHandler"
    />
  </div>
</template>
<script setup lang="ts">
import { IDate } from "@/types";
import { defineModel } from "vue";

const model = defineModel<IDate>({
  default: { day: "", year: "" },
});

const emits = defineEmits(["change"]);

function pressKeyHandler(event: Event) {
  (event.target as HTMLInputElement).value = (
    event.target as HTMLInputElement
  ).value.replaceAll(/[^0-9]/g, "");
}
function changeHandler() {
  console.log(model.value);
  emits("change");
}
</script>
<style scoped></style>
