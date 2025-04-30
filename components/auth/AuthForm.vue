<script setup lang="ts">
import { z } from "zod";

const { t } = useI18n();
const { signIn, signUp } = useAuth();

const schema = z.object({
	email: z
		.string({ message: t("validation.required") })
		.email(t("validation.email")),
	password: z
		.string({ message: t("validation.required") })
		.min(12, t("validation.password")),
});

type Schema = z.output;

const state = reactive<Partial>({
	email: undefined,
	password: undefined,
});

const toast = useToast();

const tabs = computed(() => [
	{
		label: t("auth.login.label"),
		description: t("auth.login.description"),
		icon: "i-heroicons-user-20-solid",
		slot: "sign-in",
	},
	{
		label: t("auth.register.label"),
		description: t("auth.register.description"),
		icon: "i-heroicons-user-plus-solid",
		slot: "create-new",
	},
]);

const isSubmitDisabled = computed(() => {
	return !state.email || !state.password;
});
</script>

<template>
	<UForm :schema="schema" :state="state" class="m-auto w-1/2 space-y-4">
		<UTabs
			:items="tabs"
			variant="link"
			class="w-full gap-4"
			:ui="{ trigger: 'flex-1' }"
		>
			<template #sign-in="{ item }">
				<p class="mb-4 text-[var(--ui-text-muted)]">
					{{ item.description }}
				</p>

				<UFormField :label="$t('auth.labels.email')" name="email">
					<UInput v-model="state.email" class="w-full" />
				</UFormField>

				<UFormField :label="$t('auth.labels.password')" name="password">
					<UInput
						v-model="state.password"
						type="password"
						class="w-full"
					/>
				</UFormField>

				<UButton
					:disabled="isSubmitDisabled"
					loading-auto
					type="submit"
					@click="signIn(state.email!, state.password!)"
					:label="$t('buttons.submit')"
					block
				/>
			</template>

			<template #create-new="{ item }">
				<p class="mb-4 text-[var(--ui-text-muted)]">
					{{ item.description }}
				</p>

				<UFormField :label="$t('auth.labels.email')" name="email">
					<UInput v-model="state.email" class="w-full" />
				</UFormField>

				<UFormField :label="$t('auth.labels.password')" name="password">
					<UInput
						v-model="state.password"
						type="password"
						class="w-full"
					/>
				</UFormField>

				<UButton
					:disabled="isSubmitDisabled"
					loading-auto
					type="submit"
					@click="signUp(state.email!, state.password!)"
					:label="$t('buttons.submit')"
					block
				/>
			</template>
		</UTabs>
	</UForm>
</template>
