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
					@deleteContent="deleteContent"
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
	name: 'board-view',
  computed: {
	  ...mapGetters({
			Contents: 'getContentsData'
		})
	},
	beforeMount () {
		this.$store.dispatch('getContentsData');
	},
	methods: {
		deleteContent (targetId) {
			this.$store.dispatch('deleteContent', targetId);
		}
	},
	components: {
		BoardContent
	}
}
</script>

<style lang="scss">

</style>
