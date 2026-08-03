import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border transition-colors duration-200 ease-out select-none",
  {
    variants: {
      variant: {
        default: "rounded-full text-[13px] font-medium px-3 py-1 bg-background-secondary text-foreground border-border",
        technology: "rounded-full text-[13px] font-medium px-3 py-1 bg-background-secondary text-foreground border-border",
        skill: "rounded-full text-[13px] font-medium px-3 py-1 bg-background-secondary text-foreground border-border",
        category: "rounded-sm text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 bg-background/90 text-foreground border-border backdrop-blur-xs",
        outline: "rounded-sm text-[12px] font-medium px-2.5 py-1 bg-transparent text-foreground border-border hover:border-foreground",
        invert: "rounded-sm text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 bg-foreground text-background border-foreground",
        pill: "rounded-full text-[13px] font-medium px-3 py-1 bg-background-secondary text-foreground border-border",
        rect: "rounded-sm text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 bg-background/90 text-foreground border-border",
      },
      interactive: {
        true: "cursor-pointer hover:bg-foreground hover:text-background hover:border-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: true,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, interactive, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, interactive, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
