<template>
  <div>
    <button>
      <span></span>
    </button>

  </div>
</template>

<script lang="ts">
export default {
  name: 'Switch'
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

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
  }

  span:hover {
    left: calc(100% - #{$h2} - 2px); // 移到最外面再向内移一个span的宽度加两像素
  }

}


</style>
