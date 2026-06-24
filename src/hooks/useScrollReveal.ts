import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .scale-in")

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      const elementVisible = 150
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll()

    return () => {
      window.removeEventListener("scroll", revealOnScroll)
    }
  }, [])
}
