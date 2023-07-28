import ProductDetailsMainPart from "@/components/presentation/ProductDetails/ProductDetailsMainPart";
import TabCard from "@/components/shared/TabCard";
import React from "react";

const ProductDetails = () => {
	return (
		<div className="px-4  py-10 md:py-20">
			<div className="max-w-project w-full   mx-auto ">
				<ProductDetailsMainPart />
				<TabCard />
			</div>
		</div>
	);
};

export default ProductDetails;

