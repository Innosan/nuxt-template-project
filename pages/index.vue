<script setup lang="ts">
import { useAnimeStore } from "~/stores/anime";
import ImageCard from "~/components/layout/ImageCard.vue";
const toast = useToast();

const animeStore = useAnimeStore();
animeStore.getArts(false);

const name = ref("");
</script>

<template>
	<PageSection
		title="Welcome to the homepage"
		icon="i-heroicons-home-solid"
		:is-divided="false"
	>
		<TitledBlock title="">
			<Grid v-auto-animate>
				<ImageCard
					v-for="image in animeStore.nekoArts"
					:key="image.url"
					:alt="image.artist_name"
					:url="image.url"
				>
					<div class="flex items-center gap-1">
						<NuxtLink
							class="font-bold text-lg"
							:to="image.artist_href"
							:external="true"
							target="_blank"
							>{{ image.artist_name }}</NuxtLink
						>
						•
						<NuxtLink
							:to="image.source_url"
							:external="true"
							target="_blank"
							>Source</NuxtLink
						>
					</div>
				</ImageCard>
				<UButton
					label="Load more"
					@click="animeStore.getArts(true)"
					icon="i-heroicons-chevron-down"
					class="col-span-full"
				/>
			</Grid>
		</TitledBlock>
	</PageSection>
</template>
