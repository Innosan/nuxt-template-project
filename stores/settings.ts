import { persistOptions } from '~/utils/persistence';

export const useSettingsStore = defineStore(
	'settings-store',
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
			primaryColor,
			grayColor,
			setPrimaryColor,
			setGrayColor,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
