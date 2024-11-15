export interface GridOptions {
	columns?: number;
	responsiveColumns?: {
		md?: number;
		lg?: number;
		xl?: number;
	};
	gap?: number;
}

export const defaultGridOptions: GridOptions = {
	columns: 1,
	responsiveColumns: {
		md: 2,
		lg: 4,
		xl: 6,
	},
	gap: 4,
};

export const createGridOptions = (
	options: Partial<GridOptions> = {},
): GridOptions => {
	return {
		columns: options.columns || defaultGridOptions.columns,
		responsiveColumns:
			options.responsiveColumns || defaultGridOptions.responsiveColumns,
		gap: options.gap || defaultGridOptions.gap,
	};
};

export const classNames = (options: GridOptions) => {
	return `grid gap-${options.gap} grid-cols-${options.columns} ${Object.entries(
		options.responsiveColumns || {},
	)
		.map(([key, value]) => `${key}:grid-cols-${value}`)
		.join(" ")}`;
};
