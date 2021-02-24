<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>VUE3 UI</h1>
        <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="#">GitHub</a>|
        <a href="#">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/topnav.vue';
export default {
  name: 'Home',
  components: {Topnav}
};
</script>

<style lang="scss" scoped>

</style>
