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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={`tilt-card glass-card group overflow-hidden rounded-2xl reveal`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
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
        ))}
      </div>
    </section>
  )
}
