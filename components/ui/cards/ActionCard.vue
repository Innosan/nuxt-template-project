<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
		default: "",
	},
});
</script>

<template>
	<div
		class="flex w-full items-center justify-between rounded-md p-4 ring-1 ring-zinc-300 md:w-auto md:flex-col md:items-start md:gap-4 dark:ring-zinc-700"
	>
		<div class="flex flex-col">
			<p class="text-sm font-bold">{{ title }}</p>

			<p v-if="description" class="hidden text-sm text-zinc-500 md:block">
				{{ description }}
			</p>
		</div>

		<slot name="action" />
	</div>
</template>
