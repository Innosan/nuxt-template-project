<script setup>
import { useArticlesStore } from "~/stores/articles";

const articlesStore = useArticlesStore();
articlesStore.fetchArticles();
</script>
<template>
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold">{{ $t("articles.heading") }}</h1>

		<div class="grid grid-cols-5 gap-4">
			<template v-if="articlesStore.articles.length > 0">
				<ArticleCard
					v-for="article in articlesStore.articles"
					:key="article.id"
					:article="article"
				/>
			</template>
		</div>
	</div>
</template>
