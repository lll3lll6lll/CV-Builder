<template>
  <div class="photo">
    <div class="photo__image" @click="showMenu">
      <Icon icon="ph:user-duotone" width="132" height="132" color="white" />
    </div>
    <div class="photo__menu" v-if="isShow">
      <File>
        <Icon icon="ic:sharp-cloud-upload" />
        <span class="photo__menu-text">Upload photo</span>
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

<style scoped lang="scss">
.photo {
  position: relative;
  padding: 30px;
  &__image {
    border: 6px solid white;
    height: 132px;
    width: 132px;
    border-radius: 50%;
    overflow: hidden;
  }
  &__menu {
    display: flex;
    position: absolute;
    background-color: #079894;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    top: 0;
  }
  &__menu-text {
    margin-left: 5px;
  }
}
</style>
