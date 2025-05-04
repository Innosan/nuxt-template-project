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
			<div class="m-auto mt-16 flex gap-8">
				<FeatureCard
					:title="$t('scaffold-page.features.heading')"
					icon="i-heroicons-check-circle-solid"
					:description="$t('scaffold-page.features.description')"
				>
					<div class="flex flex-wrap gap-2">
						<UButton
							:label="$t('scaffold-page.features.supabase')"
							variant="subtle"
						/>
						<UButton
							:label="
								$t('scaffold-page.features.base-components')
							"
							variant="subtle"
						/>
						<UButton
							:label="$t('scaffold-page.features.i18n')"
							variant="subtle"
						/>
					</div>
				</FeatureCard>

				<FeatureCard
					:title="$t('scaffold-page.usage.heading')"
					icon="i-heroicons-play-circle-solid"
					:description="$t('scaffold-page.usage.description')"
				>
					<ul class="list-disc pl-6">
						<li>
							{{ $t("scaffold-page.usage.install") }}
						</li>
						<li>{{ $t("scaffold-page.usage.run") }}</li>
						<li>{{ $t("scaffold-page.usage.start") }}</li>
					</ul>
				</FeatureCard>

				<FeatureCard
					:title="$t('scaffold-page.documentation.heading')"
					icon="i-heroicons-book-open-solid"
					:description="$t('scaffold-page.documentation.description')"
				>
					<ul class="list-disc pl-6">
						<li>
							{{ $t("scaffold-page.documentation.read") }}
						</li>
						<li>
							{{ $t("scaffold-page.documentation.explore") }}
						</li>
						<li>
							{{ $t("scaffold-page.documentation.contribute") }}
						</li>
					</ul>
				</FeatureCard>
			</div>

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
