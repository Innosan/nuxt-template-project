<script lang="ts" setup>
const { locale, setLocale, setLocaleCookie } = useI18n();

const items = ref([
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: '한국어', value: 'ko' },
]);
</script>

<template>
	<UDropdownMenu :items="items">
		<UButton
			icon="i-heroicons-language-20-solid"
			variant="solid"
			color="primary"
			:label="$t('buttons.change-language')"
		/>

		<template #item="{ item }">
			<UButton
				class="truncate w-full"
				:label="item.label"
				:variant="item.value === locale ? 'outline' : 'ghost'"
				color="neutral"
				@click="
					() => {
						locale = item.value as 'ru' | 'en' | 'ko';
						setLocale(locale);
						setLocaleCookie(locale);
					}
				"
			/>
		</template>
	</UDropdownMenu>
</template>
