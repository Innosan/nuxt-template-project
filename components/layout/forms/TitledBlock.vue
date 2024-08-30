<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col gap-1">
		<p class="opacity-70 text-sm">{{ title }}</p>
		<slot />
	</div>
</template>
