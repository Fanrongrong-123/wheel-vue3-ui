<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from '../makrdowm/install.md';

export default {
  data() {
    return {md};
  }
};
</script>
