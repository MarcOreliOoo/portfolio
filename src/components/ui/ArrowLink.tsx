import React, { Component, ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { ArrowRight, LucideIcon } from "lucide-react";

/*  */
const arrowVariants = cva(
	"w-16 inline-flex items-center justify-center whitespace-nowrap rounded-3xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-background text-foreground border border-primary  hover:bg-primary hover:text-primary-foreground",
				primary:
					"bg-primary text-primary-foreground border border-primary-foreground hover:bg-background hover:text-foreground hover:border-primary",
				secondary:
					"bg-secondary text-secondary-foreground border border-primary-foreground hover:bg-background hover:text-foreground hover:border-primary",
				accent: "bg-accent text-accent-foreground border border-accent-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

// TODO: change the arrowVariants to be more like the buttonVariants and switch lucide icon with animation on hover
type ArrowLinkProps = VariantProps<typeof arrowVariants> &
	ComponentProps<LucideIcon>;

const ArrowLink = forwardRef(
	(
		{ className, variant, size, ...props }: ArrowLinkProps,
		ref:
			| ((
					| ((instance: SVGSVGElement | null) => void)
					| React.RefObject<SVGSVGElement>
			  ) &
					(
						| string
						| ((instance: SVGSVGElement | null) => void)
						| React.RefObject<SVGSVGElement>
					))
			| null
			| undefined
	) => {
		return (
			<ArrowRight
				className={cn(arrowVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
ArrowLink.displayName = "ArrowLink";

export { ArrowLink, arrowVariants };
