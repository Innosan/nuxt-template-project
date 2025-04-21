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

const emit = defineEmits<{ close: [boolean] }>();

const downloadImage = () => {
	window.open(props.url, '_blank');
};
</script>

<template>
	<UModal
		:close="{ onClick: () => emit('close', false) }"
		:title="alt"
		:description="'Art by ' + alt"
	>
		<template #body>
			<NuxtImg
				:src="url"
				:alt="alt"
				class="w-full rounded-2xl"
			/>
		</template>
		<template #footer>
			<UButton
				label="Download"
				@click="downloadImage()"
			/>

			<UButton
				label="Close"
				@click="emit('close', false)"
			/>
		</template>
	</UModal>
</template>
