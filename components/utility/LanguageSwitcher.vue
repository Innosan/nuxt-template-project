<script lang="ts" setup>
const { locale, setLocaleCookie } = useI18n();

const items = ref([
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
]);
</script>

<template>
	<UDropdownMenu
		icon="i-heroicons-language-20-solid"
		:items="items"
	>
		<UButton
			icon="i-heroicons-language-20-solid"
			variant="subtle"
			color="primary"
		/>

		<template #item="{ item }">
			<UButton
				class="truncate w-full"
				:label="item.label"
				:variant="item.value === locale ? 'outline' : 'ghost'"
				color="neutral"
				@click="
					() => {
						locale = item.value as 'ru' | 'en';
						setLocaleCookie(locale);
					}
				"
			/>
		</template>
	</UDropdownMenu>
</template>
