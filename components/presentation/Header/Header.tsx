import Link from "next/link";
import Image from "next/image";
import DropDown from "../../shared/DropDown";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ICONS } from "@/constants/ICONS";
import usePathMatch from "@/utils/pathCheck";
import MobileMenus from "./MobileMenus";
import { signOut, useSession } from "next-auth/react";
import { FeaturedCategoriesData } from "@/data/CategoriesList";

const Header = () => {
	const { data: user_session } = useSession();

	return (
		<div className=" px-4 md:px-0 bg-[#111114] z-50 sticky inset-0 top-0 ">
			<div className="    max-w-project  h-[80px]  mx-auto flex items-center justify-between py-2">
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
						items={FeaturedCategoriesData}
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
				<div className="absolute inset-0 ml-10  sm:mx-auto my-auto w-[100px]   md:w-[150px] h-[80px]  ">
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
					{!user_session?.user?.email && (
						<Link
							href={"/signin"}
							className={[
								"text-base font-normal font-jakarta  text-white",
							].join(" ")}
						>
							Sign in
						</Link>
					)}
					{/* Log oyu  */}
					{user_session?.user?.email && (
						<button
							onClick={() => signOut()}
							className={[
								"text-base font-normal font-jakarta text-white ",
							].join(" ")}
						>
							Logout
						</button>
					)}
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
		</div>
	);
};

export default Header;

