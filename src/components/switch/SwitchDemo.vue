<template>
  <div>
    <h1>Switch 组件示例</h1>
    <h1>示例一</h1>
    <Demo :component="SwitchDemo1"/>
    <h1>示例二</h1>
    <Demo :component="SwitchDemo2"/>
  </div>

</template>

<script lang="ts">
import SwitchDemo1 from './Switch.demo1.vue';
import SwitchDemo2 from './Switch.demo2.vue';
import Demo from '../Demo.vue';


export default {
  components: {Demo},
  setup() {
    return {SwitchDemo1, SwitchDemo2};
  }
};
</script>
