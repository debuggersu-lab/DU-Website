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

interface AchievementsSectionProps {
  showMock: boolean
}

export function AchievementsSection({ showMock }: AchievementsSectionProps) {
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

      {showMock ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={item.title}
              className="reveal-immediate"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div
                className="tilt-card glass-card group overflow-hidden rounded-2xl flex flex-col justify-between h-full"
                style={{
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
                emoji_events
              </span>
            </div>
            <h3 className="font-headline-md text-2xl mb-3 tracking-wide" style={{ color: "#ffb693" }}>
              COMING SOON
            </h3>
            <p className="font-body-sm text-base max-w-md leading-relaxed" style={{ color: "#e2bfb0", opacity: 0.8 }}>
              We are busy collecting our latest wins and milestone celebrations. Stay tuned, we will share them with you shortly!
            </p>
          </div>
        </div>
      )}
    </section>
  )
}


