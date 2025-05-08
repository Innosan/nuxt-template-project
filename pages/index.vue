<script setup lang="ts">
const appConfig = useAppConfig();

definePageMeta({
	title: "Home",
	heading: "Home",
	description: "Home page",
});
</script>

<template>
	<PageSection :is-divided="false">
		<div class="mt-12 flex flex-col items-center gap-6">
			<h2 class="w-2/3 text-center text-6xl font-black">
				{{
					$t("scaffold-page.heading", { appName: appConfig.appName })
				}}
			</h2>

			<p
				class="text-primary-500 text-center text-3xl font-bold underline decoration-4 underline-offset-4"
			>
				{{ $t("scaffold-page.description") }}
			</p>
		</div>

		<div class="m-auto my-16 flex flex-col gap-8">
			<FeaturesList />

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
		</div>
	</PageSection>
</template>
