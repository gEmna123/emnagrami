import { Component, ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";



export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-emna">Emna Grami</h2>
                <h3 className="text-3xl font-caption">Développeuse d'applications</h3>
                <p className="text-justify">💻 Passionnée par la création d'expériences numériques innovantes, je conçois et développe des applications performantes en utilisant les dernières technologies.</p>
                <p className="text-justify">✨ J'aime résoudre des problèmes techniques, optimiser le code et apprendre en continu pour proposer des solutions modernes et efficaces.</p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img src="https://avatars.githubusercontent.com/u/140692808?v=4" 
                className="w-full h-auto max-w-xs rounded-full max-md:w-56" alt="Emna's picture" />
            </div>
        </Section>
    );
}