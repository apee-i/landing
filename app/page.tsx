import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { Documentation } from "@/components/Documentation";
import { Examples } from "@/components/Examples";
import { Community } from "@/components/Community";
import { GitHub } from "@/components/GitHub";
import { Footer } from "@/components/Footer";

export default function Home() {
	const toCheckIfLintFailsTheDeploymentOrNot = "";
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Installation />
      <Documentation />
      <Examples />
      <Community />
      <GitHub />
      <Footer />
    </>
  );
}
