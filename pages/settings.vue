<script lang="ts" setup></script>

<template>
	<TitledBlock title="Theme and feel">
		<div class="md:flex hidden gap-4 items-center">
			<ClientOnly>
				<ThemeSwitch />
				<ColorSwitch />
			</ClientOnly>
		</div>
	</TitledBlock>
</template>
