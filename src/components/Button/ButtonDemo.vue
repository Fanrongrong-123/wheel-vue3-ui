<template>
  <div>
    <span>Button示例</span>
    <h1>示例1</h1>
    <Demo :component="ButtonDemo1"/>
    <h1>示例2</h1>
    <Demo :component="ButtonDemo2"/>
    <h1>示例3</h1>
    <Demo :component="ButtonDemo3"/>
    <h1>示例4</h1>
    <Demo :component="ButtonDemo4"/>
    <h1>示例5</h1>
    <Demo :component="ButtonDemo5"/>
  </div>
</template>

<script lang="js">
import ButtonDemo1 from './ButtonDemo1.vue'
import ButtonDemo2 from './ButtonDemo2.vue'
import ButtonDemo3 from './ButtonDemo3.vue'
import ButtonDemo5 from './ButtonDemo5.vue'
import ButtonDemo4 from './ButtonDemo4.vue'
import Demo from '../Demo.vue'

export default {
  components: {Demo},
  setup() {
    return {ButtonDemo4, ButtonDemo5, ButtonDemo3, ButtonDemo2, ButtonDemo1}
  }
}
</script>
