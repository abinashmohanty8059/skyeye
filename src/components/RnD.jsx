const LAB_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm5bPJBO3dBBtMXP6Rr1ddwCC-ujaqZMHv80yJmT4h_JaFnNBRh8fedeq7eBsCwD2CeSoRGepr401hrOoSq6Q8cvll3jfFESeDENio2bymXKIuhswpXnt0lL9GPjZqeQp_lZUvl8KH7R-MlIrlSDVYrGC9Y4umeah62JY4cxeTsI6RNo-xDiu2f0z6nFcGDKbVTLRbKkX4XJB815WNy2Fd34N9idRUrHlbx8f2eejMVTqVb-a4qjug'

const projects = [
  {
    label: 'PROJECT 01',
    title: 'UAV SYSTEMS',
    desc: 'Extreme endurance hybrid propulsion architectures.',
    status: '[ACTIVE]'
  },
  {
    label: 'PROJECT 02',
    title: 'ROBOTICS',
    desc: 'Multi-terrain autonomous ground chassis.',
    status: '[ACTIVE]'
  },
  {
    label: 'PROJECT 03',
    title: 'AI / ML',
    desc: 'Real-time edge neural inference without cloud dependencies.',
    status: '[ACTIVE]'
  },
  {
    label: 'PROJECT 04',
    title: 'AUTONOMOUS SYSTEMS',
    desc: 'GPS-denied visual inertial odometry (VIO).',
    status: '[RESEARCH]'
  },
  {
    label: 'PROJECT 05',
    title: 'CUSTOM PLATFORMS',
    desc: 'Specialized industrial sensor pods and thermal arrays.',
    status: '[EXPLORATORY]'
  }
]

export default function RnD() {
  return (
    <section className="section-rnd" id="rnd">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">06 / R&D</span>
          <h2 className="section-h2">THE NEXT SYSTEM STARTS WITH A QUESTION.</h2>
          <p className="section-desc">
            We explore UAVs, robotics, artificial intelligence and emerging technologies to create systems capable of solving real-world problems.
          </p>
        </div>

        <div className="rnd-grid">
          {/* Left Research List */}
          <div className="rnd-list">
            {projects.map((p) => (
              <div key={p.label} className="rnd-item">
                <div>
                  <span className="rnd-proj-label">{p.label}</span>
                  <h4 className="rnd-proj-title">{p.title}</h4>
                  <p className="rnd-proj-desc">{p.desc}</p>
                </div>
                <span className="rnd-status">{p.status}</span>
              </div>
            ))}
          </div>

          {/* Right Lab Visual */}
          <div className="rnd-lab">
            <div className="rnd-lab-img">
              <img
                src={LAB_IMG}
                alt="Electronics testing lab bench, engineer calibrating circuit boards under microscope"
              />
              <div className="rnd-lab-border" />
            </div>

            {/* Diagnostic Readout */}
            <div className="rnd-readout">
              <div className="rnd-readout-header">
                <span className="rnd-readout-bench">● BENCH LOG 09.4</span>
                <span>TEST CHAMBER: 24.2°C / 48% RH</span>
              </div>
              <div className="rnd-readout-grid">
                <div>VOLTAGE: 48.2V</div>
                <div>RIPPLE: 12MV</div>
                <div>THERMAL: NOMINAL</div>
                <div>BUS: CAN-FD OK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
