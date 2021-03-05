<template>
  <div>
    <div class="topnavAngBanner">
      <Topnav/>
      <div class="banner">
        <h1>Vue3 UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="#">GitHub</a>|
          <router-link to="/doc/get-start">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%); //圆弧
}

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
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
