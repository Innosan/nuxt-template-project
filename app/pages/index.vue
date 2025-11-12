<script setup lang="ts">
const appConfig = useAppConfig();

definePageMeta({
	title: "Home",
	heading: "Home",
	description: "Home page",
	// @feature/auth - start
	layout: "authed",
	// @feature/auth - end
});
</script>

<template>
	<div class="flex flex-col gap-2">
		<UPageHero
			:title="$t('scaffold-page.heading', { appName: appConfig.appName })"
			:description="$t('scaffold-page.description')"
		/>

		<UPageSection>
			<FeaturesList />
		</UPageSection>

		<UPageSection>
			<UAlert
				:title="$t('scaffold-page.essential-documentation.heading')"
				color="neutral"
				variant="subtle"
				:description="
					$t('scaffold-page.essential-documentation.description')
				"
				icon="i-heroicons-information-circle-solid"
				:actions="[
					{
						label: 'Nuxt',
						icon: 'i-heroicons-arrow-top-right-on-square-solid',
						color: 'primary',
						variant: 'solid',
						to: 'https://nuxt.com/docs/getting-started/introduction',
					},
					{
						label: 'Nuxt UI',
						icon: 'i-heroicons-arrow-top-right-on-square-solid',
						color: 'error',
						variant: 'solid',
						to: 'https://ui.nuxt.com/',
					},
					{
						label: 'Supabase',
						icon: 'i-heroicons-arrow-top-right-on-square-solid',
						color: 'info',
						variant: 'solid',
						to: 'https://supabase.com/docs/guides/getting-started',
					},
				]"
			/>
		</UPageSection>
	</div>
</template>
