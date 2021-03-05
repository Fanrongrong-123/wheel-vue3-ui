<template>
  <div class="markdown-body" v-html="md">
  </div>
</template>

<script lang="ts">
import md from '../makrdowm/GetStart.md'
export default {
  data(){
    return {md}
  }
}
</script>
