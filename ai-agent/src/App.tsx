import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <section className="testimonial-section">
  <div className="testimonial-container">
    <figure className="testimonial-figure">
      <svg
        className="testimonial-quote-icon"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        ></path>
      </svg>
      <blockquote>
        <p className="testimonial-quote-text">
          "Landwind is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <figcaption className="testimonial-author-info">
        <img
          className="author-profile-picture"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile picture"
        />
        <div className="author-details">
          <div className="author-name">John Doe</div>
          <div className="author-title">CEO at Google</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
  );
};

export default App;
