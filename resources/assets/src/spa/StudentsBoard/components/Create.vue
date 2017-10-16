<template>
    <div>
        <h2>Create student</h2>
        <form @submit.prevent="completedWrite">
            <fieldset>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                        required
                        name="name"
                        v-model="student.name"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Birthday</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your birthday"
                        name="birth_date"
                        v-model="student.birthday"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        v-model="student.email"
                    />
                </div>
                <div class="button-wrap">
                    <button
                        type="submit"
                        class="btn btn-primary"
                    >Post</button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        @click="cancelWrite"
                    >Cancel</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
  import route from '../../../router';
  import BOARD_CONSTANT from '../../../constants/board.constants.js';
  export default {
    name: 'BoardWrite',
    data () {
      return {
        student:{}
      }
    },
    methods: {
      completedWrite () {
        this.$store.dispatch(BOARD_CONSTANT.CREATE.DETAIL, this.student);
      },
      cancelWrite () {
        route.go(-1);
      }
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
    .button-wrap{
        margin-top:40px;
    }
</style>
