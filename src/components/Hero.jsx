import React,{useEffect} from 'react'
import './style/Hero.css'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
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
        <div className='image-container'>
          <img className='img1' src={image1} alt="hero background" data-aos='fade-up' data-aos-delay="250"/>
          <img className='img2' src={image2} alt="hero background" data-aos='fade-up' data-aos-delay="350"/>
          <img className='img3' src={image3} alt="hero background" data-aos='fade-up' data-aos-delay="550"/>
        </div>
      </div>
    </section>
  )
}

export default Hero