import { useEffect } from "react"

export function useTiltCards(dependency?: unknown) {
  useEffect(() => {
    const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card")

    const handlers = new Map<
      HTMLElement,
      { enter: () => void; move: (e: MouseEvent) => void; leave: () => void }
    >()

    tiltCards.forEach((card) => {
      let rect: DOMRect | null = null

      const enter = () => {
        rect = card.getBoundingClientRect()
      }

      const move = (e: MouseEvent) => {
        if (!rect) {
          rect = card.getBoundingClientRect()
        }
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      }

      const leave = () => {
        rect = null
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      }

      card.addEventListener("mouseenter", enter)
      card.addEventListener("mousemove", move)
      card.addEventListener("mouseleave", leave)
      handlers.set(card, { enter, move, leave })
    })

    return () => {
      handlers.forEach(({ enter, move, leave }, card) => {
        card.removeEventListener("mouseenter", enter)
        card.removeEventListener("mousemove", move)
        card.removeEventListener("mouseleave", leave)
      })
    }
  }, [dependency])
}

