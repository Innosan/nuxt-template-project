export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@formkit/auto-animate/nuxt',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxt/eslint',
		'@nuxt/image', // Delete this line if you don't need it (and from package.json)
	],

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

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},

	image: {
		domains: ['nekos.best'],
	},
});
