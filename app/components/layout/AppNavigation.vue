<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
});

const { t } = useI18n();

const open = ref(false);
const onItemSelect = () => {
	open.value = false;
};

const links = computed(() => [
	{
		id: 1,
		to: "/",
		label: t("navigation.home"),
		icon: "i-heroicons-home-solid",
		onSelect: onItemSelect,
	},
	{
		id: 2,
		to: "/settings",
		label: t("navigation.settings"),
		icon: "i-heroicons-cog-6-tooth-solid",
		onSelect: onItemSelect,
	},
	// @feature/networking - start
	{
		id: 3,
		to: "/recommendations",
		label: t("navigation.recommendations"),
		icon: "i-heroicons-sparkles-solid",
		onSelect: onItemSelect,
	},
	// @feature/networking - end
	// @feature/content - start
	{
		id: 4,
		to: "/guides",
		label: t("navigation.guides"),
		icon: "i-heroicons-academic-cap-solid",
		onSelect: onItemSelect,
	},
	// @feature/content - end
]);
</script>

<template>
	<div class="hidden md:block">
		<UNavigationMenu orientation="horizontal" :items="links" />
	</div>

	<div class="block md:hidden">
		<USlideover
			v-model:open="open"
			:title="title"
			description="Navigation"
			side="left"
		>
			<UButton
				icon="i-heroicons-bars-3"
				color="primary"
				variant="subtle"
			/>

			<template #body>
				<UNavigationMenu orientation="vertical" :items="links" />

				<LanguageSwitcher class="mt-4" />
			</template>
		</USlideover>
	</div>
</template>
