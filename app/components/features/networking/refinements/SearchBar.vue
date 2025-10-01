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

		<div class="flex p-2 items-center gap-2">
			<p class="text-sm text-primary">
				Searching by
				<b>{{ refinementsStore.activeField.replace(":", "") }}</b>
			</p>

			<UButton
				v-if="refinementsStore.activeField !== ':content'"
				color="neutral"
				size="xs"
				:label="$t('recommendations.search.reset-to-default')"
				variant="link"
				icon="i-heroicons-x-mark-16-solid"
				@click="refinementsStore.removeSearchField"
			/>
		</div>
	</div>
</template>
