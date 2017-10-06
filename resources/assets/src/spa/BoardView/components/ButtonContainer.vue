<template>
<div class="button-wrapper">
  <button 
    @click="deleteContent"
    type="button" 
    class="btn btn-danger"
  >Delete
  </button>
  <button type="button">
  </button>
</div>  
</template>

<script>
export default {
  name: "button-wrapper",
  props: {
    targetId: Number
  },
  methods: {
    deleteContent(){
      const wantDelete = confirm('Are you sure?');

      if(wantDelete === false) return false;

      const targetId = this.targetId;

      this.$emit('deleteContent', { targetId });
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper{
  text-align:center; 
}
</style>
