import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-md border border-border bg-background p-4 text-body text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:border-foreground focus:ring-0 disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-foreground resize-y",
          error && "border-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
