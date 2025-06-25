export const useRefinementsStore = defineStore("refinements", () => {
	const searchValue = ref("");

	return {
		searchValue,
	};
});
