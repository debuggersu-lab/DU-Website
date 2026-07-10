import { useState } from "react"

export function CoFoundersMessageSection() {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      className="relative z-10 py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="co-founders-message"
    >
      <div className="mb-16 reveal">
        <h2 className="font-headline-lg uppercase mb-4">Co-Founder's Message</h2>
        <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
          A message from the co-founder of Debuggers United.
        </p>
      </div>

      <div className="reveal">
        <div
          className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500"
          style={{
            borderColor: hovered ? "rgba(255, 182, 147, 0.4)" : "rgba(255, 255, 255, 0.1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Avatar side */}
          <div className="flex-none flex flex-col items-center">
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 mb-6"
              style={{
                backgroundColor: "#2a2a2a",
                border: "3px solid rgba(255, 107, 0, 0.3)",
                boxShadow: hovered
                  ? "0 0 30px rgba(255, 107, 0, 0.4)"
                  : "0 0 15px rgba(255, 107, 0, 0.15)",
                borderColor: hovered ? "#ffb693" : "rgba(255, 107, 0, 0.3)",
              }}
            >
              <img
                src="/Anirudha Kumar Shaw.jpeg"
                alt="A. Shaw"
                width={224}
                height={224}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hovered ? "scale(1.08)" : "scale(1)",
                }}
              />
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl mb-1 text-center">A. Shaw</h3>
            <p
              className="font-label-caps text-xs md:text-sm uppercase tracking-widest text-center"
              style={{
                color: "#ffb693",
              }}
            >
              Co-Founder
            </p>
          </div>

          {/* Message side */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <span
              className="text-6xl md:text-7xl mb-2 select-none opacity-40 font-serif leading-none"
              style={{ color: "#ffb693" }}
            >
              &ldquo;
            </span>
            <div className="space-y-4 font-body-lg leading-relaxed" style={{ color: "#e5e2e1" }}>
              <p>
                Every successful journey begins with a community that believes in its people.
                Debuggers United was created to ensure no student grows alone while exploring
                technology, building projects, or participating in hackathons.
              </p>
              <p>
                Our goal is to inspire students to think bigger, solve real-world problems, and turn
                ideas into impactful solutions. As DU grows, we remain committed to fostering
                innovation, creating opportunities, and empowering every member.
              </p>
              <p>
                The future belongs to those who build it together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
