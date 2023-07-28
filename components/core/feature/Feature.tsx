import { cn } from "@/utils/classNames";
import Image from "next/image";
import React from "react";

type ICategory = {
	title: string;
	image_url: string;
	text_styles?: string;
	card_styles?: string;
};
const Feature = ({ title, image_url, text_styles, card_styles }: ICategory) => {
	return (
		<div
			className={cn(
				"  flex    items-center justify-stat gap-4 ",
				card_styles
			)}
		>
			<div className=" w-14 h-14   relative">
				<Image
					alt=""
					src={image_url}
					fill
					className="object-cover   overflow-hidden"
				/>
			</div>
			<p
				className={cn(
					" text-xl md:text-2xl font-medium font-libre text-[#111114]",
					text_styles
				)}
			>
				{title}
			</p>
		</div>
	);
};

export default Feature;

