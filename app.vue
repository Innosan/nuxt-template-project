<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";

const settingsStore = useSettingsStore();
const appConfig = useAppConfig();
const route = useRoute();

appConfig.ui.colors.primary = settingsStore.primaryColor;
</script>

<template>
	<UApp :toaster="{ position: 'bottom-right' }">
		<Header />
		<div class="page-container pt-6" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
	</UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
