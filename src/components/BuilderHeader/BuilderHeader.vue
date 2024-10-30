<template>
  <div class="">
    <div class="flex justify-between items-center bg-blue-300 p-8">
      <div class="">
        <BuilderPersonalData
          @open-modal="openModal"
          class="max-w-[50%]"
        ></BuilderPersonalData>
      </div>

      <BuilderPhoto></BuilderPhoto>
    </div>
  </div>

  <DialogPopup v-model:is-show="isShowDialog">
    <template v-slot:header>
      <AccountSettings class="w-[450px]"></AccountSettings>
    </template>
  </DialogPopup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BuilderPersonalData from "./BuilderPersonalData.vue";
import BuilderPhoto from "./BuilderPhoto.vue";
import DialogPopup from "../ui/DialogPopup.vue";
import AccountSettings from "../Account/AccountSettings.vue";
const isShowDialog = ref(false);

function openModal() {
  console.log("sdjhfjshd");
  isShowDialog.value = true;
}
</script>

<style scoped lang="scss"></style>
