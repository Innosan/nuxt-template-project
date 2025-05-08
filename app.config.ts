import { defaultSettings } from "~/utils/default-settings";

export default defineAppConfig({
	appName: defaultSettings.appName,
	appIcon: defaultSettings.appIcon,
	showIcon: defaultSettings.showIcon,

	ui: {
		// theming
		colors: {
			primary: defaultSettings.primaryColor,
			neutral: defaultSettings.grayColor,

			error: defaultSettings.errorColor,
			success: defaultSettings.successColor,
			warning: defaultSettings.warningColor,
			info: defaultSettings.infoColor,
		},

		// components override
		button: {
			slots: {
				base: "cursor-pointer",
			},
		},
	},
});
