<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {ref, provide} from 'vue';
import {router} from './router';

export default {
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width >= 500); //简化 width<500? false:true
    provide('menuVisible', menuVisible); //set
    if (width <= 500) {
      router.afterEach(() => {
        menuVisible.value = false;
      });
    }
  }
};
</script>
