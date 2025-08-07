import React,{useEffect} from 'react'
import './style/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const Hero = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });

  })

  return (
    <section className='Hero'>
      <div className="t-wrap">
        <h2 data-aos='fade-up'>Hero title</h2>
        <p data-aos='fade-up' data-aos-delay="100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
        </p>
      </div>
    </section>
  )
}

export default Hero