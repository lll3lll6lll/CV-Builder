<template>
  <div class="file">
    <label
      ><slot></slot
      ><input type="file" class="file__input" @change="selectPhoto"
    /></label>
  </div>
</template>

<script setup lang="ts">
function selectPhoto(event: Event) {
  console.log((event.target as HTMLInputElement).files?.item(0));
}
</script>

<style scoped lang="scss">
.file {
  &__input {
    display: none;
  }
}
</style>
