<script setup lang="ts">
import { useAnimeStore } from '~/stores/anime';

const animeStore = useAnimeStore();
animeStore.getArts(false);
</script>

<template>
	<PageSection
		:title="$t('headings.main')"
		icon="i-heroicons-home-solid"
		:is-divided="false"
	>
		<UButtonGroup>
			<UButton
				v-for="tag in animeStore.categories"
				:key="tag"
				variant="subtle"
				:label="tag"
				@click="animeStore.getArtsByTag(tag)"
			/>
		</UButtonGroup>

		<Grid v-auto-animate>
			<ImageCard
				v-for="image in animeStore.nekoArts"
				:key="image.url"
				:alt="image.artist_name"
				:url="image.url"
			>
				<UButtonGroup>
					<UButton
						class="font-bold"
						:to="image.artist_href || '#'"
						variant="subtle"
						:label="image.artist_name || 'Unknown'"
						target="_blank"
					/>

					<UButton
						v-if="image.source_url"
						:to="image.source_url"
						:external="true"
						class="text-xs"
						label="Source"
						variant="subtle"
						target="_blank"
					/>
				</UButtonGroup>
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
