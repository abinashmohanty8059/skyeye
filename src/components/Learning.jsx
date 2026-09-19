const WORKSHOP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1w0V_a080iZq82N0ywOXcg8n7GxuLwI010D46d8W9PccPWx7TQc0101SEPXGyq1QmgDS_6d6-O30Abb4LhWd42JzJ0Ww_nagXiYcFqWrzKAuCjKw8OEc5qSgCZXpPe8RBakgNVGxKfSXetYtS0YVKFWuUAmju1tCnZmO3_DgpdXKC01CWugcif646vhqqLaMEevu9u8I-1zmFbkkxEiDzjN4Yxe3zxTRQOfWQFAHm5LTNS_LutwUT'

const courses = [
  'Drone Technology & Piloting',
  'Industrial Robotics & Firmware',
  'Edge AI & Computer Vision'
]

export default function Learning() {
  return (
    <section className="section-learning">
      <div className="container py-2xl">
        <div className="learning-grid">
          {/* Left */}
          <div className="learning-left">
            <span className="section-label">10 / LEARNING</span>
            <h2 className="section-h2">DON'T JUST LEARN TECHNOLOGY. BUILD IT.</h2>
            <p className="section-desc" style={{ marginTop: 0 }}>
              Hands-on exposure to drones, robotics, AI and emerging technologies. We equip engineers, students, and defense professionals with deep real-world assembly and flight certification experience.
            </p>

            <div className="learning-courses">
              {courses.map((course) => (
                <a key={course} className="learning-course" href="#">
                  <span className="learning-course-title">{course.toUpperCase()}</span>
                  <span className="learning-course-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="learning-right">
            <div className="learning-img-frame">
              <div className="learning-img">
                <img
                  src={WORKSHOP_IMG}
                  alt="Hands-on engineering workshop with university engineers assembling drone flight controllers"
                />
              </div>
              <div className="learning-img-bar">
                <span>WORKSHOP ACADEMY · BHUBANESWAR CAMPUS</span>
                <span className="learning-enrolling">[ ENROLLING ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
