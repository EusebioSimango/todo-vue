<script>
	export default {
		computed: {
			...mapState(useMainStore, ['tasks']),
			task() {
				return this.$route.params.task
			},
		},
	}
	
</script>

<template>
	<div class="p-2 pt-10 text-center">
		<div v-for="todo in tasks">
			<div v-if="todo.id == task">
				<p class="font-extralight text-3xl text-green-500">Task Title:</p>
				<p class="font-mono font-black text-9xl text-green-900">{{todo.title}}</p>
				<p class="font-extralight text-3xl text-green-500">Task Desc.:</p>
				<p class="font-normal text-3xl text-green-700">{{todo.desc}}</p>
			</div>
		</div>
		<button><NuxtLink to="/">Back Home</NuxtLink></button>
	</div>
</template>