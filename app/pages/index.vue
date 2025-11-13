<script setup lang="ts">
const route = useRoute();

useSeoMeta({
	title: "Robust Nuxt Template - Modern Vue.js Application with TypeScript & Supabase",
	description:
		"A powerful Nuxt 3 template featuring TypeScript support, Supabase authentication, cross-platform mobile support with Capacitor, and built-in localization. Build modern web and mobile applications faster.",
	keywords:
		"Nuxt 3, Vue.js, TypeScript, Supabase, Capacitor, cross-platform, mobile app, web development, template, authentication, localization",
	ogTitle:
		"Robust Nuxt Template - Modern Vue.js Application with TypeScript & Supabase",
	ogDescription:
		"A powerful Nuxt 3 template featuring TypeScript support, Supabase authentication, cross-platform mobile support with Capacitor, and built-in localization. Build modern web and mobile applications faster.",
	ogType: "website",
	ogUrl: "https://your-domain.com" + route.path,
	twitterCard: "summary_large_image",
	twitterTitle: "Robust Nuxt Template - Modern Vue.js Application",
	twitterDescription:
		"Powerful Nuxt 3 template with TypeScript, Supabase, and Capacitor for cross-platform development",
});

definePageMeta({
	title: "Home",
	heading: "Home",
	description: "Home page",
	// @feature/auth - start
	layout: "authed",
	// @feature/auth - end
	middleware: ["auth"],
});
</script>

<template>
	<div class="flex flex-col gap-8">
		<!-- Hero Section -->
		<section class="relative py-20">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<div class="mb-8">
						<div
							class="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
						>
							<span
								class="text-sm font-medium text-blue-600 dark:text-blue-400"
								>🚀 Open Source</span
							>
							<span
								class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
							/>
							<span
								class="text-sm font-medium text-gray-600 dark:text-gray-400"
								>MIT Licensed</span
							>
						</div>
						<h1
							class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
						>
							Robust
							<span
								class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
							>
								Nuxt Template
							</span>
						</h1>
						<p
							class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
						>
							A powerful Nuxt 3 template featuring TypeScript
							support, Supabase authentication, cross-platform
							mobile support with Capacitor, and built-in
							localization. Build modern web and mobile
							applications faster.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<UButton
							size="xl"
							variant="solid"
							icon="i-heroicons-book-open-solid"
							to="/guides"
						>
							Get Started
						</UButton>
						<UButton
							size="xl"
							variant="outline"
							color="neutral"
							icon="i-heroicons-star-solid"
							to="https://github.com/Innosan/nuxt-template-project"
							target="_blank"
						>
							Star on GitHub
						</UButton>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2
						class="text-4xl font-bold text-gray-900 dark:text-white mb-4"
					>
						Everything You Need to Build Modern Applications
					</h2>
					<p
						class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
					>
						Packed with essential features for modern web and mobile
						development. No configuration needed – just start
						building!
					</p>
				</div>
				<FeaturesList />
			</div>
		</section>

		<!-- Quick Start Section -->
		<section class="py-16">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold mb-4">
						Ready to Get Started?
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-300">
						Follow these simple steps to begin your development
						journey
					</p>
				</div>

				<UAlert
					title="Quick Start Guide"
					variant="subtle"
					description="Essential documentation to help you get up and running"
					icon="i-heroicons-light-bulb-solid"
					:actions="[
						{
							label: 'Documentation',
							icon: 'i-heroicons-book-open-solid',
							color: 'primary',
							variant: 'subtle',
							to: '/guides',
						},
						{
							label: 'Nuxt Guide',
							icon: 'i-heroicons-arrow-top-right-on-square-solid',
							color: 'primary',
							variant: 'subtle',
							to: 'https://nuxt.com/docs/getting-started/introduction',
						},
						{
							label: 'Nuxt UI',
							icon: 'i-heroicons-arrow-top-right-on-square-solid',
							color: 'primary',
							variant: 'subtle',
							to: 'https://ui.nuxt.com/',
						},
						{
							label: 'Supabase',
							icon: 'i-heroicons-arrow-top-right-on-square-solid',
							color: 'primary',
							variant: 'subtle',
							to: 'https://supabase.com/docs/guides/getting-started',
						},
					]"
				/>
			</div>
		</section>
	</div>
</template>
