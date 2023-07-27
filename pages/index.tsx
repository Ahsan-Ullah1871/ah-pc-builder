import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/presentation/HeroBanners/HeroBanner";
import DivTest from "@/components/presentation/animations/DivTest";
import Header from "@/components/presentation/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className=" max-w-project mx-auto ">
			<HeroBanner />
		</div>
	);
}

