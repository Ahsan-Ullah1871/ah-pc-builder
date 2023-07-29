import { ICONS } from "@/constants/ICONS";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { IProduct } from "@/types/CommonType";
import { useRouter } from "next/router";
import Rating from "@/components/shared/Rating";
import List from "@/components/shared/List";

const Product2 = ({ product }: { product: IProduct }) => {
	const router = useRouter();
	return (
		<div className=" w-full flex flex-col gap-4">
			{/* Image */}
			<div className=" relative w-full h-[300px] ">
				<Image
					alt=""
					className=" object-contain bg-white"
					src={`${product.image}.png`}
					fill
				/>
			</div>

			{/* Desc */}
			<div className="text-2x text-[#fff] font-libre font-medium flex items-start gap-4  ">
				<p className=" flex-grow">{product?.name}</p>
				<p className="flex-none">${product.price}</p>
			</div>

			<div>
				<p className=" text-base font-jakarta text-white/80  ">
					{product?.short_desc}
				</p>
			</div>

			<div className="text-2x text-[#fff] font-libre font-medium flex items-start gap-2  ">
				<List
					listParentStyles="flex-row  flex-wrap gap-4"
					titleStyles=" text-sm"
					valueStyles=" text-sm"
					items={[
						{
							title: "Category:",
							value: `${product.category} , `,
						},
						{
							title: "Status:",
							value: product.status,
						},
					]}
				/>
			</div>

			<div className="flex items-center justify-between ">
				<SecondaryButton
					title="See details"
					onClick={() =>
						router.push(
							`/products/${product._id}`
						)
					}
				/>
				<Rating
					current_value={Number(product.avg_rating)}
					className=" justify-start"
				/>
			</div>
		</div>
	);
};

export default Product2;
