import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		guides: defineCollection({
			source: "guides/**",
			type: "page",
		}),
	},
});
