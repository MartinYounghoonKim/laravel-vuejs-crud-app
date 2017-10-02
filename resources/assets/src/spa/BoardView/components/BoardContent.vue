<template>
<tr>
  <td>{{ content.id }}</td>
  <td>{{ content.name }}</td>
  <td>{{ content.birth_date }}</td>
  <td>{{ content.email }}</td>
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
