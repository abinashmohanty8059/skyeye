const CTA_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDbwDDLYCTSAdxCzLZ-lXwpwUAs9vEWGt6xTXEnLv0p47zWVJ1fKZIU5E0a8IdsKmFiH7rQ-KD-Naqc7ew6c3KLSAb0aoOosIG91bTZMRkWADFtydOxgiaFCwPdQraGIq0yuUoQ-jbzzIqqsfWO2SF2JU2oMTcJJhIqMQ0VDfhvYvPvCFppJo0HWcuNiBOt-2-Y5pIRJG5WsrFV14QMiYdjrZoWVTno3Mx7gMLIgR6GISc6u9aS51H'

export default function FinalCTA() {
  return (
    <section className="section-cta" id="contact">
      <div className="container py-2xl">
        <div className="cta-grid">
          {/* Left */}
          <div className="cta-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <span className="section-label">12 / ENGAGEMENT</span>
            <h2 className="cta-h2">
              WHAT ARE<br />WE BUILDING<br />NEXT?
            </h2>
            <p className="section-desc" style={{ maxWidth: '28rem', paddingTop: 'var(--space-xs)' }}>
              Have a project, technology requirement, research idea or deployment challenge? We partner with industrial leaders, state bodies, and pioneering ventures.
            </p>
            <div style={{ paddingTop: 'var(--space-md)' }}>
              <a
                className="btn-primary"
                href="#contact"
                style={{
                  padding: '16px var(--space-lg)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                [ TALK TO SKY EYE → ]
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="cta-right">
            <div className="cta-img-frame">
              <div className="cta-img">
                <img
                  src={CTA_IMG}
                  alt="Futuristic autonomous long-range reconnaissance drone on runway at twilight"
                />
              </div>
              <div className="cta-img-bar">
                <span>SKY EYE LABS · INITIATING MISSION LOG</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>READY FOR DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
