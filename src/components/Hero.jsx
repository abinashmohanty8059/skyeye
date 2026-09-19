const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg3_-Rn44se4Zn0iQ-Wh4FjV8sHm-YSWQPyaar1pOSys_uaIku0xfbzmjjF-PKfAl-2hIoQ3wis1pP4cP_kdGZp1P6n8rtWClalef5WnW364Vmj9OABJkLUHsxKxH3k7knhLdNF2I7qKzIpGxoBhfh69EVHVPxSRJybIpOo6chrKAI3l5CyUoV7544c3428dNp3LXUbK7GU42-VpnDuyNEnjvMNMqhCk0neYcMTr2bjSELhWrOKbx-'

export default function Hero() {
  return (
    <section className="section-hero" id="overview">
      <div className="container hero-inner">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            <div>
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                <span>SKY EYE TECHNOLOGY · BHUBANESWAR · INDIA</span>
              </div>

              <h2 className="hero-h1">
                UNFOLDING<br />THE UNFILTERED.
              </h2>

              <p className="hero-desc">
                We build drones, robotics and intelligent technology for real-world applications. High-endurance autonomous hardware engineered without compromise.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <a className="btn-primary" href="#technology">[ Explore Technology ]</a>
              <a className="btn-outline" href="#contact">[ Talk to Us ]</a>
            </div>

            {/* Quick Metrics */}
            <div className="hero-metrics">
              <div>
                <p className="metric-label">CORE LAB</p>
                <p className="metric-value">BHUBANESWAR</p>
              </div>
              <div>
                <p className="metric-label">SYSTEM RATING</p>
                <p className="metric-value">MIL-STD 810H</p>
              </div>
              <div>
                <p className="metric-label">DEPLOYED FLEET</p>
                <p className="metric-value">380+ UNITS</p>
              </div>
            </div>
          </div>

          {/* Right Column — Video Frame */}
          <div className="hero-right">
            <div className="hero-video-frame">
              <div className="hero-video-canvas">
                <img
                  src={HERO_IMG}
                  alt="Cinematic aerial drone surveillance shot over industrial agricultural landscape, Bhubaneswar India"
                />

                {/* HUD Overlay */}
                <div className="hud-overlay">
                  <div className="hud-top">
                    <span className="hud-rec">REC ● [LIVE FEED 01]</span>
                  </div>
                  <div className="hud-bottom">
                    <span className="hud-fps">FPS: 59.94 · 4K RAW</span>
                    <div className="hud-corner" />
                  </div>
                </div>

                {/* Crosshair */}
                <div className="hud-crosshair">
                  <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                    filter_center_focus
                  </span>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="hero-video-bar">
                <div className="hero-video-bar-left">
                  <span className="bar-dot" />
                  <span className="bar-title">AERIAL SYSTEM · FIELD TEST</span>
                </div>
                <span className="bar-coords">[LAT 20.2961° N, LON 85.8245° E]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
