export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();

	if (to.path === "/login" && user.value) {
		return navigateTo("/");
	}
});
