<template>
  <div class="topnav">
    <span class="toggalMenu" @click="toggalMenu" v-if="toggalMenuButtonVisible">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggalMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  padding: 8px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    background: #f6f8fa;
    box-shadow: 0 0 3px rgb(0 0 0 / 25%);

  }

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
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
      color: #03928b;
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
