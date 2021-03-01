<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-onclick-overlay="true" :ok="ok" :cancel="cancel"></Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false)

    const toggle = () => {
      visible.value = !visible.value
    }
    const ok = () => {return false}

    const cancel = () => {console.log('h2')}

    return {visible, toggle, ok, cancel}
  }
}
</script>

<style scoped>

</style>
