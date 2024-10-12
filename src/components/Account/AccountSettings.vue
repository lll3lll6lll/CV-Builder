<template>
  <div>
    <p class="text-white flex items-center" @click="showAccountSetting">
      Account Settings
      <Icon
        icon="fe:drop-right"
        :class="{ 'ml-1': true, 'rotate-90': isShowAccountSetting }"
      ></Icon>
    </p>
    <div
      :class="{
        'flex justify-between': true,
        'h-0 overflow-hidden': !isShowAccountSetting,
      }"
    >
      <InputField place-holder="Given name" class="w-[50%] mr-2"></InputField>
      <InputField place-holder="Family name" class="w-[50%] ml-2"></InputField>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "../ui/InputField.vue";
import { Icon } from "@iconify/vue";
const isShowAccountSetting = ref(false);
function showAccountSetting() {
  isShowAccountSetting.value = !isShowAccountSetting.value;
}
</script>

<style scoped></style>
