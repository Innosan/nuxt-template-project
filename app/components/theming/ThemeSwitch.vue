<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
	get: () => colorMode.value === "dark",
	set: (value) => {
		colorMode.preference = value ? "dark" : "light";
	},
});
</script>

<template>
	<USwitch
		v-model="isDark"
		color="primary"
		size="xl"
		checked-icon="i-heroicons-moon-20-solid"
		unchecked-icon="i-heroicons-sun-20-solid"
		variant="ghost"
		aria-label="Theme"
	/>
</template>
