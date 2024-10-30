<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="download-item">
    <Icon :icon="'formkit:filepdf'" width="40" height="40" class="pdf-icon" />
    <div class="pdf-description">PDF File</div>
  </div>
</template>

<style scoped lang="scss">
.download-item {
  display: flex;
  width: 240px;

  .pdf-description {
    margin-left: 18px;
    display: flex;
    align-items: center;
  }
}
</style>
