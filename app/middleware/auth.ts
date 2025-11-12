export default defineNuxtRouteMiddleware((to, _) => {
	const { isAuthed } = useAuth();

	if (to.path === "/login" && isAuthed.value) {
		return navigateTo("/");
	}

	if (to.path !== "/login" && !isAuthed.value) {
		return navigateTo("/login");
	}
});
