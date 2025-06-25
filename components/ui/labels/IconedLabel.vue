<script lang="ts" setup>
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	type: {
		type: String as () => "default" | "primary" | "success" | "info",
		default: "default",
	},
});

const classes = {
	default: {
		text: "text-zinc-500 dark:text-zinc-400",
		border: "ring-zinc-200 dark:ring-zinc-700",
	},
	primary: {
		text: "text-primary-500 dark:text-primary-400",
		border: "ring-primary-200 dark:ring-primary-700",
	},
	success: {
		text: "text-green-400 dark:text-green-300",
		border: "ring-green-300 dark:ring-green-400",
	},
	info: {
		text: "text-blue-400 dark:text-blue-300",
		border: "ring-blue-300 dark:ring-blue-400",
	},
};

const typeClass = computed(() => {
	return classes[props.type] || classes.default;
});
</script>

<template>
	<div
		class="flex px-2 py-1 ring-1 rounded-full items-center gap-2"
		:class="[typeClass.text, typeClass.border]"
	>
		<UIcon :name="icon" />
		<p class="text-sm font-bold">{{ label }}</p>
	</div>
</template>
