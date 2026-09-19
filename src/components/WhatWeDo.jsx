const categories = [
  {
    num: '01.01',
    title: 'DRONES',
    desc: 'Autonomous, mission-critical aerial systems engineered for high-endurance precision in hostile and remote environments.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJJ0EVMMtlWRQLkkxFj6abPcuspuptf4NOdoIwrMdjsABHNIhrlDzq_dnEyBtwLAhSLI1GAVRbL1TlmexSyP5tzvWgLlUHqKayn0awnPijOqeG5HLmgCkEsYjs722ELK0l5-JgcMoEMvoTj1wU7wzd5VKtWmh4WCBon1Z6bqxCeUSRASayfw7HUxIsorr_BQmGfU8BiCEc7irvHhDusb8mvWlFI3Ydj0iwWRRnbxRBG-SDgbjj5IV',
    alt: 'Technical schematic of industrial agricultural octocopter drone arm'
  },
  {
    num: '01.02',
    title: 'ROBOTS',
    desc: 'Ground and specialized mechanical robotics navigating complex industrial environments, utility corridors, and enclosed facilities.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqGLiDG4xoO07CGmBh3LaeM0ax9M889-F1edFEss7tCL3cjn86hqRSuqlmZDLVHgL7GZIJPForH96bXIvLMl9XmSifjDrJOM79S4pJCp-H7jUUWvBbNzrwd4BW_bMQsrnSPkIcqC6J2gXHYm15bCBlN2G5gwxfnBMRm-wtva3IEGutsc4h3krHnOlcyay1HoUfpuo3_8CX4NLvt3zG7e9EAWsQXc4mWcHrE3EMYOcQ9ITD9j7vehSi',
    alt: 'Quadruped ground robotics unit navigating industrial pipe trench'
  },
  {
    num: '01.03',
    title: 'INTELLIGENCE',
    desc: 'On-edge compute, computer vision, and autonomous flight intelligence running in real time without continuous satellite tethering.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmIUl4Ntk6z_px9Zg3kaBrlx7QDpYY7jxwKb2PXdFpsykmVv9RPCIXVxco-34EN163ksD8g_RO_Q2Po3yGnQIPdhbQMvibHBd7i_vDuBTW1zQ3X3VOIeDVcXHUG1Xb-_sTrHu2MV5DejUIJmaxEisG7fqOLa1H7Yzwvfrm_YhfcTfV-3CZQxspaNu9Q3N80XBmmdGAUnfTYSqsaahrpkODkmys1z78FVEDikbutJSsBkCRO-uPuJKJ',
    alt: 'Edge computing circuit board with embedded GPU module'
  }
]

export default function WhatWeDo() {
  return (
    <section className="section-what" id="about">
      <div className="container section-what-inner">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">01 / WHAT WE DO</span>
          <h2 className="section-h2">WE BUILD REAL TECHNOLOGY.</h2>
          <p className="section-desc">
            Sky Eye Technology develops and deploys technology across drones, robotics, artificial intelligence and emerging technologies. We work across the journey from research and engineering to assembly, testing and real-world deployment.
          </p>
        </div>

        {/* Category List */}
        <div className="category-list">
          {categories.map((cat) => (
            <a key={cat.num} className="category-item" href="#">
              <div className="category-grid">
                <div className="cat-num-title">
                  <span className="cat-num">{cat.num}</span>
                  <h3 className="cat-title">{cat.title}</h3>
                </div>
                <div className="cat-desc">
                  <p className="cat-desc-text">{cat.desc}</p>
                </div>
                <div className="cat-img-wrap">
                  <div className="cat-img-box">
                    <img src={cat.img} alt={cat.alt} />
                  </div>
                </div>
                <div className="cat-arrow">
                  <span className="cat-arrow-icon">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
