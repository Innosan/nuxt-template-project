<script setup lang="ts">
import type { NavigationLink } from "~/types/utility/NavigationLink";

const props = defineProps({
	navigation: {
		type: Array<NavigationLink>,
	},
});
</script>

<template>
	<div>
		<USlideover>
			<UButton icon="i-heroicons-bars-3" />

			<template #content>
				<UCard>
					<template #header>
						<UButton
							@click="isOpen = !isOpen"
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark"
						/>
					</template>
					<UNavigationMenu
						orientation="vertical"
						:links="navigation"
					/>
				</UCard>
			</template>
		</USlideover>
	</div>
</template>
