import { type Entry, getDefaultEntry } from "./index";
import type { User } from "~~/types/server/User";

export type RecommendationsData = {
	mal_id: string;
	entry: Entry[];
	content: string;
	user: User;
};

export const getDefaultRecommendationsData = () =>
	({
		mal_id: "",
		entry: [getDefaultEntry()],
		content: "",
		user: {
			url: "",
			username: "",
		},
	}) as RecommendationsData;
