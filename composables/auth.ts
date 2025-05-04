import { getToast, Toasts } from "~/types/ui/Toasts";

export const useAuth = () => {
	const toast = useToast();
	const client = useSupabaseClient();
	const user = useSupabaseUser();

	const isAuthed = computed(() => user.value !== null);

	const error = ref("");

	const signIn = async (email: string, password: string) => {
		error.value = "";

		try {
			const { error: signInError } = await client.auth.signInWithPassword(
				{
					email,
					password,
				},
			);

			if (signInError) throw signInError;

			await navigateToHome();
		} catch (err) {
			if (err instanceof Error) {
				error.value = err.message;
			} else {
				error.value = "Unknown error occurred";
			}

			toast.add(
				getToast(
					Toasts.ERROR,
					error.value || "Error signing in. Please try again.",
				),
			);
		}
	};

	const signUp = async (email: string, password: string) => {
		error.value = "";

		try {
			const { error: signUpError } = await client.auth.signUp({
				email,
				password,
			});

			if (signUpError) throw signUpError;

			await navigateToHome();
		} catch (err) {
			if (err instanceof Error) {
				error.value = err.message;
			} else {
				error.value = "Unknown error occurred";
			}

			toast.add(
				getToast(
					Toasts.ERROR,
					error.value || "Error signing up. Please try again.",
				),
			);
		}
	};

	const signOut = async () => {
		error.value = "";

		try {
			const { error: signOutError } = await client.auth.signOut();
			if (signOutError) throw signOutError;

			await navigateToLogin();
		} catch (err) {
			if (err instanceof Error) {
				error.value = err.message;
			} else {
				error.value = "Unknown error occurred";
			}

			toast.add(
				getToast(
					Toasts.ERROR,
					error.value || "Error signing out. Please try again.",
				),
			);
		}
	};

	const navigateToHome = async () => {
		if (user.value) {
			toast.add(getToast(Toasts.SUCCESS, "Welcome back!"));

			await navigateTo("/");
		}
	};

	const navigateToLogin = async () => {
		toast.add(getToast(Toasts.INFO, "Redirecting to login page..."));

		await navigateTo("/login");
	};

	return {
		// States
		user,
		isAuthed,

		// Conditions
		error,

		// Actions
		signIn,
		signUp,
		signOut,

		// Utilities
		navigateToHome,
		navigateToLogin,
	};
};
