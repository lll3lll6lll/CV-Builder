<template>
  <div>
    <span contenteditable="true"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditableField from "./EditableField.vue";

const date = ref<{ month?: number }>({});
</script>
<style scoped></style>
