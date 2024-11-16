import type { AnimeArt } from '~/types/data/AnimeArt';

export const useAnimeStore = defineStore('anime-store', () => {
	const nekoArts = ref<AnimeArt[]>([]);
	const isLoading = ref(false);
	const isRefilling = ref(false);

	const getNekoArtsByAmount = async (amount: number) => {
		isLoading.value = true;
		const data: { results: [] } = await $fetch(
			`https://nekos.best/api/v2/neko?amount=${amount}`,
		);
		isLoading.value = false;

		return data.results as AnimeArt[];
	};

	const getArts = async (refill: boolean) => {
		isLoading.value = true;
		isRefilling.value = refill;

		if (refill) {
			const newArts = await getNekoArtsByAmount(12);

			nekoArts.value.push(...newArts);
			isRefilling.value = false;
		} else {
			nekoArts.value = await getNekoArtsByAmount(12);
		}

		isLoading.value = false;
	};

	return {
		nekoArts,
		isLoading,
		isRefilling,
		getArts,
	};
});
