<template>
  <div>
    <EditableField
      v-model="works!.title"
      class="uppercase font-bold text-amber-600 text-xl mb-2 underline"
    ></EditableField>
    <Work></Work>
  </div>
</template>

<script setup lang="ts">
import { IWorksData } from "@/types";
import { defineModel } from "vue";
import EditableField from "../ui/EditableField.vue";
import Work from "./Work.vue";

const works = defineModel<IWorksData>();
</script>

<style scoped></style>
