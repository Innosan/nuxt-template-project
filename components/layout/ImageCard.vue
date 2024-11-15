<script setup lang="ts">
import FullSizeImage from "~/components/modals/FullSizeImage.vue";

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
	<UCard @click="modal.open(FullSizeImage, { url: url, alt: alt })">
		<template #header>
			<NuxtImg
				loading="lazy"
				class="h-56 transition-all object-top rounded-2xl content-center w-full object-cover hover:object-center hover:cursor-zoom-in"
				:src="url"
				:alt="'Neko art by' + alt"
			/>
		</template>

		<slot />
	</UCard>
</template>
