import { PROJECTS } from "@/data/projects"


export function ProjectsSection() {
  return (
    <section
      className="relative z-10"
      id="projects"
      style={{ padding: "128px 64px", maxWidth: "1440px", margin: "0 auto" }}
    >
      <div className="flex justify-between items-end mb-16 reveal">
        <div>
          <h2 className="font-headline-lg mb-2 uppercase">Pioneering Projects</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            Exceptional builds from our elite developer collective.
          </p>
        </div>
      </div>

      <div className="reveal w-full">
        <div className="tilt-card glass-card p-12 rounded-2xl flex flex-col items-center text-center max-w-2xl mx-auto border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent opacity-30 pointer-events-none" />
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse"
            style={{
              backgroundColor: "rgba(255, 107, 0, 0.1)",
              border: "1.5px solid rgba(255, 107, 0, 0.3)",
              boxShadow: "0 0 20px rgba(255, 107, 0, 0.15)",
            }}
          >
            <span className="material-symbols-outlined text-3xl" style={{ color: "#ffb693" }}>
              terminal
            </span>
          </div>
          <h3 className="font-headline-md text-2xl mb-3 tracking-wide" style={{ color: "#ffb693" }}>
            COMING SOON
          </h3>
          <p className="font-body-sm text-base max-w-md leading-relaxed" style={{ color: "#e2bfb0", opacity: 0.8 }}>
            We are currently working on some exciting new projects. Check back soon to see what we've been building!
          </p>
        </div>
      </div>
    </section>
  )
}

