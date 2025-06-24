import {
	type Recommendations,
	getDefaultRecommendations,
} from "~/types/server/recommendations";

import { getToast, Toasts } from "~/types/ui/Toasts";

export const useRecommendationsStore = defineStore(
	"nuxt-template-recommendations",
	() => {
		const toasts = useToast();
		const recommendations = ref<Recommendations>(
			getDefaultRecommendations(),
		);

		const page = ref(1);
		const limit = ref(10);
		const total = computed(() => recommendations.value.data?.length ?? 0);

		const paginatedList = computed(() => {
			const list = recommendations.value.data ?? []; // Fallback to []
			const start = (page.value - 1) * limit.value;
			const end = start + limit.value;
			return list.slice(start, end);
		});

		async function fetchRecommendations(type: "anime" | "manga") {
			const { data, error } = await useFetch<Recommendations>(
				"/api/recommendations/" + type,
			);

			if (data.value?.data) {
				recommendations.value = data.value;
			} else {
				toasts.add(
					getToast(
						Toasts.ERROR,
						`Failed to load recommendations. ${error.value?.message}`,
					),
				);
			}
		}

		return {
			// State
			recommendations,
			paginatedList,

			// Pagination getters
			page,
			limit,
			total,

			// Actions
			fetchRecommendations,
		};
	},
);
