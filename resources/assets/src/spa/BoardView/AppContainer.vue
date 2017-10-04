<template>
<div class="view-wrapper">
  <div class="view-contents">
    <dl>
      <dt>Name</dt>
      <dd>{{ student[0].name }}</dd>
    </dl>
    <dl>
      <dt>Email</dt>
      <dd>{{ student[0].email }}</dd>
    </dl>
    <dl>
      <dt>Birth Date</dt>
      <dd>{{ student[0].birth_date }}</dd>
    </dl>
  </div>
  <button-container></button-container>
</div>  
</template>

<script>
import ButtonContainer from './components/ButtonContainer';
import { mapGetters } from 'vuex';

export default {
  name: 'board-view',
  computed: {
    ...mapGetters({
      student: 'getStudentData'
    })
  },
  methods: {
    
  },
  components: {
    ButtonContainer
  }
}
</script>

<style lang="scss" scoped>
.view-wrapper{
  text-align:left;
  margin-top:20px;
  .view-contents{
    margin-bottom:20px;
    padding:20px 40px;
    border:3px solid #ececec;
  }
  dl{
    margin-bottom:15px;
    dt{
      margin-bottom:10px;
      font-weight:bold;
    }
    dd{
      margin:0;
    }
  }
}
</style>
