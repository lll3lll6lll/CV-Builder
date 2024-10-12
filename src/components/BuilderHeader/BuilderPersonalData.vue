<template>
  <p @click="$emit('openModal')" class="text-white font-bold text-3xl mb-2">
    Nata Nat
  </p>
  <EditableField
    v-model="data.profTitle"
    class="text-yellow-400 mr-4 border-b-yellow-400 text-xl"
  ></EditableField>
  <EditableField
    v-model="data.about"
    class="text-white border-b-white"
  ></EditableField>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditableField from "../ui/EditableField.vue";

const emits = defineEmits(["openModal"]);
const data = ref<{ profTitle: string; about: string }>({
  profTitle: "Professional Title",
  about: "Short and engaging pitch about yourself.",
});
</script>

<style scoped lang="scss"></style>
