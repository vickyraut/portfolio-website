import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-md border border-border bg-background px-4 py-3.5 text-body text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:border-foreground focus:ring-0 disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-foreground",
          error && "border-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
