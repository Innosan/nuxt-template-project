import type { Article } from "~/types/server/Article";

export const useArticlesStore = defineStore("articles", () => {
	const articles = ref<Article[]>([]);

	async function fetchArticles() {
		const config = useRuntimeConfig();

		try {
			articles.value = await $fetch(config.public.apiBase + "/articles");
		} catch (error) {
			console.error(error);
		}
	}

	return {
		articles,
		fetchArticles,
	};
});
