<script setup lang="ts">
import { ref } from "vue";
import LayoutPopup from "./popups/LayoutPopup.vue";
import FontPopup from "./popups/FontPopup.vue";
import FormatPopup from "./popups/FormatPopup.vue";
import DownloadPopup from "./popups/DownloadPopup.vue";

const menu = [
  {
    name: "layout",
    label: "Layout",
    icon: "mingcute:layout-8-fill",
    component: LayoutPopup,
  },
  {
    name: "font",
    label: "Font",
    icon: "fa-solid:font",
    component: FontPopup,
  },
  {
    name: "format",
    label: "Format",
    icon: "basil:settings-solid",
    component: FormatPopup,
  },
  {
    name: "download",
    label: "Download",
    icon: "streamline:download-circle-solid",
    component: DownloadPopup,
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
        <Icon :icon="item.icon" width="24" height="24" />
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
$bg: #36394f;
.menu {
  height: 40px;
  padding: 6px;
  border-radius: 50px;
  background-color: $bg;
  align-items: center;
  font-size: 15px;
  display: inline-flex;
  position: relative;

  &-item {
    display: flex;
    align-items: center;
    padding: 4px;
    margin: 0 14px;
    span {
      margin-left: 12px;
    }
  }
  .trigger {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: #079894;
    }
  }

  .dropdown {
    background-color: $bg;
    position: absolute;
    top: 58px;
    border-radius: 8px;
    padding: 18px;
  }
}
</style>
