<template>
  <div
    :class="{
      'fixed top-0 left-0 z-10 w-full h-full bg-black/30 flex items-center justify-center':
        isShow,
      hidden: !isShow,
    }"
    @click.self="close"
  >
    <div class="p-5 bg-slate-600 min-w-96 relative">
      <button @click="close" class="absolute -right-7 -top-7">
        <Icon
          icon="zondicons:close-outline"
          class="text-slate-600 h-7 w-7"
        ></Icon>
      </button>
      <div class=""><slot name="header"></slot></div>
      <div class=""><slot></slot></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";

let isShow = defineModel("isShow", {
  default: false,
});

function close(e: Event) {
  isShow.value = false;
  console.log(e.target);
}
</script>

<style scoped></style>
