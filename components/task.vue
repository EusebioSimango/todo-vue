<template>
	<div class="bg-green-600 font-medium rounded-md p-3 py-2 text-white flex justify-between items-center gap-2 ">
		<NuxtLink :to="'/'+task.id" class="p-2 overflow-clip text-left outline-green-100">
			{{task.title}}
		</NuxtLink>
		<button @click="$emit('delete', task.id)" aria-label="remove task" class="outline-2 outline-gray-100  rounded">
			<PhTrash :size="40" class="p-2"/>	
		</button>
	</div>
</template>
<script lang="tsx">
	import { PhTrash } from '@phosphor-icons/vue'

	export default {
		name: 'Task',
		components: {
			PhTrash
		},
		emits: [
			"delete"
		],
		props: {
			task: {
				type: Object,
				required: true
			}
			
		}
	}
</script>