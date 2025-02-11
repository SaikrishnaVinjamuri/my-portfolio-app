import React from 'react';
import './Skills.css';

const skills = [
    'C/C++', 'Java', 'Python', 'Javascript', 'HTML', 'CSS', 'Bootstrap', 
    'Tailwind', 'Material UI', 'React JS', 'Redux Toolkit', 'Node JS', 
    'Express JS', 'MongoDB', 'MySQL', 'REST API', 'Postman', 
    'Machine Learning', 'Artificial Intelligence', 'Generative AI', 
    'Data Mining and Data Warehouse', 'Data Structures and Theory of Algorithms', 
    'Database Management System', 'Operating System', 'Software Engineering'
  ];

const Skill = () => {
  return (
    <div id="skill" className='skillsContainer'>
      <h2 className="heading">Skills</h2>
      <div className='skillsFlex'>
        {skills.map((skill, index) => (
          <div key={index} className='skillItem'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;