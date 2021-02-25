<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {ref, provide} from 'vue';

export default {
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width >= 500);
    provide('menuVisible', menuVisible); //set
  }
};
</script>
