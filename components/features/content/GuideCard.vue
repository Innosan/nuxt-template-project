<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "i-heroicons-light-bulb-20-solid",
	},
	date: {
		type: String,
		default: "",
	},
	path: {
		type: String,
		required: true,
	},
});
</script>
<template>
	<div
		class="flex flex-col gap-4 justify-between ring-1 ring-gray-200 dark:ring-zinc-700 rounded-lg p-4 shadow-sm hover:shadow-md transistion-all"
	>
		<div class="flex gap-2 items-center">
			<UIcon :name="icon" class="w-6 h-6" />

			<span class="text-sm">{{ title }}</span>
			<span v-if="date" class="text-xs text-gray-400 font-semibold"
				>({{ date }})</span
			>
		</div>

		<p class="text-sm text-gray-500">{{ description }}</p>

		<UButton
			:label="$t('guides.navigate')"
			:to="path"
			variant="outline"
			icon="i-heroicons-arrow-right-solid"
		/>
	</div>
</template>
