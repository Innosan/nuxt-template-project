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
</script>

<template>
	<div class="grid" :class="classNames(options)">
		<slot />
	</div>
</template>
