import { useState, useCallback, useEffect } from "react"
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

  const [bypassed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("splashPlayed") === "true"
    }
    return false
  })

  const [showMock, setShowMock] = useState(false)

  const handleSplashComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("splashPlayed", "true")
    }
    setSplashDone(true)
  }, [])

  useScrollReveal()
  useMagneticHover()
  useTiltCards(showMock)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "x") {
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        ) {
          return
        }
        setShowMock((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {!splashDone && <CinematicSplash onComplete={handleSplashComplete} />}
      <VideoBackground />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <HeroSection animationReady={splashDone} bypassed={bypassed} />

        <GlowingDivider />
        <ParticleCanvas />
        <ProjectsSection showMock={showMock} />
        <EventsSection showMock={showMock} />
        <GlowingDivider />
        <AchievementsSection showMock={showMock} />
        <LeadershipSection />
        <GlowingDivider />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App



