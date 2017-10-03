<template>
<div class="button-wrap">
  <button 
    type="button" 
    class="btn btn-primary"
    @click="completedWrite"
  >Post</button>
  <button 
    type="button" 
    class="btn btn-danger"
  >Cancel</button>
</div>
</template>
<script>
export default {
  name: 'button-wrap',
  methods: {
    completedWrite () {
      this.$emit('completedWrite');
    }
  }
}
</script>
<style lang="scss" scope>
.button-wrap{
  margin-top:40px;
}
</style>