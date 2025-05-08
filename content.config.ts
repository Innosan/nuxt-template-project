import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		guides: defineCollection({
			source: "guides/**",
			type: "page",
			schema: z.object({
				date: z.string(),
				locale: z.string().default("en"),
				icon: z.string(),
			}),
		}),
	},
});
