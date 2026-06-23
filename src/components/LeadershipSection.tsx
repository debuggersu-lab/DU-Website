const LEADERS = [
  "Director",
  "President",
  "Vice President",
  "Operating Lead",
  "Dev Team Lead",
  "Designer Lead",
  "Social Media Lead",
  "Marketing Lead",
  "Management Lead",
]

export function LeadershipSection() {
  return (
    <section
      className="overflow-hidden relative z-10"
      id="team-leads"
      style={{ padding: "128px 64px" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div className="mb-16 reveal">
          <h2 className="font-headline-lg uppercase mb-4">Our Leadership</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            The architects behind the collective.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
          {LEADERS.map((role, i) => {
            const delayMs = (i + 1) * 100
            return (
              <div
                key={role}
                className="flex-none w-80 snap-center reveal"
                style={{ transitionDelay: `${delayMs}ms` }}
              >
                <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-500"
                  style={{ borderColor: "transparent" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.6)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent"
                  }}
                >
                  <div
                    className="w-44 h-44 rounded-full mb-6 overflow-hidden flex items-center justify-center group-hover:border-[#ffb693] transition-colors"
                    style={{
                      backgroundColor: "#2a2a2a",
                      border: "2px dashed rgba(255, 182, 147, 0.3)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-6xl"
                      style={{ color: "rgba(255, 182, 147, 0.3)" }}
                    >
                      person
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl mb-1">{role}</h3>
                  <p
                    className="font-label-caps text-sm uppercase tracking-widest pb-1 w-full text-center"
                    style={{
                      color: "rgba(255, 182, 147, 0.6)",
                      borderBottom: "1px dashed rgba(255, 182, 147, 0.2)",
                    }}
                  >
                    Name Here
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
