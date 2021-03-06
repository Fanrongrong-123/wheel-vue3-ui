<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </div>

</template>

<script lang="ts">
import 'prismjs';
import {ref} from 'vue';
import Button from '../lib/Button.vue';
import SwitchDemo1 from './Switch.demo1.vue';
import SwitchDemo2 from './Switch.demo2.vue';
import 'prismjs/themes/prism.css';
import Demo from './Demo.vue';

const Prism = (window as any).Prism;

export default {
  components: {Demo, Button},
  setup() {
    const bool = ref(false);
    return {bool, SwitchDemo1, SwitchDemo2, Prism};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color; //虚线
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
