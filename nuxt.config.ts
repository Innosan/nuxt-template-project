export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@formkit/auto-animate/nuxt',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/i18n',
		"@nuxt/eslint",
		'@nuxt/image', // Delete this line if you don't need it (and from package.json)
	],

	runtimeConfig: {
		// Public keys that are exposed to the client
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
		},
	},

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	devtools: { enabled: true },
	css: ['~/assets/styles/main.css'],

	ui: {
		theme: {
			colors: ['cerise', 'blue', 'green'],
		},
	},

	i18n: {
		strategy: 'no_prefix',
		defaultLocale: 'ru',
		locales: [
			{
				code: 'ru',
				file: 'ru.json',
				name: 'Русский',
			},
			{
				code: 'en',
				file: 'en.json',
				name: 'English',
			},
			{
				code: 'ko',
				file: 'ko.json',
				name: '한국어',
			},
		],
	},

	image: {
		domains: ['nekos.best'],
	},

	compatibilityDate: '2025-04-21',
});
