<template>
  <div class="topnav">
    <span class="toggalMenu" @click="toggalMenu">菜单</span>
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggalMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggalMenu};
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      align-items: center;
      margin: 0 auto;
    }
  }
  @media (min-width: 500px) {
    .toggalMenu {
      display: none;
    }
  }
}

</style>
