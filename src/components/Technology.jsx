const techItems = [
  {
    num: '01',
    title: 'AERIAL SYSTEMS',
    desc: 'UAV platforms designed for agriculture, infrastructure mapping, industrial inspection, and defense-grade surveillance.',
    spec: 'SPEC: REV 4.2'
  },
  {
    num: '02',
    title: 'ROBOTICS',
    desc: 'Robotic systems designed around practical operational challenges, including high-heat corridors and confined spaces.',
    spec: 'SPEC: IP67 FIELD CERTIFIED'
  },
  {
    num: '03',
    title: 'AI & INTELLIGENCE',
    desc: 'Artificial intelligence and emerging technologies applied to mission computers for target recognition and terrain mapping.',
    spec: 'EDGE LATENCY: <14MS'
  },
  {
    num: '04',
    title: 'CUSTOM ENGINEERING',
    desc: 'Application-specific payload integration, custom composite framing, and purpose-built sensors built around specific user requirements.',
    spec: 'BESPOKE INTEGRATION'
  }
]

export default function Technology() {
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
          {techItems.map((item) => (
            <div key={item.num} className="tech-item">
              <div className="tech-left">
                <span className="tech-num">{item.num}</span>
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
