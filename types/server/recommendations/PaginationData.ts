export type PaginationData = {
	last_visible_page: number;
	has_next_page: boolean;
};

export const getDefaultPaginationData = () =>
	({
		last_visible_page: 0,
		has_next_page: false,
	}) as PaginationData;
