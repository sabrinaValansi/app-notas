<template>
  <div id="app">
    <h2>SABRINA VALANSI - 21F</h2>
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
h2{
  text-align: left;
  color: indigo;
  margin-left: 15px;
}
</style>
