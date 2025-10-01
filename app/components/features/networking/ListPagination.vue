<script lang="ts" setup>
const recommendationsStore = useRecommendationsStore();
watch(
	() => recommendationsStore.page,
	() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	},
);
</script>

<template>
	<UPagination
		v-model:page="recommendationsStore.page"
		:items-per-page="recommendationsStore.limit"
		:total="recommendationsStore.total"
	/>
</template>
