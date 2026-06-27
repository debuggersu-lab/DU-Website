import { PROJECTS } from "@/data/projects"

interface ProjectsSectionProps {
  showMock: boolean
}

export function ProjectsSection({ showMock }: ProjectsSectionProps) {
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
        {showMock && (
          <a
            className="font-label-caps pb-1 transition-all"
            href="#"
            style={{
              color: "#ffb693",
              borderBottom: "1px solid rgba(255, 182, 147, 0.3)",
            }}
          >
            View All Work
          </a>
        )}
      </div>

      {showMock ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="reveal-immediate"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="tilt-card glass-card group overflow-hidden rounded-2xl h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, #131313, transparent)",
                      opacity: 0.6,
                    }}
                  />
                </div>
                <div style={{ padding: "32px" }}>
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className="font-label-caps px-3 py-1 rounded-full"
                      style={{
                        color: "#ffb693",
                        backgroundColor: "rgba(255, 182, 147, 0.1)",
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#e2bfb0" }}
                    >
                      open_in_new
                    </span>
                  </div>
                  <h3 className="font-headline-md mb-2">{project.title}</h3>
                  <p className="font-body-sm mb-6" style={{ color: "#e2bfb0" }}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      className="w-8 h-8 rounded-full border border-white/20"
                      src={project.avatar}
                      alt={project.author}
                    />
                    <span className="font-label-caps text-xs">{project.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="reveal-immediate w-full">
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
      )}
    </section>
  )
}


