<template>
<div>
  <h2>Create student</h2>
  <crud-form
    :student="student"
  ></crud-form>
  <button-container
    @completedWrite="completedWrite"
  ></button-container>
</div>

</template>
<script>
import CrudForm from '../../common/CrudForm/AppContainer';
import ButtonContainer from './components/ButtonContainer';

export default {
  name: 'board-write',
  data () {
    return {
      student:{}
    }
  },
  methods: {
    completedWrite () {
      this.$store.dispatch('completedWrite');
    }
  },
  components: {
    CrudForm,
    ButtonContainer
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
