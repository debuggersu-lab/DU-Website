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
  hackathons?: string[]
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
    id: "hexafalls-2",
    title: "HexaFalls 2 — Community Partner",
    tag: "Certificate of Community Partnership",
    icon: "verified",
    image: "/certificates/hexafalls-2.png",
    description:
      "Debuggers United received official recognition as Community Partner for HexaFalls 2 at JIS University, collaborating with OWASP, Actian, and MLH.",
    details: {
      headline: "🤝 Official Community Partner for HexaFalls 2! 🚀",
      paragraphs: [
        "Debuggers United has been awarded a Certificate of Community Partnership for our valuable support as a Community Partner of HexaFalls 2 at JIS University.",
        "Your collaboration helps us strengthen the tech community and create an unforgettable experience for beginners and innovators alike. Thank you for being an integral part of the HexaFalls 2 journey.",
      ],
      highlight: "Together, we continue to turn ideas into innovation. 🤝✨",
      author: "— Team Debuggers United (DU)",
      tagline: "Code the Vision. Shape the Mission. 🖤💛",
    },
    fullText: `📜 Certificate of Community Partnership — HexaFalls 2 🚀

Debuggers United is proud to serve as an official Community Partner of HexaFalls 2 at JIS University (in association with OWASP, Actian, and Major League Hacking - MLH 2027 Season).

"For your valuable support as a Community Partner of HexaFalls 2 at JIS University. Your collaboration helps us strengthen the tech community and create an unforgettable experience for beginners and innovators alike. Thank you for being an integral part of the HexaFalls 2 journey."

Together, we continue to turn ideas into innovation. 🤝✨

— Team Debuggers United (DU)
Code the Vision. Shape the Mission. 🖤💛`,
  },
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
  },
  {
    id: "hackathon-representation",
    title: "Hackathon Representation",
    tag: "Member Participation",
    icon: "sports_score",
    value: "4+",
    metric: "Major Events",
    description:
      "DU members have actively participated and represented our developer collective in premier hackathons:",
    hackathons: ["DIVERSION", "HACKTROPICA", "HEXAFALLS", "ODDO × ADAMAS"],
    fullText: `🚀 Hackathons Participated by DU Members

Debuggers United members have actively participated and represented our collective across premier hackathons:

• DIVERSION
• HACKTROPICA
• HEXAFALLS
• ODDO × ADAMAS

Code the Vision. Shape the Mission. 🖤💛`,
  },
]

interface AchievementsSectionProps {
  showMock?: boolean
}

export function AchievementsSection({ showMock: _showMock }: AchievementsSectionProps) {
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
      className="relative z-10 py-10 md:py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="achievements"
    >
      <div className="flex justify-between items-end mb-6 md:mb-8 reveal">
        <div>
          <h2 className="font-headline-lg mb-1 uppercase text-2xl md:text-4xl">Elite Achievements</h2>
          <p className="font-body-lg text-sm md:text-base" style={{ color: "#e2bfb0" }}>
            Milestones and recognition earned by our collective.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={ACHIEVEMENTS.length === 1 ? "flex justify-center w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"}>
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={item.id}
              className={`reveal-immediate ${ACHIEVEMENTS.length === 1 ? "w-full max-w-xl" : "h-full"}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div
                className="tilt-card glass-card group overflow-hidden rounded-2xl flex flex-col justify-between h-full transition-all duration-300"
                data-tilt-factor="180"
                data-tilt-scale="1.003"
                style={{
                  padding: "20px 22px",
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
                  <div className="flex justify-between items-start mb-3.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(255, 107, 0, 0.1)",
                          border: "1px solid rgba(255, 107, 0, 0.3)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-lg"
                          style={{ color: "#ffb693" }}
                        >
                          {item.icon || "emoji_events"}
                        </span>
                      </div>
                      <div>
                        <span
                          className="font-label-caps text-[11px] px-2.5 py-0.5 rounded-full inline-block"
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
                          className="font-headline-lg leading-none text-lg md:text-xl font-bold"
                          style={{ color: "#ffb693" }}
                        >
                          {item.value}
                        </div>
                        {item.metric && (
                          <div
                            className="font-label-caps text-[9px] uppercase mt-0.5"
                            style={{ color: "#e2bfb0" }}
                          >
                            {item.metric}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Full-Width Certificate Display */}
                  {item.image && (
                    <div
                      className="relative w-full rounded-xl overflow-hidden cursor-pointer group/img border border-white/15 mb-4 shadow-md bg-[#0c0c0c]"
                      onClick={() => setSelectedAchievement(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity rounded-xl flex items-end justify-end p-2.5">
                        <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-[10px] text-[#ffb693] flex items-center gap-1 font-label-caps uppercase tracking-wider">
                          <span className="material-symbols-outlined text-xs">zoom_in</span> Expand
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="font-headline-md text-base md:text-lg mb-1.5 text-white transition-colors group-hover:text-[#ffb693]">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-xs md:text-sm leading-relaxed mb-3.5" style={{ color: "#e2bfb0" }}>
                    {item.description}
                  </p>

                  {/* Hackathon Badges */}
                  {item.hackathons && (
                    <div className="grid grid-cols-2 gap-2.5 my-4">
                      {item.hackathons.map((h) => (
                        <div
                          key={h}
                          className="font-label-caps text-[11px] px-2.5 py-2 rounded-xl font-bold tracking-wider text-center border transition-all duration-300 flex items-center justify-center gap-1.5"
                          style={{
                            color: "#ffb693",
                            backgroundColor: "rgba(255, 107, 0, 0.08)",
                            borderColor: "rgba(255, 107, 0, 0.25)",
                          }}
                        >
                          <span className="material-symbols-outlined text-xs text-[#ff6b00]">code</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between cursor-pointer"
                  onClick={() => (item.details || item.fullText) && setSelectedAchievement(item)}
                >
                  <span className="font-label-caps text-[10px]" style={{ color: "#ffb693" }}>
                    {item.image ? "Official Certificate • Click to Expand" : "Verified Participation • Click to View"}
                  </span>
                  <span
                    className="material-symbols-outlined text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    style={{ color: "#ffb693" }}
                  >
                    {item.image ? "open_in_full" : "arrow_forward"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
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

            {/* 3. Certificate Image if available */}
            {selectedAchievement.image && (
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-auto max-h-[50vh] object-contain rounded-xl mb-6 mx-auto"
              />
            )}

            {/* 4. Text content formatting */}
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



