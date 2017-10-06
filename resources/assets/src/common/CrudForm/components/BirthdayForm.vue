<template>
<div class="form-group">
  <label for="exampleInputEmail1">Birthday</label>
  <input
    @blur="writeUserBirthday"
    :value="birthday"
    type="text" 
    class="form-control" 
    placeholder="Enter your birthday" 
    name="birth_date"
  />
</div>
</template>

<script>
export default {
  name: 'birthday-form',
  props:{
    birthday: String
  }, 
  methods: {
    writeUserBirthday (e) {
      const userBirthday = e.target.value;

      this.$emit('writeUserBirthday', userBirthday);
    }
  }
}
</script>

<style>

</style>
