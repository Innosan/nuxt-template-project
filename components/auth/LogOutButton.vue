<script setup lang="ts">
const auth = useAuth();
</script>

<template>
	<UButton
		:label="$t('buttons.logout')"
		@click="() => auth.signOut()"
		icon="i-heroicons-arrow-right-on-rectangle-solid"
	/>
</template>
