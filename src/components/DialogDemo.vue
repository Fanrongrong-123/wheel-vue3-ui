<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import {openDialog} from '../lib/openDialog'

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false)

    const toggle = () => {
      visible.value = !visible.value
    }
    const ok = () => {return false}

    const cancel = () => {console.log('h2')}

    const showDialog = () => {
      openDialog(
          {
            title: '标题', content: '你好',
            ok() {console.log('ok')},
            cancel() {console.log('cancel')},
            closeOnclickOverlay: true
          })
    }
    return {visible, toggle, ok, cancel, showDialog}
  }
}
</script>

<style scoped>

</style>
