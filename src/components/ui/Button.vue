<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = defineProps({
  class: String,
});

function onClickHandler() {
  emit("click");
}
</script>

<template>
  <button :class="`btn ${props.class}`" @click="onClickHandler">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  border: 0;
  padding: 16px 16px;
  position: relative;
  background: transparent;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    transition: ease 0.5s all;
  }
  &:hover {
    &::after,
    &::before {
      border-radius: 8px;
      transition: ease 0.5s all;
    }
  }
  &::before {
    background-color: rgba(0, 110, 255, 0.329);
  }
  &::after {
    background-color: rgba(0, 110, 255, 0.329);
  }
  &:hover {
    &::after {
      transform: translate(-3px, -3px);
    }
    &::before {
      transform: translate(3px, 3px);
    }
  }
}
</style>
