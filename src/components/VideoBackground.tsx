import { useEffect, useRef } from "react"
import Hls from "hls.js"

export function VideoBackground() {
  const baseRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const baseSrc =
      "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
    const overlaySrc =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"

    function setupHls(videoEl: HTMLVideoElement, src: string) {
      if (Hls.isSupported()) {
        const hls = new Hls({ capLevelToPlayerSize: true })
        hls.loadSource(src)
        hls.attachMedia(videoEl)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoEl.play().catch(() => {})
        })
        return hls
      } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
        videoEl.src = src
        videoEl.addEventListener("loadedmetadata", () => {
          videoEl.play().catch(() => {})
        })
      }
      return null
    }

    const hls1 = baseRef.current ? setupHls(baseRef.current, baseSrc) : null
    const hls2 = overlayRef.current
      ? setupHls(overlayRef.current, overlaySrc)
      : null

    return () => {
      hls1?.destroy()
      hls2?.destroy()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden" style={{ backgroundColor: "#131313" }}>
      <video
        ref={baseRef}
        className="absolute min-w-full min-h-full object-cover"
        id="bg-video-base"
        loop
        muted
        playsInline
      />
      <video
        ref={overlayRef}
        className="absolute min-w-full min-h-full object-cover"
        id="bg-video-overlay"
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" style={{ backdropFilter: "brightness(0.7)" }} />
    </div>
  )
}
