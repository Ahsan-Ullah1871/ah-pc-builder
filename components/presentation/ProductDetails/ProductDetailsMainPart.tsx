import Images from "@/components/core/ProductDetails/Images";
import Description from "@/components/shared/Description";
import List from "@/components/shared/List";
import Rating from "@/components/shared/Rating";
import Title from "@/components/shared/Title";
import { IProduct } from "@/types/CommonType";
import Image from "next/image";
import React from "react";

const ProductDetailsMainPart = ({
	product_details,
}: {
	product_details: IProduct;
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div className="w-full ">
				<Images
					images={[
						product_details?.image
							? `${product_details?.image}.png`
							: "/p/audio_2.png",
					]}
				/>
			</div>
			<div className="w-full md:w-[90%] flex flex-col gap-5">
				{/* Prduct Name */}
				<Title
					title={product_details?.name}
					className=" text-start text-3xl md:text-5xl"
				/>
				{/* Rating */}
				<Rating
					current_value={Number(
						product_details?.avg_rating
					)}
					className=" justify-start"
				/>

				{/* price */}
				<Title
					title={`$${product_details?.price}`}
					className=" text-start text-base"
				/>

				<Description
					description={product_details?.short_desc}
					className=" text-start text-base"
				/>

				{/* list */}
				<List
					items={product_details?.key_features?.map(
						(feature) => ({
							title: `${
								feature.split(":")[0]
							} : `,
							value: feature.split(":")[1],
						})
					)}
				/>
			</div>
		</div>
	);
};

export default ProductDetailsMainPart;

