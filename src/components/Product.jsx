const PRODUCT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAxJGigIt7g6PKWdhLnMIMki7FafshxfUAbvl20DLfJUAbMtZBmAwsjqQ6xAOPQ8jqwqPDbp-BtTD0YqCWVTTyrGBwaVbHG7ppJM-349IAjWSRLyzq_V0XvYl8IGwpVqKOMr1XiB8x9SHk24zELeSGo_Y0GkA2k8F9ie40oeuM0B31ZrkXzJCKzWGI8Vx-A2PpofK82kmwBwT8wFgOUiZQncIDwMWXCQVlO13XpILWmIkS_bPeXXnl'

const specs = [
  { key: 'LIQUID PAYLOAD TANK', val: '10 LITER QUICK-SWAP' },
  { key: 'SPRAY SPAN', val: '4.0 METERS EFFECTIVE' },
  { key: 'ATOMIZATION NOZZLES', val: '4× HIGH-PRECISION PRESSURE' },
  { key: 'LOADED FLIGHT TIME', val: '20 MINUTES CONTINUOUS' },
  { key: 'MAX OPERATIONAL SPEED', val: '10.0 M/S (36 KM/H)' },
  { key: 'COMMUNICATION LINK', val: '1,000 M ENCRYPTED RF' },
]

export default function Product() {
  return (
    <section className="section-product">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">04 / PRODUCT</span>
          <h2 className="section-h2">A1 SERIES AGRICULTURE UAV</h2>
          <p className="section-desc">
            Precision from above. A professional agricultural unmanned aerial platform engineered from aerospace-grade carbon composite for demanding daily field cycles.
          </p>
        </div>

        <div className="product-grid">
          {/* Image */}
          <div className="product-img-col">
            <div className="product-img-frame">
              <div className="product-img-canvas">
                <img
                  src={PRODUCT_IMG}
                  alt="Sky Eye A1 Series hexacopter agricultural drone, carbon fiber folding arms, orange quick-release liquid tank"
                />
                <div className="product-fig-label">FIG 4.1: AIRFRAME BLUEPRINT</div>
              </div>
              <div className="product-dims">
                <span>SPAN: 1,840 MM</span>
                <span>FOLDED: 680 MM × 650 MM</span>
                <span>WEIGHT: 13.8 KG (DRY)</span>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="product-spec-col">
            <div>
              <span className="product-spec-label">PRECISION DISPERSAL SYSTEM</span>
              <h3 className="product-spec-h3">ENGINEERED METRICS</h3>
            </div>

            <div className="spec-table">
              {specs.map((s) => (
                <div key={s.key} className="spec-row">
                  <span className="spec-key">{s.key}</span>
                  <span className="spec-val">{s.val}</span>
                </div>
              ))}
            </div>

            <div>
              <a className="btn-primary" href="#" style={{ padding: '12px 16px', width: '100%', maxWidth: '360px' }}>
                [ View Product Specifications → ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
