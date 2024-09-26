import React, { useState, useEffect } from 'react';
import { submitContact, Contact} from '../services/contactCollecting';

export const Home = () => {
  const photos = [
    '/images/home-scroll-1.jpg',
    '/images/home-scroll-2.jpg',
    '/images/home-scroll-3.jpg',
    '/images/home-scroll-4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
    newsletter: false // Add this line
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value // Modify this line
    }));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsSliding(false);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = new Contact(formData.firstName, formData.lastName, formData.email, formData.phone, formData.comment, formData.newsletter);
      submitContact(contact);

      formData.firstName = '';
      formData.lastName = '';
      formData.email = '';
      formData.phone = '';
      formData.comment = '';
      formData.newsletter = false;
      // const response = await fetch('/api/newsletter-signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   alert('Thank you for signing up!');
      //   setFormData({
      //     firstName: '',
      //     lastName: '',
      //     email: '',
      //     phone: '',
      //     comment: ''
      //   });
      // } else {
      //   alert('There was an error. Please try again.');
      // }
      console.log("Submitted")
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#363939', width: '100%', margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="h-96 flex items-center justify-center relative" style={{ overflow: 'hidden', width: '100%' }}>
          <div className="absolute z-10 bg-white p-4 rounded shadow-lg" style={{ top: '30%', left: '30px', width: '300px', opacity: 0.8 }}>
            <h3 className="text-xl font-bold">Question</h3>
            <p>How can DRho help you?</p>
          </div>

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

      <div style={{ margin: '0 10vw', paddingBottom: '2rem' }}>
        {/* Our Values Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6 justify-start">
            <img
              src="/DRho Icon.png"
              alt="DRho Icon"
              className="h-16 w-16 mr-4"
            />
            <h2 className="text-3xl font-bold text-white" style={{ textAlign: 'center', flexGrow: 1, color: '#CFA746' }}>OUR VALUES</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-transparent text-white border-4 border-[#CFA746] p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3 text-center" style={{ borderRadius: '15px' }}>
              <h3 className="text-2xl font-bold mb-2">HONORABLE INTEGRITY</h3>
              <p>WE COMMIT TO HONESTY AND STRONG MORAL VALUES IN BOTH RELATIONSHIPS AND INNOVATION.</p>
            </div>
            <div className="bg-transparent text-white border-4 border-[#CFA746] p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3 text-center" style={{ borderRadius: '15px' }}>
              <h3 className="text-2xl font-bold mb-2">ON-GOING INNOVATION</h3>
              <p>WE BELIEVE IN THE CONTINUAL PROGRESSION OF IDEAS, BUSINESS CONCEPTS, AND PRODUCTS.</p>
            </div>
            <div className="bg-transparent text-white border-4 border-[#CFA746] p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3 text-center" style={{ borderRadius: '15px' }}>
              <h3 className="text-2xl font-bold mb-2">RELENTLESS PASSION</h3>
              <p>WE REALIZE WE ARE MEANT TO CREATE AND WILL PURSUE OUR PERSONAL STRENGTHS TO ACHIEVE COMMON GOALS.</p>
            </div>
          </div>
        </section>



        {/* What is D-Rho Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-4 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#CFA746' }}>WHAT IS D-RHO?</h2>
              <p style={{ color: 'white' }}>Delta Rho Sigma (DRho) is a fraternity designed for students who seek to merge their entrepreneurial mindset with advanced engineering and business skills. It fosters a community that values integrity, innovation, and passion, aiming to equip its members to make a meaningful impact in the world.</p>
            </div>
            <div className="md:w-1/3 h-64 flex items-center justify-center overflow-hidden">
              <img src="/images/home-what.jpg" alt="What is D-Rho?" className="h-full w-full object-cover" style={{ borderRadius: '15px' }} />
            </div>
          </div>
        </section>


        {/* Join D-Rho Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-2/3 mb-4 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#CFA746' }}>JOIN D-RHO</h2>
              <p style={{ color: 'white' }}>Join Delta Rho Sigma and become part of a fraternity that empowers you to combine your entrepreneurial spirit with top-tier engineering and business expertise. Connect with like-minded peers, develop your talents, and lead the way in creating innovative solutions for the future.</p>
            </div>
            <div className="md:w-1/3 h-64 flex items-center justify-center overflow-hidden">
              <img src="/images/home-join.jpg" alt="Join D-Rho" className="h-full w-full object-cover" style={{ borderRadius: '15px' }} />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6 justify-start w-full">
              <img
                src="/DRho Icon.png"
                alt="DRho Icon"
                className="h-16 w-16 mr-4"
              />
              <h2 className="text-3xl font-bold" style={{ color: '#CFA746', textAlign: 'center', flexGrow: 1 }}>D-RHO NEWSLETTER</h2>
            </div>
            <p className="text-white text-center mb-8">Get in touch with D-Rho and stay updated with our latest news and insights.</p>
            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-transparent border-4 border-[#CFA746] p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                <div className="w-full md:w-1/2 px-3">
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
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                <div className="w-full md:w-1/2 px-3">
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
              </div>
              <div className="mb-6">
                <label htmlFor="comment" className="block text-[#CFA746] text-sm font-bold mb-2">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  rows="3"
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
