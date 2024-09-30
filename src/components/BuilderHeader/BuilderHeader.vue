<template>
  <div class="builder-header">
    <BuilderPersonalData></BuilderPersonalData>
    <BuilderPhoto></BuilderPhoto>
  </div>
</template>

<script setup lang="ts">
import BuilderPersonalData from "./BuilderPersonalData.vue";
import BuilderPhoto from "./BuilderPhoto.vue";
</script>

<style scoped lang="scss">
.builder-header {
  height: 360px;
  background-color: rgba(0, 119, 255, 0.6);
  display: flex;
}
</style>
