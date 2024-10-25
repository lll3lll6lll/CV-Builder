<template>
  <div>
    <EditableField
      v-model="works.title"
      class="uppercase font-bold text-amber-600 text-xl"
    ></EditableField>
    <Work></Work>
  </div>
</template>

<script setup lang="ts">
import store from "@/store";
import { IWork, IWorksData } from "@/types";
import { computed } from "vue";
import EditableField from "../ui/EditableField.vue";
import Work from "./Work.vue";

const works = computed({
  get: () => {
    return store.state.works;
  },
  set: (value: IWork) => {
    store.commit("addWork", value);
  },
});
</script>

<style scoped></style>
