import { useRef } from 'react'
import tech1 from '../assets/tech-1.jpg'
import tech2 from '../assets/tech-2.jpg'
import tech3 from '../assets/tech-3.jpg'
import tech4 from '../assets/tech-4.jpg'

// ?tr=w-640 is an ImageKit video transform: the sources are 4K, 34-65 MB each,
// which is not something to hand a viewer for a thumbnail-sized hover preview.
const clip = name => `https://ik.imagekit.io/x795sinml/skye/${name}.mp4?tr=w-640`

const techItems = [
  {
    num: '01',
    title: 'AERIAL SYSTEMS',
    desc: 'UAV platforms designed for agriculture, infrastructure mapping, industrial inspection, and defense-grade surveillance.',
    spec: 'SPEC: REV 4.2',
    video: clip('16853130_3840_2160_30fps'),
    poster: tech1,
    alt: 'Quadcopter in flight above open ground'
  },
  {
    num: '02',
    title: 'ROBOTICS',
    desc: 'Robotic systems designed around practical operational challenges, including high-heat corridors and confined spaces.',
    spec: 'SPEC: IP67 FIELD CERTIFIED',
    video: clip('15020300_3840_2160_25fps'),
    poster: tech2,
    alt: 'Aerial survey pass over a built-up area'
  },
  {
    num: '03',
    title: 'AI & INTELLIGENCE',
    desc: 'Artificial intelligence and emerging technologies applied to mission computers for target recognition and terrain mapping.',
    spec: 'EDGE LATENCY: <14MS',
    video: clip('7609195-uhd_3840_2160_25fps'),
    poster: tech3,
    alt: 'Close pass across a populated circuit board'
  },
  {
    num: '04',
    title: 'CUSTOM ENGINEERING',
    desc: 'Application-specific payload integration, custom composite framing, and purpose-built sensors built around specific user requirements.',
    spec: 'BESPOKE INTEGRATION',
    video: clip('7314025-uhd_4096_2160_25fps'),
    poster: tech4,
    alt: 'Hands soldering components onto a board at a bench'
  }
]

export default function Technology() {
  const videosRef = useRef([])

  const start = i => {
    const video = videosRef.current[i]
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.play().catch(() => {})
  }

  // Rewind on the way out, so the row goes back to the cover frame rather than
  // freezing on wherever the clip happened to be.
  const stop = i => {
    const video = videosRef.current[i]
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <section className="section-tech">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">02 / TECHNOLOGY</span>
          <h2 className="section-h2">FROM AIR TO INTELLIGENCE.</h2>
          <p className="section-desc">
            Modular, vertically integrated architectures designed from raw silicon, carbon composites, and high-frequency RF down to real-time deterministic firmware.
          </p>
        </div>

        <div className="tech-list">
          {techItems.map((item, i) => (
            <div
              key={item.num}
              className="tech-item"
              onMouseEnter={() => start(i)}
              onMouseLeave={() => stop(i)}
            >
              <div className="tech-left">
                <span className="tech-num">{item.num}</span>
                <div className="tech-thumb">
                  <video
                    ref={el => { videosRef.current[i] = el }}
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={item.alt}
                  />
                </div>
                <div>
                  <h3 className="tech-h3">{item.title}</h3>
                  <p className="tech-sub">{item.desc}</p>
                </div>
              </div>
              <div className="tech-right">
                <span className="tech-spec">{item.spec}</span>
                <span className="tech-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
