import React from 'react';
import Hills from '/assets/hills.jpg';

function Skills() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center py-5 min-vh-100'>
      <div className='row d-flex flex-column flex-md-row align-items-center'>
        <div className='col-md-4 text-center mb-4'>
          <img src={Hills} alt='Me in nature' className='img-fluid rounded' style={{ width: '20rem', height: 'auto' }} />
        </div>

        <div className='col-md-8'>
          <p className='text-warning'>These are some of my</p>
          <h1 className='display-4 fw-bold text-secondary'>Skills and Proficiencies</h1>
          <h2 className='h5 text-muted mb-3'>for front and back-end development.</h2>

          <div className='row'>
            <div className='col-md-6'>
              <h3 className='h6 text-dark'>Front-End</h3>
              <ul className='list-unstyled'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className='col-md-6'>
              <h3 className='h6 text-dark'>Back-End</h3>
              <ul className='list-unstyled'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>APIs</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>

          {/* Resume button */}
          <a
            href='../assets/Resume/ResumeOfficial.pdf'
            download='ResumeOfficial.pdf'
            className='btn btn-outline-warning mt-4 d-inline-flex align-items-center'
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;