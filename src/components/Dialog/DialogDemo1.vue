<demo>常规用法</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-onclick-overlay="true" :ok="ok" :cancel="cancel">
    <template v-slot:content>
      <div>你好</div>
      <div>hi</div>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {return false;};

    const cancel = () => {console.log('h2');};

    return {visible, toggle, ok, cancel};
  }
};
</script>

<style scoped>

</style>
