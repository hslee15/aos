import './style/Contact.css'
import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기
const Contact = () => {
  const contactList = [
  { type: "Email", value: "yourname@example.com" },
  { type: "Phone", value: "010-1234-5678" },
  { type: "GitHub", value: "github.com/yourname" }
];


  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });
  })

  return (
    <section className='Contact'>
      <div className="t-wrap">
        <h2 data-aos="fade-up">Contact title</h2>
        <p data-aos="fade-up"   data-aos-delay="100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
        </p>
      </div>
        <ul className="contact-list">
          {contactList.map((contact,i)=>(
            <li key={i} data-aos="fade-up"   data-aos-delay={i*100}>
              <span>{contact.type} </span> 
              <span> {contact.value}</span>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Contact