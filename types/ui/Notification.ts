import type { NotificationColor } from "#ui/types";

export enum Toasts {
	SUCCESS,
	ERROR,
	INFO,
}

export interface Notification {
	title: string;
	color: NotificationColor;
	icon: string;
	description?: string;
}

export const getToast = (
	type: Toasts,
	description?: string,
): Partial<Notification> => {
	switch (type) {
		case Toasts.SUCCESS:
			return {
				title: "Success!",
				color: "green",
				icon: "i-heroicons-check-circle",
				description,
			};
		case Toasts.ERROR:
			return {
				title: "An error occurred!",
				color: "red",
				icon: "i-heroicons-x-circle",
				description: description + ". Please try again.",
			};
		case Toasts.INFO:
			return {
				title: "New info!",
				color: "blue",
				icon: "i-heroicons-information-circle",
				description,
			};
		default:
			return {
				title: "Notification",
				color: "gray",
				icon: "i-heroicons-bell",
				description: "This is a notification.",
			};
	}
};
