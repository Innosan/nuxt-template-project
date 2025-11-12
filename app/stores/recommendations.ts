import {
	type Recommendations,
	getDefaultRecommendations,
} from "~~/types/server/recommendations";
import { searchFields, getValueByPath } from "~~/app/utils/search";

import { getToast, Toasts } from "~~/types/ui/Toasts";

export const useRecommendationsStore = defineStore(
	"nuxt-template-recommendations",
	() => {
		const refinementsStore = useRefinementsStore();
		const toasts = useToast();
		const recommendations = ref<Recommendations>(
			getDefaultRecommendations(),
		);

		const filteredList = computed(() => {
			const list = recommendations.value.data ?? [];

			// Don't search if input is a trigger or empty
			if (
				!refinementsStore.searchValue ||
				refinementsStore.searchValue.startsWith(":")
			) {
				return list;
			}

			const field = searchFields.find(
				(f) => f.trigger === refinementsStore.activeField,
			);
			if (!field) return list;

			return list.filter((item) => {
				const fieldValue = getValueByPath(item, field.key);
				return fieldValue
					?.toString()
					.toLowerCase()
					.includes(refinementsStore.searchValue.toLowerCase());
			});
		});

		const page = ref(1);
		const limit = ref(20);

		const paginatedList = computed(() => {
			const list = filteredList.value;
			const start = (page.value - 1) * limit.value;
			const end = start + limit.value;

			return list.slice(start, end);
		});

		const total = computed(() => filteredList.value.length);

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
