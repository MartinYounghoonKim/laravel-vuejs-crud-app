<template>
<div class="button-wrap">
  <button 
    type="button" 
    class="btn btn-primary"
    @click="editData"
  >Post</button>
  <button 
    type="button" 
    class="btn btn-danger"
    @click="cancelWrite"
  >Cancel</button>
</div>
</template>
<script>
import route from '../../../router';

export default {
  name: 'button-wrap',
  props: {
    targetId: Number
  },
  methods: {
    editData () {
      this.$emit('editData', this.targetId);
    },
    cancelWrite () {
      route.go(-1);
    }
  }
}
</script>
<style lang="scss" scope>
.button-wrap{
  margin-top:40px;
}
</style>