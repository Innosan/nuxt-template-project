<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});

const { t } = useI18n();

const links = computed(() => [
	{
		id: 1,
		to: '/',
		label: t('navigation.home'),
		icon: 'i-heroicons-home-solid',
	},
	{
		id: 2,
		to: '/contact',
		label: t('navigation.contact'),
		icon: 'i-heroicons-envelope-solid',
	},
	{
		id: 3,
		to: '/settings',
		label: t('navigation.settings'),
		icon: 'i-heroicons-cog-6-tooth-solid',
	},
]);
</script>

<template>
	<div class="md:block hidden">
		<UNavigationMenu
			orientation="horizontal"
			:items="links"
		/>
	</div>

	<div class="md:hidden block">
		<USlideover
			:title="title"
			description="Navigation"
		>
			<UButton
				icon="i-heroicons-bars-3"
				color="primary"
				variant="subtle"
			/>

			<template #body>
				<UNavigationMenu
					orientation="vertical"
					:items="links"
				/>
			</template>
		</USlideover>
	</div>
</template>
