import { getToast } from "~/types/ui/Notification";

export const useAuth = () => {
	const toast = useToast();
	const client = useSupabaseClient();
	const user = useSupabaseUser();

	const isAuthed = computed(() => user.value !== null);

	const error = ref(null);
	const loading = ref(false);

	const signIn = async (email: string, password: string) => {
		loading.value = true;
		error.value = null;

		try {
			const { error: signInError } = await client.auth.signInWithPassword(
				{
					email,
					password,
				},
			);

			if (signInError) throw signInError;

			navigateToHome();
		} catch (err) {
			error.value = err.message;

			toast.add({
				title: "Error",
				color: "neutral",
				description: error.value,
			});
		} finally {
			loading.value = false;
		}
	};

	const signUp = async (email: string, password: string) => {
		loading.value = true;
		error.value = null;

		try {
			const { error: signUpError } = await client.auth.signUp({
				email,
				password,
			});

			if (signUpError) throw signUpError;
		} catch (err) {
			error.value = err.message;

			toast.add({
				title: "Error",
				color: "neutral",
				description: error.value,
			});
		} finally {
			loading.value = false;

			navigateToHome();
		}
	};

	const signOut = async () => {
		loading.value = true;
		error.value = null;

		try {
			const { error: signOutError } = await client.auth.signOut();
			if (signOutError) throw signOutError;
		} catch (err) {
			error.value = err.message;
		} finally {
			loading.value = false;

			navigateToLogin();
		}
	};

	const navigateToHome = () => {
		if (user.value) {
			navigateTo("/");
		}
	};

	const navigateToLogin = () => {
		navigateTo("/login");
	};

	return {
		error,
		loading,
		user,
		isAuthed,
		signIn,
		signUp,
		signOut,
		navigateToHome,
		navigateToLogin,
	};
};
