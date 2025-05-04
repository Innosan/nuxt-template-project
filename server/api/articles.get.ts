import { articles } from "~/types/server/Article";

export default defineEventHandler(async (event) => {
	const { page = 1, limit = 10 } = getQuery(event);

	return articles.slice((page - 1) * limit, page * limit);
});
