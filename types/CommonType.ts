//   type for a product
export type IProduct = {
	_id?: string;
	image: string;
	name: string;
	category: string;
	status: "In Stock" | "Out Stock" | string;
	price: string;
	description: string;
	short_desc: string;
	key_features: string[];
	inv_rating: string;
	avg_rating: string;
	reviews: string;
	isFeatures?: boolean;
};
//   type for a category
export type ICategory = {
	_id: string;
	name: string;
	key: string;
	image: string;
};

