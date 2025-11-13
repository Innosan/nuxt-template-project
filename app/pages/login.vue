<script setup lang="ts">
const route = useRoute();

useSeoMeta({
	title: "Login - Robust Nuxt Template",
	description:
		"Secure login page for Robust Nuxt Template with Supabase authentication. Access your dashboard and start building modern web and mobile applications.",
	keywords:
		"login, authentication, Supabase, Nuxt 3, Vue.js, secure login, user authentication",
	ogTitle: "Login - Robust Nuxt Template",
	ogDescription:
		"Secure login page for Robust Nuxt Template with Supabase authentication. Access your dashboard and start building modern web and mobile applications.",
	ogType: "website",
	ogUrl: "https://your-domain.com" + route.path,
	twitterCard: "summary",
	twitterTitle: "Login - Robust Nuxt Template",
	twitterDescription:
		"Secure login with Supabase authentication for modern web and mobile development",
});

definePageMeta({
	layout: "unauthed",
	middleware: ["auth"],
});
</script>

<template>
	<AuthForm />
</template>
