<template>
<div>
  <h2>Edit student information</h2>
  <crud-form
    :student="student"
  ></crud-form>
  <button-container
    @editData="editData"
    :targetId="student.id"
  ></button-container>
</div>
</template>

<script>
import ButtonContainer from './components/ButtonContainer';
import CrudForm from '../../common/CrudForm/AppContainer';
import { mapGetters } from 'vuex';

export default {
  name: 'board-edit',
  computed: {
    ...mapGetters({
      student: 'getStudentData'
    })
  },
  beforeMount() {
    const targetId = this.$route.params.id;

    this.$store.dispatch('getStudentData', targetId);
  },
  methods: {
    editData (id) {
      this.$store.dispatch('editData', { id });
    }
  },
  components: {
    CrudForm,
    ButtonContainer
  }
}
</script>

<style>

</style>
