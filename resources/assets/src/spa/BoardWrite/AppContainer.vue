<template>
<div>
  <name-form
    @writeUserName="writeUserName"
  ></name-form>
  <birthday-form
    @writeUserBirthday="writeUserBirthday"
  ></birthday-form>
  <email-form
    @writeUserEmail="writeUserEmail"
  ></email-form>
  <button-container
    @completedBoard="completedBoard"
  ></button-container>
</div>

</template>
<script>
import ButtonContainer from './components/ButtonContainer';
import BirthdayForm from './components/BirthdayForm';
import EmailForm from './components/EmailForm';
import NameForm from './components/NameForm';

export default {
  name: 'board-write',
  methods: {
    writeUserName(userName){
      this.$store.dispatch('writeUserName', { userName });
    },
    writeUserBirthday(userBirthday){
      this.$store.dispatch('writeUserBirthday', { userBirthday });
    },
    writeUserEmail(userEmail){
      this.$store.dispatch('writeUserEmail', { userEmail });
    },
    completedBoard () {
      console.log(1);
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
