<template>
  <div id="app">
    <Mheader></Mheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from './components/Mheader'
export default {
  name: 'app',
  components:{
    Mheader
  },
    created () {
    // console.log(this.$store)
    this.$store.dispatch('getAllMovies')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
