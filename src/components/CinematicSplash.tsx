import { useEffect, useRef, useState } from "react"

interface CinematicSplashProps {
  onComplete: () => void
}

const KEYBOARD_LAYOUT = [
  ["ESC", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "INS", "DEL"],
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BACKSPACE"],
  ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
  ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"],
  ["CTRL", "WIN", "ALT", "SPACE", "ALT", "FN", "CTRL"],
]

const RGB_COLORS = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]

const TYPING_SEQUENCE = "YOU ARE ENTERING INTO THE WORLD OF..."

function getKeyWidthClass(key: string, rowIdx: number, keyIdx: number) {
  if (key === "BACKSPACE") return "key-backspace"
  if (key === "TAB") return "key-tab"
  if (key === "CAPS") return "key-caps"
  if (key === "ENTER") return "key-enter"
  if (key === "SHIFT") return rowIdx === 4 && keyIdx === 0 ? "key-shift-l" : "key-shift-r"
  if (key === "SPACE") return "key-space"
  return ""
}

export function CinematicSplash({ onComplete }: CinematicSplashProps) {
  const [stage, setStage] = useState<"welcome" | "keyboard" | "brand" | "done">("welcome")
  const [welcomeClass, setWelcomeClass] = useState("active")
  const [terminalText, setTerminalText] = useState("")
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [enterFlare, setEnterFlare] = useState(false)
  const splashRef = useRef<HTMLDivElement>(null)
  const charIndexRef = useRef(0)
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)

  // Track window resizing for dynamic keyboard scaling
  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Stage 1: Welcome → Keyboard
  useEffect(() => {
    if (stage !== "welcome") return
    document.body.classList.add("locked")

    const timer = setTimeout(() => {
      setWelcomeClass("exit")
      setTimeout(() => setStage("keyboard"), 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [stage])

  // Stage 2: Keyboard typing
  useEffect(() => {
    if (stage !== "keyboard") return
    charIndexRef.current = 0

    const interval = setInterval(() => {
      const idx = charIndexRef.current
      if (idx >= TYPING_SEQUENCE.length) {
        clearInterval(interval)
        // Trigger enter sequence
        setTimeout(() => {
          setTerminalText((prev) => prev + " [UNLOCKED]")
          setEnterFlare(true)
          setTimeout(() => setStage("brand"), 1800)
        }, 1200)
        return
      }

      setTerminalText((prev) => prev + TYPING_SEQUENCE[idx])

      const char = TYPING_SEQUENCE[idx].toLowerCase()
      setActiveKeys((prev) => new Set(prev).add(char))
      setTimeout(() => {
        setActiveKeys((prev) => {
          const next = new Set(prev)
          next.delete(char)
          return next
        })
      }, 120)

      charIndexRef.current++
    }, 80)

    return () => clearInterval(interval)
  }, [stage])

  // Stage 3: Brand reveal → Exit
  useEffect(() => {
    if (stage !== "brand") return
    const timer = setTimeout(() => {
      setStage("done")
    }, 4000)
    return () => clearTimeout(timer)
  }, [stage])

  // Exit
  useEffect(() => {
    if (stage !== "done") return
    const splash = splashRef.current
    if (splash) {
      splash.style.opacity = "0"
      splash.style.transition = "opacity 1s ease"
    }
    setTimeout(() => {
      document.body.classList.remove("locked")
      onComplete()
    }, 1000)
  }, [stage, onComplete])

  // Calculate dynamic scale factor for keyboard (max width of keyboard layout is around 980px)
  const scaleFactor = Math.max(0.32, Math.min(1, (windowWidth - 32) / 980))

  if (stage === "done") {
    return (
      <div id="cinematic-splash" ref={splashRef}>
        <div className="splash-bg-glow" />
      </div>
    )
  }

  return (
    <div id="cinematic-splash" ref={splashRef}>
      <div className="splash-bg-glow" />

      {/* Stage 1: Welcome */}
      {stage === "welcome" && (
        <div className="relative z-10 block text-center px-4">
          <h1 className={`splash-text text-5xl md:text-8xl ${welcomeClass}`}>
            WELCOME TO THE COMMUNITY
          </h1>
        </div>
      )}

      {/* Stage 2: Keyboard */}
      {stage === "keyboard" && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <div className="text-center mb-8 md:mb-16">
            <div
              className="font-code-block text-lg md:text-2xl tracking-[0.2em] mb-4 h-10 uppercase px-4"
              style={{ color: "#ffb693" }}
            >
              {terminalText}
            </div>
          </div>

          {/* Dynamic keyboard scaling container */}
          <div 
            className="flex items-center justify-center w-full overflow-hidden"
            style={{ height: `${420 * scaleFactor}px` }}
          >
            <div 
              className="keyboard-frame"
              style={{ 
                transform: `scale(${scaleFactor})`,
                transformOrigin: "center",
                width: "980px",
                flexShrink: 0
              }}
            >
              <div className="keyboard-grid">
                {KEYBOARD_LAYOUT.map((row, rIdx) => (
                  <div key={rIdx} className="keyboard-row">
                    {row.map((key, kIdx) => {
                      const color = RGB_COLORS[(rIdx + kIdx) % RGB_COLORS.length]
                      const isActive = activeKeys.has(key.toLowerCase()) || (enterFlare && key === "ENTER")
                      const widthClass = getKeyWidthClass(key, rIdx, kIdx)

                      return (
                        <div
                          key={`${rIdx}-${kIdx}`}
                          className={`key ${widthClass} ${isActive ? "active" : ""}`}
                          style={{
                            color: isActive ? "white" : `${color}66`,
                            boxShadow:
                              enterFlare && key === "ENTER"
                                ? "0 0 150px 40px rgba(255, 107, 0, 0.7)"
                                : undefined,
                          }}
                        >
                          {key}
                          <div
                            className="key-glow"
                            style={{
                              background: color,
                              boxShadow: `0 0 15px ${color}`,
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stage 3: Brand Reveal */}
      {stage === "brand" && (
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(40px)",
            opacity: 1,
            visibility: "visible",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 mb-12">
            <img
              alt="DU Logo 1"
              className="logo-glow w-32 h-32 md:w-56 md:h-56 object-contain rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa1AwdF9m9Xo_L1QgQGULjLRWeNuHfTPz61YFUO_nXpSwN4oQYe0T4h9C-1t5ka3EM_duP3erkmWJzmX5fnsYeGOKwydzfPMUSdFmP1TOk31LXP4Oz4X741yrpalWGOcoX18SZki4NCKGDRgpZ5yxQbWZD0WQqEg9DrCawaVkHbXt4PAy4KJruqW_NT5-7yJp5yizYr5CU_2IbbE211kYgp38kYSrKreCeYGHniUrhSY9g3nYpKI2hEGKUQ4i0t8AQkc5fdWulcLDS"
            />
            <div className="brand-text-reveal text-5xl md:text-[140px] leading-[0.8] text-center my-4 md:my-0">
              DEBUGGERS
              <br />
              UNITED
            </div>
            <img
              alt="DU Logo 2"
              className="logo-glow w-32 h-32 md:w-56 md:h-56 object-contain rounded-full hidden md:block"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBapUHGKaFssuDlAo_bqqFwayetQ92d7lwM-afrl9fIp0IKhd1RpfE5BshzYdn90ASJU5CbyC-x_fpWkKiqw5WGYVXlksOWNbjbpRLM8QAYC0R19TTyvVzN9oT4u_lIY9FAk09XYh7eXQYEZDrFh-Vjx2wYA3B0JwpG3lmYj0NQ9CEQHwY77sCRjW1n2mpRWqvEG6bPu19n_3G0SPfORLv7zu4rjxoeyHxldl_cHdNdMmkK63qUgNJEoWsAtloKmYejxeS4opo_PYe1"
            />
          </div>
          <div
            className="font-label-caps tracking-[0.5em] md:tracking-[1.5em] uppercase mt-6 text-xs md:text-xl font-bold"
            style={{ color: "#ffb693", opacity: 0.8 }}
          >
            Elite Developer Collective
          </div>
        </div>
      )}
    </div>
  )
}
