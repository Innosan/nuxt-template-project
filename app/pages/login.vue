<script setup lang="ts">
definePageMeta({
	layout: "unauthed",
	middleware: ["auth"],
});
</script>

<template>
	<AuthForm />
</template>
