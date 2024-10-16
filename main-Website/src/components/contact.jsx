import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // If validation passes, reset error state
    setError('');

    // Perform the actual submission (POST request)
    try {
      const response = await fetch('https://getform.io/f/983727c2-319a-4857-b4a5-664bc04c4cec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log('Form submitted successfully');
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Handle error response from the server
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column mb-4 mx-auto">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <form onSubmit={handleSubmit} className="d-flex flex-column w-100 col-md-7">
            <h1 className="display-4 mt-4 mb-3">Contact</h1>
  
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control mb-3 p-2 bg-transparent border-2 rounded"
              value={formData.name}
              onChange={handleChange}
            />
  
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-control mb-3 p-2 bg-transparent border-2 rounded"
              value={formData.email}
              onChange={handleChange}
            />
  
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
              className="form-control mb-4 p-2 bg-transparent border-2 rounded"
              value={formData.message}
              onChange={handleChange}
            />
  
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">Form submitted successfully!</p>}
  
            <button
              type="submit"
              className="btn btn-primary text-white px-4 py-2 w-auto"
            >
              Let's get in touch!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;