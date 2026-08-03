import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-180 ease-out outline-none select-none disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground",
        secondary:
          "bg-background text-foreground border border-border hover:bg-foreground hover:text-background hover:border-foreground",
        outline:
          "bg-transparent text-foreground border border-border hover:border-foreground",
        ghost:
          "bg-transparent text-foreground hover:underline underline-offset-4",
        link:
          "bg-transparent text-foreground underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-6 py-3.5 text-[15px] tracking-[0.01em] rounded-md",
        sm: "h-9 px-4 text-xs rounded-md",
        lg: "h-14 px-8 text-base rounded-md",
        icon: "h-12 w-12 rounded-md p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
