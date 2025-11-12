import { z } from "zod";
import { useAuth } from "~/composables/auth";
import { useI18n } from "vue-i18n";
import { Tabs } from "~~/types/ui/Tabs";

export const useAuthForm = () => {
	const { t } = useI18n();
	const { signIn, signUp } = useAuth();

	// Schema
	const schema = z.object({
		email: z
			.string({ message: t("auth.validation.required") })
			.email(t("auth.validation.email")),
		password: z
			.string({ message: t("auth.validation.required") })
			.min(6, t("auth.validation.password")),
	});
	type Schema = z.output<typeof schema>;

	// Form state
	const state = reactive<Partial<Schema>>({
		email: "",
		password: "",
	});

	// Tabs
	const currentTab = ref(Tabs.LOGIN);
	const tabs = computed(() => [
		{
			label: t("auth.buttons.login"),
			description: t("auth.login.description"),
			icon: "i-heroicons-user-20-solid",
			slot: "sign-in",
		},
		{
			label: t("auth.buttons.register"),
			description: t("auth.register.description"),
			icon: "i-heroicons-user-plus-solid",
			slot: "create-new",
		},
	]);

	const buttonState = computed<{
		variant: "subtle" | "solid";
		label: string;
		icon: string;
		disabled: boolean;
	}>(() => ({
		variant: currentTab.value === Tabs.LOGIN ? "subtle" : "solid",
		label:
			currentTab.value === Tabs.LOGIN
				? t("auth.buttons.login")
				: t("auth.buttons.register"),
		icon:
			currentTab.value === Tabs.LOGIN
				? "i-heroicons-user-20-solid"
				: "i-heroicons-user-plus-solid",
		disabled: state.email === "" || state.password === "",
	}));

	const onSubmit = async () => {
		if (currentTab.value === Tabs.LOGIN) {
			await signIn(state.email!, state.password!);
		} else {
			await signUp(state.email!, state.password!);
		}
	};

	return {
		// States
		schema,
		state,
		currentTab,

		// Getters
		tabs,
		buttonState,

		// Actions
		onSubmit,
	};
};
