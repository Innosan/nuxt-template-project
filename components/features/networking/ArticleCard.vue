<script lang="ts" setup>
import type { PropType } from "vue";
import type { Article } from "~/types/server/Article";

defineProps({
	article: {
		type: Object as PropType<Article>,
		required: true,
	},
});
</script>

<template>
	<div
		class="flex flex-col gap-1 rounded-xl p-4 ring-1 ring-neutral-200 dark:ring-neutral-700"
	>
		<h2 class="font-bold">{{ article.title }}</h2>
		<p class="text-sm opacity-70">{{ article.content }}</p>
	</div>
</template>
