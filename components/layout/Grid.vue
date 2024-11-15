<script setup lang="ts">
import {
	classNames,
	defaultGridOptions,
	type GridOptions,
} from "~/types/ui/GridOptions";

const props = defineProps({
	options: {
		type: Object as PropType<GridOptions>,
		default: () => defaultGridOptions,
	},
});

// TODO: Add support for responsive columns (Need to wait for Nuxt UI and Tailwind v4 to update)
</script>

<template>
	<div
		class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
	>
		<slot />
	</div>
</template>
