<template>
    <Button @click="xxx" @focus="xxx" @mouseover="xxx">
      你好
    </Button>
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
