import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_agfhct8', 'template_7ijtizr', form.current, '0amhshTIZAjExAGOC')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Message Sending Failed!");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
            <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
          <p className="mt-6 text-center text-gray-600">Email: rahimkhadimhussain219@gmail.com</p>
          <p className="text-center text-gray-600">Phone: (416) 835-9806</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
