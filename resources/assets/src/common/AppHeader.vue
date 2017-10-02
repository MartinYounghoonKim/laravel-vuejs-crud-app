<template>
<div class="app-header">
  <h1>CRUD with Laravel &amp; Vuejs</h1>
  <router-link 
    to="/Write"
    class="btn btn-success"
  >New</router-link>
  <router-link 
    to="/"
    class="btn btn-info"
  >View List</router-link>
</div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">

</style>
