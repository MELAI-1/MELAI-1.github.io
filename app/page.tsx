import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ProjectHub } from "@/components/sections/ProjectHub";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <ProjectHub />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
