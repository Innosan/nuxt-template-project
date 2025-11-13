<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();

definePageMeta({
	middleware: ["auth"],
});

useSeoMeta({
	title: "Documentation Guides - Robust Nuxt Template",
	description:
		"Comprehensive documentation and guides for Robust Nuxt Template. Learn how to use Nuxt 3, TypeScript, Supabase authentication, Capacitor mobile development, and more.",
	keywords:
		"documentation, guides, tutorials, Nuxt 3, Vue.js, TypeScript, Supabase, Capacitor, mobile development, web development",
	ogTitle: "Documentation Guides - Robust Nuxt Template",
	ogDescription:
		"Comprehensive documentation and guides for Robust Nuxt Template. Learn how to use Nuxt 3, TypeScript, Supabase authentication, Capacitor mobile development, and more.",
	ogType: "website",
	ogUrl: "https://your-domain.com" + route.path,
	twitterCard: "summary",
	twitterTitle: "Documentation Guides - Robust Nuxt Template",
	twitterDescription:
		"Learn Nuxt 3, TypeScript, Supabase, and Capacitor with comprehensive guides and tutorials",
});

const _guides = await queryCollection("guides")
	.where("locale", "=", locale.value)
	.all();

const guides = ref(_guides);

watchEffect(async () => {
	guides.value = await queryCollection("guides")
		.where("locale", "=", locale.value)
		.all();
});
</script>

<template>
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold">{{ $t("navigation.guides") }}</h1>

		<UAlert
			:title="$t('guides.alert.label')"
			:description="$t('guides.alert.description')"
			icon="i-heroicons-light-bulb-20-solid"
			variant="subtle"
		/>

		<div class="flex gap-2 items-center">
			<ActionCard
				:title="$t('guides.total')"
				:description="guides.length.toString()"
			/>

			<ActionCard
				:title="$t('guides.last-updated')"
				:description="guides[0]?.date || 'N/A'"
			/>

			<ActionCard :title="$t('guides.locale')" :description="locale" />
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<GuideCard
				v-for="guide in guides"
				:key="guide.id"
				:title="guide.title"
				:description="guide.description"
				:icon="guide.icon"
				:date="guide.date"
				:path="guide.path"
			/>
		</div>
	</div>
</template>
