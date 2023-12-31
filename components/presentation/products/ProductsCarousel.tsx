// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import Product from "@/components/core/Product/Product";
import { ICONS } from "@/constants/ICONS";
import { IProduct } from "@/types/CommonType";

// const SwiperButtonNext = () => {
// 	const swiper = useSwiper();
// 	return (
// 		<button
// 			className="text-lg "
// 			onClick={() => swiper.slideNext()}
// 		>
// 			{ICONS.arrow_long_right}
// 		</button>
// 	);
// };
// const SwiperButtonPrev = () => {
// 	const swiper = useSwiper();
// 	return (
// 		<button
// 			className="text-2xl "
// 			onClick={() => swiper.slidePrev()}
// 		>
// 			{ICONS.arrow_long_left}
// 		</button>
// 	);
// };

export default function ProductsCarousel({
	products,
}: {
	products: IProduct[];
}) {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Autoplay]}
		>
			{products?.map((product) => {
				return (
					<SwiperSlide
						key={product?._id}
						className="!w-[270px] md:!w-[370px] pb-1.5 "
					>
						<Product product={product} />
					</SwiperSlide>
				);
			})}

			{/* <div className="flex items-center justify-end gap-5 my-5">
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</div> */}
		</Swiper>
	);
}

