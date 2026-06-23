export function Footer() {
  return (
    <footer
      className="border-t border-white/5 relative z-10"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center mx-auto"
        style={{ padding: "32px 64px", maxWidth: "1440px" }}
      >
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <div className="font-headline-md font-bold" style={{ color: "#e5e2e1" }}>
            Debuggers United
          </div>
          <p className="font-body-sm" style={{ color: "#e2bfb0", opacity: 0.6 }}>
            © 2024 Debuggers United. Terminal Access Granted.
          </p>
        </div>
        <div className="flex gap-8 font-label-caps" style={{ color: "#e2bfb0" }}>
          <a
            className="hover:text-[#ffb693] transition-all underline-offset-4 hover:underline"
            href="#"
          >
            Privacy Protocol
          </a>
          <a
            className="hover:text-[#ffb693] transition-all underline-offset-4 hover:underline"
            href="#"
          >
            System Status
          </a>
          <a
            className="hover:text-[#ffb693] transition-all underline-offset-4 hover:underline"
            href="#"
          >
            Github
          </a>
          <a
            className="hover:text-[#ffb693] transition-all underline-offset-4 hover:underline"
            href="#"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  )
}
