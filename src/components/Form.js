import './Form.css';
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {

      const form = useRef();

      //emailjs function for routing email
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g0ck9mx', 'template_9oz1vrg', form.current, 'nB7KdvezFJDMT4cZG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset(); //resets form after submit
      };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name='user_name' required></input>
            <label>Email</label>
            <input type='email' name='user-email' required></input>
            <label>Subject</label>
            <input type='text' name='subject' required></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Type your message here' name='message'/>
            <button className='btn' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default Form;