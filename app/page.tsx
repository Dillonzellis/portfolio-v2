import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";
import { About } from "@/components/sections/About";
import { Intro } from "@/components/sections/Intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
