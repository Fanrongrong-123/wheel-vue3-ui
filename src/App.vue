<template>
  <div>导航栏
    <router-link to="/">test</router-link>
    <router-link to="/xxx">frank</router-link>
    <hr/>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>
