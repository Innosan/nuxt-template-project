export const persistOptions = {
	cookieDefault: {
		storage: persistedState.cookiesWithOptions({
			maxAge: 60 * 60 * 24 * 120, // 120 days
			sameSite: "strict",
		}),
	},
};
