<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/utility/NavigationLink";

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
});
</script>

<template>
	<nav>
		<UDropdown :items="links" :popper="{ placement: 'bottom-start' }">
			<UButton icon="i-heroicons-bars-3" />

			<template #item="{ item }">
				<span class="truncate">{{ item.label }}</span>

				<UIcon
					:name="item.icon"
					class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
				/>
			</template>
		</UDropdown>
	</nav>
</template>
