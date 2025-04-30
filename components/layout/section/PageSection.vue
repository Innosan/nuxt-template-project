<script setup lang="ts">
import type { PropType } from "vue";
import { type SectionSize, SectionSizes } from "~/types/ui/SectionSizes";

defineProps({
	title: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
	size: {
		type: Object as PropType,
		default: () => SectionSizes.md,
	},
	isDivided: {
		type: Boolean,
		default: true,
	},
});
</script>

<template>
	<section class="flex flex-col" :class="size.sectionSpacing">
		<SectionTitle
			v-if="title || icon"
			:title="title"
			:icon="icon"
			:size="size"
		/>

		<slot />
	</section>

	<USeparator v-if="isDivided" />
</template>
