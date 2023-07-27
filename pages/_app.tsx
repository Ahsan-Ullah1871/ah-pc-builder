import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Libre_Bodoni, Plus_Jakarta_Sans } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${inter.variable} ${plus_jakarta_sans.variable} ${libre_bodoni.variable} bg-[#111114] min-h-screen`}
		>
			<Component {...pageProps} />
		</main>
	);
}

