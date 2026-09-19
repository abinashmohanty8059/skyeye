const CV_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGo7ZNbzTN_mn1t4jLB0DSbWrt40bIkqpUsN07Y8ygvwtzE9GnlaAZEZ_H4igKPuAocPC5yRI2HnXtOpZJ2uzuUWHp6cCP7hEefl8iQO0TQycuTlXdUPKX_l294OoWgMMpCWKBh0jE_-L5KoxmPTTrB3Zb__FunDr9ZRwpCuuYKv8TJOsGvJodqIpRf0XDsazC8tyzqso8Z-GfzetY9h27Tfy9cDWx2tEm0I_i4uaTiLSZUKejEmwv'

const aiCards = [
  {
    label: 'CORE 01',
    title: 'ARTIFICIAL INTELLIGENCE',
    desc: 'Edge neural inference, real-time terrain classification, and flight autonomy running on onboard low-power accelerators.',
    footer: 'TENSOR LATENCY: <14MS'
  },
  {
    label: 'CORE 02',
    title: 'GENERATIVE AI',
    desc: 'Synthetic flight simulation environments, automated mission operational debriefing, and multimodal spatial intelligence.',
    footer: 'SYNTHETIC DATA GEN ENGINE'
  },
  {
    label: 'CORE 03',
    title: 'INTELLIGENT SYSTEMS',
    desc: 'Multi-agent drone swarm coordination, decentralized mesh communication, and cooperative real-time sensor fusion.',
    footer: 'SWARM CONCURRENCY: ACTIVE'
  }
]

export default function AIIntelligence() {
  return (
    <section className="section-ai">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">09 / INTELLIGENCE</span>
          <h2 className="section-h2">THE MACHINE IS ONLY THE BEGINNING.</h2>
          <p className="section-desc">
            We are expanding beyond hardware into artificial intelligence and emerging technologies — exploring how intelligent systems can turn raw sensor telemetry into decisive action.
          </p>
        </div>

        {/* 3-Column AI Cards */}
        <div className="ai-grid">
          {aiCards.map((card) => (
            <div key={card.label} className="ai-card">
              <div>
                <span className="ai-card-label">{card.label}</span>
                <h3 className="ai-card-h3">{card.title}</h3>
                <p className="ai-card-desc">{card.desc}</p>
              </div>
              <div className="ai-card-footer">{card.footer}</div>
            </div>
          ))}
        </div>

        {/* CV Point Cloud Display */}
        <div className="ai-cv-container">
          <div className="ai-cv-canvas">
            <img
              src={CV_IMG}
              alt="3D computer vision point cloud visualization of agricultural terrain with bounding box object detection"
            />
            <div className="ai-cv-badge-top">DETECTION INFERENCE: 98.4% CONFIDENCE</div>
            <div className="ai-cv-badge-bottom">FRAME: #104,912 · CLASSIFIED 42 OBJECTS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
