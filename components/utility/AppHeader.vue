<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-6 items-center">
			<h1 class="font-black text-2xl text-nowrap text-primary-400">
				{{ appConfig.appName }}
			</h1>

			<AppNavigation :title="appConfig.appName as string" />

			<LanguageSwitcher />
		</div>
	</header>
</template>
