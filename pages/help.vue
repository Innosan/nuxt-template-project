<script setup lang="ts">
import PageSection from "~/components/layout/section/PageSection.vue";
import { SectionSizes } from "~/types/ui/SectionSizes";
</script>

<template>
	<PageSection title="Help" icon="i-heroicons-question-mark-circle-solid">
		<p>This is help page!</p>
	</PageSection>

	<PageSection
		:size="SectionSizes.sm"
		title="Help"
		icon="i-heroicons-question-mark-circle-solid"
		:is-divided="false"
	>
		<p>This is help page! (but with smaller title)</p>
	</PageSection>
</template>
