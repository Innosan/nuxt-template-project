import type { Recommendations } from "~~/types/server/recommendations";
import { Toasts, getToast } from "~~/types/ui/Toasts";

export default defineEventHandler(async (event) => {
	const type = getRouterParam(event, "type");

	try {
		return await $fetch<Recommendations>(
			`${useRuntimeConfig(event).apiBase}/recommendations/${type}`,
		);
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusText: `Failed to fetch recommendations to ${
				useRuntimeConfig(event).apiToken
			}.`,
			data: {
				toast: getToast(
					Toasts.ERROR,
					"Failed to load recommendations.",
				),
			},
		});
	}
});
