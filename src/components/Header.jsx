import logoMark from '../assets/logo-mark.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <a className="logo" href="#top" aria-label="Sky Eye Technology, back to top">
          <img className="logo-mark" src={logoMark} alt="Sky Eye Technology" />
          <div className="logo-text">
            <span className="logo-brand">SKY EYE</span>
            <span className="logo-sub">TECHNOLOGY</span>
          </div>
        </a>

        {/* Nav */}
        <nav className="nav">
          <a href="#technology">Technology</a>
          <a href="#solutions">Solutions</a>
          <a href="#products">Products</a>
          <a href="#rnd">R&D</a>
          <a href="#training">Training</a>
          <a href="#about">About</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a className="btn-primary header-cta" href="#contact">
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
