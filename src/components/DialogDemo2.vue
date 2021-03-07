<demo>一键打开 Dialog</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>

<script>
import {openDialog} from '../lib/openDialog.ts'
import Button from '../lib/Button.vue';
export default {
  components:{Button},
  setup() {
    const showDialog = () => {
      openDialog(
          {
            title: '标题', content: '你好',
            ok() {console.log('ok')},
            cancel() {console.log('cancel')},
            closeOnclickOverlay: true
          })
    }
    return {showDialog}
  }
}
</script>
