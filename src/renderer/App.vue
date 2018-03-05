<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style scoped>
#app {
  padding: 20px;
}
</style>
