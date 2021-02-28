<template>
  <button class="wheel-button" :class="`wheel-theme-${theme}`">
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

<style lang="scss">
$h: 32px;
$border-color: #9d9d9d;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.wheel-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer; //光标成手型
  display: inline-flex; //行内flex布局
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
