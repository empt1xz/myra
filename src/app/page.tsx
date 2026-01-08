import Header from "@/components/landing/header";
import { Features } from "@/components/features";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Roadmap } from "@/components/roadmap";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Roadmap />
      <CTA />
      <ParticlesBackground />
      <Footer />
    </>
  )
}
