<script setup lang="ts">
import type { PropType } from "vue";
import { type SectionSize, SectionSizes } from "~/types/ui/SectionSizes";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: "",
	},
	size: {
		type: Object as PropType<SectionSize>,
		required: true,
	},
});
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon v-if="icon" :name="icon" :class="size.iconSize" />

		<h2 class="font-bold" :class="size.titleSize">
			{{ title }}
		</h2>
	</div>
</template>
