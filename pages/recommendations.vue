<script setup lang="ts">
const recommendationsStore = useRecommendationsStore();
recommendationsStore.fetchRecommendations("anime");
</script>
<template>
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold">{{ $t("recommendations.heading") }}</h1>

		<UAlert
			:title="$t('recommendations.alert.label')"
			:description="$t('recommendations.alert.description')"
			icon="i-heroicons-light-bulb-20-solid"
			variant="subtle"
		/>

		<div v-if="recommendationsStore.loading" class="grid grid-cols-5 gap-4">
			<USkeleton v-for="i in 10" :key="i" class="w-full h-24" />
		</div>
		<div v-else class="grid grid-cols-2 md:grid-cols-5 gap-4">
			<RecommendationCard
				v-for="(
					recommendation, index
				) in recommendationsStore.paginatedList"
				:key="`${recommendation.mal_id}-${index}`"
				:recommendation="recommendation"
			/>
		</div>

		<UPagination
			v-model:page="recommendationsStore.page"
			:items-per-page="recommendationsStore.limit"
			:total="recommendationsStore.total"
		/>
	</div>
</template>
