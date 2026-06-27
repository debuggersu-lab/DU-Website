import { useEffect, useRef, useState, useCallback } from "react"

interface HeroSectionProps {
  animationReady: boolean
  bypassed?: boolean
}

export function HeroSection({ animationReady, bypassed }: HeroSectionProps) {
  const headlineTopRef = useRef<HTMLSpanElement>(null)
  const headlineBottomRef = useRef<HTMLSpanElement>(null)
  const typingRef = useRef<HTMLParagraphElement>(null)
  const [countersStarted, setCountersStarted] = useState(false)
  const countersRef = useRef<HTMLDivElement>(null)

  const headlineTimeoutsRef = useRef<number[]>([])
  const typingTimeoutRef = useRef<number | null>(null)

  const animateHeadline = useCallback(() => {
    if (headlineTopRef.current && headlineBottomRef.current) {
      const topSpans = headlineTopRef.current.querySelectorAll(".headline-letter")
      const bottomSpans = headlineBottomRef.current.querySelectorAll(".headline-letter")

      const animateBatch = (
        spans: NodeListOf<Element>,
        delayOffset: number
      ) => {
        spans.forEach((span, index) => {
          const timeoutId = window.setTimeout(() => {
            span.classList.add("visible")
          }, delayOffset + index * 40)
          headlineTimeoutsRef.current.push(timeoutId)
        })
      }

      animateBatch(topSpans, 200)
      animateBatch(bottomSpans, 800)
    }
  }, [])

  const typeWriter = useCallback(() => {
    const typingText =
      "A modern developer community helping students build projects, join hackathons, collaborate, and grow together."
    const el = typingRef.current
    if (!el) return
    el.innerHTML = ""
    let i = 0
    const type = () => {
      if (i < typingText.length) {
        el.innerHTML += typingText.charAt(i)
        i++
        typingTimeoutRef.current = window.setTimeout(type, 25)
      }
    }
    type()
  }, [])

  useEffect(() => {
    if (!animationReady) return

    if (bypassed) {
      if (headlineTopRef.current && headlineBottomRef.current) {
        const topSpans = headlineTopRef.current.querySelectorAll(".headline-letter")
        const bottomSpans = headlineBottomRef.current.querySelectorAll(".headline-letter")
        topSpans.forEach((span) => span.classList.add("visible"))
        bottomSpans.forEach((span) => span.classList.add("visible"))
      }
      if (typingRef.current) {
        typingRef.current.innerHTML =
          "A modern developer community helping students build projects, join hackathons, collaborate, and grow together."
      }
      return
    }

    animateHeadline()
    const timer = window.setTimeout(typeWriter, 1600)
    return () => {
      window.clearTimeout(timer)
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current)
      }
      headlineTimeoutsRef.current.forEach((id) => window.clearTimeout(id))
      headlineTimeoutsRef.current = []
    }
  }, [animationReady, bypassed, animateHeadline, typeWriter])


  // Counter animation
  useEffect(() => {
    if (countersStarted) return
    const container = countersRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(container)

    return () => observer.disconnect()
  }, [countersStarted])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden" style={{ padding: "80px 20px 0" }}>
      {/* Parallax Icons */}
      <span
        className="parallax-icon material-symbols-outlined"
        style={{ fontSize: "128px", top: "20%", left: "10%" }}
      >
        terminal
      </span>
      <span
        className="parallax-icon material-symbols-outlined"
        style={{ fontSize: "96px", bottom: "15%", right: "5%" }}
      >
        code_blocks
      </span>
      <span
        className="parallax-icon material-symbols-outlined"
        style={{ fontSize: "80px", top: "40%", right: "15%" }}
      >
        deployed_code
      </span>

      <div className="max-w-6xl text-center z-10">
        <h1
          className="font-display-lg mb-8 uppercase tracking-tighter flex flex-col items-center"
          style={{ lineHeight: 0.9 }}
        >
          <span ref={headlineTopRef} className="block text-white mb-2">
            {[..."CODE THE VISION,"].map((char, idx) => (
              <span key={idx} className="headline-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span ref={headlineBottomRef} className="text-glow-orange">
            {[..."SHAPE THE MISSION"].map((char, idx) => (
              <span key={idx} className="headline-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <p
          ref={typingRef}
          className="typing-container font-code-block mb-12 max-w-2xl mx-auto h-12"
          style={{ color: "#e2bfb0" }}
        />

        <div className="flex flex-wrap justify-center gap-6 reveal">
          <button
            onClick={() => {
              document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="magnetic-hover btn-primary px-8 py-4 rounded-xl font-label-caps uppercase tracking-widest font-bold text-lg"
            style={{ color: "#572000" }}
          >
            ACHIEVEMENTS
          </button>
          <button className="magnetic-hover btn-ghost px-8 py-4 rounded-xl font-label-caps uppercase tracking-widest font-bold text-lg" style={{ color: "#ffb693" }}>
            ABOUT
          </button>
        </div>

      </div>

      {/* Stats Overlay Cards */}
      <div
        ref={countersRef}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full reveal"
        style={{ maxWidth: "1440px", padding: "0 64px" }}
      >
        <StatCard icon="groups" target={250} label="Active members" started={countersStarted} />
        <StatCard icon="rocket_launch" target={10} label="Projects build" started={countersStarted} />
        <StatCard icon="emoji_events" target={20} label="Hackathons represented" started={countersStarted} />
      </div>

    </section>
  )
}

function StatCard({
  icon,
  target,
  label,
  started,
}: {
  icon: string
  target: number
  label: string
  started: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const speed = 200
    const inc = target / speed
    let current = 0
    const timer = setInterval(() => {
      current += inc
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.ceil(current))
      }
    }, 1)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div className="glass-card rounded-2xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform" style={{ padding: "32px" }}>
      <span
        className="material-symbols-outlined text-4xl mb-4"
        style={{ color: "#ffb693" }}
      >
        {icon}
      </span>
      <span className="font-headline-lg" style={{ color: "#ffb693" }}>
        {started ? count.toLocaleString() : "0"}
      </span>
      <span className="font-label-caps uppercase" style={{ color: "#e2bfb0" }}>
        {label}
      </span>
    </div>
  )
}
