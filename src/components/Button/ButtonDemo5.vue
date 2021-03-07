<demo>支持显示加载中</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button @click="onclick" :loading="isloading">点我</Button>
  </div>
</template>

<script lang="js">
import Button from '../../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {Button},
  setup() {
    const isloading = ref(false)
    const onclick = () => {
      isloading.value = !isloading.value
      return isloading
    }
    return {onclick, isloading}
  }
}
</script>
