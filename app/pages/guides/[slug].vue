<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();

const rawSlug = route.params.slug as string;

// Extract locale from slug format "guide-1.en"
const parts = rawSlug.split(".");
const slug = parts[0]; // e.g. "guide-1"
const extractedLocale = parts.length > 1 ? parts[1] : locale.value;

// Construct file name and path based on your convention
const fileName = `${slug}.${extractedLocale}.md`;
const filePath = `/guides/${rawSlug}`;

// Query the content
const { data: post } = await useAsyncData(fileName, () =>
	queryCollection("guides").path(filePath).first(),
);

// Handle locale changes
watch(locale, async (newLocale) => {
	// Navigate to new localized URL
	await navigateTo(`/guides/${slug}.${newLocale}`);
});

// Set SEO meta for individual guide pages
if (post?.value) {
	useSeoMeta({
		title: `${post.value.title} - Documentation - Robust Nuxt Template`,
		description: `${post.value.description || "Learn about " + post.value.title} - Part of the comprehensive Robust Nuxt Template documentation`,
		keywords:
			"documentation, guide, tutorial, Nuxt 3, Vue.js, TypeScript, Supabase, Capacitor",
		ogTitle: `${post.value.title} - Documentation - Robust Nuxt Template`,
		ogDescription: `${post.value.description || "Learn about " + post.value.title} - Part of the comprehensive Robust Nuxt Template documentation`,
		ogType: "article",
		ogUrl: "https://your-domain.com" + route.path,
		twitterCard: "summary",
		twitterTitle: `${post.value.title} - Documentation - Robust Nuxt Template`,
		twitterDescription: `${post.value.description || "Learn about " + post.value.title}`,
	});
}
</script>

<template>
	<div>
		<LanguageSwitcher />
		<ContentRenderer v-if="post" :value="post" />
		<div v-else class="p-4">
			<UAlert type="warning">
				{{
					$t(
						"guides.notAvailable",
						"This guide is not available in the selected language.",
					)
				}}
			</UAlert>
		</div>
	</div>
</template>
