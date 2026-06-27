const EVENTS = [
  { day: "12", month: "Oct", title: "System Architecture Deep-dive", subtitle: "Live workshop with FAANG architects." },
  { day: "28", month: "Oct", title: "Open Source Contribution Day", subtitle: "Level up your profile through community builds." },
  { day: "05", month: "Nov", title: "Winter Startup Showcase", subtitle: "Pitch your project to potential investors." },
]

export function EventsSection() {
  return (
    <section
      className="relative z-10"
      id="events"
      style={{ padding: "128px 0", backgroundColor: "rgba(28, 27, 27, 0.3)" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 64px" }}>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Featured Hackathon */}
          <div className="w-full md:w-1/2 scale-in">
            <h2 className="font-headline-lg mb-6 uppercase">Upcoming Events</h2>
            <p className="font-body-lg mb-10" style={{ color: "#e2bfb0" }}>
              Test your limits and build the future in our intensive workshops, hackathons, and developer meetups.
            </p>

            <div className="tilt-card glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined animate-pulse" style={{ color: "#ffb693" }}>
                  timer
                </span>
              </div>
              <h3 className="font-headline-md mb-4" style={{ color: "#ffb693" }}>
                DU Global: Genesis
              </h3>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { value: "04", label: "Days" },
                  { value: "12", label: "Hours" },
                  { value: "45", label: "Mins" },
                  { value: "09", label: "Secs" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-headline-md" style={{ color: "#e5e2e1" }}>
                      {item.value}
                    </div>
                    <div className="font-label-caps text-xs uppercase" style={{ color: "#e2bfb0" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="magnetic-hover btn-primary w-full py-4 rounded-xl font-label-caps uppercase font-bold tracking-widest"
                style={{ color: "#572000" }}
              >
                Register Your Team
              </button>
            </div>
          </div>

          {/* Right: Event List */}
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 reveal">
            {EVENTS.map((event) => (
              <div
                key={event.title}
                className="glass-card p-6 rounded-xl flex items-center gap-6 hover:translate-x-2 transition-all cursor-pointer"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.4)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent"
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex flex-col items-center justify-center font-bold"
                  style={{ backgroundColor: "#2a2a2a", color: "#ffb693" }}
                >
                  <span className="text-xl">{event.day}</span>
                  <span className="text-[10px] uppercase">{event.month}</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg">{event.title}</h4>
                  <p className="text-sm" style={{ color: "#e2bfb0" }}>
                    {event.subtitle}
                  </p>
                </div>
                <span className="material-symbols-outlined ml-auto" style={{ color: "#ffb693" }}>
                  arrow_forward
                </span>
              </div>
            ))}

            <button
              className="magnetic-hover btn-primary w-full mt-6 py-4 rounded-xl font-label-caps uppercase tracking-widest font-bold"
              style={{ color: "#572000", boxShadow: "0 0 20px rgba(255,107,0,0.2)" }}
            >
              All Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
