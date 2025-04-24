<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: "",
		required: false,
	},
	spacing: {
		type: String as PropType<"gap-1" | "gap-2" | "gap-3" | "gap-4">,
		default: "gap-1",
	},
});
</script>

<template>
	<div class="flex flex-col" :class="props.spacing">
		<p class="text-sm opacity-70">{{ title }}</p>
		<slot />
	</div>
</template>
