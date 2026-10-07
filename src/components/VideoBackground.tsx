import { useEffect, useRef } from "react"
import Hls from "hls.js"

interface VideoBackgroundProps {
  active?: boolean
}

const BASE_HLS =
  "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
const OVERLAY_HLS =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"

export function VideoBackground({ active = true }: VideoBackgroundProps) {
  const baseRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLVideoElement>(null)
  const hlsBaseRef = useRef<Hls | null>(null)
  const hlsOverlayRef = useRef<Hls | null>(null)

  useEffect(() => {
    if (!active) return

    const baseEl = baseRef.current
    const overlayEl = overlayRef.current
    if (!baseEl || !overlayEl) return

    const safePlay = (el: HTMLVideoElement) => {
      if (el.paused) {
        const promise = el.play()
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay policy might hold until user interaction
          })
        }
      }
    }

    // Auto-resume if unexpectedly paused while visible
    const handlePause = (e: Event) => {
      const target = e.target as HTMLVideoElement
      if (document.visibilityState === "visible") {
        setTimeout(() => safePlay(target), 50)
      }
    }

    // Seamless looping handler to prevent stopping midway or freezing at loop boundary
    const handleBaseTimeUpdate = () => {
      if (baseEl.duration > 0 && baseEl.currentTime >= baseEl.duration - 0.15) {
        baseEl.currentTime = 0
        safePlay(baseEl)
      }
    }

    const handleOverlayTimeUpdate = () => {
      if (overlayEl.duration > 0 && overlayEl.currentTime >= overlayEl.duration - 0.15) {
        overlayEl.currentTime = 0
        safePlay(overlayEl)
      }
    }

    const handleEnded = (e: Event) => {
      const target = e.target as HTMLVideoElement
      target.currentTime = 0
      safePlay(target)
    }

    baseEl.addEventListener("timeupdate", handleBaseTimeUpdate)
    baseEl.addEventListener("ended", handleEnded)
    baseEl.addEventListener("pause", handlePause)

    overlayEl.addEventListener("timeupdate", handleOverlayTimeUpdate)
    overlayEl.addEventListener("ended", handleEnded)
    overlayEl.addEventListener("pause", handlePause)

    // Interaction fallback for strict autoplay environments
    const handleUserInteraction = () => {
      safePlay(baseEl)
      safePlay(overlayEl)
      window.removeEventListener("pointerdown", handleUserInteraction)
      window.removeEventListener("keydown", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
    }
    window.addEventListener("pointerdown", handleUserInteraction, { passive: true })
    window.addEventListener("keydown", handleUserInteraction, { passive: true })
    window.addEventListener("touchstart", handleUserInteraction, { passive: true })

    // Resume when browser tab becomes active again
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        safePlay(baseEl)
        safePlay(overlayEl)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Initial play trigger
    safePlay(baseEl)
    safePlay(overlayEl)

    // Setup HLS as fallback if local sources fail or are unavailable
    function setupHlsFallback(videoEl: HTMLVideoElement, src: string): Hls | null {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: false,
          startLevel: 0,
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          backBufferLength: 30,
          enableWorker: true,
          lowLatencyMode: false,
        })

        hls.loadSource(src)
        hls.attachMedia(videoEl)

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          safePlay(videoEl)
        })

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad()
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError()
                break
              default:
                hls.destroy()
                break
            }
          } else if (data.details === "bufferStalledError") {
            if (videoEl.currentTime >= (videoEl.duration || 10) - 0.5) {
              videoEl.currentTime = 0
            } else {
              videoEl.currentTime += 0.05
            }
            safePlay(videoEl)
          }
        })

        return hls
      } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
        videoEl.src = src
        videoEl.addEventListener("loadedmetadata", () => {
          safePlay(videoEl)
        })
      }
      return null
    }

    const onBaseError = () => {
      if (!hlsBaseRef.current) {
        hlsBaseRef.current = setupHlsFallback(baseEl, BASE_HLS)
      }
    }
    const onOverlayError = () => {
      if (!hlsOverlayRef.current) {
        hlsOverlayRef.current = setupHlsFallback(overlayEl, OVERLAY_HLS)
      }
    }

    baseEl.addEventListener("error", onBaseError)
    overlayEl.addEventListener("error", onOverlayError)

    // Fallback timer: if local video cannot play after 1.5s, attach HLS stream
    const fallbackTimer = setTimeout(() => {
      if (baseEl.readyState < 2 && !hlsBaseRef.current) {
        hlsBaseRef.current = setupHlsFallback(baseEl, BASE_HLS)
      }
      if (overlayEl.readyState < 2 && !hlsOverlayRef.current) {
        hlsOverlayRef.current = setupHlsFallback(overlayEl, OVERLAY_HLS)
      }
    }, 1500)

    return () => {
      clearTimeout(fallbackTimer)
      baseEl.removeEventListener("timeupdate", handleBaseTimeUpdate)
      baseEl.removeEventListener("ended", handleEnded)
      baseEl.removeEventListener("pause", handlePause)
      baseEl.removeEventListener("error", onBaseError)

      overlayEl.removeEventListener("timeupdate", handleOverlayTimeUpdate)
      overlayEl.removeEventListener("ended", handleEnded)
      overlayEl.removeEventListener("pause", handlePause)
      overlayEl.removeEventListener("error", onOverlayError)

      window.removeEventListener("pointerdown", handleUserInteraction)
      window.removeEventListener("keydown", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      hlsBaseRef.current?.destroy()
      hlsOverlayRef.current?.destroy()
      hlsBaseRef.current = null
      hlsOverlayRef.current = null
    }
  }, [active])

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden"
      style={{ backgroundColor: "#131313" }}
    >
      <video
        ref={baseRef}
        className="absolute min-w-full min-h-full object-cover"
        id="bg-video-base"
        poster="/videos/bg-base-poster.webp"
        loop
        muted
        playsInline
        autoPlay
        role="none"
        aria-hidden="true"
      >
        <source src="/videos/bg-base.mp4" type="video/mp4" />
      </video>
      <video
        ref={overlayRef}
        className="absolute min-w-full min-h-full object-cover"
        id="bg-video-overlay"
        poster="/videos/bg-overlay-poster.webp"
        loop
        muted
        playsInline
        autoPlay
        role="none"
        aria-hidden="true"
      >
        <source src="/videos/bg-overlay.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-black/40"
        style={{ backdropFilter: "brightness(0.7)" }}
      />
    </div>
  )
}
