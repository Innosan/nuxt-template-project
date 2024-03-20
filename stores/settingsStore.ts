export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const primaryColor = ref("violet");
		const grayColor = ref("zinc");

		const setPrimaryColor = (color: string) => {
			primaryColor.value = color;
		};

		const setGrayColor = (color: string) => {
			grayColor.value = color;
		};

		return {
			primaryColor,
			grayColor,
			setPrimaryColor,
			setGrayColor,
		};
	},
	{
		persist: {
			storage: persistedState.cookiesWithOptions({
				maxAge: 60 * 60 * 24 * 120,
				sameSite: "strict",
			}),
		},
	},
);
