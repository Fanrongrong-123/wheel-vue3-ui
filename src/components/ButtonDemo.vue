<template>
  <Button>hello</Button>
  <Button theme="button">button</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
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

<style lang="scss"></style>
