<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool"/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  name:'SwitchDemo1',
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>
