<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="selected">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tab, Tabs},
  setup() {
    const selected = ref('导航一');
    return {selected};
  }
};
</script>
