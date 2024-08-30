export type SectionSize = {
	sectionSpacing: string;
	titleSize: string;
	iconSize: string;
};

export const SectionSizes = {
	sm: <SectionSize>{
		sectionSpacing: "gap-2",
		titleSize: "text-lg",
		iconSize: "w-4 h-4",
	},
	md: <SectionSize>{
		sectionSpacing: "gap-4",
		titleSize: "text-xl",
		iconSize: "w-6 h-6",
	},
};
