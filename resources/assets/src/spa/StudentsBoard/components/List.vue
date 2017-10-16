<template>
    <div class="">
        <table class="table table-striped">
            <caption></caption>
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>User BirthDay</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <board-content
                v-for="content in Contents"
                :content="content"
                :key="content.key"
                @deleteContent="deleteContent"
            >
            </board-content>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import getApi from '../../../api/api_core.js';
  import BOARD_CONSTANT from '../../../constants/board.constants.js';
  import BoardContent from './ListContent.vue';

  export default {
    name: 'BoardList',
    computed: {
      ...mapGetters({
        Contents: BOARD_CONSTANT.GET.LIST
      })
    },
    beforeMount () {
      //this.$store.dispatch('getContentsData');
      this.$store.dispatch(BOARD_CONSTANT.SET.LIST);
    },
    methods: {
      deleteContent (targetId) {
        //this.$store.dispatch('deleteContent', targetId);
        this.$store.dispatch( BOARD_CONSTANT.DESTROY.DETAIL, targetId );
      }
    },
    components: {
      BoardContent
    }
  }
</script>

<style lang="scss">

</style>
