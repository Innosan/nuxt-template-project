<script setup lang="ts">
const settingsStore = useSettingsStore();
const changeTheme = (color: string) => {
	useAppConfig().ui.primary = color;
	settingsStore.setPrimaryColor(color);
};

const colors = [
	[
		{
			label: "blue",
			click: () => {
				changeTheme("blue");
			},
		},
	],
	[
		{
			label: "red",
			click: () => {
				changeTheme("red");
			},
		},
	],
	[
		{
			label: "green",
			click: () => {
				changeTheme("green");
			},
		},
	],
	[
		{
			label: "violet",
			click: () => {
				changeTheme("violet");
			},
		},
	],
];
</script>

<template>
	<ClientOnly>
		<UDropdown :items="colors" mode="hover">
			<UButton icon="i-heroicons-paint-brush-solid" />

			<template #item="{ item }">
				<span
					class="circle"
					:class="'bg-' + item.label + '-500'"
				></span>
				<p>
					{{
						item.label.charAt(0).toUpperCase() + item.label.slice(1)
					}}
				</p>
			</template>
		</UDropdown>
	</ClientOnly>
</template>
