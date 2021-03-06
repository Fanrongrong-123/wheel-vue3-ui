<template>
  <button class="wheel-button" :class="classes" :disabled="disabled" :loading="loading">
    <span v-if="loading" class="wheel-loadingIndicator"></span>
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
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level, disabled, loading} = props;
    const classes = computed(() => {
      return {
        [`wheel-theme-${theme}`]: theme,
        [`wheel-size-${size}`]: size,
        [`wheel-level-${level}`]: level,
        [`wheel-disabled-${disabled}`]: disabled,
        [`wheel-loading-${loading}`]: loading,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #9d9d9d;
$color: #333;
$green: #088300;
$radius: 4px;
$red: red;
$grey: grey;
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

  &.wheel-theme-button {
    &.wheel-level-main {
      background: $green;
      color: white;
      border-color: $green;

      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }

    &.wheel-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.wheel-theme-link {
    &.wheel-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.wheel-theme-text {
    &.wheel-level-main {
      color: $green;

      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }

    &.wheel-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.wheel-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.wheel-theme-link, &.wheel-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .wheel-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $green $green $green transparent;
    border-style: solid;
    border-width: 2px;
    animation: wheel-spin 1s infinite linear;
  }
}

@keyframes wheel-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
