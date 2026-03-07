import './Form.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_g0ck9mx',
        'template_9oz1vrg',
        form.current,
        'nB7KdvezFJDMT4cZG'
      )
      .then(
        () => {
          setStatus('success');
          e.target.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section className='contact-section'>
      <div className='contact-shell'>
        <div className='contact-grid'>
          <div className='contact-copy'>
            <span className='contact-copy__eyebrow'>GET IN TOUCH</span>
            <h2 className='contact-copy__title'>Let’s talk about your project.</h2>

            <p>
              I’m available for remote contract, freelance, and gameplay systems work. Whether you
              need help with multiplayer features, gameplay architecture, AI behaviors, or systems
              implementation, feel free to reach out.
            </p>

            <p>
              The best way to contact me is through the form or directly by email. I’m always happy
              to discuss project scope, collaboration details, or potential opportunities.
            </p>

            <div className='contact-details'>
              <div className='contact-details__item'>
                <span className='contact-details__label'>Email</span>
                <a href='mailto:cussprogramming@gmail.com'>cussprogramming@gmail.com</a>
              </div>

              <div className='contact-details__item'>
                <span className='contact-details__label'>Focus</span>
                <p>Gameplay Systems, Multiplayer, AI, Unreal Engine, Unity</p>
              </div>

              <div className='contact-details__item'>
                <span className='contact-details__label'>Location</span>
                <p>Atlantic Canada · Remote</p>
              </div>
            </div>
          </div>

          <div className='contact-form-card'>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
              <label htmlFor='user_name'>Your Name</label>
              <input id='user_name' type='text' name='user_name' required />

              <label htmlFor='user_email'>Email</label>
              <input id='user_email' type='email' name='user_email' required />

              <label htmlFor='subject'>Subject</label>
              <input id='subject' type='text' name='subject' required />

              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                rows='7'
                placeholder='Tell me a bit about your project, role, or what kind of help you need.'
                name='message'
                required
              />

              <button className='btn' type='submit' disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className='form-status form-status--success'>
                  Thanks — your message has been sent.
                </p>
              )}

              {status === 'error' && (
                <p className='form-status form-status--error'>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;