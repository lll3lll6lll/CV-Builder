<script setup lang="ts">
import { ref } from "vue";
import TestForPopup from "@/components/BulderMenu/TestForPopup.vue";

const menu = [
  {
    name: "layout",
    label: "",
    icon: "mingcute:layout-8-fill",
    component: TestForPopup,
  },
  { name: "font", label: "", icon: "fa-solid:font", component: TestForPopup },
  {
    name: "format",
    label: "",
    icon: "basil:settings-solid",
    component: TestForPopup,
  },
  {
    name: "download",
    label: "Download",
    icon: "streamline:download-circle-solid",
    component: TestForPopup,
  },
];

const hoveredItem = ref("");
let hidePopupTimer: ReturnType<typeof setTimeout> | null = null;

const showPopup = (name: string) => {
  if (hidePopupTimer) {
    clearTimeout(hidePopupTimer);
    hidePopupTimer = null;
  }
  hoveredItem.value = name;
};

const hidePopup = () => {
  hidePopupTimer = setTimeout(() => {
    hoveredItem.value = "";
  }, 300);
};
</script>

<template>
  <div class="menu">
    <div class="menu-item" v-for="item in menu" :key="item.name + item.icon">
      <div
        class="trigger"
        @mouseenter="showPopup(item.name)"
        @mouseleave="hidePopup()"
      >
        <Icon :icon="item.icon" width="32" height="32" />
        <span v-if="item.label"> {{ item.label }} </span>
      </div>

      <div
        v-if="hoveredItem === item.name"
        class="dropdown"
        @mouseenter="showPopup(item.name)"
        @mouseleave="hidePopup()"
      >
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  height: 40px;
  padding: 6px;
  border-radius: 50px;
  background-color: #36394f;
  align-items: center;
  font-size: 15px;
  display: inline-flex;
  position: relative;

  &-item {
    display: flex;
    align-items: center;
    padding: 4px;
    margin: 0 10px;
    span {
      margin-left: 12px;
    }

    &:hover {
      color: #079894;
    }
  }

  .dropdown {
    width: 200px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    //transform: translateX(50%);
    top: 100%;
  }
}
</style>
