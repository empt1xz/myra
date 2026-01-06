import Header from "@/components/landing/header";
import { Features } from "@/components/features";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ParticlesBackground />
      <Footer />
    </>
  )
}
