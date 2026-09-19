const badges = [
  'DRONE ENGINEERING',
  'ROBOTICS HARDWARE',
  'AI / ML EMBEDDED',
  'RF & ELECTRONICS',
  'FIRMWARE / RTOS',
  'MECHANICAL DESIGN',
  'APPLIED R&D'
]

export default function Talent() {
  return (
    <section className="section-talent" id="careers">
      <div className="talent-accent" />
      <div className="container py-2xl">
        <div style={{ maxWidth: '64rem' }}>
          <span className="section-label">11 / TALENT</span>
          <h2 className="section-h2">COME BUILD WITH US.</h2>
          <p className="section-desc" style={{ maxWidth: '40rem' }}>
            We are looking for people who want to understand technology deeply, experiment with it and build systems that work in the real world. No empty corporate buzzwords. Real hardware, high autonomy, rapid deployment.
          </p>

          <div className="talent-badges">
            {badges.map((badge) => (
              <span key={badge} className="talent-badge">{badge}</span>
            ))}
          </div>

          <div style={{ paddingTop: 'var(--space-md)' }}>
            <a className="btn-primary" href="#contact" style={{ padding: '12px 16px' }}>
              [ View Open Opportunities → ]
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
