import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "@/components/icons/GithubIcon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    emnagrami.com
                </h1>
                <div className="flex-1" />
                <ul className="flex item-center gap-2">
                    <Link
                        href="https://github.com/gEmna123"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={12} className="text-foreground" />

                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/emna-grami-454a182b2/"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedInIcon size={12} className="text-foreground" />

                    </Link>
                </ul>

            </Section>
        </header>
    )
}