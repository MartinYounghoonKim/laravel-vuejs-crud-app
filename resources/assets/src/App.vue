<template>
<div id="app">
	앱
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentLocation: window.location.pathname,
      locationDefault: '$router',
      locationMove: '',
      hasLocationHistory: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
