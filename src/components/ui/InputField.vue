<script setup lang="ts">
import { ref, defineModel } from "vue";
const props = defineProps({
  placeHolder: {
    type: String,
    required: true,
  },
});

const isFocused = ref(false);
const model = defineModel();
function focusInHandler() {
  isFocused.value = true;
  console.log(model.value);
}
function focusOutHandler() {
  isFocused.value = false;
  console.log(model.value);
}
</script>

<template>
  <div class="">
    <label class="flex flex-col w-full">
      <span
        :class="{
          'mb-1 mx-2 transition-all': true,
          'translate-y-9': !isFocused && !model,
        }"
        >{{ props.placeHolder }}</span
      >
      <input
        type="text"
        v-model="model"
        class="p-2 focus-visible:outline-none"
        @focusin="focusInHandler"
        @focusout="focusOutHandler"
      />
    </label>
  </div>
</template>

<style scoped lang="scss"></style>
