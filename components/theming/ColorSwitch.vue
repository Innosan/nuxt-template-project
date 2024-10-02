<script setup lang="ts">
const settingsStore = useSettingsStore();
const appConfig = useAppConfig();

const changeTheme = (color: string) => {
	appConfig.ui.colors.primary = color;
	settingsStore.setPrimaryColor(color);
};

const colors = [
	[
		{
			label: "blue",
			className: "decoration-blue-500",
			select: () => {
				changeTheme("blue");
			},
		},
	],
	[
		{
			label: "red",
			className: "decoration-red-500",
			select: () => {
				changeTheme("red");
			},
		},
	],
	[
		{
			label: "green",
			className: "decoration-green-500",
			select: () => {
				changeTheme("green");
			},
		},
	],
	[
		{
			label: "violet",
			className: "decoration-violet-500",
			select: () => {
				changeTheme("violet");
			},
		},
	],
];
</script>

<template>
	<ClientOnly>
		<UDropdownMenu :items="colors">
			<UButton icon="i-heroicons-paint-brush-solid" />

			<template
				#item="{
					item,
				}: {
					item: {
						label: string;
						className: string;
						click: () => void;
					};
				}"
			>
				<p
					class="underline decoration-2 underline-offset-4 decoration"
					:class="item.className"
				>
					{{
						item.label.charAt(0).toUpperCase() + item.label.slice(1)
					}}
				</p>
			</template>
		</UDropdownMenu>
	</ClientOnly>
</template>
