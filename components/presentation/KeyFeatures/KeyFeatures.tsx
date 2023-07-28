// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import Product from "@/components/core/Product/Product";
import { ICONS } from "@/constants/ICONS";
import Feature from "@/components/core/feature/Feature";

const KeyFeatures = () => {
	return (
		<div className="w-full bg-primary py-8 ">
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Navigation, Autoplay]}
			>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>
				<SwiperSlide className="!w-auto   ">
					<Feature
						title="Best Food"
						image_url="/Images/logo.svg"
					/>
				</SwiperSlide>

				{/* <div className="flex items-center justify-end gap-5 my-5">
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</div> */}
			</Swiper>
		</div>
	);
};

export default KeyFeatures;

