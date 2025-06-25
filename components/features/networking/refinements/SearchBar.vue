<script lang="ts" setup>
const refinementsStore = useRefinementsStore();
</script>

<template>
	<UInput
		v-model="refinementsStore.searchValue"
		size="xl"
		icon="i-heroicons-magnifying-glass-16-solid"
		:placeholder="$t('recommendations.search.placeholder')"
		:ui="{ trailing: 'pe-1' }"
	>
		<template v-if="refinementsStore.searchValue?.length" #trailing>
			<UButton
				color="neutral"
				variant="link"
				size="sm"
				icon="i-heroicons-x-mark-16-solid"
				:aria-label="$t('recommendations.search.clear')"
				@click="refinementsStore.searchValue = ''"
			/>
		</template>
	</UInput>
</template>
