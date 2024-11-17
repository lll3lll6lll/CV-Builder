<template>
  <div>
    <EditableField
      v-model="tittle"
      class="uppercase font-bold text-amber-600 text-xl mb-2 underline"
    ></EditableField>
    <Work></Work>
  </div>
</template>

<script setup lang="ts">
import { IWork } from "@/types";
import { defineModel } from "vue";
import EditableField from "../ui/EditableField.vue";
import Work from "./Work.vue";

const works = defineModel<IWork[]>();
const tittle = defineModel<string>("tittle");
</script>

<style scoped></style>
