import React from 'react';
import './ContactForm.scss'
import { Button } from '@mui/material';

function ContactForm() {
  

  return (
    <>
<div className='contact-form'>
                    {/* <form ref={form} onSubmit={sendEmail}> */}
                    <h3 id='contact-title'>Request A Free Consultation Today</h3>
                    <form>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Phone Number"
                    type="text"
                    name="subject"
                    required
                  />
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
                        {/* <Button type="submit" value="Send Message" to="kfarshchian@gmail.com" className="flat-button">Send Message</Button> */}
                    </ul>
                    <Button type="submit" value="Send Message" to="kfarshchian@gmail.com" className="flat-button">Send Message</Button>
                </form>
                </div>
    </>
  );
}

export default ContactForm;
