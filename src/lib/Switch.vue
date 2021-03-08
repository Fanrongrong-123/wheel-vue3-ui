<template>
  <div>
    <button class="wheel-switch" @click="toggle"
            :class="{checked:value}" :disabled="disabled">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style scoped lang="scss">
$h: 22px;
$h2: 22-4px;
.wheel-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
  font-size: 8px;

  &.checked > span {
    left: calc(100% - #{$h2} - 2px); // 移到最外面再向内移一个span的宽度加两像素
    animation: QQ alternate linear 250ms;
  }

  @keyframes QQ {
    0% {
      width: $h2*1.5;
    }
    75% {
      width: $h2;
    }
    100% {
      width: $h2*1.5;
    }
  }

  &.checked {
    background: #03928b;
  }

  &:focus {
    outline: none; //消除button默认点击的border
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
