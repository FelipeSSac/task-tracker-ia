import { VariantProps } from "class-variance-authority";
import { badgeVariants } from ".";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;
