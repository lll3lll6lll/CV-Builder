<script setup lang="ts">
import { PropType, ref } from "vue";
import ResumeCard from "@/components/ResumeCard/ResumeCard.vue";
import Button from "../ui/Button.vue";
import CheckBox from "../ui/CheckBox.vue";
import { IResume } from "@/types";
import { Icon } from "@iconify/vue";
import store from "@/store";

const props = defineProps({
  items: { type: Array as PropType<IResume[]>, required: false },
});

const selectedValue = ref([]);

function setValue(val: string) {
  console.log(val);
}
function addResume() {
  store.commit("addResume", {});
}
function removeResume(id: string) {
  store.commit("removeResume", id);
}
</script>

<template>
  <div class="grid">
    <ResumeCard
      v-for="item in props.items"
      :key="'grid-card-' + item.id"
      :id="item.id"
      @remove="removeResume(item.id)"
    />
    <div class="bg-white bg-opacity-20 rounded-md" @click="addResume">
      <Icon icon="opportunity" height="100" width="100" color="red"></Icon>
    </div>
  </div>
  <Button class="login-btn">Login</Button>
  <div class="">
    <CheckBox
      value="One"
      label="One"
      @update:model-value="setValue"
      v-model="selectedValue"
    />
    <CheckBox
      value="two"
      label="Two"
      @update:model-value="setValue"
      v-model="selectedValue"
    />
    <CheckBox
      value="three"
      label="Three"
      @update:model-value="setValue"
      v-model="selectedValue"
    />
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.login-btn {
  margin: 10px auto;
  margin-top: 35px;
  width: 180px;
}
</style>
