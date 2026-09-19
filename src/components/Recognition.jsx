import { useEffect, useRef, useState } from 'react'
import mil1 from '../assets/mil-1.jpg'
import mil2 from '../assets/mil-2.jpg'
import mil3 from '../assets/mil-3.jpg'
import mil4 from '../assets/mil-4.jpg'
import dir1 from '../assets/dir-1.jpg'
import dir2 from '../assets/dir-2.jpg'
import dir3 from '../assets/dir-3.jpg'
import dir4 from '../assets/dir-4.jpg'
import dir5 from '../assets/dir-5.jpg'
import dir6 from '../assets/dir-6.jpg'
import dir7 from '../assets/dir-7.jpg'
import dir8 from '../assets/dir-8.jpg'

const groups = [
  {
    name: 'Government Awards',
    left: {
      img: mil1,
      label: 'On record',
      alt: 'Sky Eye Technology founders on stage at a government startup awards ceremony holding certificates',
      caption: 'Recognised on stage at a state startup programme alongside the cohort of selected ventures.'
    },
    right: {
      img: mil2,
      label: 'In service',
      alt: 'Army personnel seated in a Sky Eye Technology classroom session on drone fundamentals',
      caption: 'The same programme now runs as structured drone instruction for uniformed services.'
    }
  },
  {
    name: 'Gov Approved',
    left: {
      img: mil3,
      label: 'On record',
      alt: 'Sky Eye Technology team briefing police officers outside a district police station',
      caption: 'Cleared for operational briefings with district police leadership before deployment.'
    },
    right: {
      img: mil4,
      label: 'In service',
      alt: 'Sky Eye Technology drone airborne during a live demonstration for police personnel',
      caption: 'Airborne on approved duty — live surveillance demonstration flown for the unit.'
    }
  },
  {
    name: 'Campus Builds',
    left: {
      img: dir1,
      label: 'The build',
      alt: 'Student holding a hand-built fixed-wing UAV with a solar-panelled wing on a campus lawn',
      caption: 'Fixed-wing airframes built end to end by students on our campus programme.'
    },
    right: {
      img: dir2,
      label: 'The handover',
      alt: 'School students gathered around a drone during a Sky Eye Technology campus session',
      caption: 'Handed to the next batch at International Delhi Public School — controls, checks, first flight.'
    }
  },
  {
    name: 'Build Labs',
    left: {
      img: dir3,
      label: 'The bench',
      alt: 'School students leaning over a workbench wiring a drone motor and electronic speed controller',
      caption: 'Motors, ESCs and wiring diagrams — students assemble the airframe themselves.'
    },
    right: {
      img: dir4,
      label: 'The floor',
      alt: 'Two Sky Eye Technology engineers assembling a carbon fibre drone frame in the workshop',
      caption: 'The same build discipline our engineers run on the production floor.'
    }
  },
  {
    name: 'Flight Training',
    left: {
      img: dir5,
      label: 'Live flight',
      alt: 'Trainees standing around two quadcopters preparing to launch on an open ground',
      caption: 'Supervised line-of-sight sorties on open ground, one airframe per trainee group.'
    },
    right: {
      img: dir6,
      label: 'Simulator lab',
      alt: 'School computer lab full of students running drone flight simulator software',
      caption: 'Every sortie is rehearsed first in the simulator lab — failures cost nothing there.'
    }
  },
  {
    name: 'School Assemblies',
    left: {
      img: dir7,
      label: 'The briefing',
      alt: 'Sky Eye Technology instructor addressing a full school auditorium of students',
      caption: 'Full-school briefings on how drones fly, what they carry and where they work.'
    },
    right: {
      img: dir8,
      label: 'The room',
      alt: 'Packed school auditorium of students watching a Sky Eye Technology drone demonstration',
      caption: 'Hundreds of students per session, across schools in the region.'
    }
  }
]

