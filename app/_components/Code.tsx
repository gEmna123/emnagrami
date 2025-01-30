import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 border-accent p-1 text-primary rounded-sm", className)} {...props} />
}