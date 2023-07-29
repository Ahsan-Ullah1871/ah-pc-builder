import Footer from "@/components/presentation/Footer/Footer";
import Header from "@/components/presentation/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Libre_Bodoni, Plus_Jakarta_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const libre_bodoni = Libre_Bodoni({
	subsets: ["latin"],
	variable: "--font-libre-bodoni",
});
export const plus_jakarta_sans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta-sans",
});

//
const progress = new ProgressBar({
	size: 2,
	color: "#FB8F2C",
	className: "bar-of-progress",
	delay: 100,
});
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
	progress.start();
	progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${inter.variable} ${plus_jakarta_sans.variable} ${libre_bodoni.variable} bg-[#111114] min-h-screen  flex-flex-col`}
		>
			<Header />
			<div className="min-h-[50VH]">
				<Component {...pageProps} />
			</div>
			<Footer />
		</main>
	);
}

