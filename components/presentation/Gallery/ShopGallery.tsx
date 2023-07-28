/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const ShopGallery = () => {
	return (
		<div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-rows-2  gap-7 ">
			<div className=" h-[240px]  relative">
				<Image
					alt=""
					fill
					src={"/Images/image.png"}
				/>
			</div>
			<div className=" row-span-2 w-full h-full     relative">
				<Image
					alt=""
					fill
					src={"/Images/image-1.png"}
				/>
			</div>
			<div className=" w-full h-full     relative">
				<Image
					alt=""
					fill
					src={"/Images/image.png"}
				/>
			</div>

			<div className="  w-full h-full     relative">
				<Image
					alt=""
					fill
					src={"/Images/image.png"}
				/>
			</div>
			<div className=" w-full h-full     relative">
				<Image
					alt=""
					fill
					src={"/Images/image.png"}
				/>
			</div>
		</div>
	);
};

export default ShopGallery;

