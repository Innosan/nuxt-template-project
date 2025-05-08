<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UCard>
		<template #header>
			<div class="text-primary-500 flex items-center gap-2">
				<UIcon :name="icon" class="h-8 w-8" />
				<h3 class="text-2xl font-bold">{{ title }}</h3>
			</div>

			<p class="text-sm opacity-70">{{ description }}</p>
		</template>

		<slot />
	</UCard>
</template>
