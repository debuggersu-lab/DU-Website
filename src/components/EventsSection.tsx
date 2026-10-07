import { useState, useEffect } from "react"

export interface EventItem {
  id: string
  title: string
  tag: string
  date: string
  description: string
  status?: string
  partner?: string
  link?: string
}

// Active upcoming events (currently empty as all recent events have concluded)
const ACTIVE_EVENTS: EventItem[] = []

// Archive of past events and hackathons
const PAST_EVENTS: EventItem[] = [
  {
    id: "innofusion-3.0",
    title: "InnoFusion 3.0",
    tag: "30-Hour Hackathon",
    date: "Concluded",
    status: "Completed",
    description:
      "An intensive 30-hour offline hackathon fostering innovation, rapid prototyping, and collaborative building.",
    partner: "Debuggers United × InnoFusion Team",
  },
  {
    id: "hexafalls-2",
    title: "HexaFalls 2",
    tag: "Flagship Hackathon",
    date: "Concluded",
    status: "Completed",
    description:
      "Community partnership for HexaFalls 2 at JIS University in association with OWASP, Actian, and Major League Hacking (MLH).",
    partner: "Debuggers United × JIS University",
  },
]

interface EventsSectionProps {
  showMock?: boolean
}

export function EventsSection({ showMock: _showMock }: EventsSectionProps) {
  const [showPastModal, setShowPastModal] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowPastModal(false)
      }
    }
    if (showPastModal) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [showPastModal])

  return (
    <section
      className="relative z-10 py-16 md:py-32"
      id="events"
      style={{ backgroundColor: "rgba(28, 27, 27, 0.3)" }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        {/* Heading Section with Top-Right Past Events Action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div>
            <h2 className="font-headline-lg mb-3 uppercase text-3xl md:text-5xl text-white">
              Upcoming Events
            </h2>
            <p className="font-body-lg text-sm md:text-base" style={{ color: "#e2bfb0" }}>
              Test your limits and build the future in our intensive workshops, hackathons, and developer meetups.
            </p>
          </div>

          {/* Top Right Button: Past Events Modal Trigger */}
          <button
            type="button"
            onClick={() => setShowPastModal(true)}
            className="btn-ghost self-start sm:self-auto px-5 py-3 rounded-xl font-label-caps uppercase tracking-widest font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10"
            style={{
              color: "#ffb693",
              borderColor: "rgba(255, 182, 147, 0.3)",
            }}
          >
            <span className="material-symbols-outlined text-base">history</span>
            <span>Past Events</span>
          </button>
        </div>

        {/* Content Area: Active Events or Empty State */}
        {ACTIVE_EVENTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
            {ACTIVE_EVENTS.map((event) => (
              <div
                key={event.id}
                className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-xs px-3 py-1 rounded-full bg-[#ff6b00]/15 text-[#ffb693] border border-[#ff6b00]/30">
                    {event.tag}
                  </span>
                  <span className="material-symbols-outlined text-[#ffb693]">timer</span>
                </div>
                <h3 className="font-headline-md text-xl mb-2 text-white group-hover:text-[#ffb693] transition-colors">
                  {event.title}
                </h3>
                <p className="font-body-sm text-sm mb-6" style={{ color: "#e2bfb0" }}>
                  {event.description}
                </p>
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-3 rounded-xl font-label-caps uppercase font-bold tracking-widest text-center block text-xs"
                    style={{ color: "#572000" }}
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn-primary w-full py-3 rounded-xl font-label-caps uppercase font-bold tracking-widest text-center block text-xs"
                    style={{ color: "#572000" }}
                  >
                    Register Now
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Empty State: No Active Events */
          <div className="reveal flex justify-center w-full">
            <div className="glass-card max-w-2xl w-full p-8 md:p-12 rounded-2xl text-center relative overflow-hidden flex flex-col items-center border border-white/10">
              {/* Subtle Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/10 via-transparent to-transparent pointer-events-none -z-10" />

              {/* Icon */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "rgba(255, 107, 0, 0.1)",
                  border: "1px solid rgba(255, 107, 0, 0.25)",
                }}
              >
                <span className="material-symbols-outlined text-3xl md:text-4xl text-[#ffb693]">
                  event_busy
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline-md text-xl md:text-2xl uppercase tracking-wider text-white mb-3">
                No Active Events
              </h3>

              {/* Description */}
              <p
                className="font-body-lg text-sm md:text-base max-w-md mb-8 leading-relaxed"
                style={{ color: "#e2bfb0" }}
              >
                There are currently no active events or hackathons open for registration. We're actively planning the next big initiative—stay tuned!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowPastModal(true)}
                  className="btn-ghost px-6 py-3 rounded-xl font-label-caps uppercase tracking-widest font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 border border-[#ffb693]/30 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10"
                  style={{ color: "#ffb693" }}
                >
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span>View Past Events</span>
                </button>

                <a
                  href="https://chat.whatsapp.com/C4bHvxtkMGGLY4NxRyLn7l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-xl font-label-caps uppercase tracking-widest font-bold text-xs flex items-center gap-2 cursor-pointer"
                  style={{ color: "#572000" }}
                >
                  <span>Join Community For Updates</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Past Events Modal */}
      {showPastModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setShowPastModal(false)}
        >
          <div
            className="glass-card relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-10 border border-[#ffb693]/30 shadow-2xl custom-scrollbar"
            style={{ backgroundColor: "#131313" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPastModal(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b00] hover:text-white flex items-center justify-center text-white/80 transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#ffb693] text-xl">history</span>
                <span className="font-label-caps text-xs text-[#ffb693] uppercase tracking-widest">
                  Archive
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl text-white uppercase tracking-wider">
                Past Events & Hackathons
              </h2>
              <p className="font-body-lg text-sm mt-1" style={{ color: "#e2bfb0" }}>
                A look back at the hackathons, meetups, and workshops organized and supported by Debuggers United.
              </p>
            </div>

            {/* Past Events List */}
            <div className="space-y-4">
              {PAST_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="glass-card p-5 md:p-6 rounded-xl border border-white/10 hover:border-[#ffb693]/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-label-caps text-[10px] px-2.5 py-0.5 rounded-full bg-[#ff6b00]/10 text-[#ffb693] border border-[#ff6b00]/25">
                          {event.tag}
                        </span>
                        {event.status && (
                          <span className="font-label-caps text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {event.status}
                          </span>
                        )}
                      </div>
                      <h4 className="font-headline-md text-lg md:text-xl text-white group-hover:text-[#ffb693] transition-colors">
                        {event.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 font-label-caps text-xs text-[#e2bfb0] whitespace-nowrap self-start">
                      <span className="material-symbols-outlined text-sm text-[#ffb693]">event</span>
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <p className="font-body-sm text-xs md:text-sm leading-relaxed" style={{ color: "#e2bfb0" }}>
                    {event.description}
                  </p>

                  {event.partner && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 font-label-caps text-[11px] text-[#ffb693]/80">
                      <span className="material-symbols-outlined text-xs">handshake</span>
                      <span>{event.partner}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
