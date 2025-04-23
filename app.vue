<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import { useSettingsStore } from "~/stores/settings";

const { locale } = useI18n();
const appConfig = useAppConfig();
const settingsStore = useSettingsStore();

appConfig.ui.colors.primary = settingsStore.primaryColor;

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
	htmlAttrs: {
		lang,
		dir,
	},
});
</script>

<template>
	<UApp :toaster="{ position: 'bottom-right' }" :locale="locales[locale]">
		<AppHeader />

		<div class="page-container pt-6">
			<NuxtPage />
		</div>
	</UApp>
</template>
