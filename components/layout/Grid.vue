<script setup lang="ts">
const props = defineProps({
	columns: {
		type: Number,
		default: 1,
	},
	responsiveColumns: {
		type: String,
		default: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
	},
	contentGap: {
		type: Number,
		default: 4,
	},
});
</script>

<template>
	<div
		class="grid"
		:class="`gap-${contentGap} grid-cols-${columns} ${responsiveColumns}`"
	>
		<slot />
	</div>
</template>
