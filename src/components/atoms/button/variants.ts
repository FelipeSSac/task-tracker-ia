import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700",
        destructive: "bg-error-600 text-white hover:bg-error-700",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-50 hover:text-neutral-900",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-primary-600 underline-offset-4 hover:underline",
        success: "bg-success-600 text-white hover:bg-success-700",
        warning: "bg-warning-600 text-white hover:bg-warning-700",
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

export { buttonVariants };
