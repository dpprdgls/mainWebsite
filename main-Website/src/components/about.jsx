import React from 'react';
import Me from '/assets/outsideOpt.webp';

function About() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 vh-100">
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
        <img src={Me} alt="Nature" className="img-fluid mb-4 mb-md-0 me-md-4 mt-4 mt-md-0" style={{ width: '20rem' }} />

        <div className="text-center text-md-start">
          <p className="text-warning">Let me tell you a little bit about</p>
          <h1 className="display-4 fw-bold text-secondary mb-3">myself</h1>
          <h2 className="h5 text-muted mb-3">and how I got here.</h2>
          
          <p className="fs-6 mb-4">
            My background is a bit different from the usual developer who majored in Computer Science in college. I
            studied Art and Digital Media at the University of California Santa Barbara. From there I worked as a
            professional photographer, and then my love of cars led me into a career in Automotive Manufacturing.
          </p>
          <p className="fs-6 mb-4">
            I started reading about Lean Manufacturing, Six Sigma, and the Toyota Production System. I learned to code in
            Python to analyze data and look for trends that could improve the process. That initial “Hello World” sparked
            more curiosity about IT and Web Development.
          </p>
          <p className="fs-6 mb-4">
            This path led me to UC Berkeley’s EdX Full Stack Developer Bootcamp. In this bootcamp, I learned about JavaScript,
            Express.js, Node.js, MongoDB, SQL, React.js, jQuery, HTML, and CSS. They say the more you know, the more you
            realize how much you don’t know.
          </p>
          <p className="fs-6 mb-4">
            I didn’t expect to learn everything in such a short time, but I have made a small dent in the vast tech-stack. I
            fully intend to continue developing my skills while also working to get AWS certified. This experience has given
            me a deep respect for the digital realm and I hope to contribute in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;