<script setup lang="ts">
definePageMeta({
	middleware: ["auth"],
});
</script>

<template>
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold">{{ $t("settings.title") }}</h1>

		<UAlert
			:title="$t('settings.alert.label')"
			:description="$t('settings.alert.description')"
			:icon="'i-heroicons-cog-solid'"
			variant="subtle"
		/>

		<ClientOnly>
			<div class="flex flex-col gap-4 md:flex-row md:flex-wrap">
				<ActionCard
					:title="$t('settings.theme.label')"
					:description="$t('settings.theme.description')"
					hide-description-on-small
				>
					<template #action>
						<ThemeSwitch />
					</template>
				</ActionCard>

				<ActionCard
					:title="$t('settings.color.label')"
					:description="$t('settings.color.description')"
					hide-description-on-small
				>
					<template #action>
						<ColorSwitch />
					</template>
				</ActionCard>

				<ActionCard
					:title="$t('settings.language.label')"
					:description="$t('settings.language.description')"
					hide-description-on-small
				>
					<template #action>
						<LanguageSwitcher />
					</template>
				</ActionCard>
			</div>
		</ClientOnly>
	</div>
</template>
