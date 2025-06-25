import { searchFields } from "~/utils/search";

export const useRefinementsStore = defineStore(
	"nuxt-template-refinements",
	() => {
		const searchValue = ref("");
		const activeField = ref<string>(searchFields[0].trigger); // default :content

		const onEnter = () => {
			// If input is a trigger
			if (searchValue.value.startsWith(":")) {
				const trimmedInput = searchValue.value.trim();
				// If it's the same as current, remove (reset to default)
				if (activeField.value === trimmedInput) {
					activeField.value = searchFields[0].trigger;
					searchValue.value = "";

					return;
				}
				// If it's a valid trigger, switch
				if (searchFields.some((f) => f.trigger === trimmedInput)) {
					activeField.value = trimmedInput;
					searchValue.value = "";

					return;
				}
			}
		};

		const removeSearchField = () => {
			activeField.value = searchFields[0].trigger;
			searchValue.value = "";
		};

		return {
			searchValue,
			activeField,
			onEnter,
			removeSearchField,
		};
	},
);
