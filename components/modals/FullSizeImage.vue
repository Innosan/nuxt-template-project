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
</script>

<template>
	<UModal :title="alt">
		<template #body>
			<NuxtImg
				:src="url"
				:alt="alt"
				class="w-full rounded-2xl"
			/>
		</template>
	</UModal>
</template>
