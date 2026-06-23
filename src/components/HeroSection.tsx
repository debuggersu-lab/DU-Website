import { useEffect, useRef, useState, useCallback } from "react"

interface HeroSectionProps {
  animationReady: boolean
}

export function HeroSection({ animationReady }: HeroSectionProps) {
  const headlineTopRef = useRef<HTMLSpanElement>(null)
  const headlineBottomRef = useRef<HTMLSpanElement>(null)
  const typingRef = useRef<HTMLParagraphElement>(null)
  const [countersStarted, setCountersStarted] = useState(false)
  const countersRef = useRef<HTMLDivElement>(null)

  const animateHeadline = useCallback(() => {
    const splitAndWrap = (el: HTMLElement) => {
      const text = el.textContent || ""
      el.textContent = ""
      ;[...text].forEach((char) => {
        const span = document.createElement("span")
        span.textContent = char === " " ? "\u00A0" : char
        span.className = "headline-letter"
        el.appendChild(span)
      })
      return el.querySelectorAll(".headline-letter")
    }

    if (headlineTopRef.current && headlineBottomRef.current) {
      const topSpans = splitAndWrap(headlineTopRef.current)
      const bottomSpans = splitAndWrap(headlineBottomRef.current)

      const animateBatch = (
        spans: NodeListOf<Element>,
        delayOffset: number
      ) => {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add("visible")
          }, delayOffset + index * 40)
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
    let i = 0
    const type = () => {
      if (i < typingText.length) {
        el.innerHTML += typingText.charAt(i)
        i++
        setTimeout(type, 25)
      }
    }
    type()
  }, [])

  useEffect(() => {
    if (!animationReady) return
    animateHeadline()
    setTimeout(typeWriter, 1600)
  }, [animationReady, animateHeadline, typeWriter])

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
            CODE THE VISION,
          </span>
          <span ref={headlineBottomRef} className="text-glow-orange">
            SHAPE THE MISSION
          </span>
        </h1>

        <p
          ref={typingRef}
          className="typing-container font-code-block mb-12 max-w-2xl mx-auto h-12"
          style={{ color: "#e2bfb0" }}
        />

        <div className="flex flex-wrap justify-center gap-6 reveal">
          <button className="magnetic-hover btn-primary px-8 py-4 rounded-xl font-label-caps uppercase tracking-widest font-bold text-lg" style={{ color: "#572000" }}>
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
        <StatCard icon="groups" target={2500} label="Active Developers" started={countersStarted} />
        <StatCard icon="rocket_launch" target={120} label="Projects Built" started={countersStarted} />
        <StatCard icon="emoji_events" target={45} label="Hackathons Won" started={countersStarted} />
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
