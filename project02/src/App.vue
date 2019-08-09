<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vheader></vheader>
    <router-view/>

  </div>
</template>

<script>
  import one from "./components/Link1"
  import vheader from "./components/Vheader"
export default {
  name: 'App',
  components:{
    vheader

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
  margin-top: 60px;
}
</style>
