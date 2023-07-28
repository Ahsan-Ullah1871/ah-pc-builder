import ProductDetailsMainPart from "@/components/presentation/ProductDetails/ProductDetailsMainPart";
import TabCard from "@/components/shared/TabCard";
import { IProduct } from "@/types/CommonType";
import React from "react";
import type {
	InferGetStaticPropsType,
	GetStaticProps,
	GetStaticPaths,
} from "next";

type ProductDetails = {
	product_details: IProduct;
};

const ProductDetails = ({
	product_details,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="px-4  py-10 md:py-20">
			<div className="max-w-project w-full   mx-auto ">
				<ProductDetailsMainPart
					product_details={product_details}
				/>
				<TabCard
					buttons={[
						{ title: "Description" },
						{ title: "Reviews" },
					]}
					descriptions={[
						{
							desc: product_details.description,
						},
						{
							desc: "N/A",
						},
					]}
				/>
			</div>
		</div>
	);
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
	const base_url = process.env.BASE_URL;
	// all products
	const all_products_resp = await fetch(`${base_url}/api/products`);
	const all_products = await all_products_resp.json();

	return {
		paths: all_products.map((product: IProduct) => ({
			params: {
				id: product._id,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ProductDetails> = async ({
	params,
}) => {
	const base_url = process.env.BASE_URL;
	// all products
	const product_details_res = await fetch(
		`${base_url}/api/products/${params?.id}`
	);
	const product_details = await product_details_res.json();

	return { props: { product_details } };
};

