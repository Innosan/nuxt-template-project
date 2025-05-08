export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxt/eslint",

		"@formkit/auto-animate/nuxt",

		"@nuxtjs/i18n",

		// @feature/content - start
		"@nuxt/content",
		// @feature/content - end
	],
	// @feature/networking - start
	runtimeConfig: {
		apiBase: process.env.NUXT_API_BASE || "/api",
	},
	// @feature/networking - end
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	devtools: { enabled: true },
	css: ["~/assets/styles/main.css"],

	ui: {
		theme: {
			colors: [
				"cerise",
				"blue",
				"green",
				"error",
				"warning",
				"success",
				"info",
			],
		},
	},

	fonts: {
		defaults: {
			weights: [400, 700],
			styles: ["normal"],
			subsets: ["cyrillic-ext", "cyrillic", "latin-ext", "latin"],
		},
	},

	i18n: {
		strategy: "no_prefix",
		defaultLocale: "en",
		locales: [
			{
				code: "en",
				file: "en.json",
				name: "English",
			},
			{
				code: "ru",
				file: "ru.json",
				name: "Русский",
			},
			{
				code: "de",
				file: "de.json",
				name: "Deutsch",
			},
			{
				code: "ja",
				file: "ja.json",
				name: "日本語",
			}
		],
	},
	compatibilityDate: "2025-05-08",
});
