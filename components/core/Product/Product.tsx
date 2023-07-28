import { ICONS } from "@/constants/ICONS";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/shared/SecondaryButton";

const Product = () => {
	return (
		<div className="w-[370px] flex flex-col gap-4">
			{/* Image */}
			<div className=" relative w-[370px] h-[300px] ">
				<Image
					alt=""
					className=" object-cover"
					src={"/Images/product.png"}
					fill
				/>
			</div>

			{/* Desc */}
			<div className="text-2x text-[#fff] font-libre font-medium flex items-start gap-4  ">
				<p className=" flex-grow">Hello world</p>
				<p className="flex-none">$120</p>
			</div>

			<div>
				<p className=" text-base font-jakarta text-white/80 ">
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Facere velit debitis iusto
				</p>
			</div>

			<div className="flex items-center justify-between ">
				<SecondaryButton
					title="Buy now"
					onClick={() => {}}
				/>
				<div className="flex items-center gap-1">
					<p className="text-primary">{ICONS.star}</p>
					<p className="text-primary">{ICONS.star}</p>
					<p className="text-primary">{ICONS.star}</p>
					<p className="text-[#828282]">
						{ICONS.star}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Product;


