import Images from "@/components/core/ProductDetails/Images";
import Description from "@/components/shared/Description";
import List from "@/components/shared/List";
import Rating from "@/components/shared/Rating";
import Title from "@/components/shared/Title";
import Image from "next/image";
import React from "react";

const ProductDetailsMainPart = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div className="w-full ">
				<Images
					images={[
						"/Images/image-1.png",
						"/Images/image-2.png",
					]}
				/>
			</div>
			<div className="w-full md:w-[90%] flex flex-col gap-5">
				{/* Prduct Name */}
				<Title
					title="Crispy chicken breasts"
					className=" text-start text-3xl md:text-5xl"
				/>
				{/* Rating */}
				<Rating
					current_value={4}
					className=" justify-start"
				/>

				{/* price */}
				<Title
					title="$ 54.00"
					className=" text-start text-base"
				/>

				<Description
					description="Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis autem vel eum iure reprehenderit."
					className=" text-start text-base"
				/>

				{/* list */}
				<List
					items={[
						{ title: "SKU:", value: "123H" },
						{ title: "Category:", value: "CPU" },
						{ title: "Tags:", value: "JA" },
						{
							title: "Warranty:",
							value: "1year",
						},
					]}
				/>
			</div>
		</div>
	);
};

export default ProductDetailsMainPart;

