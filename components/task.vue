<template>
	<div class="bg-green-600 font-medium rounded-md px-3 py-2 text-white flex justify-between items-center">
		<NuxtLink :to="'/'+task.id" class="p-3">
			{{task.title}}
		</NuxtLink>
		<PhTrash :size="40" :data-id="task.id" class="cursor-pointer p-2 del"/>
	</div>
</template>
<script lang="tsx" setup>
	import { PhTrash } from '@phosphor-icons/vue'

</script>
<script lang="tsx">
	export default {
		name: 'Task',
		props: {
			task: {
				type: Object,
				required: true
			}
			
		}
	}
</script>