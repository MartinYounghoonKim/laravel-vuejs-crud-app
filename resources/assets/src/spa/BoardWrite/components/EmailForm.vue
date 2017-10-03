<template>
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input
    @blur="writeUserEmail"
    type="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter email" 
    name="email"
  />
</div>
</template>

<script>
export default {
  name: 'email-form',
  methods: {
    writeUserEmail (e) {
      const userEmail = e.target.value;

      this.$emit('writeUserEmail', userEmail);
    }
  }
}
</script>

<style>

</style>
