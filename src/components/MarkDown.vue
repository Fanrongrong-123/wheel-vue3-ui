<template>
  <div class="markdown-body" v-html="content">
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>
