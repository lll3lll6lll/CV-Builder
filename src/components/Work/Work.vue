<template>
  <div>
    <div class="" @click="editHandler">
      <EditableField
        v-model="data.position"
        plceholder="Title/Position"
        class="text-black font-bold text-lg mb-1"
        @change="changeHandler"
      ></EditableField>
      <EditableField
        v-model="data.company"
        plceholder="Workplace/Company"
        @change="changeHandler"
        class="mb-1"
      ></EditableField>
    </div>

    <div :class="{ hidden: !isEditable, block: isEditable }">
      <div class="flex">
        <DateField v-model="data.dateStart"></DateField>
        <span>-</span>
        <DateField v-model="data.dateEnd"></DateField>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel, onBeforeMount, PropType, ref } from "vue";
import EditableField from "@/components/ui/EditableField.vue";
import DateField from "@/components/ui/DateField.vue";
import { IWork } from "@/types";

const data = defineModel({
  type: Object as PropType<IWork>,
  default: {},
});

const isEditable = ref(false);

onBeforeMount(() => {
  console.log("beforemount");
});

function changeHandler() {
  console.log(data.value);
}

function editHandler() {
  isEditable.value = !isEditable.value;
}
</script>

<style scoped></style>
