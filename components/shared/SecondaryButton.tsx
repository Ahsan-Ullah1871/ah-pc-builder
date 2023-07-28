import React from "react";
import { motion } from "framer-motion";
import { type } from "os";

type IButton = {
	title: string;
	onClick: (e: any) => void;
};

const SecondaryButton = ({ title, onClick }: IButton) => {
	return (
		<motion.button
			className=" group relative font-jakarta text-base  "
			whileHover="hover"
			initial={{ color: "white" }}
			variants={{
				hover: {
					color: "#FB8F2C",
				},
			}}
			onClick={(e) => onClick(e)}
		>
			{title}
			<motion.div
				className="absolute  -bottom-1  h-[1px]  bg-primary"
				initial={{
					width: "30%",
				}}
				variants={{
					hover: {
						width: "100%",
					},
				}}
			/>
		</motion.button>
	);
};

export default SecondaryButton;

