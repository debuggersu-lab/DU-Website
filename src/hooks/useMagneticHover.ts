import { useEffect } from "react"

export function useMagneticHover() {
  useEffect(() => {
    const magneticBtns = document.querySelectorAll<HTMLElement>(".magnetic-hover")

    const handlers = new Map<
      HTMLElement,
      { move: (e: MouseEvent) => void; leave: () => void }
    >()

    magneticBtns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      }
      const leave = () => {
        btn.style.transform = "translate(0px, 0px)"
      }
      btn.addEventListener("mousemove", move)
      btn.addEventListener("mouseleave", leave)
      handlers.set(btn, { move, leave })
    })

    return () => {
      handlers.forEach(({ move, leave }, btn) => {
        btn.removeEventListener("mousemove", move)
        btn.removeEventListener("mouseleave", leave)
      })
    }
  }, [])
}
