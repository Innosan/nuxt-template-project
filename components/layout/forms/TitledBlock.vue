<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	spacing: {
		type: String as PropType<'gap-1' | 'gap-2' | 'gap-3' | 'gap-4'>,
		default: 'gap-1',
	},
});
</script>

<template>
	<div
		class="flex flex-col"
		:class="props.spacing"
	>
		<p class="opacity-70 text-sm">{{ title }}</p>
		<slot />
	</div>
</template>
