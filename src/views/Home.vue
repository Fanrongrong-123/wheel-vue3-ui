<template>
  <div>
    <div class="topnavAngBanner">
      <Topnav/>
      <div class="banner">
        <h1>Vue3 UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="#">GitHub</a>|
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
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
$blue: #02bcb0;

.topnavAngBanner {
  background: rgb(227, 255, 253);
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  color: #03928b;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $blue;
      color: white;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
