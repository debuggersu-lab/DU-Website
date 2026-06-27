import { useState, useCallback } from "react"
import { CinematicSplash } from "@/components/CinematicSplash"
import { VideoBackground } from "@/components/VideoBackground"
import { CursorGlow } from "@/components/CursorGlow"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { GlowingDivider } from "@/components/GlowingDivider"
import { ParticleCanvas } from "@/components/ParticleCanvas"
import { ProjectsSection } from "@/components/ProjectsSection"
import { EventsSection } from "@/components/EventsSection"
import { AchievementsSection } from "@/components/AchievementsSection"
import { LeadershipSection } from "@/components/LeadershipSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useMagneticHover } from "@/hooks/useMagneticHover"
import { useTiltCards } from "@/hooks/useTiltCards"

export function App() {
  const [splashDone, setSplashDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("splashPlayed") === "true"
    }
    return false
  })

  const handleSplashComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("splashPlayed", "true")
    }
    setSplashDone(true)
  }, [])

  useScrollReveal()
  useMagneticHover()
  useTiltCards()

  return (
    <>
      {!splashDone && <CinematicSplash onComplete={handleSplashComplete} />}
      <VideoBackground />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <HeroSection animationReady={splashDone} />
        <GlowingDivider />
        <ParticleCanvas />
        <ProjectsSection />
        <EventsSection />
        <GlowingDivider />
        <AchievementsSection />
        <LeadershipSection />
        <GlowingDivider />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App