export default function Recognition() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const slidesRef = useRef([])
  const namesRef = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) return

    const last = groups.length - 1
    const pinned = () => window.matchMedia('(min-width: 900px)').matches
    const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // smoothstep: most of the crossfade happens mid-way between two pairs
    const ease = t => t * t * (3 - 2 * t)
    const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v)

    let current = null
    let target = 0
    let frame = 0
    let flow = false

    const readTarget = () => {
      const rect = section.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      return clamp01(travel > 0 ? -rect.top / travel : 0) * last
    }

    const clearInline = () => {
      for (const el of slidesRef.current) {
        if (!el) continue
        el.style.opacity = ''
        el.style.transform = ''
        el.style.pointerEvents = ''
        el.style.zIndex = ''
        el.style.removeProperty('--text-op')
      }
      for (const el of namesRef.current) {
        if (el) el.style.opacity = ''
      }
    }

    // Paint everything from one position value — no thresholds, no CSS transitions
    // racing the scroll, so the pairs crossfade exactly as fast as the wheel turns.
    const paint = pos => {
      stage.style.setProperty('--pos', pos.toFixed(4))
      // Dissolve, not a cross-fade: the outgoing pair stays fully opaque while the
      // incoming one fades in on top of it, so the page never washes through between.
      const from = Math.min(Math.max(Math.floor(pos), 0), last)
      const to = Math.min(from + 1, last)
      const t = ease(clamp01(pos - from))
      slidesRef.current.forEach((el, i) => {
        if (!el) return
        if (i === to && to !== from) {
          el.style.zIndex = '2'
          el.style.opacity = t.toFixed(3)
          el.style.transform = `translateY(${((1 - t) * 18).toFixed(2)}px) scale(${(0.988 + 0.012 * t).toFixed(4)})`
          // Labels and captions sit outside the photo, so they would read as doubled
          // text mid-dissolve: clear the old one out before the new one arrives.
          el.style.setProperty('--text-op', clamp01((t - 0.55) / 0.45).toFixed(3))
        } else if (i === from) {
          el.style.zIndex = '1'
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.style.setProperty('--text-op', clamp01((0.45 - t) / 0.45).toFixed(3))
        } else {
          el.style.zIndex = '0'
          el.style.opacity = '0'
          el.style.transform = 'none'
          el.style.setProperty('--text-op', '0')
        }
        el.style.pointerEvents = Math.round(pos) === i ? 'auto' : 'none'
      })
      namesRef.current.forEach((el, i) => {
        if (!el) return
        el.style.opacity = (0.12 + 0.88 * ease(1 - clamp01(Math.abs(i - pos)))).toFixed(3)
      })
      setActive(Math.round(pos))
    }

    // Ease towards the scroll position rather than snapping to it, so a fast
    // flick catches up over a few frames instead of cutting between pairs.
    const run = () => {
      frame = 0
      const diff = target - current
      if (Math.abs(diff) < 0.0008 || !flow) {
        current = target
        paint(current)
        return
      }
      current += diff * 0.18
      paint(current)
      frame = requestAnimationFrame(run)
    }

    const update = () => {
      if (!pinned()) {
        current = null
        stage.style.setProperty('--pos', '0')
        clearInline()
        setActive(0)
        return
      }
      target = readTarget()
      flow = !reduced()
      if (current === null) {
        current = target
        paint(current)
        return
      }
      if (!flow) {
        current = target
        paint(current)
        return
      }
      if (!frame) frame = requestAnimationFrame(run)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      className="section-recognition"
      ref={sectionRef}
      style={{ '--slides': groups.length }}
    >
      <div className="rec-sticky">
        <div className="container rec-container">
          <div className="section-header rec-header">
            <span className="section-label">08 / TRACK RECORD</span>
            <h2 className="section-h2">ON RECORD. ON DUTY. ON CAMPUS.</h2>
          </div>

          <div className="rec-stage" ref={stageRef}>
            {groups.map((group, i) => (
              <div
                key={group.name}
                ref={el => { slidesRef.current[i] = el }}
                className={`rec-slide${i === active ? ' is-active' : ''}`}
                aria-hidden={i === active ? undefined : true}
              >
                <figure className="rec-frame">
                  <figcaption className="rec-frame-label">{group.left.label}</figcaption>
                  <div className="rec-frame-img">
                    <img src={group.left.img} alt={group.left.alt} loading="lazy" />
                  </div>
                  <figcaption className="rec-frame-caption">{group.left.caption}</figcaption>
                </figure>

                <p className="rec-slide-name">{group.name}</p>

                <figure className="rec-frame">
                  <figcaption className="rec-frame-label">{group.right.label}</figcaption>
                  <div className="rec-frame-img">
                    <img src={group.right.img} alt={group.right.alt} loading="lazy" />
                  </div>
                  <figcaption className="rec-frame-caption">{group.right.caption}</figcaption>
                </figure>
              </div>
            ))}

            <div className="rec-names" aria-hidden="true">
              <div className="rec-names-track">
                {groups.map((group, i) => (
                  <span
                    key={group.name}
                    ref={el => { namesRef.current[i] = el }}
                    className={`rec-name${i === active ? ' is-active' : ''}`}
                  >
                    {group.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
