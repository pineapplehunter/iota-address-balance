<template>
  <ul class="nav">
    <li class="nav-item" v-for="page in pages" :key="page.index">
      <a class="nav-link active" :href="page.path">{{ page.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        // {
        //   name: 'Main',
        //   path: '/#/',
        //   index: 0
        // },
        // {
        //   name: 'Change node',
        //   path: '/#/changenode',
        //   index: 1
        // },
        // {
        //   name: 'from Seed',
        //   path: '/#/fromseed',
        //   index: 2
        // }
      ]
    }
  }
}
</script>

<style scoped>
a {
  margin-bottom: 10px;
}
</style>

