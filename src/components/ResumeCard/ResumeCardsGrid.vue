<script setup lang="ts">
import { PropType } from "vue";
import ResumeCard from "@/components/ResumeCard/ResumeCard.vue";

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
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
</style>
