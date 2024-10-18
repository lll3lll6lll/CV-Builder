<script setup lang="ts">
import { PropType, ref } from "vue";
import ResumeCard from "@/components/ResumeCard/ResumeCard.vue";
import Button from "../ui/Button.vue";
import CheckBox from "../ui/CheckBox.vue";

type Card = {
  id: number;
};

const props = defineProps({
  items: { type: Array as PropType<Card[]>, required: false },
});

const selectedValue = ref([]);

function setValue(val: string) {
  console.log(val);
}
</script>

<template>
  <div class="grid">
    <ResumeCard
      v-for="item in props.items"
      :key="'grid-card-' + item.id"
      :id="item.id"
    />
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
