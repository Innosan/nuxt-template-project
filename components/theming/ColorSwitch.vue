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
			className: "decoration-blue-500",
			click: () => {
				changeTheme("blue");
			},
		},
	],
	[
		{
			label: "red",
			className: "decoration-red-500",
			click: () => {
				changeTheme("red");
			},
		},
	],
	[
		{
			label: "green",
			className: "decoration-green-500",
			click: () => {
				changeTheme("green");
			},
		},
	],
	[
		{
			label: "violet",
			className: "decoration-violet-500",
			click: () => {
				changeTheme("violet");
			},
		},
	],
];
</script>

<template>
	<ClientOnly>
		<UDropdown :items="colors" mode="click">
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
		</UDropdown>
	</ClientOnly>
</template>
