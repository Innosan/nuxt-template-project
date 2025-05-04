<script setup lang="ts">
import { z } from "zod";

const { t } = useI18n();
const { signIn, signUp } = useAuth();

const schema = z.object({
	email: z
		.string({ message: t("auth.validation.required") })
		.email(t("auth.validation.email")),
	password: z
		.string({ message: t("auth.validation.required") })
		.min(6, t("auth.validation.password")),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	email: "",
	password: "",
});

const toast = useToast();

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

const currentTab = ref("0");

const buttonState = computed(() => {
	return {
		variant: currentTab.value === "0" ? "subtle" : "solid",
		label:
			currentTab.value === "0"
				? t("auth.buttons.login")
				: t("auth.buttons.register"),
		icon:
			currentTab.value === "0"
				? "i-heroicons-user-20-solid"
				: "i-heroicons-user-plus-solid",
		disabled: state.email === "" || state.password === "",
	};
});

const onSubmit = async () => {
	if (currentTab.value === "0") {
		await signIn(state.email, state.password);
	} else {
		await signUp(state.email, state.password);
	}
};
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="m-auto w-1/2 space-y-4"
		@submit="onSubmit"
	>
		<UTabs
			v-model="currentTab"
			:items="tabs"
			variant="link"
			class="w-full gap-4"
			:ui="{ trigger: 'flex-1' }"
		>
			<template #sign-in="{ item }">
				<UContainer class="flex flex-col gap-4 px-0 sm:px-0 lg:px-0">
					<p class="mb-4 text-[var(--ui-text-muted)]">
						{{ item.description }}
					</p>

					<UFormField :label="$t('auth.labels.email')" name="email">
						<UInput v-model="state.email" class="w-full" />
					</UFormField>

					<UFormField
						:label="$t('auth.labels.password')"
						name="password"
					>
						<UInput
							v-model="state.password"
							type="password"
							class="w-full"
						/>
					</UFormField>
				</UContainer>
			</template>

			<template #create-new="{ item }">
				<UContainer class="flex flex-col gap-4 px-0 sm:px-0 lg:px-0">
					<p class="mb-4 text-[var(--ui-text-muted)]">
						{{ item.description }}
					</p>

					<UFormField :label="$t('auth.labels.email')" name="email">
						<UInput v-model="state.email" class="w-full" />
					</UFormField>

					<UFormField
						:label="$t('auth.labels.password')"
						name="password"
					>
						<UInput
							v-model="state.password"
							type="password"
							class="w-full"
						/>
					</UFormField>
				</UContainer>
			</template>
		</UTabs>

		<UButton
			:disabled="buttonState.disabled"
			loading-auto
			type="submit"
			:label="buttonState.label"
			:icon="buttonState.icon"
			:variant="buttonState.variant"
			block
		/>
	</UForm>
</template>
