<template>
  <div>
    <span>Button示例</span>
    <h1>示例1</h1>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
    <h1>示例2</h1>
    <div>
      <Button size="big">大大大</Button>
      <Button>正正常</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="link">大大大</Button>
      <Button theme="link">正正常</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">正正常</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
</template>

<script lang="js">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup() {
    const xxx = () => {
      console.log('hi')
    }
    return {xxx}
  }
}
</script>

<style lang="scss">

</style>
