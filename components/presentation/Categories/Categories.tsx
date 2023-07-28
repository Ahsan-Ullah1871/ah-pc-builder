import Category from "@/components/core/category/Category";
import { ICategory } from "@/types/CommonType";

const Categories = ({ categories }: { categories: ICategory[] }) => {
	return (
		<div className="flex items-center justify-center gap-6  md:gap-10 flex-wrap">
			{categories?.map((category) => {
				return (
					<Category
						key={category?._id}
						category_key={category?.key}
						card_styles="bg-[#FFFF81]"
						title={category?.name}
						text_styles="text-black/80"
						image_url={"/Images/logo.svg"}
					/>
				);
			})}
		</div>
	);
};

export default Categories;

