<script setup lang="ts">
const { data: guides } = await useAsyncData("guides", () =>
	queryCollection("guides").all(),
);

useSeoMeta({
	title: "Guides",
	description: "A list of guides",
});
</script>

<template>
	<div>
		<h1>{{ $t("navigation.guides") }}</h1>
		<ul>
			<li v-for="guide in guides" :key="guide.id">
				<NuxtLink :to="guide.path">{{ guide.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>
