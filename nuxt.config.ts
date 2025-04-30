export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxt/eslint",

		"@formkit/auto-animate/nuxt",

		// @feature/i18n - start
		"@nuxtjs/i18n",
		// @feature/i18n - end

		// @feature/auth - start
		"@nuxtjs/supabase",
		// @feature/auth - end
	],

	// @feature/networking - start
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
		},
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
			colors: ["cerise", "blue", "green"],
		},
	},

	// @feature/i18n - start
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
				code: "ko",
				file: "ko.json",
				name: "한국어",
			},
		],
	},
	// @feature/i18n - end

	// @feature/auth - start
	supabase: {
		// Options
	},
	// @feature/auth - end

	compatibilityDate: "2025-04-21",
});
