export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="border-t border-white/5 relative z-10"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      {/* Footer Top Content */}
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-margin-mobile md:px-margin-desktop py-12 md:py-16 max-w-container-max"
      >
        {/* Column 1: Identity & Slogan (Spans 2 columns on desktop) */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="DU Logo"
              width={40}
              height={40}
              loading="lazy"
              className="w-10 h-10 rounded-full object-contain"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,107,0,0.5))",
                border: "1.5px solid rgba(255,107,0,0.4)",
              }}
            />
            <span className="font-headline-md text-xl font-bold tracking-tighter" style={{ color: "#ffb693" }}>
              Debuggers United
            </span>
          </div>
          <p className="font-body-sm text-sm leading-relaxed" style={{ color: "#e2bfb0", opacity: 0.7 }}>
            We Debug. We Build. We Unite. An elite developer collective coding the vision and shaping the mission of modern community building.
          </p>
        </div>

        {/* Column 2: Directory */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-xs font-bold tracking-widest" style={{ color: "#ffb693" }}>
            DIRECTORY
          </h4>
          <ul className="flex flex-col gap-2.5 font-body-sm text-sm">
            {[
              { label: "Home", href: "#" },
              { label: "Achievements", href: "#achievements" },
              { label: "Upcoming Events", href: "#events" },
              { label: "Our Leadership", href: "#team-leads" },
              { label: "Contact Us", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-all hover:text-[#ffb693] hover:translate-x-1 inline-block"
                  style={{ color: "#e2bfb0" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Community Channels */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-xs font-bold tracking-widest" style={{ color: "#ffb693" }}>
            COMMUNITY
          </h4>
          <ul className="flex flex-col gap-2.5 font-body-sm text-sm">
            {[
              { label: "Discord", href: "https://discord.gg/ePbFSY2dV" },
              { label: "GitHub", href: "https://github.com/debuggersu-lab" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/debuggers-united-official/" },
              { label: "YouTube", href: "https://youtube.com/@debuggersunited-d1o?si=78_LaZ-qvO1JBELX" },
              { label: "Instagram", href: "https://www.instagram.com/uniteddebuggers?igsh=NThuYWZma3F3a25q" },
              { label: "WhatsApp", href: "https://chat.whatsapp.com/C4bHvxtkMGGLY4NxRyLn7l" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-[#ffb693] hover:translate-x-1 inline-block"
                  style={{ color: "#e2bfb0" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-white/5" style={{ backgroundColor: "#0b0b0b" }}>
        <div
          className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-margin-mobile md:px-margin-desktop py-6 max-w-container-max"
        >
          <span className="font-body-sm text-xs" style={{ color: "#e2bfb0", opacity: 0.5 }}>
            © 2026 Debuggers United. All rights reserved.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="magnetic-hover flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-xs font-label-caps uppercase tracking-wider transition-all hover:bg-white/5 hover:border-[#ffb693]/30 cursor-pointer"
            style={{ color: "#ffb693" }}
          >
            Back to Top
            <span className="material-symbols-outlined text-sm leading-none">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}


