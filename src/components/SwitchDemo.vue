<template>
  <!--  <Switch :value="value" @update:value="value=$event"/>-->
  <Switch v-model:value="value"/>
  <!--  双向绑定value（自动监听value的值）-->
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const value = ref(false);
    return {value};
  }
};
</script>

<style lang="scss" scoped>

</style>
