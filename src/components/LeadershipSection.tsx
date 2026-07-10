import { useState } from "react"

interface Leader {
  name: string
  role: string
  image: string
  objectPosition?: string
  scale?: number
  quote?: string
}

const LEADERS: Leader[] = [
  {
    name: "Rupam Mandal",
    role: "Director",
    image: "/Rupam Mandal.jpeg",
    quote: "I didn't start Debuggers United to build a community. I started it to build a family of dreamers, creators, and problem-solvers.",
  },
  {
    name: "Anirudha Kumar Shaw",
    role: "President",
    image: "/Anirudha Kumar Shaw.jpeg",
    quote: "If one student gains confidence because of this community, then our efforts are already worth it.",
  },
  {
    name: "Taniya Mondal",
    role: "Vice President",
    image: "/Taniya Mondal.jpeg",
    objectPosition: "center 15%",
    scale: 1.3,
    quote: "The strongest communities aren't built by individuals; they're built by people who believe in each other.",
  },
  {
    name: "Subhadeep Das",
    role: "Operating Lead",
    image: "/Subhadeep Das.jpeg",
    quote: "Ideas inspire people, but action changes lives. That's what I want this community to stand for.",
  },
  {
    name: "Aditya Jaiswal",
    role: "Developer Lead",
    image: "/Aditya Jaiswal.jpeg",
    quote: "I believe the best way to learn technology is by building together, one project at a time.",
  },
  {
    name: "Priyanka Kundu",
    role: "Designer Lead",
    image: "/Priyanka Kundu.jpeg",
    objectPosition: "center 20%",
    quote: "Creativity is how we give our community a voice before a single word is spoken.",
  },
  {
    name: "Soniya Mondal",
    role: "Designer Lead",
    image: "/Soniya Mondal.jpeg",
    objectPosition: "center 15%",
    quote: "Every pixel we create reflects the passion and identity of our community.",
  },
  {
    name: "Subhajit Roy",
    role: "Social Media Lead",
    image: "/Subhajit Roy.jpeg",
    objectPosition: "center 15%",
    quote: "Our goal is to turn every post into inspiration and every follower into a future innovator.",
  },
  {
    name: "Soham Chatterjee",
    role: "Social Media Lead",
    image: "/Soham Chatterjee.jpeg",
    objectPosition: "center 0%",
    quote: "We don't just share content—we build connections that bring our community to life.",
  },
  {
    name: "Srijoyee Ghosh",
    role: "PR & Marketing Lead",
    image: "/Srijoyee Ghosh.jpeg",
    objectPosition: "center 75%",
    quote: "Every partnership begins with trust, and every conversation opens the door to new opportunities.",
  },
  {
    name: "Aditya Ram",
    role: "Management Lead",
    image: "/Aditya Ram.jpeg",
    objectPosition: "center 5%",
    quote: "Success is managed before it is achieved.",
  },
]

export function LeadershipSection() {
  return (
    <section
      className="overflow-hidden relative z-10 py-16 md:py-32 px-margin-mobile md:px-margin-desktop"
      id="team-leads"
    >
      <div className="max-w-container-max mx-auto w-full">
        <div className="mb-16 reveal">
          <h2 className="font-headline-lg uppercase mb-4">Our Leadership</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            The architects behind the collective.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pt-6 pb-12 no-scrollbar snap-x snap-mandatory px-margin-mobile md:px-0 -mx-margin-mobile md:mx-0">
          {LEADERS.map((leader, i) => (
            <LeaderCard key={leader.role + i} leader={leader} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LeaderCard({ leader, i }: { leader: Leader; i: number }) {
  const [hovered, setHovered] = useState(false)
  const delayMs = (i + 1) * 100

  const baseScale = leader.scale || 1
  const currentScale = hovered ? baseScale * 1.1 : baseScale

  return (
    <div
      className="flex-none w-80 snap-center reveal"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div
        className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 h-full justify-start"
        style={{
          borderColor: hovered ? "rgba(255, 182, 147, 0.6)" : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="w-44 h-44 rounded-full mb-6 overflow-hidden flex items-center justify-center transition-colors"
          style={{
            backgroundColor: "#2a2a2a",
            border: leader.image ? "2px solid rgba(255, 182, 147, 0.2)" : "2px dashed rgba(255, 182, 147, 0.3)",
            borderColor: hovered && leader.image ? "#ffb693" : undefined,
          }}
        >
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              width={176}
              height={176}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                objectPosition: leader.objectPosition || "center",
                transform: `scale(${currentScale})`,
              }}
            />
          ) : (
            <span
              className="material-symbols-outlined text-6xl"
              style={{ color: "rgba(255, 182, 147, 0.3)" }}
            >
              person
            </span>
          )}
        </div>
        <h3 className="font-headline-md text-xl mb-1">{leader.role}</h3>
        <p
          className="font-label-caps text-sm uppercase tracking-widest w-full text-center mb-4"
          style={{
            color: "rgba(255, 182, 147, 0.6)",
          }}
        >
          {leader.name}
        </p>

        {leader.quote && (
          <p
            className="font-body-sm text-center italic border-t border-dashed border-white/10 pt-4 w-full"
            style={{ color: "#e2bfb0", opacity: 0.8 }}
          >
            {leader.quote}
          </p>
        )}
      </div>
    </div>
  )
}
