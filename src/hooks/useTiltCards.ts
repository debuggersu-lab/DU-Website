import { useEffect } from "react"

export function useTiltCards() {
  useEffect(() => {
    const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card")

    const handlers = new Map<
      HTMLElement,
      { move: (e: MouseEvent) => void; leave: () => void }
    >()

    tiltCards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      }
      const leave = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      }
      card.addEventListener("mousemove", move)
      card.addEventListener("mouseleave", leave)
      handlers.set(card, { move, leave })
    })

    return () => {
      handlers.forEach(({ move, leave }, card) => {
        card.removeEventListener("mousemove", move)
        card.removeEventListener("mouseleave", leave)
      })
    }
  }, [])
}
