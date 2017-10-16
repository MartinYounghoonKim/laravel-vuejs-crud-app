<template>
    <div class="view-wrapper">
        <div class="view-contents">
            <dl>
                <dt>Name</dt>
                <dd>{{ student.name }}</dd>
            </dl>
            <dl>
                <dt>Email</dt>
                <dd>{{ student.email }}</dd>
            </dl>
            <dl>
                <dt>Birth Date</dt>
                <dd>{{ student.birth_date }}</dd>
            </dl>
        </div>
        <div class="button-wrapper">
            <button
                @click="deleteContent"
                type="button"
                class="btn btn-danger"
            >Delete
            </button>
            <router-link
                to="/board/list"
                class="btn btn-success"
            >Back</router-link>
        </div>
    </div>
</template>

<script>
  import BOARD_CONSTANT from '../../../constants/board.constants.js';
  import { mapGetters, mapActions } from 'vuex';
  import router from '../../../router';

  export default {
    name: 'BoardView',
    computed: {
      ...mapGetters({
        student: BOARD_CONSTANT.GET.DETAIL
      })
    },
    beforeMount() {
      const targetId = this.$route.params.id;

      this.$store.dispatch(BOARD_CONSTANT.SET.DETAIL, targetId);
    },
    methods: {
      deleteContent(){
        this.$store.dispatch(BOARD_CONSTANT.DESTROY.DETAIL, this.student.id)
        .then((res)=>{

          //완료 후, 완료에 대한 메시지를 노출 후 다시 list 페이지로 redirect 시킴
          alert(res);
          router.push('/board/list');
        })
      }
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
