<template>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
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

<style scoped>

</style>
