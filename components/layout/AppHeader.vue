<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
	<header class="flex items-center justify-between gap-4">
		<div class="items-center gap-3 hidden sm:flex">
			<UIcon
				v-if="appConfig.appIcon"
				:name="appConfig.appIcon"
				class="bg-primary-400 h-8 w-8"
			/>

			<h1 class="text-primary-400 text-2xl font-black text-nowrap">
				{{ appConfig.appName }}
			</h1>
		</div>

		<div class="flex items-center gap-3">
			<AppNavigation :title="appConfig.appName as string" />
		</div>
	</header>
</template>
