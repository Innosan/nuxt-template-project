<script setup lang="ts">
const settingsStore = useSettingsStore();
const appConfig = useAppConfig();

const changeTheme = (color: string) => {
	appConfig.ui.colors.primary = color;
	settingsStore.setPrimaryColor(color);
};

const colors = [
	{
		label: 'Blue',
		className: 'decoration-blue-400',
		onSelect: () => {
			changeTheme('blue');
		},
	},
	{
		label: 'Red',
		className: 'decoration-red-400',
		onSelect: () => {
			changeTheme('red');
		},
	},
	{
		label: 'Green',
		className: 'decoration-green-400',
		onSelect: () => {
			changeTheme('green');
		},
	},
	{
		label: 'Violet',
		className: 'decoration-violet-400',
		onSelect: () => {
			changeTheme('violet');
		},
	},
];
</script>

<template>
	<UDropdownMenu :items="colors">
		<UButton icon="i-heroicons-paint-brush-solid" />

		<template #item-label="{ item }">
			<p
				class="underline decoration-2 underline-offset-3 font-bold"
				:class="item.className"
			>
				{{ item.label }}
			</p>
		</template>
	</UDropdownMenu>
</template>
