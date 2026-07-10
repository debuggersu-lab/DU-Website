import { useEffect, useRef } from "react"
import { logoBase64 } from "./logo-base64"

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.parentElement?.clientWidth || 800
    canvas.height = 600

    let particlesArray: Particle[] = []
    const mouse = { x: undefined as number | undefined, y: undefined as number | undefined, radius: 60 }

    let inView = false

    let canvasRect = canvas.getBoundingClientRect()
    const handleScroll = () => {
      canvasRect = canvas.getBoundingClientRect()
    }
    window.addEventListener("scroll", handleScroll)

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX - canvasRect.left
      mouse.y = event.clientY - canvasRect.top
    }
    const handleMouseLeave = () => {
      mouse.x = undefined
      mouse.y = undefined
    }
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    class Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      density: number

      constructor(x: number, y: number, color: string) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 800 + (canvas?.width || 800)
        this.x = (canvas?.width || 800) / 2 + Math.cos(angle) * radius
        this.y = (canvas?.height || 600) / 2 + Math.sin(angle) * radius
        this.baseX = x
        this.baseY = y
        this.size = 1.5
        this.color = color
        this.density = Math.random() * 3 + 0.5
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = "rgba(255, 107, 0, 0.15)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        if (!inView) {
          this.x += Math.random() - 0.5
          this.y += Math.random() - 0.5
          this.draw()
          return
        }

        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const maxDistance = mouse.radius
          const force = (maxDistance - distance) / maxDistance
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          if (distance < mouse.radius) {
            this.x -= directionX
            this.y -= directionY
          } else {
            if (this.x !== this.baseX) {
              const dxBase = this.x - this.baseX
              this.x -= dxBase / 25
            }
            if (this.y !== this.baseY) {
              const dyBase = this.y - this.baseY
              this.y -= dyBase / 25
            }
          }
        } else {
          if (this.x !== this.baseX) {
            const dxBase = this.x - this.baseX
            this.x -= dxBase / 25
          }
          if (this.y !== this.baseY) {
            const dyBase = this.y - this.baseY
            this.y -= dyBase / 25
          }
        }
        this.draw()
      }
    }

    function init(imageData: ImageData) {
      particlesArray = []
      const startX = ((canvas?.width || 800) - imageData.width) / 2
      const startY = ((canvas?.height || 600) - imageData.height) / 2
      const step = 3

      for (let y = 0; y < imageData.height; y += step) {
        for (let x = 0; x < imageData.width; x += step) {
          const index = (y * imageData.width + x) * 4
          const r = imageData.data[index]
          const g = imageData.data[index + 1]
          const b = imageData.data[index + 2]
          const a = imageData.data[index + 3]
          const brightness = (r + g + b) / 3

          if (a > 128 && brightness > 30) {
            const color = "rgba(255, 107, 0, 0.9)"
            particlesArray.push(new Particle(startX + x, startY + y, color))
          }
        }
      }
    }

    let animId: number
    let isRunning = false

    function animate() {
      if (!isRunning) return
      animId = requestAnimationFrame(animate)
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
      }
      ctx.globalCompositeOperation = "source-over"
    }

    function startAnimation() {
      if (!isRunning) {
        isRunning = true
        animate()
      }
    }

    function stopAnimation() {
      isRunning = false
      cancelAnimationFrame(animId)
    }

    const canvasObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          inView = true
          startAnimation()
        } else {
          inView = false
          stopAnimation()
        }
      },
      { threshold: 0.1 }
    )
    canvasObserver.observe(canvas)

    // Load the logo image
    const image = new Image()
    image.src = logoBase64
    image.onload = () => {
      if (!canvas || !ctx) return
      const scale = Math.min(
        (canvas.width * 0.7) / image.width,
        (canvas.height * 0.7) / image.height
      )
      const w = image.width * scale
      const h = image.height * scale

      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = w
      tempCanvas.height = h
      const tempCtx = tempCanvas.getContext("2d")
      if (tempCtx) {
        tempCtx.drawImage(image, 0, 0, w, h)
        const imgData = tempCtx.getImageData(0, 0, w, h)
        init(imgData)
      }
    }

    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.parentElement?.clientWidth || 800
      canvas.height = 600
      canvasRect = canvas.getBoundingClientRect()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      stopAnimation()
      canvasObserver.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section
      className="py-20 flex justify-center items-center relative overflow-hidden"
      id="particle-logo-section"
    >
      <div className="container mx-auto text-center">
        <canvas
          ref={canvasRef}
          className="mx-auto cursor-crosshair max-w-full h-auto rounded-2xl"
          width={800}
          height={600}
          id="duParticleCanvas"
        />
      </div>
    </section>
  )
}
