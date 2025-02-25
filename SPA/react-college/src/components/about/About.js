import React from 'react'
import './About.css'

function About() {
  return (
    <div>
      <div className="about-us">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Our campus is where excellence in education meets a vibrant campus life. We are
            committed to nurturing talent, inspiring creativity, and fostering innovation in our
            students. Our college is equipped with state-of-the-art facilities and experienced
            faculty who are dedicated to providing a comprehensive learning experience.
          </p>
          
          <div>
            <img className="about-image" 
                 src="https://tse1.mm.bing.net/th?id=OIP.xAOexj2KtEJ8ygJvxRDu_AHaE8&pid=Api&P=0&h=180" 
                 alt="College Image" />
          </div>
          
          <h2>Our Vision</h2>
          <p>
            To be a leader in providing high-quality education and creating a transformative
            learning environment for students from diverse backgrounds.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            To empower students with the knowledge, skills, and values necessary to excel in
            their chosen fields and make a positive impact in society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
