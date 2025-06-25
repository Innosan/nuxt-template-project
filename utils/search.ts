export const searchFields = [
	{ key: "content", trigger: ":content" },
	{ key: "entry[0].title", trigger: ":title" },
	{ key: "user.username", trigger: ":username" },
];

export const getValueByPath = (obj: any, path: string): any => {
	const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
	return parts.reduce((acc, part) => acc && acc[part], obj);
};
