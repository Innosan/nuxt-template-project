import type { AnimeArt } from "~/types/data/AnimeArt";

export const useAnimeStore = defineStore("anime-store", () => {
	const nekoArts = useState("neko-arts", () => [] as AnimeArt[]);

	const getNekoArtsByAmount = async (amount: number) => {
		const data: { results: [] } = await $fetch(
			`https://nekos.best/api/v2/neko?amount=${amount}`,
		);
		return data.results as AnimeArt[];
	};

	const getArts = async (refill: boolean) => {
		if (refill) {
			const newArts = await getNekoArtsByAmount(12);

			nekoArts.value.push(...newArts);
		} else {
			nekoArts.value = await getNekoArtsByAmount(12);
		}
	};

	return {
		nekoArts,
		getArts,
	};
});
