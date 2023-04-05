<script>
	export default {
		computed: {
			task() {
				return this.$route.params.task
			}
		}
	}
	
</script>

<template>
	<div> 
		<h1 v-if="task == 0">zero</h1>
		<h1 v-if="task != 0">anything</h1>
	</div>
</template>