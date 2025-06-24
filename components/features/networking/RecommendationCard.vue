<script lang="ts" setup>
import type { PropType } from "vue";
import type { RecommendationsData } from "~/types/server/recommendations";

defineProps({
	recommendation: {
		type: Object as PropType<RecommendationsData>,
		required: true,
	},
});
</script>

<template>
	<div
		class="flex flex-col h-24 gap-1 rounded-xl p-4 ring-1 ring-neutral-200 dark:ring-neutral-700"
	>
		<h2 class="font-bold truncate">
			{{ recommendation.content }}
		</h2>
		<p class="text-sm opacity-70">
			{{ recommendation.user.username }} {{ recommendation.mal_id }}
		</p>
	</div>
</template>
