import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
function Home() {
  const navigate=useNavigate();
  
  return (
    <div >
      {/* Hero Section */}
      <div className='homePageImage'>
       
        <div className='homeContent'>
          <h1>Looking for the Perfect Partner?</h1>
          <p>Your journey to find love starts here. Join the thousands of successful matches!</p>
          <div className='ctaButtons'>
            <button className='ctaButton'><Link to={'/register'}>Sign Up Now</Link> </button>
            <button className='ctaButton'>Learn More</button>
          </div>
        </div>
        <div className='carousel' >
          <Carousel></Carousel>
        </div>
        <div className='trusted'>
          <div className='trustedmain'>
            <div className='category'>
              <div>
                <img src='./Asserts/verify.svg'></img>
              </div>
              <div>
                <div className='text'>
                   <strong> 100%</strong>
                </div>
                <div>
                Mobile-verified profiles
                </div>
              </div>
              
            </div>
            <div className='category'>
            <div>
            <img src='./Asserts/count.svg'></img>
            </div>
              <div>
                <div className='text'>
                 <strong> 4 Crores+</strong>
                </div>
                <div>
                Customers served
                </div>
              </div>
                
            </div>
            <div className='category'>
            <div>
            <img src='./Asserts/life.svg'></img>
            </div>
              <div>
                <div className='text'>
               <strong> 23 Years</strong>
                </div>
                <div>
                of successful matchmaking
                </div>
              </div> 
              
            </div>
        </div>
        </div>
      </div>

      {/* About Section */}
      <div className='aboutSection'>
        <h2>About Us</h2>
        <p>
          We are dedicated to helping you find your life partner with personalized matchmaking. Our platform offers a
          safe and secure environment to meet like-minded individuals.
        </p>
      </div>

      {/* Services Section */}
      <div className='servicesSection'>
        <h2>Our Services</h2>
        <div className='servicesGrid'>
          <div className='serviceCard'>
            <h3>Personalized Matchmaking</h3>
            <p>We connect you with compatible individuals based on your preferences and interests.</p>
          </div>
          <div className='serviceCard'>
            <h3>Secure & Confidential</h3>
            <p>Your privacy is our priority. All your details are securely stored and confidential.</p>
          </div>
          <div className='serviceCard'>
            <h3>24/7 Support</h3>
            <p>Our support team is always available to assist you at every step of your journey.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='testimonialsSection'>
        <h2>What Our Users Say</h2>
        <div className='testimonialCard'>
          <p>"Thanks to this platform, I found my soulmate! The matchmaking process was smooth and easy."</p>
          <span>- Priya & Raj</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
