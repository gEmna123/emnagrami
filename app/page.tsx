import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "@/app/_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "@/app/_components/Skills";
import Contact from "@/app/_components/Contact"; // Assurez-vous que le chemin est correct

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
    </main>
  );
}
