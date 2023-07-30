import BuilderItem from "@/components/core/PCBuilder/BuilderItem";
import BuilderItemInMobile from "@/components/core/PCBuilder/BuilderItemInMobile";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { ICONS } from "@/constants/ICONS";
import { ICategory, IProduct } from "@/types/CommonType";
import { useAppContext } from "@/utils/Context";
import React from "react";

const PCBuilderTable = ({ categories }: { categories: ICategory[] }) => {
	const { builder_items } = useAppContext();

	// total_price
	let total_price =
		Object.keys(builder_items)?.length > 0
			? Object.entries(builder_items).reduce(
					(acc, [key, value]) => {
						return acc + Number(value.price);
					},
					0
			  )
			: 0;

	// is All completed
	let isAllItemsAdded = categories.every((ct) =>
		Object.keys(builder_items).includes(ct.key)
	);

	return (
		<div
			className="max-w-4xl mx-auto bg-[rgba(255,255,255,0.10)] border 
        border-[rgba(255,255,255,0.80)]   border-opacity-5 min-h-[200px] "
		>
			<ul className="hidden sm:block">
				{/* Header */}
				<li className=" sticky top-[82px]  z-30   bg-primary_dark grid grid-cols-12 py-6  border-b border-b-white/80 border-opacity-20">
					<p className=" text-center col-span-3 text-white font-jakarta text-lg font-semibold">
						Category
					</p>
					<p className=" text-start col-span-5 text-white font-jakarta text-lg font-semibold">
						Product
					</p>
					<p className=" text-center col-span-1 text-white font-jakarta text-lg font-semibold">
						Price
					</p>
					<p className=" text-center col-span-3 text-white font-jakarta text-lg font-semibold">
						Actions
					</p>
				</li>

				{/* Items table */}
				{categories?.map((category) => {
					return (
						<BuilderItem
							key={category._id}
							category={category}
						/>
					);
				})}

				{/* li footer  */}
				<li className=" grid grid-cols-12 py-4  border-b border-b-white/80 border-opacity-20">
					<p className="  col-span-3" />
					<p className="  col-span-3" />
					<p className=" text-end  col-span-3 text-white font-jakarta text-lg font-semibold flex items-center justify-end">
						Subtotal: {"   "}${total_price}
					</p>
					<p className=" text-center col-span-3 text-white font-jakarta text-lg font-semibold">
						<PrimaryButton
							disabled={!isAllItemsAdded}
							title="Complete build"
						/>
					</p>
				</li>
			</ul>

			<div className=" sm:hidden flex flex-col ">
				{categories?.map((category) => {
					return (
						<BuilderItemInMobile
							key={category._id}
							category={category}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PCBuilderTable;

