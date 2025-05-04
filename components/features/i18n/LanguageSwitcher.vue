<script lang="ts" setup>
import { languages } from "~/i18n/languages";

const { locale, setLocale, setLocaleCookie } = useI18n();
</script>

<template>
	<UDropdownMenu :items="languages">
		<UButton
			class="w-full cursor-pointer md:w-fit"
			icon="i-heroicons-language-20-solid"
			variant="solid"
			color="primary"
			:label="$t('buttons.change-language')"
		/>

		<template #item="{ item }">
			<UButton
				class="w-full truncate p-1"
				:label="item.label"
				variant="link"
				:color="item.value === locale ? 'primary' : 'neutral'"
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
