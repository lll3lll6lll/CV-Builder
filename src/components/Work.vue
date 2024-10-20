<template>
  <div>
    <EditableField
      v-model="data.title"
      class="text-2xl text-yellow-700 font-bold"
      @change="changeHandler"
    ></EditableField>
    <EditableField
      v-model="data.works.position"
      plceholder="Title/Position"
      class="text-lg color-black"
      @change="changeHandler"
    ></EditableField>
    <EditableField
      v-model="data.works.company"
      plceholder="Workplace/Company"
    ></EditableField>
    <div class="flex">
      <DateField></DateField>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import EditableField from "./ui/EditableField.vue";
import DateField from "./ui/DateField.vue";
import { IWork, IWorksData } from "@/types";

const data = ref<IWorksData>({
  title: "Work",
  works: [],
});

onBeforeMount(() => {
  console.log("beforemount");
});

function changeHandler() {
  console.log(data.value);
}
</script>

<style scoped></style>
