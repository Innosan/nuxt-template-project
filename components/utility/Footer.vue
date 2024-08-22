<script setup lang="ts">
import { socials } from "~/utils/navigation.js";
</script>

<template>
	<footer class="dark:bg-gray-800 bg-gray-300">
		<div class="flex gap-4">
			<IconedNavigationLink v-for="link in socials" :link="link" />
		</div>
	</footer>
</template>
