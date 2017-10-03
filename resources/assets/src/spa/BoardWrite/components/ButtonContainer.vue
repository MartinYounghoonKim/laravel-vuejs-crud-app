<template>
<div class="button-wrap">
  <button 
    type="button" 
    class="btn btn-primary"
    @click="completedBoard"
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
    completedBoard () {
      this.$emit('completedBoard');
    }
  }
}
</script>
<style lang="scss" scope>
.button-wrap{
  margin-top:40px;
}
</style>