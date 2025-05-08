import type { PaginationData, RecommendationsData } from "./index";
import {
	getDefaultPaginationData,
	getDefaultRecommendationsData,
} from "./index";

export type Recommendations = {
	data: RecommendationsData[];
	pagination: PaginationData;
};

export const getDefaultRecommendations = () =>
	({
		data: [getDefaultRecommendationsData()],
		pagination: getDefaultPaginationData(),
	}) as Recommendations;
