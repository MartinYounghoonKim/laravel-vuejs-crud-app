<template>
<div class="form-group">
  <label for="exampleInputEmail1">Name</label>
  <input 
    @blur="writeUserName"
    type="text" 
    class="form-control" 
    placeholder="Enter your name" 
    name="name"
  />
</div>
</template>
<script>
export default {
  name: 'name-form',
  methods: {
    writeUserName (e) {
      const userName = e.target.value;

      this.$emit('writeUserName', userName);
    }
  }
}
</script>
<style>

</style>
