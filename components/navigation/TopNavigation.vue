<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/utility/NavigationLink";

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
});
</script>

<template>
	<UNavigationMenu orientation="horizontal" :links="navigation" />
</template>
