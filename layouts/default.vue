<template>
	<div>
		<header class="text-center flex items-center justify-center">
			<NuxtLink to="/" aria-label="Logo To-Do"  class="block w-[180px] text-center overflow-hidden">
      	<span class="flex justify-center items-center gap-2 text-center font-black p-2 text-2xl">
      		<PhCalendarCheck :size="32" class="text-black"/>
      		To-Do List
      	</span>
      </NuxtLink>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>
<script setup>
	import { PhCalendarCheck } from '@phosphor-icons/vue'
</script>
