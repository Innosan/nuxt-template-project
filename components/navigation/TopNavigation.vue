<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/general";

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
});
</script>

<template>
	<UHorizontalNavigation :links="navigation" />
</template>
