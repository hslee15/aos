import React ,{useEffect}from 'react'
import './style/Skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기

const Skill = () => {
  const skills = ['html', 'css', 'javascript', 'node express', 'aws', 'sql', 'react']


  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });

  })
  return (
    <section>
      <div className="t-wrap">
        <h2>Skill title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
        </p>
        <ul className="skills">
          {skills.map((skill, i) => (
            <li key={i} data-aos="fade-up"   data-aos-delay={i*100}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skill