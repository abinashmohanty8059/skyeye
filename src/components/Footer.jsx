import logoMarkLight from '../assets/logo-mark-light.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div>
              <div className="footer-logo">
                <img className="footer-logo-mark" src={logoMarkLight} alt="" />
                <span className="footer-brand-name">SKY EYE TECHNOLOGY PVT. LTD.</span>
              </div>
              <p className="footer-tagline">"UNFOLDING THE UNFILTERED."</p>
              <p className="footer-sub" style={{ marginTop: 'var(--space-md)' }}>
                Drones • Robotics • AI • Autonomous Systems • R&D
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <p className="footer-address">
                Operational Hangar &amp; Lab: Bhubaneswar, Odisha • India
              </p>
              <p className="footer-cert">
                INSTITUTIONAL GRADE AEROSPACE &amp; DEFENSE SPECIFICATIONS
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-links-group">
              <span className="footer-links-heading">ARCHITECTURES</span>
              <a className="footer-link" href="#">Technology</a>
              <a className="footer-link" href="#">Solutions</a>
              <a className="footer-link" href="#">Products</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">DIVISION LABS</span>
              <a className="footer-link" href="#">R&D</a>
              <a className="footer-link" href="#">Flight Academy</a>
              <a className="footer-link" href="#">Corporate Profile</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">CONNECT</span>
              <a className="footer-link" href="#">Careers</a>
              <a className="footer-link" href="#">Talk to us</a>
              <div style={{ paddingTop: 'var(--space-xs)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <a className="footer-social-link" href="#">LinkedIn</a>
                <a className="footer-social-link" href="#">Instagram</a>
                <a className="footer-social-link" href="#">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-bottom-dot" />
            <span>© 2025 SKY EYE TECHNOLOGY PVT. LTD. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="footer-bottom-right">
            <span>SPEC: MIL-STD-810H COMPLIANT</span>
            <span>GEO-LOC: 20.2961° N, 85.8245° E</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
