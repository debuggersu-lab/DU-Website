import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1
      glow.style.left = `${currentX}px`
      glow.style.top = `${currentY}px`
      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    const animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return <div id="cursor-glow" ref={glowRef} />
}
