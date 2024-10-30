<template>
  <div class="relative">
    <div
      class="w-32 h-32 border-4 border-white border-solid rounded-full flex items-center justify-center overflow-hidden"
      @click="showMenu"
    >
      <Icon icon="ph:user-duotone" width="132" height="132" color="white" />
    </div>
    <div class="absolute" v-if="isShow">
      <File>
        <span class="flex items-center bg-green-700 p-1 rounded-md">
          <Icon icon="ic:sharp-cloud-upload" class="mr-1 text-white" />
          <span class="photo__menu-text text-white">Upload photo</span>
        </span>
      </File>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import File from "@/components/ui/File.vue";
const isShow = ref(false);
function showMenu() {
  isShow.value = !isShow.value;
}
</script>

<style scoped lang="scss"></style>
