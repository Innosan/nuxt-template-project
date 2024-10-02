<script setup lang="ts">
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

const isClicked = ref(false);
</script>

<template>
	<UCard @click="isClicked = !isClicked">
		<template #header>
			<NuxtImg
				loading="lazy"
				class="h-56 transition-all object-top rounded-2xl content-center w-full object-cover hover:object-center"
				:class="
					isClicked
						? 'row-span-2 h-[40rem] cursor-zoom-in'
						: 'cursor-zoom-out'
				"
				:src="url"
				:alt="'Neko art by' + alt"
			/>
		</template>

		<slot />
	</UCard>
</template>
