<script setup lang="ts">
import type { PropType } from 'vue';
import type { NavigationLink } from '~/types/utility/NavigationLink';

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="md:block hidden">
		<UNavigationMenu
			orientation="horizontal"
			:items="links"
		/>
	</div>

	<div class="md:hidden block">
		<USlideover
			:title="title"
			description="Navigation"
		>
			<UButton
				icon="i-heroicons-bars-3"
				color="primary"
				variant="subtle"
			/>

			<template #body>
				<UNavigationMenu
					orientation="vertical"
					:items="links"
				/>

				<!-- Socials -->
				<USeparator icon="i-heroicons-globe-solid" />

				<UNavigationMenu
					orientation="vertical"
					:items="socials"
				/>
			</template>
		</USlideover>
	</div>
</template>
