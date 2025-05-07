<script setup lang="ts">
const { locale } = useI18n();

const _guides = await queryCollection("guides")
	.where("locale", "=", locale.value)
	.all();

const guides = ref(_guides);

watchEffect(async () => {
	guides.value = await queryCollection("guides")
		.where("locale", "=", locale.value)
		.all();
});

useSeoMeta({
	title: "Guides",
	description: "A list of guides",
});
</script>

<template>
	<div>
		<h1 class="text-2xl font-bold">{{ $t("navigation.guides") }}</h1>
		<ul>
			<li v-for="guide in guides" :key="guide.id">
				<NuxtLink :to="guide.path">{{ guide.title }}</NuxtLink>
				<p class="text-sm text-gray-500">{{ guide.description }}</p>
			</li>
		</ul>
	</div>
</template>
