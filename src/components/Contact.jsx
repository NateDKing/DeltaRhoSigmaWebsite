import React, { useState, useEffect } from 'react';
import { submitContact, ContactInfo } from '../services/contactCollecting';

export const Contact = () => {
  const photos = [
    '/images/contact-scroll-1.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
    newsletter: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsSliding(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = new ContactInfo(formData.firstName, formData.lastName, formData.email, formData.phone, formData.comment, formData.newsletter);
      submitContact(contact);

      formData.firstName = '';
      formData.lastName = '';
      formData.email = '';
      formData.phone = '';
      formData.comment = '';
      formData.newsletter = false;

      // const response = await fetch('/api/contact-us', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   alert('Thank you for contacting us!');
      //   setFormData({
      //     firstName: '',
      //     lastName: '',
      //     email: '',
      //     phone: '',
      //     comment: '',
      //     newsletter: false
      //   });
      // } else {
      //   alert('There was an error. Please try again.');
      // }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#363939', width: '100%', margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Photo Reel Section */}
      <section className="mb-12">
        <div className="max-h-96 flex items-center justify-center relative" style={{ backgroundColor: '#CFA746', overflow: 'hidden', width: '100%' }}>
          <div
            className={`slider ${isSliding ? 'sliding' : ''}`}
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`,
              width: '500%'
            }}
          >
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
                style={{ flex: '0 0 100%' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between" style={{ margin: '0 10vw' }}>
          {/* Contact Details */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#CFA746' }}>Contact Details</h2>
            <div className="text-white">
              <p className="mb-2"><strong>Email:</strong> contact-us@deltarhosigma.org</p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#CFA746' }}>Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/deltarhosigma/?hl=en" className="text-white hover:text-[#CFA746]">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#CFA746' }}>Get in Touch</h2>
            <form onSubmit={handleSubmit} className="bg-transparent border-4 border-[#CFA746] p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-[#CFA746] text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-[#CFA746] text-sm font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#CFA746] text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-[#CFA746] text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-[#CFA746] text-sm font-bold mb-2">Message</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="form-checkbox h-5 w-5 text-[#CFA746]"
                  />
                  <span className="ml-2 text-white">Sign up for our newsletter</span>
                </label>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#CFA746] hover:bg-[#B08E3B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};