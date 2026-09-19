const WORKSHOP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHRr_sIy2FKv5DUzRSwGgIPpbLdy1vIh6uU9t01qgCv9m65by0h3ZFwPOGswiWSt3WzIFbS3m_8RU5KfPgI5p2FJ8y_u2fR23Z43-_0sLKT1JdtcLttwrcqNnIL4IQ2J1IKy_pcfRFdECqTvcluxPClX_qkuv6JDvZTa0OqFTg2w6wPO2wjkeJaYEM6k1uUlKa7Fgp9XFf6UHZh-_G-ir8V4TH0RMFE47ihiIVr1L4IZ8Sg0NXAcHI'

const phases = [
  {
    phase: 'PHASE 01',
    title: 'RESEARCH',
    desc: 'Aerodynamic analysis & structural FEA models.'
  },
  {
    phase: 'PHASE 02',
    title: 'DESIGN',
    desc: 'Precision CAD, CNC machining specs, and schematics.'
  },
  {
    phase: 'PHASE 03',
    title: 'BUILD',
    desc: 'Carbon fiber lamination, harness wiring & assembly.'
  },
  {
    phase: 'PHASE 04',
    title: 'TEST',
    desc: 'Bench calibration, rotor vibration and environmental test.'
  },
  {
    phase: 'PHASE 05',
    title: 'DEPLOY',
    desc: 'Pilot integration, fleet dispatch & operations.'
  },
  {
    phase: 'PHASE 06',
    title: 'ITERATE',
    desc: 'Telemetry analysis, firmware upgrades & optimization.'
  }
]

export default function Engineering() {
  return (
    <section className="section-engineering">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">05 / ENGINEERING</span>
          <h2 className="section-h2">FROM IDEA TO FLIGHT.</h2>
          <p className="section-desc">
            A relentless lifecycle of physical prototyping, stress analysis, and software simulation. We do not ship concepts; we build, break, and validate real machines.
          </p>
        </div>

        {/* Phase Pipeline */}
        <div className="phases-grid">
          {phases.map((p) => (
            <div key={p.phase} className="phase-cell">
              <span className="phase-label">{p.phase}</span>
              <h4 className="phase-h4">{p.title}</h4>
              <p className="phase-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Workshop Image */}
        <div className="workshop-frame">
          <div className="workshop-img">
            <img
              src={WORKSHOP_IMG}
              alt="Modern aerospace engineering workshop, technicians assembling carbon-fiber drone airframes"
            />
            <div className="workshop-badge">HANGAR LAB 01 · INTEGRATION FACILITY</div>
          </div>
          <div className="workshop-bar">
            <span>BUILT, TESTED AND REFINED IN THE REAL WORLD.</span>
            <span className="workshop-tolerance">INTERNAL BENCH TOLERANCE &lt; 0.05 MM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
