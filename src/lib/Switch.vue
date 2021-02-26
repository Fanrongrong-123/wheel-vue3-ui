<template>
  <div>
    <button @click="toggle" :class="{checked}">
      <span>
        <span class="off">关</span>
        <span class="on">开</span>
      </span>
    </button>
    {{ checked }}
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
  }
};
</script>

<style scoped lang="scss">
$h: 22px;
$h2: 22-4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
  font-size: 8px;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    > .on{
      display: none;
    }
  }
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px); // 移到最外面再向内移一个span的宽度加两像素
  > .on{
    display: block;
  }
  > .off{
    display: none;
  }
}

button.checked {
  background: blue;
}

</style>
