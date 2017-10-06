<template>
<div>
  <name-form
    @writeUserName="writeUserName"
    :name="student.name"
  ></name-form>
  <birthday-form
    @writeUserBirthday="writeUserBirthday"
    :birthday="student.birth_date"
  ></birthday-form>
  <email-form
    @writeUserEmail="writeUserEmail"
    :email="student.email"
  ></email-form>
</div>

</template>
<script>
import BirthdayForm from './components/BirthdayForm';
import EmailForm from './components/EmailForm';
import NameForm from './components/NameForm';

export default {
  name: 'board-write',
  props: {
    'student': Object
  },
  methods: {
    writeUserName(userName){
      this.$store.dispatch('writeUserName', { userName });
    },
    writeUserBirthday(userBirthday){
      this.$store.dispatch('writeUserBirthday', { userBirthday });
    },
    writeUserEmail(userEmail){
      this.$store.dispatch('writeUserEmail', { userEmail });
    }
  },
  components: {
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
