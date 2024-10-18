<script setup lang="ts">
import router from "@/router";
import Button from "@/components/ui/Button.vue";

const props = defineProps({
  id: { type: Number, required: false },
});

const onClick = () => {
  router.push({ name: `builder`, params: { resumeId: props.id } });
};
const onClickHandelerButton = () => {
  console.log("button click");
  console.log(window.devicePixelRatio);
};
</script>

<template>
  <div @click="onClick" class="card">
    Resume {{ id }}
    <Button @click="onClickHandelerButton">resume {{ id }}</Button>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  background-color: rgba(255, 255, 255, 0.884);
  padding: 5px;
}
</style>
