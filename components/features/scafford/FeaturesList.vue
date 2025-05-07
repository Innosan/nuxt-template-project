<script setup lang="ts">
const { t } = useI18n();

const featuresList = computed(() => [
	{
		title: t("scaffold-page.features.heading"),
		icon: "i-heroicons-check-circle-solid",
		description: t("scaffold-page.features.description"),
		list: [
			t("scaffold-page.features.supabase"),
			t("scaffold-page.features.base-components"),
			t("scaffold-page.features.i18n"),
		],
	},
	{
		title: t("scaffold-page.usage.heading"),
		icon: "i-heroicons-play-circle-solid",
		description: t("scaffold-page.usage.description"),
		list: [
			t("scaffold-page.usage.install"),
			t("scaffold-page.usage.run"),
			t("scaffold-page.usage.start"),
		],
	},
	{
		title: t("scaffold-page.documentation.heading"),
		icon: "i-heroicons-book-open-solid",
		description: t("scaffold-page.documentation.description"),
		list: [
			t("scaffold-page.documentation.read"),
			t("scaffold-page.documentation.explore"),
			t("scaffold-page.documentation.contribute"),
		],
	},
]);
</script>

<template>
	<div
		class="m-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
	>
		<template v-for="feature in featuresList" :key="feature.title">
			<FeatureCard
				:title="feature.title"
				:icon="feature.icon"
				:description="feature.description"
			>
				<ul class="list-disc pl-6">
					<li v-for="(item, index) in feature.list" :key="index">
						{{ item }}
					</li>
				</ul>
			</FeatureCard>
		</template>
	</div>
</template>
