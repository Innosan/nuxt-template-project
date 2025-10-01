export const persistOptions = {
	cookieDefault: {
		storage: piniaPluginPersistedstate.cookies({
			maxAge: 60 * 60 * 24 * 120, // 120 days
			sameSite: 'strict',
		}),
	},
};
