<template>
  <div>
    <input
      type="text"
      @input="pressKeyHandler"
      placeholder="mm"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="2"
      v-model="model.day"
    />
    <span class="text-yellow-400 mx-2">/</span>
    <input
      type="text"
      @input="pressKeyHandler"
      placeholder="yyyy"
      class="focus-visible:outline-0 w-10 border-dashed border-b italic text-center"
      maxlength="4"
      v-model="model.year"
    />
  </div>
</template>
<script setup lang="ts">
import { defineModel } from "vue";

const model = defineModel<{ day: number; year: number }>({
  default: { day: "", year: "" },
});
function pressKeyHandler(event: Event) {
  (event.target as HTMLInputElement).value = (
    event.target as HTMLInputElement
  ).value.replaceAll(/[^0-9]/g, "");
}
</script>
<style scoped></style>
