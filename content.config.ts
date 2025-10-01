import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		guides: defineCollection({
			source: "guides/*.md",
			type: "page",
			schema: z.object({
				date: z.string(),
				locale: z.string(),
				icon: z.string(),
			}),
		}),
	},
});
