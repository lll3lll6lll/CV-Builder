<script setup lang="ts">
import router from "@/router";
import { Icon } from "@iconify/vue";

const props = defineProps({
  id: { type: String, required: false },
});

const emits = defineEmits(["remove"]);

const onClick = () => {
  router.push({ name: `builder`, params: { resumeId: props.id } });
};
const onClickHandelerButton = () => {
  console.log("button click");
  console.log(window.devicePixelRatio);
};
</script>

<template>
  <div @click.stop="onClick" class="card relative">
    <button class="absolute right-3" @click.stop="emits('remove')">
      <Icon color="red" icon="mdi:remove"></Icon>
    </button>

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
