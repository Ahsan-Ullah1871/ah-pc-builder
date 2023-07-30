import React from "react";
import { motion } from "framer-motion";
import { type } from "os";
import { cn } from "@/utils/classNames";

type IButton = {
	title: string;
	button_styles?: string;
	onClick?: (e: any) => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
};

const PrimaryButton = ({
	title,
	onClick,
	button_styles,
	disabled = false,
	type = "button",
}: IButton) => {
	return (
		<motion.button
			type={type}
			disabled={disabled}
			className={cn(
				`group relative font-jakarta text-base     border-2 px-4 py-2 ${
					disabled
						? " cursor-not-allowed !bg-gray-400"
						: "cursor-pointer"
				}`,
				button_styles
			)}
			whileHover="hover"
			initial={{
				color: "white",
				backgroundColor: "#FB8F2C",
				borderColor: "#fff",
			}}
			variants={{
				hover: {
					color: "#FB8F2C",
					borderColor: "#FB8F2C",
					backgroundColor: "#ffff",
				},
			}}
			onClick={(e) => onClick && onClick(e)}
		>
			{title}
		</motion.button>
	);
};

export default PrimaryButton;

