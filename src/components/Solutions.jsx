import { useState } from 'react'
import solMapping from '../assets/sol-mapping.jpg'

const solutions = {
  agri: {
    app: 'APP // 01',
    title: 'AGRICULTURE',
    panelTitle: 'APPLICATION PROFILE: PRECISION AGRICULTURE',
    coords: 'LAT: 20.2961° N · LON: 85.8245° E',
    desc: 'High-efficiency autonomous dispersal over varied terrain. Centimeter-level RTK navigation guarantees uniform payload distribution without drift.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvKrRg59mCB4A3SltEZFOrwwfM_PW4PHnLCsgeNrbILBS59gG-tuw0v7_nEkZ7QFcIqJzN4nvk1a5M--3tM6MypmMLhoZXSLDKgLPWcp1MLqgxLAfLSzkTU2SILId2FhJVe-hpMrBdYVKTngWuuwwGvmZJWHPoFXMgOGuSqJq2NTRRSs_-Lqi4IMbo6VIll-655qHF05eKyJqNz88laLhKo1sy087PAnAwtDySHb579fiHDluwUpa'
  },
  industrial: {
    app: 'APP // 02',
    title: 'INDUSTRIAL INSPECTION',
    panelTitle: 'APPLICATION PROFILE: INDUSTRIAL INSPECTION',
    coords: 'LAT: 21.1458° N · LON: 86.1287° E',
    desc: 'Thermal anomaly detection on oil pipelines, high-voltage substations, and wind turbine blades with millimeter spatial resolution.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvKrRg59mCB4A3SltEZFOrwwfM_PW4PHnLCsgeNrbILBS59gG-tuw0v7_nEkZ7QFcIqJzN4nvk1a5M--3tM6MypmMLhoZXSLDKgLPWcp1MLqgxLAfLSzkTU2SILId2FhJVe-hpMrBdYVKTngWuuwwGvmZJWHPoFXMgOGuSqJq2NTRRSs_-Lqi4IMbo6VIll-655qHF05eKyJqNz88laLhKo1sy087PAnAwtDySHb579fiHDluwUpa'
  },
  mapping: {
    app: 'APP // 03',
    title: 'MAPPING & SURVEYING',
    panelTitle: 'APPLICATION PROFILE: MAPPING & SURVEYING',
    coords: 'LAT: 20.4625° N · LON: 85.8830° E',
    desc: 'LiDAR and high-resolution photogrammetry capture delivering dense 3D point clouds and topographical digital surface models.',
    video: 'https://ik.imagekit.io/x795sinml/skye/15020300_3840_2160_25fps.mp4?tr=w-960',
    img: solMapping,
    alt: 'Aerial survey pass over a built-up area'
  },
  public: {
    app: 'APP // 04',
    title: 'PUBLIC SERVICES',
    panelTitle: 'APPLICATION PROFILE: PUBLIC SERVICES',
    coords: 'LAT: 20.2450° N · LON: 85.7890° E',
    desc: 'Rapid disaster reconnaissance, flood inundation tracking, and emergency supply deployment into cut-off disaster sectors.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvKrRg59mCB4A3SltEZFOrwwfM_PW4PHnLCsgeNrbILBS59gG-tuw0v7_nEkZ7QFcIqJzN4nvk1a5M--3tM6MypmMLhoZXSLDKgLPWcp1MLqgxLAfLSzkTU2SILId2FhJVe-hpMrBdYVKTngWuuwwGvmZJWHPoFXMgOGuSqJq2NTRRSs_-Lqi4IMbo6VIll-655qHF05eKyJqNz88laLhKo1sy087PAnAwtDySHb579fiHDluwUpa'
  },
  security: {
    app: 'APP // 05',
    title: 'SECURITY & BORDER',
    panelTitle: 'APPLICATION PROFILE: SECURITY & BORDER',
    coords: 'LAT: 22.1023° N · LON: 86.4510° E',
    desc: 'Persistent perimeter patrol, automated dock recharging, and intelligent intrusion classification along critical installations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvKrRg59mCB4A3SltEZFOrwwfM_PW4PHnLCsgeNrbILBS59gG-tuw0v7_nEkZ7QFcIqJzN4nvk1a5M--3tM6MypmMLhoZXSLDKgLPWcp1MLqgxLAfLSzkTU2SILId2FhJVe-hpMrBdYVKTngWuuwwGvmZJWHPoFXMgOGuSqJq2NTRRSs_-Lqi4IMbo6VIll-655qHF05eKyJqNz88laLhKo1sy087PAnAwtDySHb579fiHDluwUpa'
  },
  defence: {
    app: 'APP // 06',
    title: 'DEFENCE R&D',
    panelTitle: 'APPLICATION PROFILE: DEFENCE R&D',
    coords: 'CLASSIFIED // INSTITUTIONAL ACCESS',
    desc: 'Specialized electronic countermeasures, GPS-denied tactical navigation, and ruggedized airframe validation under MIL-STD testing.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvKrRg59mCB4A3SltEZFOrwwfM_PW4PHnLCsgeNrbILBS59gG-tuw0v7_nEkZ7QFcIqJzN4nvk1a5M--3tM6MypmMLhoZXSLDKgLPWcp1MLqgxLAfLSzkTU2SILId2FhJVe-hpMrBdYVKTngWuuwwGvmZJWHPoFXMgOGuSqJq2NTRRSs_-Lqi4IMbo6VIll-655qHF05eKyJqNz88laLhKo1sy087PAnAwtDySHb579fiHDluwUpa'
  }
}

const keys = Object.keys(solutions)

export default function Solutions() {
  const [active, setActive] = useState('agri')
  const current = solutions[active]

  return (
    <section className="section-solutions" id="solutions">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">03 / APPLICATIONS</span>
          <h2 className="section-h2">BUILT FOR THE REAL WORLD.</h2>
          <p className="section-desc">
            Select an application profile to inspect real-time deployment parameters, environmental tolerance, and payload specifications.
          </p>
        </div>

        <div className="solutions-board">
          {/* Left Tabs */}
          <div className="sol-tabs">
            {keys.map((key) => {
              const s = solutions[key]
              const isActive = key === active
              return (
                <button
                  key={key}
                  className={`sol-tab ${isActive ? 'active' : 'inactive'}`}
                  onClick={() => setActive(key)}
                >
                  <div>
                    <span className="sol-tab-app">{s.app}</span>
                    <span className="sol-tab-title">{s.title}</span>
                  </div>
                  <span className="sol-tab-status">
                    {isActive ? '[ACTIVE]' : '[LOAD]'}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Preview */}
          <div className="sol-preview">
            <div className="sol-preview-img-wrap">
              {current.video ? (
                // Keyed on the profile so switching tabs remounts and restarts it.
                <video
                  key={active}
                  src={current.video}
                  poster={current.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={current.alt}
                />
              ) : (
                <img src={current.img} alt={current.panelTitle} />
              )}
              <div className="sol-preview-badge">TELEMETRY: STABLE</div>
            </div>

            <div className="sol-info">
              <div className="sol-info-row">
                <span>{current.panelTitle}</span>
                <span>{current.coords}</span>
              </div>
              <p className="sol-desc">{current.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
