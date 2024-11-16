<script setup lang="ts">
import { useAnimeStore } from '~/stores/anime';

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
			<Grid
				v-auto-animate
				lg="lg:grid-cols-6"
			>
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
							:label="image.artist_name"
							target="_blank"
						/>
						•
						<UButton
							:to="image.source_url"
							:external="true"
							label="Source"
							variant="subtle"
							target="_blank"
						/>
					</div>
				</ImageCard>
			</Grid>

			<UButton
				label="Load more"
				icon="i-heroicons-chevron-down"
				@click="animeStore.getArts(true)"
			/>

			<UButton
				label="Refresh"
				icon="i-heroicons-arrow-path"
				@click="animeStore.getArts(false)"
			/>
		</TitledBlock>
	</PageSection>
</template>
