<script lang="ts" setup></script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-6 items-center">
			<h1 class="font-black text-2xl text-nowrap text-primary">
				Nuxt Template
			</h1>
			<TopNavigation class="md:flex hidden" :links="navigation" />
		</div>
		<div>
			<SidebarNavigation
				class="block md:hidden"
				:navigation="navigation"
			/>
			<div class="md:flex hidden gap-4 items-center">
				<ThemeSwitch />
				<ColorSwitch />
			</div>
		</div>
	</header>
</template>
