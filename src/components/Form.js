import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_10i6wsq', 'template_p1e5rr6', form.current, 'Rlsdi5Gbkg7jEoXEuoYcP')
      .then((result) => {
        console.log(result.text);
        alert('Email Sent!');
        form.current.reset(); // Reset the form
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="form">
      {/* Move the onSubmit handler to the <form> element */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="your_name" />
        <label>Email</label>
        <input type="email" name="your_email" />
        <label>Subject</label>
        <input type="text" name="your_subject" />
        <label>Your message</label>
        <textarea rows="6" placeholder="Type your message here" name="your_message" />
        {/* Adjust the type attribute to submit */}
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
