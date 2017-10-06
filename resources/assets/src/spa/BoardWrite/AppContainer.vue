<template>
<div>
  <h2>Create student</h2>
  <crud-form></crud-form>
</div>

</template>
<script>
import CrudForm from '../../common/CrudForm/AppContainer';

export default {
  name: 'board-write',
  methods: {
  },
  components: {
    CrudForm
  }
}
</script>
<style lang="scss">
.form-group{
  padding:10px 0 0;
  label{
    display:block;
    margin-bottom:10px;
    text-align:left;
  }
}
</style>
