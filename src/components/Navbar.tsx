import { useEffect, useRef, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 backdrop-blur-3xl border-b border-white/10 transition-all duration-500 ease-in-out ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: scrolled
          ? "rgba(19, 19, 19, 0.85)"
          : "rgba(19, 19, 19, 0.05)",
        height: scrolled ? "4.5rem" : "5rem",
      }}
    >
      <div
        className="flex justify-between items-center mx-auto h-full"
        style={{ maxWidth: "1440px", padding: "0 64px" }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/nav.jpeg"
            alt="DU Logo"
            className="w-12 h-12 rounded-full object-cover"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,107,0,0.6))",
              border: "1.5px solid rgba(255,107,0,0.4)",
            }}
          />
          <div className="font-headline-md font-bold tracking-tighter" style={{ color: "#ffb693" }}>
            Debuggers United
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-label-caps uppercase">
          <a
            className="pb-1 transition-colors duration-300"
            href="#"
            style={{ color: "#ffb693", borderBottom: "2px solid #ffb693" }}
          >
            Home
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#ffb693]"
            href="#achievements"
            style={{ color: "#e2bfb0" }}
          >
            Achievements
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#ffb693]"
            href="#"
            style={{ color: "#e2bfb0" }}
          >
            Youtube
          </a>

          <a
            className="transition-colors duration-300 hover:text-[#ffb693]"
            href="#"
            style={{ color: "#e2bfb0" }}
          >
            Instagram
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#ffb693]"
            href="#"
            style={{ color: "#e2bfb0" }}
          >
            LinkedIn
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#ffb693]"
            href="#"
            style={{ color: "#e2bfb0" }}
          >
            Discord
          </a>
        </div>

        <button className="magnetic-hover btn-primary px-6 py-3 rounded-lg font-label-caps uppercase tracking-widest font-bold" style={{ color: "#572000" }}>
          Join Community
        </button>
      </div>
    </nav>
  )
}
