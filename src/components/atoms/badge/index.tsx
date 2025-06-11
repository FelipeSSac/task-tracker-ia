import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { BadgeProps } from "./props";
import { badgeVariants } from "./variants";

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
