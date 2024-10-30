<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: String,
  value: { type: [Boolean, Object, String] },
  label: String,
  modelValue: { type: [Array, Boolean, String] },
});
const emits = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      v-model="model"
      class="checkbox__input"
      :value="value"
    />
    <span class="checkbox__check">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg> </span
    >{{ props.label }}</label
  >
</template>

<style scoped lang="scss">
.checkbox {
  padding: 5px;
  display: flex;
  align-items: center;

  &__input {
    display: none;
  }
  &__check {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    box-sizing: border-box;
    padding: 2px;
    border: 2px solid rgb(0 110 255);
    margin-right: 5px;
    border-radius: 3px;
    svg {
      display: none;
    }
  }
  &__input:checked + &__check {
    background-color: rgb(0 110 255);
    svg {
      display: block;
      fill: white;
    }
  }
}
</style>
