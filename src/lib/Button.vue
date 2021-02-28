<template>
  <button class="wheel" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: true,
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },
};
</script>

<style scoped lang="scss"></style>
