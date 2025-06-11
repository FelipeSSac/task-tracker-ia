import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-600 text-white hover:bg-primary-700",
        secondary:
          "border-transparent bg-secondary-600 text-white hover:bg-secondary-700",
        destructive:
          "border-transparent bg-error-600 text-white hover:bg-error-700",
        success:
          "border-transparent bg-success-600 text-white hover:bg-success-700",
        warning:
          "border-transparent bg-warning-600 text-white hover:bg-warning-700",
        outline:
          "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
        ghost:
          "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { badgeVariants };
