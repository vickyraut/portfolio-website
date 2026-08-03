import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center text-[13px] font-medium border transition-colors duration-180 ease-out px-3 py-1 text-foreground bg-background-secondary border-border select-none",
  {
    variants: {
      variant: {
        pill: "rounded-full",
        rect: "rounded-sm",
        outline: "bg-transparent border-border hover:border-foreground",
        invert: "bg-foreground text-background border-foreground",
      },
      interactive: {
        true: "cursor-pointer hover:bg-foreground hover:text-background hover:border-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "pill",
      interactive: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, interactive, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, interactive, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
