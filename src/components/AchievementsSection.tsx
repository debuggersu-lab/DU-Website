const ACHIEVEMENTS = [
  {
    icon: "emoji_events",
    value: "45+",
    metric: "Hackathons Won",
    title: "Hackathon Victories",
    description: "Dominating national and global platforms including ETHGlobal, MLH, and major university hackathons with cutting-edge prototype builds.",
  },
  {
    icon: "source",
    value: "5.2M+",
    metric: "Lines Contributed",
    title: "Open Source Footprint",
    description: "Empowering developers worldwide. Leading contributions to core systems, CLI tools, libraries, and frameworks within the modern web ecosystem.",
  },
  {
    icon: "school",
    value: "1,200+",
    metric: "Careers Launched",
    title: "Talent Acceleration",
    description: "Mentoring community members into high-impact engineering roles at FAANG companies, top-tier research labs, and disruptive startups.",
  },
]

export function AchievementsSection() {
  return (
    <section
      className="relative z-10"
      id="achievements"
      style={{ padding: "128px 64px", maxWidth: "1440px", margin: "0 auto" }}
    >
      <div className="flex justify-between items-end mb-16 reveal">
        <div>
          <h2 className="font-headline-lg mb-2 uppercase">Elite Achievements</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            Milestones and impact milestones achieved by our collective.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={item.title}
            className="tilt-card glass-card group overflow-hidden rounded-2xl reveal flex flex-col justify-between"
            style={{
              transitionDelay: `${(i + 1) * 100}ms`,
              padding: "32px",
              borderColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.4)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "transparent"
            }}
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255, 107, 0, 0.1)",
                    border: "1px solid rgba(255, 107, 0, 0.3)",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: "#ffb693" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="text-right">
                  <div
                    className="font-headline-lg leading-none"
                    style={{ color: "#ffb693" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="font-label-caps text-[10px] uppercase mt-1"
                    style={{ color: "#e2bfb0" }}
                  >
                    {item.metric}
                  </div>
                </div>
              </div>

              <h3 className="font-headline-md mb-3 text-white transition-colors group-hover:text-[#ffb693]">
                {item.title}
              </h3>
              <p className="font-body-sm" style={{ color: "#e2bfb0" }}>
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="font-label-caps text-[10px]" style={{ color: "#ffb693" }}>
                Verified Milestone
              </span>
              <span
                className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                style={{ color: "#ffb693" }}
              >
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
