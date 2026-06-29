import { useState } from "react"

const SOCIAL_CHANNELS = [
  {
    name: "Discord",
    url: "#",
    icon: "forum",
    description: "Join our active developer chatroom",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "work",
    description: "Connect with our collective professionals",
  },
  {
    name: "Youtube",
    url: "#",
    icon: "smart_display",
    description: "Watch our tech streams & builds",
  },
  {
    name: "Instagram",
    url: "#",
    icon: "photo_camera",
    description: "Peek behind the scenes updates",
  },
]

const COLLAB_TYPES = [
  "Event Partnership",
  "Tech Workshop",
  "Sponsorship",
  "Dev Collab",
  "Other",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    communityName: "",
    name: "",
    email: "",
    collabType: "Event Partnership",
    subject: "",
    deckLink: "",
    details: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API request delay
    setTimeout(() => {
      console.log("Mock Proposal Payload Submitted:", formData)
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleReset = () => {
    setFormData({
      communityName: "",
      name: "",
      email: "",
      collabType: "Event Partnership",
      subject: "",
      deckLink: "",
      details: "",
    })
    setSubmitted(false)
  }

  return (
    <section
      className="relative z-10"
      id="contact"
      style={{ padding: "128px 64px", maxWidth: "1440px", margin: "0 auto" }}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Direct Channels & Social Links (Reverted to general contact info) */}
        <div className="w-full lg:w-1/2 scale-in">
          <h2 className="font-headline-lg mb-4 uppercase">Get In Touch</h2>
          <p className="font-body-lg mb-10" style={{ color: "#e2bfb0" }}>
            Have a project in mind, want to collaborate, or have questions about the community? Connect with us directly.
          </p>

          {/* Email Support Card */}
          <div className="glass-card p-8 rounded-2xl mb-8 relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(255, 107, 0, 0.1)",
                  border: "1px solid rgba(255, 107, 0, 0.3)",
                }}
              >
                <span className="material-symbols-outlined" style={{ color: "#ffb693" }}>
                  mail
                </span>
              </div>
              <div>
                <span className="font-label-caps text-xs text-white/55 block">DIRECT EMAIL</span>
                <span className="font-headline-md text-xl" style={{ color: "#ffb693" }}>
                  contact@debuggersunited.dev
                </span>
              </div>
            </div>
            <p className="font-body-sm" style={{ color: "#e2bfb0" }}>
              Our core team monitors this inbox daily. Expect responses within 24 hours.
            </p>
          </div>

          {/* Social Links List */}
          <h3 className="font-label-caps text-sm mb-6 uppercase tracking-widest text-white/50">
            Our Communities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:translate-x-1 transition-all group"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 182, 147, 0.3)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent"
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-[#ffb693]/10 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-xl transition-colors group-hover:text-[#ffb693]"
                    style={{ color: "#e2bfb0" }}
                  >
                    {channel.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-base text-white group-hover:text-[#ffb693] transition-colors leading-tight">
                    {channel.name}
                  </h4>
                  <p className="text-[11px] leading-tight mt-0.5" style={{ color: "#e2bfb0" }}>
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Glassmorphic Partner Form */}
        <div className="w-full lg:w-1/2 reveal">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden border border-[#ff6b00]/20 hover:border-[#ff6b00]/40 shadow-[0_0_30px_rgba(255,107,0,0.03)] hover:shadow-[0_0_40px_rgba(255,107,0,0.12)] transition-all duration-500">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff6b00] via-[#00dbe9] to-[#7d42ff]" />

            {submitted ? (
              // Success State
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce"
                  style={{
                    backgroundColor: "rgba(255, 107, 0, 0.1)",
                    border: "2px solid #ff6b00",
                  }}
                >
                  <span className="material-symbols-outlined text-3xl text-glow-orange">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-md mb-2 text-white">Proposal Submitted!</h3>
                <p className="font-body-sm max-w-sm mx-auto mb-8" style={{ color: "#e2bfb0" }}>
                  Thank you for reaching out! We've received your partnership proposal and will review it with our core collective teams.
                </p>
                <button
                  onClick={handleReset}
                  className="magnetic-hover btn-ghost px-6 py-3 rounded-lg font-label-caps uppercase text-xs font-bold"
                  style={{ color: "#ffb693" }}
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              // Form State
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-md text-2xl text-white uppercase tracking-wider">Partner With Us</h3>
                  <p className="font-body-sm" style={{ color: "#e2bfb0" }}>
                    Complete the details below to initiate a collaboration proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Community / Org Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="communityName" className="font-label-caps text-xs text-white/70">
                      COMMUNITY / ORGANIZATION
                    </label>
                    <input
                      id="communityName"
                      type="text"
                      required
                      placeholder="e.g. ACM Student Chapter"
                      className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      style={{ color: "#e5e2e1" }}
                      value={formData.communityName}
                      onChange={(e) => setFormData({ ...formData, communityName: e.target.value })}
                    />
                  </div>

                  {/* Name & Role Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-label-caps text-xs text-white/70">
                      YOUR NAME & ROLE
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe (Lead Organizer)"
                      className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      style={{ color: "#e5e2e1" }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-label-caps text-xs text-white/70">
                      CONTACT EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. organizer@community.org"
                      className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      style={{ color: "#e5e2e1" }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-label-caps text-xs text-white/70">
                      PROPOSAL SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. Winter Hackathon 2026"
                      className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      style={{ color: "#e5e2e1" }}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                {/* Collaboration Type Buttons */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-label-caps text-xs text-white/70">COLLABORATION TYPE</span>
                  <div className="flex flex-wrap gap-3">
                    {COLLAB_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, collabType: type })}
                        className={`px-4 py-2.5 rounded-lg border text-[11px] font-label-caps uppercase transition-all tracking-wider font-bold text-center cursor-pointer whitespace-nowrap ${formData.collabType === type
                            ? "border-[#ff6b00] bg-[#ff6b00]/10 text-[#ffb693] shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                            : "border-white/10 bg-white/2 hover:border-white/30 text-white/70 hover:text-white"
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Proposal Deck Link (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="deckLink" className="font-label-caps text-xs text-white/70">
                    PROPOSAL DECK / WEBSITE LINK (OPTIONAL)
                  </label>
                  <input
                    id="deckLink"
                    type="url"
                    placeholder="e.g. https://drive.google.com/file/... or website URL"
                    className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                    style={{ color: "#e5e2e1" }}
                    value={formData.deckLink}
                    onChange={(e) => setFormData({ ...formData, deckLink: e.target.value })}
                  />
                </div>

                {/* Details Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="font-label-caps text-xs text-white/70">
                    PROPOSAL DETAILS & COLLAB VISION
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    placeholder="Provide a summary of the event/collab, expected reach, target audience, and what support you are hoping to get from DU..."
                    className="px-4 py-3 rounded-lg outline-none text-sm transition-all border border-white/10 bg-white/[0.01] focus:bg-white/[0.04] focus:border-[#ff6b00]/60 focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] resize-none"
                    style={{ color: "#e5e2e1" }}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-hover btn-primary py-4 rounded-xl font-label-caps uppercase font-bold tracking-widest text-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center gap-2"
                  style={{ color: "#572000" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-[#572000] border-t-transparent rounded-full mr-2"></span>
                      SUBMITTING PROPOSAL...
                    </>
                  ) : (
                    <>
                      SEND PROPOSAL
                      <span className="material-symbols-outlined text-base">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
