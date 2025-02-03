"use client";

import { useState, useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out",
            hidden ? "-translate-y-full" : "translate-y-0"
        )}>
            <Section className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
                <Link href="/" className="text-xl font-bold text-white">
                    emnagrami.com
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link href="https://github.com" className={buttonVariants({ variant: "ghost" })}>
                        <GithubIcon className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://linkedin.com" className={buttonVariants({ variant: "ghost" })}>
                        <LinkedInIcon className="w-6 h-6 text-white" />
                    </Link>
                </nav>
            </Section>
        </header>
    );
};
