<template>
    <div class="app-header">
        <h1>CRUD with Laravel &amp; Vuejs</h1>
        <router-link to="/board/create" class="btn btn-success">New</router-link>
        <router-link to="/board/list" class="btn btn-info">View List</router-link>
    </div>
</template>

<script>
  export default {
    name: 'BoardContainer'
  }
</script>

<style lang="scss">

</style>
