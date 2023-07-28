import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/presentation/HeroBanners/HeroBanner";
import DivTest from "@/components/presentation/animations/DivTest";
import Header from "@/components/presentation/Header/Header";
import Product from "@/components/core/Product/Product";
import ProductsCarousel from "@/components/presentation/products/ProductsCarousel";
import Title from "@/components/shared/Title";
import Description from "@/components/shared/Description";
import { VECTORS } from "@/constants/Vectors";
import Category from "@/components/core/category/Category";
import { ICONS } from "@/constants/ICONS";
import Categories from "@/components/presentation/Categories/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className=" max-w-project mx-auto ">
			<HeroBanner />

			{/* Featured listings */}
			<div className="max-w-xl mx-auto flex flex-col gap-4 mb-10">
				<span className="absolute left-0 hidden sm:block">
					{VECTORS.star}
				</span>
				<Title title="Most popular food" />
				<Description
					description="A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!"
					className="text-center"
				/>
			</div>
			<ProductsCarousel />

			{/* Featured listings */}
			<div className="max-w-xl mx-auto flex flex-col gap-4 mb-10">
				<Title title="Most popular food" />
				<Description
					description="A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!"
					className="text-center"
				/>
			</div>

			<Categories />
		</div>
	);
}

