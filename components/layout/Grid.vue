<script setup lang="ts">
import type { PropType } from 'vue';

type GridCols = 1 | 2 | 3 | 4 | 5 | 6;
type TailwindGridCols<Prefix extends string = ''> =
	`${Prefix}grid-cols-${GridCols}`;

const props = defineProps({
	columns: {
		type: String as PropType<TailwindGridCols>,
		default: 'grid-cols-1',
	},
	md: {
		type: String as PropType<TailwindGridCols<'md:'>>,
		default: 'md:grid-cols-2',
	},
	lg: {
		type: String as PropType<TailwindGridCols<'lg:'>>,
		default: 'lg:grid-cols-4',
	},
	xl: {
		type: String as PropType<TailwindGridCols<'xl:'>>,
		default: 'xl:grid-cols-6',
	},
	gap: {
		type: String,
		default: 'gap-4',
	},
});

const classes = computed(() => {
	return `grid ${props.gap} ${props.columns} ${props.md} ${props.lg} ${props.xl}`;
});
</script>

<template>
	<div :class="classes">
		<slot />
	</div>
</template>
