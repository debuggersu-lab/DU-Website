import { useEffect, useRef, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
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
        <div className="flex justify-between items-center mx-auto h-full px-margin-mobile md:px-margin-desktop w-full max-w-container-max">
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
            {/* Responsive Brand Name: hide full text on mobile and show DU */}
            <div className="font-headline-md font-bold tracking-tighter hidden sm:block" style={{ color: "#ffb693" }}>
              Debuggers United
            </div>
            <div className="font-headline-md font-bold tracking-tighter sm:hidden" style={{ color: "#ffb693" }}>
              DU
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
              href="#contact"
              style={{ color: "#e2bfb0" }}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="magnetic-hover btn-primary px-6 py-3 rounded-lg font-label-caps uppercase tracking-widest font-bold hidden sm:block" style={{ color: "#572000" }}>
              Join Community
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#ffb693] focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div 
          className="md:hidden fixed left-0 w-full bg-[#131313]/95 backdrop-blur-3xl border-b border-white/10 flex flex-col items-center gap-6 py-8 font-label-caps uppercase z-40"
          style={{ 
            top: scrolled ? "4.5rem" : "5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
          }}
        >
          <a
            onClick={() => setMenuOpen(false)}
            className="text-[#ffb693] transition-colors duration-300"
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="text-[#e2bfb0] hover:text-[#ffb693] transition-colors duration-300"
            href="#achievements"
          >
            Achievements
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="text-[#e2bfb0] hover:text-[#ffb693] transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMenuOpen(false)
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="btn-primary px-6 py-3 rounded-lg font-label-caps uppercase tracking-widest font-bold w-4/5 text-center mt-2"
            style={{ color: "#572000" }}
          >
            Join Community
          </button>
        </div>
      )}
    </>
  )
}

