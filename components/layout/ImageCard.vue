<script setup lang="ts">
import { FullSizeImage } from '#components';

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

const overlay = useOverlay();
const modal = overlay.create(FullSizeImage, {
	props: {
		url: props.url,
		alt: props.alt,
	},
});

const isLoading = ref(true);

const onLoad = () => {
	isLoading.value = false;
};
</script>

<template>
	<UCard class="transition-all hover:-translate-y-2 hover:shadow-md">
		<template #header>
			<div class="relative h-56">
				<USkeleton
					class="absolute inset-0 bg-gray-200 rounded-2xl transition-opacity duration-300"
					:class="{ 'opacity-0': !isLoading }"
				/>

				<NuxtImg
					class="absolute inset-0 h-56 object-top rounded-2xl content-center w-full object-cover hover:cursor-zoom-in transition-opacity duration-300"
					:class="{ 'opacity-0': isLoading }"
					loading="lazy"
					:src="url"
					:alt="'Neko art by' + alt"
					@load="onLoad"
					@click="modal.open()"
				/>
			</div>
		</template>

		<slot />
	</UCard>
</template>
