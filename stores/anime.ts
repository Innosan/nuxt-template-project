import type { AnimeArt } from '~/types/data/AnimeArt';
import type { FetchParams } from '~/types/server/FetchParams';

export const useAnimeStore = defineStore('anime-store', () => {
	const nekoArts = ref<AnimeArt[]>([]);

	const categories = ref<string[]>([
		'neko',
		'kitsune',
		'waifu',
		'husbando',
		'baka',
		'blush',
		'cuddle',
		'kiss',
		'punch',
		'wink',
	]);

	const isLoading = ref(false);
	const isRefilling = ref(false);

	const getArtsWithParams = async (params: FetchParams) => {
		const config = useRuntimeConfig(); // Access runtime config
		const apiUrl = config.public.apiBase;

		isLoading.value = true;

		const url = params.tag
			? apiUrl + `/${params.tag}?amount=${params.limit}`
			: apiUrl + `/${categories.value[0]}?amount=${params.limit}`;

		const data: { results: [] } = await $fetch(url);

		isLoading.value = false;
		return data.results as AnimeArt[];
	};

	const getArts = async (
		refill: boolean,
		params: FetchParams = { limit: 12 },
	) => {
		isLoading.value = true;
		isRefilling.value = refill;

		if (refill) {
			const newArts = await getArtsWithParams(params);

			nekoArts.value.push(...newArts);
			isRefilling.value = false;
		} else {
			nekoArts.value = await getArtsWithParams(params);
		}

		isLoading.value = false;
	};

	const getArtsByTag = async (tag: string) => {
		isLoading.value = true;

		nekoArts.value = await getArtsWithParams({ limit: 12, tag });
		isLoading.value = false;
	};

	return {
		categories,

		nekoArts,
		isLoading,
		isRefilling,

		getArtsWithParams,
		getArts,
		getArtsByTag,
	};
});
