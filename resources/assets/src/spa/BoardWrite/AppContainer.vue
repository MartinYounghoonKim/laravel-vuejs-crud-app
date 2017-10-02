<template>
<div>
  <name-form></name-form>
  <birthday-form></birthday-form>
  <email-form></email-form>
  <button-container></button-container>
</div>

</template>
<script>
import ButtonContainer from './components/ButtonContainer';
import BirthdayForm from './components/BirthdayForm';
import EmailForm from './components/EmailForm';
import NameForm from './components/NameForm';

export default {
  name: 'board-write',
  data (){
    return{
      editing: false
    }
  },
  components: {
    ButtonContainer,
    BirthdayForm,
    EmailForm,
    NameForm
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
