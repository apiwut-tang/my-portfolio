import React, { useState } from "react";

export default function ContactMe() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    acceptedTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, acceptedTerms: !formData.acceptedTerms });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData)
    try {
      const apiKey = 'TVNad2pWNlhLSzR0NXB2VVJ2Qzc='

      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': `${apiKey}`
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setEmailSent(true);
        alert('Email send successfully');
      } else {
        console.error('Failed to send email');
        alert('Failed to send email ' + response.status + ' ' + response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email' + error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to get in touch with me if you have any questions or if you would like to collaborate on a project.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            onChange={handleChange}
            name="message"
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" onChange={handleCheckboxChange} />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
        <button
            type="submit"
            className={`btn btn-primary contact--form--btn ${loading ? 'loading' : ''}`}
            disabled={loading || emailSent}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
