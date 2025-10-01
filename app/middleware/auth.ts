export default defineNuxtRouteMiddleware((to, _) => {
	const user = useSupabaseUser();

	if (to.path === "/login" && user.value) {
		return navigateTo("/");
	}
});
