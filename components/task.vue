<template>
	<div class="bg-green-600 font-medium rounded-md px-3 py-2 text-white flex justify-between items-center gap-2 ">
		<NuxtLink :to="'/'+task.id" class="p-3 overflow-clip text-left">
			{{task.title}}
		</NuxtLink>
		<button>
			<PhTrash :size="40" :data-id="task.id" @click="$emit('delete', task.id)" class="p-2 del"/>	
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