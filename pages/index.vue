<script setup lang="ts">
const appConfig = useAppConfig();

definePageMeta({
	title: "Home",
	heading: "Home",
	description: "Home page",
	layout: "authed",
});
</script>

<template>
	<PageSection :is-divided="false">
		<div class="mt-12 flex flex-col items-center gap-6">
			<h2 class="w-2/3 text-center text-6xl font-black">
				{{ appConfig.appName }} is a simple and powerful Nuxt template
			</h2>

			<p
				class="text-primary-500 text-center text-3xl font-bold underline decoration-4 underline-offset-4"
			>
				The only Nuxt template you will ever need
			</p>
		</div>

		<UAlert
			title="README"
			color="neutral"
			variant="subtle"
			description="Check the README file for more information about this template."
			icon="i-heroicons-information-circle-solid"
		/>
	</PageSection>
</template>
