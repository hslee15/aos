import React from 'react'
import './style/Contact.css'
const Contact = () => {
const contactList = [
    { type: "Email", value: "yourname@example.com" },
    { type: "Phone", value: "010-1234-5678" },
    { type: "GitHub", value: "github.com/yourname" }
];
    return (
        <section>
        <div className="t-wrap">
            <h2>Contact title</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
            </p>
            <ul className="contact-list">
            {contactList.map((contact, i)=>(
                <li key={i}>
                <span>{contact.type} </span> : 
                <span> {contact.value}</span>
                </li>
            ))}
            </ul>
        </div>
        </section>
    )
}

export default Contact