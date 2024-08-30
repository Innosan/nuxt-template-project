<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
import { getToast, Toasts } from "~/types/ui/Notification";
const toast = useToast();

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
				:responsive-columns="`sm:grid-cols-2 md:grid-cols-2`"
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
				<UButton
					@click="
						toast.add(getToast(Toasts.SUCCESS, 'Form submitted!'))
					"
					icon="i-heroicons-check-solid"
					label="Submit"
					class="col-span-2 md:col-span-2"
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
