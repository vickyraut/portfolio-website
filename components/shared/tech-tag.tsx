import React from "react"
import { Badge, BadgeProps } from "@/components/ui/badge"

export interface TechTagProps extends Omit<BadgeProps, "variant"> {
  label: string
}

export const TechTag: React.FC<TechTagProps> = ({ label, interactive = true, ...props }) => {
  return (
    <Badge variant="pill" interactive={interactive} {...props}>
      {label}
    </Badge>
  )
}
