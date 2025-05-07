type Image = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

export type Entry = {
	mal_id: string;
	url: string;
	images: {
		img: Image;
		webp: Image;
	};
	title: string;
};

export const getDefaultEntry = () => {
	return {
		mal_id: "",
		url: "",
		images: {
			img: {
				image_url: "",
				small_image_url: "",
				large_image_url: "",
			},
			webp: {
				image_url: "",
				small_image_url: "",
				large_image_url: "",
			},
		},
		title: "",
	} as Entry;
};
