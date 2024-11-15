export default defineNuxtConfig({
	devtools: { enabled: true },

	ui: {
		theme: {
			colors: ["cerise", "blue", "green"],
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: "tab",
				semi: true,
			},
		},
	},

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxt/eslint",

		"@nuxt/image", // Delete this line if you don't need it (and from package.json)
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	image: {
		domains: ["nekos.best"],
	},

	css: ["~/assets/styles/main.css"],
});
