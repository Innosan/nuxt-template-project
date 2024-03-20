<script setup lang="ts">
import { useSettingsStore } from "~/stores/settingsStore";

const settingsStore = useSettingsStore();
const appConfig = useAppConfig();
const route = useRoute();

appConfig.ui.primary = settingsStore.primaryColor;
</script>

<template>
	<div>
		<Header />
		<div class="page-container" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
		<Footer />
	</div>
</template>
