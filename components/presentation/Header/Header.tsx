import Link from "next/link";
import Image from "next/image";
import DropDown from "../../shared/DropDown";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ICONS } from "@/constants/ICONS";
import usePathMatch from "@/utils/pathCheck";
import MobileMenus from "./MobileMenus";

const Header = () => {
	return (
		<div className=" bg-[#111114] z-50 sticky inset-0 top-0   max-w-project  h-[100px]  mx-auto flex items-center justify-between py-2">
			{/* Desktop Menus */}
			<div className=" hidden md:flex items-center justify-start gap-8">
				<Link
					href={"/"}
					className={[
						"text-base font-normal font-jakarta ",
						usePathMatch("/")
							? "text-[#FB8F2C]"
							: "text-white",
					].join(" ")}
				>
					Home
				</Link>

				<DropDown
					title="Categories"
					main_btn_styles="text-base font-normal font-jakarta text-] flex items-center gap-1  text-white
					focus:text-[
					#FB8F2C]"
					items={[
						{
							title: "Test",
							path: "/",
							icon: ICONS.headphone,
						},
						{
							title: "CPU",
							path: "/",
							icon: ICONS.cpu,
						},
					]}
				/>

				<Link
					href={"/blogs"}
					className={[
						"text-base font-normal font-jakarta ",
						usePathMatch("/blogs")
							? "text-[#FB8F2C]"
							: "text-white",
					].join(" ")}
				>
					Blogs
				</Link>
				<Link
					href={"/contact"}
					className={[
						"text-base font-normal font-jakarta ",
						usePathMatch("/contact")
							? "text-[#FB8F2C]"
							: "text-white",
					].join(" ")}
				>
					Contact
				</Link>
			</div>

			{/* Moble */}
			<div className="block md:hidden">
				<MobileMenus />
			</div>
			{/* logo Image */}
			<div className="absolute inset-0 ml-10  sm:mx-auto my-auto w-[100px]   md:w-[150px] h-[80px] md:h-[100px]">
				<Link href={"/"}>
					<Image
						src={"/Images/logo.svg"}
						alt="logo"
						fill
						className=" object-cover"
					/>
				</Link>
			</div>

			<div className="flex items-center justify-end gap-7">
				{/* sign in  */}
				<Link
					href={"/signin"}
					className={[
						"text-base font-normal font-jakarta ",
						usePathMatch("/contact")
							? "text-[#FB8F2C]"
							: "text-white",
					].join(" ")}
				>
					Sign in
				</Link>
				{/* sign in  */}
				<Link
					href={"/pc-builder"}
					className={[
						"text-base font-normal font-jakarta ",
						usePathMatch("/contact")
							? "text-[#FB8F2C]"
							: "text-white",
					].join(" ")}
				>
					PC Builder
				</Link>
			</div>
		</div>
	);
};

export default Header;

