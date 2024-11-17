<template>
  <div v-click-outside="outsideHandler">
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
    <DateView v-model:start="data.dateStart"></DateView>
  </div>
</template>

<script setup lang="ts">
import { defineModel, PropType, ref } from "vue";
import EditableField from "@/components/ui/EditableField.vue";
import { IWork } from "@/types";
import DateView from "@/components/ui/Date/DateView.vue";

const data = defineModel({
  type: Object as PropType<IWork>,
  default: {},
});

const isEditable = ref(false);

function changeHandler() {
  console.log(data.value);
}

function editHandler() {
  isEditable.value = true;
}
function outsideHandler() {
  isEditable.value = false;
}
</script>

<style scoped></style>
