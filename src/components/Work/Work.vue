<template>
  <div>
    <EditableField
      v-model="data.position"
      plceholder="Title/Position"
      class="text-black font-bold text-lg"
      @change="changeHandler"
    ></EditableField>
    <EditableField
      v-model="data.company"
      plceholder="Workplace/Company"
    ></EditableField>
    <div class="flex">
      <!-- <DateField></DateField> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel, onBeforeMount } from "vue";
import EditableField from "@/components/ui/EditableField.vue";
// import DateField from "./ui/DateField.vue";
// import { IWork } from "@/types";

const data = defineModel({
  type: Object,
  default: { position: "" },
});

onBeforeMount(() => {
  console.log("beforemount");
});

function changeHandler() {
  console.log(data.value);
}
</script>

<style scoped></style>
