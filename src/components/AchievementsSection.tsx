import { useState, useEffect } from "react"

export interface Achievement {
  id: string
  title: string
  tag: string
  metric?: string
  value?: string
  icon?: string
  image?: string
  description: string
  details?: {
    headline: string
    paragraphs: string[]
    highlight?: string
    author: string
    tagline: string
  }
  fullText?: string
  featured?: boolean
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "innofusion-3.0",
    title: "InnoFusion 3.0 — Campus Evangelist",
    tag: "Certificate of Appreciation",
    icon: "workspace_premium",
    image: "/certificates/innofusion-3.0.png",
    description:
      "Debuggers United received official recognition from InnoFusion 3.0 for serving as Campus Evangelist and actively promoting their 30-Hour Offline Hackathon.",
    details: {
      headline: "🏆 A Proud Milestone for Debuggers United! 🚀",
      paragraphs: [
        "We’re happy to share that Debuggers United has received a Certificate of Appreciation from InnoFusion 3.0 for serving as a Campus Evangelist and actively promoting the 30-Hour Offline Hackathon.",
        "A big thank you to the InnoFusion 3.0 Team for recognizing our efforts and giving DU the opportunity to be part of this amazing journey. 🤝✨",
      ],
      highlight: "Here’s to more collaborations, more opportunities, and more impact! 🚀",
      author: "— Team Debuggers United (DU)",
      tagline: "Code the Vision. Shape the Mission. 🖤💛",
    },
    fullText: `🏆 A Proud Milestone for Debuggers United! 🚀

We’re happy to share that Debuggers United has received a Certificate of Appreciation from InnoFusion 3.0 for serving as a Campus Evangelist and actively promoting the 30-Hour Offline Hackathon.

A big thank you to the InnoFusion 3.0 Team for recognizing our efforts and giving DU the opportunity to be part of this amazing journey. 🤝✨

Here’s to more collaborations, more opportunities, and more impact! 🚀

— Team Debuggers United (DU)
Code the Vision. Shape the Mission. 🖤💛`,
    featured: true,
  },
]

interface AchievementsSectionProps {
  showMock?: boolean
}

export function AchievementsSection({ showMock }: AchievementsSectionProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedAchievement(null)
      }
    }
    if (selectedAchievement) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedAchievement])

  return (
    <section
      className="relative z-10 py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="achievements"
    >
      <div className="flex justify-between items-end mb-16 reveal">
        <div>
          <h2 className="font-headline-lg mb-2 uppercase">Elite Achievements</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            Milestones and recognition earned by our collective.
          </p>
        </div>
      </div>

      <div className={ACHIEVEMENTS.length === 1 ? "flex justify-center w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={item.id}
            className={`reveal-immediate ${ACHIEVEMENTS.length === 1 ? "w-full max-w-xl" : item.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            <div
              className="tilt-card glass-card group overflow-hidden rounded-2xl flex flex-col justify-between h-full transition-all duration-300"
              data-tilt-factor="180"
              data-tilt-scale="1.003"
              style={{
                padding: "24px",
                borderColor: "rgba(255, 182, 147, 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.5)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.2)"
              }}
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(255, 107, 0, 0.1)",
                        border: "1px solid rgba(255, 107, 0, 0.3)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{ color: "#ffb693" }}
                      >
                        {item.icon || "emoji_events"}
                      </span>
                    </div>
                    <div>
                      <span
                        className="font-label-caps text-xs px-3 py-1 rounded-full inline-block"
                        style={{
                          color: "#ffb693",
                          backgroundColor: "rgba(255, 182, 147, 0.1)",
                          border: "1px solid rgba(255, 182, 147, 0.2)",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {item.value && (
                    <div className="text-right">
                      <div
                        className="font-headline-lg leading-none text-xl md:text-2xl"
                        style={{ color: "#ffb693" }}
                      >
                        {item.value}
                      </div>
                      {item.metric && (
                        <div
                          className="font-label-caps text-[10px] uppercase mt-1"
                          style={{ color: "#e2bfb0" }}
                        >
                          {item.metric}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Complete Uncropped Certificate Display */}
                {item.image && (
                  <div
                    className="relative w-full rounded-xl overflow-hidden cursor-pointer group/img border border-white/15 bg-[#0c0c0c] p-1.5 mb-5 shadow-lg"
                    onClick={() => setSelectedAchievement(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover/img:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity rounded-lg flex items-end justify-end p-3">
                      <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-[10px] text-[#ffb693] flex items-center gap-1 font-label-caps uppercase tracking-wider">
                        <span className="material-symbols-outlined text-xs">zoom_in</span> Expand
                      </span>
                    </div>
                  </div>
                )}

                <h3 className="font-headline-md text-lg md:text-xl mb-2 text-white transition-colors group-hover:text-[#ffb693]">
                  {item.title}
                </h3>
                <p className="font-body-sm text-sm leading-relaxed" style={{ color: "#e2bfb0" }}>
                  {item.description}
                </p>
              </div>

              <div
                className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between cursor-pointer"
                onClick={() => (item.details || item.fullText) && setSelectedAchievement(item)}
              >
                <span className="font-label-caps text-[10px]" style={{ color: "#ffb693" }}>
                  {item.image ? "Official Certificate • Click to Expand" : "Verified Milestone"}
                </span>
                <span
                  className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  style={{ color: "#ffb693" }}
                >
                  {item.image ? "open_in_full" : "arrow_forward"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate / Milestone Modal Dialog */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-24 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="glass-card relative max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 md:p-10 border border-[#ffb693]/30 shadow-2xl custom-scrollbar"
            style={{ backgroundColor: "#131313" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b00] hover:text-white flex items-center justify-center text-white/80 transition-colors z-20"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {/* 1. Title at the very top */}
            <h2 className="font-headline-lg text-2xl md:text-3xl text-white pr-10 mb-3">
              {selectedAchievement.title}
            </h2>

            {/* 2. Tag / Pill directly below title */}
            <div className="mb-6">
              <span
                className="font-label-caps text-xs px-3 py-1 rounded-full inline-block"
                style={{
                  color: "#ffb693",
                  backgroundColor: "rgba(255, 182, 147, 0.1)",
                  border: "1px solid rgba(255, 182, 147, 0.3)",
                }}
              >
                {selectedAchievement.tag}
              </span>
            </div>

            {/* 3. Certificate Image (plainly on popup, uncropped, no nested container box) */}
            {selectedAchievement.image && (
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-auto max-h-[50vh] object-contain rounded-xl mb-6 mx-auto"
              />
            )}

            {/* 4. Simple text formatting (plainly on popup, no nested container box) */}
            {selectedAchievement.fullText && (
              <div className="text-[#e2bfb0] font-sans text-sm md:text-base leading-relaxed space-y-4">
                {selectedAchievement.fullText.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "font-semibold text-[#ffb693] text-base md:text-lg" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}


