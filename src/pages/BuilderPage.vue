<script setup lang="ts">
import { useRoute } from "vue-router";
import MainMenu from "@/components/BulderMenu/MainMenu.vue";
import BuilderHeader from "@/components/BuilderHeader/BuilderHeader.vue";

const props = defineProps({
  items: { type: Array, required: false },
});

const route = useRoute();
</script>

<template>
  <div class="builder">
    <router-link :to="{ name: 'main' }">back</router-link>

    <MainMenu />
    <div class="builder__page">
      <BuilderHeader></BuilderHeader>
    </div>
  </div>

  <div>builder page {{ route.params }}</div>
</template>

<style scoped lang="scss">
.builder {
  &__page {
    width: 840px;
    height: 1188px;
    background: #fff;
    margin: 0 auto;
  }
}
</style>
