import { defaultSettings } from "~/utils/default-settings";

export default defineAppConfig({
	appName: defaultSettings.appName,
	appIcon: defaultSettings.appIcon,
	showIcon: defaultSettings.showIcon,

	ui: {
		colors: {
			primary: defaultSettings.primaryColor,
			error: defaultSettings.errorColor,
			neutral: defaultSettings.grayColor,
		},
	},
});
