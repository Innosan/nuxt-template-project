<script setup lang="ts">
import FullSizeImage from '~/components/modals/FullSizeImage.vue';

const modal = useModal();

const props = defineProps({
	url: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UCard class="transition-all hover:scale-105 hover:shadow-md">
		<template #header>
			<NuxtImg
				loading="lazy"
				class="h-56 object-top rounded-2xl content-center w-full object-cover hover:cursor-zoom-in"
				:src="url"
				:alt="'Neko art by' + alt"
				@click="modal.open(FullSizeImage, { url: url, alt: alt })"
			/>
		</template>

		<slot />
	</UCard>
</template>
