<script lang="ts" setup>
import type { PropType } from "vue";
import type { RecommendationsData } from "~~/types/server/recommendations";

defineProps({
	recommendation: {
		type: Object as PropType<RecommendationsData>,
		required: true,
	},
});
</script>

<template>
	<UCard
		:ui="{
			header: 'p-2 sm:p-4',
			body: 'p-2 sm:p-4',
			footer: 'p-2 sm:p-4 items-center justify-center',
		}"
	>
		<template #header>
			<div class="grid grid-cols-2 gap-4">
				<template
					v-for="(entry, index) in recommendation.entry"
					:key="entry.mal_id + index"
				>
					<NuxtLink
						:to="entry.url"
						class="flex flex-col hover:bg-zinc-100 hover:dark:bg-zinc-800 hover:ring-1 hover:cursor-pointer hover:ring-zinc-300 hover:dark:ring-zinc-700 transition-colors rounded-lg p-2"
					>
						<img
							:src="entry.images.webp.image_url"
							:alt="entry.title + ' image'"
							class="h-24 rounded-lg object-cover"
						/>
						<p class="text-sm opacity-70 font-bold truncate">
							{{ entry.title }}
						</p>
					</NuxtLink>
				</template>
			</div>
		</template>

		<p class="font-bold text-sm line-clamp-2 min-h-[2.5rem]">
			{{ recommendation.content }}
		</p>

		<template #footer>
			<UButton
				class="rounded-full"
				color="neutral"
				variant="subtle"
				icon="i-heroicons-user-16-solid"
				:to="recommendation.user.url"
				:label="recommendation.user.username"
			/>
		</template>
	</UCard>
</template>
