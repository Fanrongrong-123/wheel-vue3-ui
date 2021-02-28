<template>
  <button class="wheel-button" :class="xxx">
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  inheritAttrs: true,
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const {theme, size} = props;
    const xxx = computed((props) => {
      return {
        [`wheel-theme-${theme}`]: theme,
        [`wheel-size-${size}`]: size,
      };
    });
    return {xxx};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #9d9d9d;
$color: #333;
$green: #34FC7E;
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
    color: $green;
    border-color: $green;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.wheel-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;

    &:hover, &:focus {
      color: lighten($green, 10%);
    }
  }

  &.wheel-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);
    }
  }
  &.wheel-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.wheel-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>
