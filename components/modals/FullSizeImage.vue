<script setup lang="ts">
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

const downloadImage = () => {
	window.open(props.url, '_blank');
};
</script>

<template>
	<UModal
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
		</template>
	</UModal>
</template>
