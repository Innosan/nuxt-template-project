<script setup lang="ts">
const recommendationsStore = useRecommendationsStore();
const route = useRoute();

useSeoMeta({
	title: "Anime Recommendations - Robust Nuxt Template",
	description:
		"Discover personalized anime recommendations using the Jikan API. Browse anime series and find your next favorite show with our powerful recommendation engine.",
	keywords:
		"anime recommendations, Jikan API, anime discovery, anime series, watch anime, anime database, anime search",
	ogTitle: "Anime Recommendations - Robust Nuxt Template",
	ogDescription:
		"Discover personalized anime recommendations using the Jikan API. Browse anime series and find your next favorite show with our powerful recommendation engine.",
	ogType: "website",
	ogUrl: "https://your-domain.com" + route.path,
	twitterCard: "summary",
	twitterTitle: "Anime Recommendations - Robust Nuxt Template",
	twitterDescription:
		"Personalized anime recommendations powered by Jikan API for discovering your next favorite series",
});

const { pending } = await useAsyncData("recommendations", async () => {
	recommendationsStore.fetchRecommendations("anime");
	return true;
});

definePageMeta({
	middleware: ["auth"],
});
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

		<SearchToolbar />

		<div
			v-if="pending"
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
		>
			<USkeleton v-for="i in 10" :key="i" class="w-full h-24" />
		</div>
		<div
			v-else
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
		>
			<RecommendationCard
				v-for="(
					recommendation, index
				) in recommendationsStore.paginatedList"
				:key="`${recommendation.mal_id}-${index}`"
				:recommendation="recommendation"
			/>
		</div>

		<ListPagination />
	</div>
</template>
