"use client";

import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "sticky top-0 py-4 ",
            hidden ? "-translate-y-full" : "translate-y-0"
        )}>
            <Section className="flex items-center justify-between p-4  shadow-md">
            <h1 className="text-lg font-bold text-primary">
                    emnagrami.com
                </h1>
                <nav className="flex items-center space-x-4">
                    <Link href="https://github.com" className={buttonVariants({ variant: "ghost" })}>
                        <GithubIcon className="w-6 h-6" />
                    </Link>
                    <Link href="https://linkedin.com" className={buttonVariants({ variant: "ghost" })}>
                        <LinkedInIcon className="w-6 h-6" />
                    </Link>
                </nav>
            </Section>
        </header>
    );
};
