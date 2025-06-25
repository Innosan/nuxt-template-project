<script lang="ts" setup>
const refinementsStore = useRefinementsStore();
</script>

<template>
	<div class="flex flex-col">
		<UInput
			v-model="refinementsStore.searchValue"
			size="xl"
			icon="i-heroicons-magnifying-glass-16-solid"
			:placeholder="$t('recommendations.search.placeholder')"
			:ui="{ trailing: 'pe-1' }"
			@keydown.enter="refinementsStore.onEnter"
		/>

		<p class="text-xs text-primary mt-1">
			Searching by
			<b>{{ refinementsStore.activeField.replace(":", "") }}</b>
		</p>
	</div>
</template>
