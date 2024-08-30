<script setup lang="ts">
import Grid from "~/components/layout/Grid.vue";
import { CardSizes } from "~/types/ui/CardSizes";

const name = ref("");
</script>

<template>
	<PageSection
		title="Welcome to the homepage"
		icon="i-heroicons-home-solid"
		:is-divided="false"
	>
		<TitledBlock title="Personal information">
			<Grid
				:columns="2"
				:responsive-columns="`sm:grid-cols-1 md:grid-cols-2`"
			>
				<UInput
					v-model="name"
					placeholder="John Doe"
					icon="i-heroicons-user-solid"
				/>
				<UInput
					v-model="name"
					placeholder="John Doe"
					icon="i-heroicons-user-solid"
				/>
			</Grid>
		</TitledBlock>

		<TitledBlock title="Grid layout">
			<Grid>
				<UCard v-for="i in 10" :key="i" :ui="CardSizes.sm">
					<template #header>
						<h2 class="font-bold">Card {{ i }}</h2>
					</template>

					<p>Card content</p>
				</UCard>
			</Grid>
		</TitledBlock>
	</PageSection>
</template>
