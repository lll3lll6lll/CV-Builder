<template>
  <div class="flex items-center">
    <DateField @change="changeDateStart" v-model="start"></DateField>
    <span>-</span>
    <DateField v-if="!isPresent" v-model="end"></DateField>
    <CheckBox label="Present" class="ml-2" v-model="isPresent"></CheckBox>
  </div>
</template>

<script setup lang="ts">
import { defineModel, ref } from "vue";
import CheckBox from "@/components/ui/CheckBox.vue";
import DateField from "@/components/ui/Date/DateField.vue";
const start = defineModel<Date>("start", { default: Date.now });
const end = defineModel<Date>("end", { default: Date.now });
const isPresent = ref(false);
function changeDateStart() {
  console.log(start.value);
}
</script>

<style scoped></style>
