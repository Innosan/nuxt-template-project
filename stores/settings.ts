import { persistOptions } from "~/utils/persistence";

export const useSettingsStore = defineStore(
	"nuxt-template-settings",
	() => {
		const primaryColor = ref(defaultSettings.primaryColor);
		const grayColor = ref(defaultSettings.grayColor);

		const setPrimaryColor = (color: string) => {
			primaryColor.value = color;
		};

		const setGrayColor = (color: string) => {
			grayColor.value = color;
		};

		return {
			// State
			primaryColor,
			grayColor,
			
			// Actions
			setPrimaryColor,
			setGrayColor,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
