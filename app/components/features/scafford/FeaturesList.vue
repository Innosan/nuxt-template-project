<script setup lang="ts">
const featuresList = computed(() => [
	{
		title: "Built-in Features",
		icon: "i-heroicons-cube-transparent-solid",
		description: "Comprehensive feature set for modern development",
		features: [
			{
				name: "Localization (Built-in)",
				description: "Basic localization setup with i18n module",
				icon: "i-heroicons-globe-alt-solid",
				tech: ["Vue I18n", "Nuxt I18n"],
			},
			{
				name: "Authentication",
				description:
					"User authentication and authorization with Supabase",
				icon: "i-heroicons-shield-check-solid",
				tech: ["Supabase"],
			},
			{
				name: "Cross-Platform Mobile",
				description: "Build native iOS and Android applications",
				icon: "i-heroicons-device-phone-mobile-solid",
				tech: ["Capacitor"],
			},
			{
				name: "Content Management",
				description: "Basic content setup with Nuxt Content module",
				icon: "i-heroicons-document-text-solid",
				tech: ["Nuxt Content"],
			},
		],
		color: "error" as const,
		classColor: "border-error-500 hover:border-error-600",
	},
	{
		title: "Developer Experience",
		icon: "i-heroicons-sparkles-solid",
		description: "Modern development tools and workflow",
		features: [
			{
				name: "TypeScript Support",
				description:
					"Full TypeScript integration for type-safe development",
				icon: "i-heroicons-code-bracket-solid",
				tech: ["TypeScript"],
			},
			{
				name: "Component Library",
				description: "Beautiful UI components with Nuxt UI",
				icon: "i-heroicons-squares-2x2-solid",
				tech: ["Nuxt UI", "Tailwind CSS"],
			},
			{
				name: "State Management",
				description: "Reactive state management with Pinia",
				icon: "i-heroicons-swatch-solid",
				tech: ["Pinia"],
			},
			{
				name: "Build Tool",
				description: "Fast builds and SSR with Nitro engine",
				icon: "i-heroicons-wrench-screwdriver-solid",
				tech: ["Nitro"],
			},
		],
		color: "info" as const,
		classColor: "border-info-500 hover:border-info-600",
	},
	{
		title: "Mobile-First Approach",
		icon: "i-heroicons-cpu-chip-solid",
		description: "Full cross-platform support with Capacitor",
		features: [
			{
				name: "Native iOS & Android",
				description: "Build native mobile apps from your web code",
				icon: "i-heroicons-device-tablet-solid",
				tech: ["Capacitor", "Android Built-in"],
			},
			{
				name: "Live Reload",
				description: "Real-time development with mobile sync",
				icon: "i-heroicons-arrow-path-solid",
				tech: ["Capacitor Live Reload"],
			},
			{
				name: "Native APIs",
				description: "Access device features through plugins",
				icon: "i-heroicons-bolt-solid",
				tech: ["Capacitor Plugins"],
			},
			{
				name: "App Store Ready",
				description: "Deploy to App Store and Google Play",
				icon: "i-heroicons-shopping-bag-solid",
				tech: ["Native Build"],
			},
		],
		color: "primary" as const,
		classColor: "border-primary-500 hover:border-primary-600",
	},
]);
</script>

<template>
	<div class="w-full">
		<div class="grid gap-8 lg:grid-cols-3">
			<template v-for="(category, cIndex) in featuresList" :key="cIndex">
				<div class="space-y-6">
					<div class="flex items-center gap-3">
						<UIcon :name="category.icon" class="w-12 h-12" />
						<div>
							<h3
								class="text-xl font-bold text-gray-900 dark:text-white"
							>
								{{ category.title }}
							</h3>
							<p
								class="text-sm line-clamp-1 text-gray-600 dark:text-gray-300"
							>
								{{ category.description }}
							</p>
						</div>
					</div>

					<div class="grid gap-4">
						<UCard
							v-for="(feature, fIndex) in category.features"
							:key="fIndex"
							class="group hover:shadow-lg transition-all duration-300 border-l-4"
							:class="`${category.classColor}`"
						>
							<template #header>
								<div class="flex items-start gap-3">
									<div class="flex-shrink-0">
										<UIcon
											:name="feature.icon"
											class="w-6 h-6"
										/>
									</div>
									<div class="flex-1">
										<h4
											class="font-semibold text-gray-900 dark:text-white transition-colors"
										>
											{{ feature.name }}
										</h4>
										<p
											class="text-sm text-gray-600 dark:text-gray-300 mt-1"
										>
											{{ feature.description }}
										</p>
									</div>
								</div>
							</template>

							<div class="mt-3 flex gap-2">
								<template
									v-for="(tech, tIndex) in feature.tech"
									:key="tIndex"
								>
									<UBadge
										:color="category.color"
										variant="soft"
										size="sm"
									>
										{{ tech }}
									</UBadge>
								</template>
							</div>
						</UCard>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
