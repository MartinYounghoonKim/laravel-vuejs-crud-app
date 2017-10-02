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
				<th></th>
			</tr>
		</thead>
		<tbody>
				<board-content
					v-for="content in Contents"
					:content="content"
					:key="content.key"
				>
				</board-content>
		</tbody>
	</table>
</div>
</template>

<script>
import BoardContent from './components/BoardContent';
import { mapGetters, mapActions } from 'vuex';
import getApi from '../../api/api_core.js';

export default {
	name: 'main',
  computed: {
	  ...mapGetters({
			Contents: 'getContentsData'
		})
	},
	beforeMount () {
		this.$store.dispatch('getContentsData');
	},
	components: {
		BoardContent
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	font-smoothing: antialiased;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 500px;
	max-width: 800px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	font-smoothing: antialiased;
	font-weight: 300;
}

button,
input[type="checkbox"] {
	outline: none;
}

label{
	margin:0;
	padding:0;
}
table{
	thead{
		th{
			text-align:center;
		}
	}
}
</style>
