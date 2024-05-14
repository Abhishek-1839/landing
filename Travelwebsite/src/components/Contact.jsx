import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="trip">Trip Days</label>
        <input type="text" id="trip" />
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;