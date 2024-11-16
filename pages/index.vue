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

		<div class="flex gap-4">
			<UButton
				label="Load more"
				icon="i-heroicons-chevron-down"
				:loading="animeStore.isRefilling"
				@click="animeStore.getArts(true)"
			/>

			<UButton
				label="Refresh"
				icon="i-heroicons-arrow-path"
				:loading="animeStore.isLoading"
				@click="animeStore.getArts(false)"
			/>
		</div>
	</PageSection>
</template>
