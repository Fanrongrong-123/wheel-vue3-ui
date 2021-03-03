<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div class="wheel-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :class="{selected:t===selected}" @click="select(t)"
           :ref="el=>{ if (el) navItems[index]=el}">{{ t }}
      </div>
      <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wheel-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {ref, onMounted, onUpdated, computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value; //获取nav的div
      const result = divs.filter(div => div.classList.contains('selected'))[0]; //筛选出含有selected的元素
      const {width} = result.getBoundingClientRect(); //获取选中nav的宽度
      indicator.value.style.width = width + 'px'; //让indicator的宽度等于选中Nav的宽度
      const {left: left1} = container.value.getBoundingClientRect(); //获取整个nav的左坐标
      const {left: left2} = result.getBoundingClientRect();//获取选中nav的左坐标
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(x);
    onUpdated(x);

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子标签必须是Tab');
      }
    });

    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag) => {
      return tag.props.title; //拿到Tab.title内容
    });

    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, navItems, indicator, container, current};
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
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
