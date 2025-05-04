<template>
	<TitledBlock>
		<ClientOnly>
			<div class="flex flex-col gap-4 md:flex-row md:flex-wrap">
				<ActionCard
					:title="$t('settings.theme.label')"
					:description="$t('settings.theme.description')"
				>
					<template #action>
						<ThemeSwitch />
					</template>
				</ActionCard>

				<ActionCard
					:title="$t('settings.color.label')"
					:description="$t('settings.color.description')"
				>
					<template #action>
						<ColorSwitch />
					</template>
				</ActionCard>

				<ActionCard
					:title="$t('settings.language.label')"
					:description="$t('settings.language.description')"
				>
					<template #action>
						<LanguageSwitcher />
					</template>
				</ActionCard>
			</div>
		</ClientOnly>
	</TitledBlock>
</template>
