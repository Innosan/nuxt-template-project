<script setup lang="ts">
const auth = useAuth();
</script>

<template>
	<UButton
		:label="$t('auth.buttons.sign-out')"
		icon="i-heroicons-arrow-right-on-rectangle-solid"
		@click="() => auth.signOut()"
	/>
</template>
