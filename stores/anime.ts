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
		isLoading.value = true;
		const url = params.tag
			? `https://nekos.best/api/v2/${params.tag}?amount=${params.amount}`
			: `https://nekos.best/api/v2/${categories.value[0]}?amount=${params.amount}`;

		const data: { results: [] } = await $fetch(url);

		isLoading.value = false;
		return data.results as AnimeArt[];
	};

	const getArts = async (
		refill: boolean,
		params: FetchParams = { amount: 12 },
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

		nekoArts.value = await getArtsWithParams({ amount: 12, tag });
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
