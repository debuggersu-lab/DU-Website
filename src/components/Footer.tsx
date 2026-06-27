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
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        style={{ padding: "64px 64px 48px", maxWidth: "1440px" }}
      >
        {/* Column 1: Identity & Slogan (Spans 2 columns on desktop) */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/nav.jpeg"
              alt="DU Logo"
              className="w-10 h-10 rounded-full object-cover"
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
              { label: "Discord", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "Instagram", href: "#" },
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
      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-white/5" style={{ backgroundColor: "#0b0b0b" }}>
        <div
          className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ padding: "24px 64px", maxWidth: "1440px" }}
        >
          <span className="font-body-sm text-xs" style={{ color: "#e2bfb0", opacity: 0.5 }}>
            © 2026 Debuggers United. All rights reserved.
          </span>
          <button
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


