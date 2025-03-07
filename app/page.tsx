import { Header } from "@/app/_components/Header";
import { Hero } from "@/app/_components/Hero";
import { Spacing } from "@/app/_components/Spacing";
import { Status } from "@/app/_components/Status";
import { Skills } from "@/app/_components/Skills";
import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer"; 
import PodcastList from "./_components/PodcastList";

export default function Home() {
  return (
    <main>
      <section id="header">
        <Header />
      </section>
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <section id="podcasts">
        <PodcastList />
      </section>
      <Spacing size="md" />
      <section id="projects">
        <Status />
      </section>
      <Spacing size="md" />
      <section id="projects">
        <Skills />
      </section>
      <Spacing size="md" />
      <section id="contact">
        <Contact />
      </section>
      <Spacing size="md" />
      <Footer />
    </main>
  );
}