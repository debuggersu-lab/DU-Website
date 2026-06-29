import { useState } from "react"

interface Leader {
  name: string
  role: string
  image: string
  objectPosition?: string
  scale?: number
}

const LEADERS: Leader[] = [
  {
    name: "Rupam Mandal",
    role: "Director",
    image: "/Rupam Mandal.jpeg",
  },
  {
    name: "Anirudha Kumar Shaw",
    role: "President",
    image: "/Anirudha Kumar Shaw.jpeg",
  },
  {
    name: "Taniya Mondal",
    role: "Vice President",
    image: "/Taniya Mondal.jpeg",
    objectPosition: "center 15%",
    scale: 1.3,
  },
  {
    name: "Subhadeep Das",
    role: "Operating Lead",
    image: "/Subhadeep Das.jpeg",
  },
  {
    name: "Aditya Jaiswal",
    role: "Developer Lead",
    image: "/Aditya Jaiswal.jpeg",
  },
  {
    name: "Priyanka Kundu",
    role: "Designer Lead",
    image: "/Priyanka Kundu.jpeg",
    objectPosition: "center 20%",
  },
  {
    name: "Soniya Mondal",
    role: "Designer Lead",
    image: "/Soniya Mondal.jpeg",
    objectPosition: "center 15%",
  },
  {
    name: "Subhajit Roy",
    role: "Social Media Lead",
    image: "/Subhajit Roy.jpeg",
    objectPosition: "center 15%",
  },
  {
    name: "Soham Chatterjee",
    role: "Social Media Lead",
    image: "/Soham Chatterjee.jpeg",
    objectPosition: "center 0%",
  },
  {
    name: "Srijoyee Ghosh",
    role: "PR & Marketing Lead",
    image: "/Srijoyee Ghosh.jpeg",
    objectPosition: "center 75%",
  },
  {
    name: "Name Here",
    role: "Management Lead",
    image: "", // placeholder
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
        className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-500"
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
          className="font-label-caps text-sm uppercase tracking-widest w-full text-center"
          style={{
            color: "rgba(255, 182, 147, 0.6)",
          }}
        >
          {leader.name}
        </p>
      </div>
    </div>
  )
}


