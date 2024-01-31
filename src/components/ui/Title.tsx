import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("", {
	variants: {
		variant: {
			default: "text-3xl leading-8 font-semibold",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type TitleProps = VariantProps<typeof titleVariants> & ComponentProps<"h1">;

const Title = ({ className, variant, ...props }: TitleProps) => {
	return (
		<h1 className={cn(titleVariants({ variant, className }))} {...props}>
			{props.children}
		</h1>
	);
};

export default Title;
