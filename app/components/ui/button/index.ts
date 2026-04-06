import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        slider:
          "text-primary   shadow-sm hover:bg-accent hover:text-accent-foreground",
        outline:
          "border backdrop-blur-[20px] bg-white/10 border-white text-white shadow-btn-inset  shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-primary/20 text-primary border border-primary shadow-sm hover:bg-primary/80 hover:text-white/80 hover:border-primary/80",
        ghost:
          "bg-primary text-white tablet:text-primary tablet:bg-white  border border-[#D3D3D3] md:backdrop-blur-[20px]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[52px] max-w-[170px] w-full p-4 ",
        xs: "h-13  py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
