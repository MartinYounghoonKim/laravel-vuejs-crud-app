<template>
<tr>
  <td>{{ content.id }}</td>
  <td>{{ content.name }}</td>
  <td>{{ content.birth_date }}</td>
  <td>{{ content.email }}</td>
  <td>
    <button type="button" class="btn btn-primary">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </td>
</tr>
</template>
<script>
export default {
  name: 'BoardContent',
  props: {
    content: Object
  }
}
</script>
