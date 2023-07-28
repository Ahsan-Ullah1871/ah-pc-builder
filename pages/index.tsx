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
import ShopGallery from "@/components/presentation/Gallery/ShopGallery";
import KeyFeatures from "@/components/presentation/KeyFeatures/KeyFeatures";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className=" flex flex-col gap-20 ">
			<div className="max-w-project mx-auto px-4">
				<HeroBanner />
			</div>

			{/* Featured listings */}
			<div className="max-w-project w-full   mx-auto px-4">
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
			</div>

			{/* Featured listings */}
			<div className="max-w-project mx-auto px-4">
				<div className="max-w-xl mx-auto flex flex-col gap-4 mb-10">
					<Title title="Most popular food" />
					<Description
						description="A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!"
						className="text-center"
					/>
				</div>

				<Categories />
			</div>

			{/*  */}
			<div className="">
				<KeyFeatures />
			</div>

			{/* Gallery */}
			<div className="max-w-project w-full mx-auto px-4">
				<div className="max-w-xl  mx-auto flex flex-col gap-4 mb-10">
					<span className="absolute left-0 hidden sm:block">
						{VECTORS.start_shape}
					</span>
					<Title title="Visit Our Restaurant" />
					<Description
						description="Quality country-style menu selection, friendly and efficient service, combined with genuine value has kept Our Best serving families like yours for over 28."
						className="text-center"
					/>
				</div>
				<ShopGallery />
			</div>
		</div>
	);
}

