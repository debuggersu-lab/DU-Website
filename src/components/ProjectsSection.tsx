const PROJECTS = [
  {
    title: "NeuralNexus",
    tag: "Web3 / AI",
    description: "Decentralized AI inference engine built with Rust and Next.js.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzpQxxrOm9b25Dbfwn_xHxJUPd9S51QJOXSwriX1Hn-_udpcoIxN2PbZUhRm18H8LvXDVwFwqsfcrMdoE2-DZRundhJ_LxCCRW1Iejq99083ILyc8d0nawcqFb9nZHnhjtfMP8MuCAyGg4_GhkRQOw2f_L6QP-pHPo-ysri7Vam7ErQGoUmrpm5_7mzEOnkLoFiQe6Lp3mj39YGF3MF2kMp1LlYKG3tVUDjcRNzCSAmPmQpe-lTrVxCXLq04xVG9q7s7TJ_3Mj0TkK",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF_skEWnemwvom8bX5B9hgtxMzbmYa5V6Nt6sLoAZBtsTTvFI7bo_Lupp2GLEpH-od4jL70UvAU1oopPtPinY_8rQ5sb8P7OwgXYwBhbgm5xTucLhetPgubHwkdvganPyf0Mn0gqohVApJVpVYhwQGqe3spXhmIWi83f0fcRRyo28hTq3ZE3m3y1RthIjSCMZNaU1AaAgFBCUaluUuENO4HaSrzAbnDhNhlCF6UlCruSvo-wQ9Mkl_ai8smf3NH-DENCwMqWge-_p8",
    author: "@quantum_coder",
  },
  {
    title: "VoidCLI",
    tag: "DevTools",
    description: "High-performance terminal workspace for rapid deployment cycles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk3KyRgbjV2u7R0UMWjsuIDSCy6wzQz5_U0e9VNGUF04lSbz0h2MA5NgbMOFoo8xCt33gw8Sx4EYqRcZW5idZRCZVolxK3wV-9fMHY4CO4xTcuV7Y-v4oQrq3nTmw6a8vQroBmMfIsQmsabpzbZPbyj9OX-ne4B44h2rSIPjNlKDOSuOQdiB6TS0Kf4czQtZzRozl-oAH2Cfs5M1kpezqhSD3TC4RkIfyvxJTzbChaG-jwqIhepg19Ao-ZtR-ObTs6uyxwNiIFR1mW",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHQHkAIoai3p35jVgDerLe0_Ws8CVasZX1V3iCeIWFe9vpy0FvYgJTXP_ajeWnBKdxdz3XT8I1fcbfLZyZ7YsE7YrW_Pv4xuoWaPiaz9ZrOsow1d2bkW8u-_UDE4J8i2HqmrgidulzX3ZkVvRgaRTgYwzy6u4wxAOZONQt-dFHigiQxLEp1OhVWopyr9H4hjyD7g4T60Oz_mqq64gcXVuAEmpdcwuPEJGsadXALg0kFXhQRok8p1QADderjgLjzaW_aLPDIFM1XFUF",
    author: "@syntax_queen",
  },
  {
    title: "Aether Engine",
    tag: "Simulation",
    description: "Real-time physics engine optimized for browser-based 3D apps.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4ZbsfE2Ba8NH3M2ZHLKYtqHoYvANNLHfq0jjznu3zA_qDNgGJSHLdusSlIRFIZBwoZxZ3kVytDKWAfaXwZ2d1iDz3D05HbC47y6aVTb80E-ir5L8EDqbGC63UzjgaHUIAQE-sr-esjTrU8ptic4w9NNo8zp8bJKHSeKL3svpzALEU8DED34_VXwdgaZR8lXas_Fw37T0LYVqWZ0RyXMOl_kaYMZ83sumEjptoSoVOrdGE5nzuz3A6HT6OHRTN_xwJAMrzGHjd2F3",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuARTx7pZVL2crfqytcprAw1PYH_FNzPJ1izHSynbfvbDaVmFxJ4t5ZgsW6dAaqbv6Md--lvucMKsasqL0-a0-yjsEA8CSe4TGO6_nsU94_Wv_HqfdcZgM2fWbV9moSGohiI8lw0vU38UY5poCkVwDTvP2gdkVONK2p2sUFRlXVxNK3tyeMUgLUdWA5rjwD-gq-todOi-V8Fm3bM5uF9L5UkNj9Xq-bf41VoC3Fsk_7h9_odJsDRNCq6aSfgETWHHJz5ZcfwKWjvJU15",
    author: "@pixel_prime",
  },
]

export function ProjectsSection() {
  return (
    <section
      className="relative z-10"
      id="projects"
      style={{ padding: "128px 64px", maxWidth: "1440px", margin: "0 auto" }}
    >
      <div className="flex justify-between items-end mb-16 reveal">
        <div>
          <h2 className="font-headline-lg mb-2 uppercase">Pioneering Projects</h2>
          <p className="font-body-lg" style={{ color: "#e2bfb0" }}>
            Exceptional builds from our elite developer collective.
          </p>
        </div>
        <a
          className="font-label-caps pb-1 transition-all"
          href="#"
          style={{
            color: "#ffb693",
            borderBottom: "1px solid rgba(255, 182, 147, 0.3)",
          }}
        >
          View All Work
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={`tilt-card glass-card group overflow-hidden rounded-2xl reveal`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131313, transparent)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div style={{ padding: "32px" }}>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="font-label-caps px-3 py-1 rounded-full"
                  style={{
                    color: "#ffb693",
                    backgroundColor: "rgba(255, 182, 147, 0.1)",
                  }}
                >
                  {project.tag}
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#e2bfb0" }}
                >
                  open_in_new
                </span>
              </div>
              <h3 className="font-headline-md mb-2">{project.title}</h3>
              <p className="font-body-sm mb-6" style={{ color: "#e2bfb0" }}>
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-8 h-8 rounded-full border border-white/20"
                  src={project.avatar}
                  alt={project.author}
                />
                <span className="font-label-caps text-xs">{project.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
