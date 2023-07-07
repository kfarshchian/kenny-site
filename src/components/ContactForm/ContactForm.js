import React from "react";
import "./ContactForm.scss";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from 'react'

function ContactForm() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_smfxvqp",
        "template_rjlkdso",
        form.current,
        "auKEdycTRYhONf_t-"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
          <h3 id="contact-title">Request A Free Consultation Today</h3>
          {/* <form> */}
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input
                placeholder="Phone Number"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <input placeholder="Email" type="email" name="email" required />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            {/* <li> */}
            {/* <input type="submit" className="flat-button" value="Send Message" to="kfarshchian@gmail.com"/> */}
            {/* </li> */}
          </ul>
          <Button type="submit" value="SEND" className="flat-button">
            Send Message
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
