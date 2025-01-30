import { cn } from "@/lib/utils";

export type SpacingProps = {
    size?: "sm" | "md" | "lg" ;  
};
export const Spacing = (props: SpacingProps) => {
    return <div 
    className={cn ({
        "h-8": props.size === "sm",
        "h-16": props.size === "md",
        "h-16==32": props.size === "lg",
    })}
     />;
};