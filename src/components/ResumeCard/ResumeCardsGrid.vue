<script setup lang="ts">
import { PropType } from "vue";
import ResumeCard from "@/components/ResumeCard/ResumeCard.vue";
import Button from "../ui/Button.vue";
import CheckBox from "../ui/CheckBox.vue";

type Card = {
  id: number;
};

const props = defineProps({
  items: { type: Array as PropType<Card[]>, required: false },
});
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
    <CheckBox value="Name" name="val" text="One" />
    <CheckBox value="Two" name="val" text="Two" />
    <CheckBox value="Three" name="val" text="Three" />
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
