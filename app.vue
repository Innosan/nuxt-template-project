<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import { useSettingsStore } from "~/stores/settings";

const { locale } = useI18n();
const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

const settingsStore = useSettingsStore();
const appConfig = useAppConfig();

// @feature/auth - start
const { isAuthed } = useAuth();
const currentLayout = computed(() => (isAuthed.value ? "authed" : "unauthed"));
// const currentLayout = "default";
// @feature/auth - end

appConfig.ui.colors.primary = settingsStore.primaryColor;

useHead({
	meta: [
		{ name: "description", content: "Nuxt Template Project" },
		{
			name: "keywords",
			content:
				"Nuxt Template Project, Nuxt, Template, Project, Vue, TypeScript, JavaScript, Tailwind, Nuxt UI, Nuxt Content, Supabase",
		},
	],
	htmlAttrs: {
		lang,
		dir,
	},
});
</script>

<template>
	<UApp :toaster="{ position: 'bottom-right' }" :locale="locales[locale]">
		<NuxtLayout :name="currentLayout">
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
