<script setup lang="ts">
import { useAnimeStore } from "~/stores/anime";

const animeStore = useAnimeStore();
animeStore.getArts(false);
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
						<UButton
							class="font-bold text-lg"
							:to="image.artist_href"
							variant="link"
							target="_blank"
							>{{ image.artist_name }}</UButton
						>
						•
						<UButton
							:to="image.source_url"
							:external="true"
							variant="subtle"
							target="_blank"
							>Source</UButton
						>
					</div>
				</ImageCard>
				<UButton
					label="Load more"
					@click="animeStore.getArts(true)"
					icon="i-heroicons-chevron-down"
				/>
			</Grid>
		</TitledBlock>
	</PageSection>
</template>
