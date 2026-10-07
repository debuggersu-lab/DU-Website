export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
  featured?: boolean
}

const PARTNERS: Partner[] = [
  {
    id: "hackquest",
    name: "HackQuest India",
    logo: "/partners/HACKQUEST INDIA .png",
    website: "https://hackquest.io",
    featured: true,
  },
  {
    id: "innofusion",
    name: "InnoFusion 3.0",
    logo: "/partners/INNOFUSION 3.O.png",
    website: "#",
  },
  {
    id: "antilabs",
    name: "AntiLabs",
    logo: "/partners/ANTILABS.png",
    website: "#",
  },
  {
    id: "hexafalls",
    name: "Hexafalls 2",
    logo: "/partners/HEXAFALLS 2.png",
    website: "#",
  },
]

export function PartnersSection() {
  return (
    <section
      className="relative z-10 py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="partners"
    >
      {/* Section Heading */}
      <div className="text-center mb-12 reveal">
        <h2 className="font-headline-lg text-3xl md:text-5xl uppercase tracking-wider text-white">
          Community Partners
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal items-center">
        {PARTNERS.map((partner) => {
          const isFeatured = partner.featured

          const cardInner = (
            <div className="group flex flex-col items-center justify-center text-center p-4 transition-all duration-300 relative">
              {/* Optional Subtle Ambient Glow for Featured Partner */}
              {isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/15 via-[#ff6b00]/5 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />
              )}

              {/* Logo (Flat on background, enhanced glow for featured) */}
              <div className="w-full h-28 md:h-36 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                    isFeatured
                      ? "filter drop-shadow-[0_0_22px_rgba(255,107,0,0.5)] scale-105 group-hover:scale-110 opacity-100"
                      : "filter drop-shadow-[0_0_12px_rgba(255,182,147,0.15)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* Partner Name Below */}
              <h3
                className={`font-headline-md text-base md:text-lg transition-colors ${
                  isFeatured
                    ? "text-[#ffb693] font-bold drop-shadow-[0_0_8px_rgba(255,107,0,0.3)]"
                    : "text-white/90 group-hover:text-[#ffb693] font-medium"
                }`}
              >
                {partner.name}
              </h3>
            </div>
          )

          if (partner.website && partner.website !== "#") {
            return (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {cardInner}
              </a>
            )
          }

          return <div key={partner.id}>{cardInner}</div>
        })}
      </div>
    </section>
  )
}




