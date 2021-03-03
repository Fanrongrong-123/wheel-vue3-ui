<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav">
      <div class="wheel-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :class="{selected:t===selected}" @click="select(t)"
           :ref="el=>{ if (el) navItems[index]=el}"
      >{{ t }}
      </div>
      <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wheel-tabs-content">
      <component class="wheel-tabs-content-item"
                 v-for="(c,index) in defaults" :is="c" :key="index"
                 :class="{selected:c.props.title === selected}"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {ref, onMounted} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    onMounted(() => {
      const divs = navItems.value; //获取nav的div
      const result = divs.filter(div => div.classList.contains('selected'))[0]; //筛选出含有selected的元素
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px'; //让indicator的宽度等于选中Nav的宽度
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title; //拿到Tab.title内容
    });

    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, navItems, indicator};
  }
};
</script>

<style lang="scss">
$green: #088300;
$color: #333;
$border-color: #d9d9d9;

.wheel-tabs {

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $green;
      }
    }

    &-indicator {
      position: absolute;
      width: 100px;
      height: 3px;
      background: $green;
      bottom: -1px;
      left: 0;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}


</style>
