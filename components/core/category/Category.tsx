import { cn } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ICategory = {
	title: string;
	image_url: string;
	text_styles?: string;
	card_styles?: string;
	category_key?: string;
};
const Category = ({
	title,
	image_url,
	text_styles,
	card_styles,
	category_key,
}: ICategory) => {
	return (
		<Link
			href={`/products/?category=${category_key}`}
			className={cn(
				"  w-[75px] md:w-[130px] h-[75px]  md:h-[130px] rounded-full flex flex-col gap-1 items-center justify-center ",
				card_styles
			)}
		>
			<div className=" w-14 md:w-20 h-auto relative">
				<Image
					alt=""
					src={image_url}
					fill
					className="object-cover   overflow-hidden"
				/>
			</div>
			<p
				className={cn(
					"text-base font-medium font-libre text-center flex-none",
					text_styles
				)}
			>
				{title}
			</p>
		</Link>
	);
};

export default Category;

