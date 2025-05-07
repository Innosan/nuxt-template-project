<script setup lang="ts">
import { useAuthForm } from "~/composables/authForm";

const { schema, state, tabs, currentTab, buttonState, onSubmit } =
	useAuthForm();
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

		<UButton v-bind="buttonState" loading-auto type="submit" block />
	</UForm>
</template>
