import type { NavigationLink } from "~/types/utility/NavigationLink";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Home",
		icon: "i-heroicons-home-solid",
	},
	{
		id: 2,
		to: "/about",
		label: "About",
		icon: "i-heroicons-information-circle-solid",
	},
	{
		id: 3,
		to: "/help",
		label: "Help",
		icon: "i-heroicons-user-group-solid",
	},
];

export const socials: NavigationLink[] = [
	{
		id: 1,
		to: "https://github.com",
		label: "GitHub",
		icon: "i-octicon-mark-github-16",
	},
	{
		id: 2,
		to: "https://telegram.com",
		label: "Telegram",
		icon: "i-streamline-telegram-solid",
	},
];
