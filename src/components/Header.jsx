import logoMark from '../assets/logo-mark.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <a className="logo" href="#">
          <img className="logo-mark" src={logoMark} alt="Sky Eye Technology" />
          <div className="logo-text">
            <span className="logo-brand">SKY EYE</span>
            <span className="logo-sub">TECHNOLOGY</span>
          </div>
        </a>

        {/* Nav */}
        <nav className="nav">
          <a href="#">Technology</a>
          <a href="#">Solutions</a>
          <a href="#">Products</a>
          <a href="#">R&D</a>
          <a href="#">Training</a>
          <a href="#">About</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a className="btn-primary" href="#" style={{ display: 'inline-flex' }}>
            [ Talk to us ]
          </a>
          <div className="avatar">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
