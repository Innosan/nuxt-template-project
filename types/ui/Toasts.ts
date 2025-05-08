export enum Toasts {
	SUCCESS,
	ERROR,
	INFO,
}

export interface Toast {
	title: string;
	color: "success" | "error" | "info" | "neutral";
	icon: string;
	description?: string;
}

export const getToast = (
	type: Toasts,
	description?: string,
): Partial<Toast> => {
	switch (type) {
		case Toasts.SUCCESS:
			return {
				title: "Success!",
				color: "success",
				icon: "i-heroicons-check-circle",
				description,
			};
		case Toasts.ERROR:
			return {
				title: "An error occurred!",
				color: "error",
				icon: "i-heroicons-x-circle",
				description: description + ". Please try again.",
			};
		case Toasts.INFO:
			return {
				title: "New info!",
				color: "info",
				icon: "i-heroicons-information-circle",
				description,
			};
		default:
			return {
				title: "Notification",
				color: "neutral",
				icon: "i-heroicons-bell",
				description: "This is a notification.",
			};
	}
};
