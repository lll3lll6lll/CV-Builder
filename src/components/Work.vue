<template>
  <div>
    <EditableField
      v-model="data.title"
      class="text-2xl text-yellow-700 font-bold"
    ></EditableField>
    <EditableField
      v-model="data.position"
      class="text-lg color-black"
    ></EditableField>
    <EditableField v-model="data.company"></EditableField>
    <div class="flex">
      <DateField></DateField>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditableField from "./ui/EditableField.vue";
import DateField from "./ui/DateField.vue";
const data = ref<{ title: string; position: string; company: string }>({
  title: "Work",
  position: "Title/Position",
  company: "Workplace/Company",
});
</script>

<style scoped></style>
