import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="educationContainer">
      <h2 className="heading">Education</h2>
      <div className="aboutInfor">
        <h2>Masters in Computer Science</h2>
        <p>California State University, San Bernardino</p>
        <p>Spring 2024 - Present | CGPA: 3.78/4.0</p>
      </div>
      <div className="aboutInfor">
        <h2>Bachelor of Technology in Computer Science</h2>
        <p>Vasireddy Venkatadri Institute of Technology, India</p>
        <p>August 2019 - May 2023 | CGPA: 8.12/10</p>
      </div>
    </section>
  );
};

export default Education;