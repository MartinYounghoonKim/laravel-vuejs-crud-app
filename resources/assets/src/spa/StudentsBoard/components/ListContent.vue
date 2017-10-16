<template>
    <tr>
        <td>{{ content.id }}</td>
        <td>{{ content.name }}</td>
        <td>{{ content.birth_date }}</td>
        <td>{{ content.email }}</td>
        <td>
            <router-link
                :to="{path: 'edit/' + content.id }"
                class="btn btn-primary"
            >Edit</router-link>
            <button
                @click="deleteContent"
                type="button"
                class="btn btn-danger"
            >Delete</button>
            <router-link
                :to="{ path: 'view/' + content.id }"
                class="btn btn-info"
            >Show</router-link>
        </td>
    </tr>
</template>
<script>
  export default {
    name: 'ListContent',
    props: {
      content: Object
    },
    methods: {
      deleteContent () {
        const wantDelete = confirm('Are you sure?');
        if(wantDelete === false) return false;

        const targetId = this.content.id;
        this.$emit('deleteContent', targetId );
      }
    }
  }
</script>
