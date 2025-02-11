// import React from 'react';
// import './Projects.css';

// const Projects = () => {
//   return (
//     <section id="projects" className="projectsContainer">
//       <h2 className="heading">Projects</h2>
//       <div className="projectInfo">
//         <h2>Research Paper Chatbot</h2>
//         <h3>Master's Program Team Project | August 2024 - December 2024</h3>
//         <ul>
//           <li>Collaborated with a team of 10 to design and develop an AI chatbot for analyzing research papers sourced from ACM journals.</li>
//           <li>Built using Retrieval-Augmented Generation (RAG), LLMs, LangChain, Mistral, Milvus, and Hugging Face.</li>
//           <li>Achieved 95% accuracy in responses and enhanced data retrieval speed by 40%.</li>
//         </ul>
//       </div>
//       <div className="projectInfo">
//         <h2>Early Prediction of Diabetes Using the Firefly Optimization Algorithm</h2>
//         <h3>May 2023 - July 2023</h3>
//         <ul>
//           <li>Developed an innovative Firefly Optimization Algorithm to predict diabetes using the Pima Indian Diabetes dataset.</li>
//           <li>Achieved 99.7% accuracy and published in the IJFANS International Journal of Food and Nutritional Sciences.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from 'react';
// import './Projects.css'; // Create a CSS file for styling

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Project 1',
//       description: 'A brief description of Project 1.',
//       githubLink: 'https://github.com/yourusername/project1',
//       liveLink: 'https://sec.cse.csusb.edu/team4/',
//     },
//     {
//       title: 'Project 2',
//       description: 'A brief description of Project 2.',
//       githubLink: 'https://github.com/yourusername/project2',
//       liveLink: 'https://project2-live-demo.com',
//     },
//     {
//       title: 'Project 3',
//       description: 'A brief description of Project 3.',
//       githubLink: 'https://github.com/yourusername/project3',
//       liveLink: 'https://project3-live-demo.com',
//     },
//   ];

//   return (
//     <div id="projects" className="projectsContainer">
//       <h2>Projects</h2>
//       <div className="projectsGrid">
//         {projects.map((project, index) => (
//           <div key={index} className="projectCard">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="projectLinks">
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="projectLink"
//               >
//                 GitHub Repo
//               </a>
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="projectLink"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React from 'react';
// import './Projects.css'; // Ensure you have this CSS file for styling

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Research Paper Chatbot',
//       description:
//         'Collaborated with a team of 10 to design and develop an AI chatbot for analyzing research papers sourced from ACM journals. Built using Retrieval-Augmented Generation (RAG), LLMs, LangChain, Mistral, Milvus, and Hugging Face, ensuring advanced NLP capabilities. Integrated performance metrics like confusion matrix, specificity, and sensitivity, achieving 95% accuracy in responses. Enhanced data retrieval speed by 40% and supported real-time queries for 100+ concurrent users.',
//       githubLink: '#', // Add your GitHub link here
//       liveLink: '#', // Add your live demo link here (if available)
//     },
//     {
//       title: 'Early Prediction of Diabetes Using the Firefly Optimization Algorithm',
//       description:
//         'Developed an innovative Firefly Optimization Algorithm to predict diabetes using the Pima Indian Diabetes dataset (768 individuals, 268 diabetic cases). The Firefly-optimized ANN outperformed both traditional ANN and existing Firefly-optimized ANN models in all metrics and achieved 99.7% accuracy. Published in the IJFANS International Journal of Food and Nutritional Sciences, highlighting the potential of nature-inspired algorithms for early diagnosis and management of diabetes.',
//       githubLink: '#', // Add your GitHub link here
//       liveLink: '#', // Add your live demo link here (if available)
//     },
//     {
//       title: 'Mini Hotel Booking System',
//       description:
//         'Collaborated with a team of 5 to design and develop a mini hotel booking system using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed and optimized the room reservation module, reducing query response time by 30% through efficient database indexing. Implemented user authentication and payment integration, achieving 100% functionality testing success. Conducted 10+ code reviews, ensuring 95% code quality compliance with industry standards. Deployed the application and resolved 15+ reported bugs, improving user experience and application reliability by 20%.',
//       githubLink: '#', // Add your GitHub link here
//       liveLink: '#', // Add your live demo link here (if available)
//     },
//   ];

//   return (
//     <div id="projects" className="projectsContainer">
//       <h2 className="heading">Projects</h2>
//       <div className="projectsGrid">
//         {projects.map((project, index) => (
//           <div key={index} className="projectCard">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="projectLinks">
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="projectLink"
//               >
//                 GitHub Repo
//               </a>
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="projectLink"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState } from "react";
// import "./Projects.css";

// const projects = [
//   {
//     title: "Research Paper Chatbot",
//     description:
//       "A chatbot designed for answering research paper queries using RAG architecture...",
//     fullDescription:
//       "Collaborated with a team of 10 to design and develop an AI chatbot for analyzing research papers sourced from ACM journals. Built using Retrieval-Augmented Generation (RAG), LLMs, LangChain, Mistral, Milvus, and Hugging Face, ensuring advanced NLP capabilities. Integrated performance metrics like confusion matrix, specificity, and sensitivity, achieving 95% accuracy in responses. Enhanced data retrieval speed by 40% and supported real-time queries for 100+ concurrent users.",
//     link: "#",
//   },
//   {
//     title: 'Early Prediction of Diabetes Using the Firefly Optimization Algorithm',
//     description:
//         'Developed an innovative Firefly Optimization Algorithm to predict diabetes using the Pima Indian Diabetes.',
//     fullDescription:  
//         'Developed an innovative Firefly Optimization Algorithm to predict diabetes using the Pima Indian Diabetes dataset (768 individuals, 268 diabetic cases). The Firefly-optimized ANN outperformed both traditional ANN and existing Firefly-optimized ANN models in all metrics and achieved 99.7% accuracy. Published in the IJFANS International Journal of Food and Nutritional Sciences, highlighting the potential of nature-inspired algorithms for early diagnosis and management of diabetes.',
//     githubLink: '#', // Add your GitHub link here
//     liveLink: '#', // Add your live demo link here (if available)
//     },
//   {
//     title: "Hotel Booking System",
//     description:
//       "A MERN-stack-based hotel booking system built as part of an internship...",
//     fullDescription:
//       "A MERN-stack-based hotel booking system built as part of an internship at Virtusa, including room availability, booking management, and payment integration.",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div id="projects" className="projectsContainer">
//       <h2>Projects</h2>
//       <div className="projectsGrid">
//         {projects.map((project, index) => (
//           <div key={index} className="projectCard">
//             <h3>{project.title}</h3>
//             <p>
//               {expandedIndex === index
//                 ? project.fullDescription
//                 : project.description}
//             </p>
//             <div className="projectLinks">
//               <button
//                 className="projectLink"
//                 onClick={() => toggleReadMore(index)}
//               >
//                 {expandedIndex === index ? "Read Less" : "Read More"}
//               </button>
//               <a href={project.link} className="projectLink" target="_blank" rel="noopener noreferrer">
//                 Visit Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from "react";
// import { Grid, Container } from "@mui/material";
// import ProjectCard from "./ProjectCard";

// const projects = [
//   {
//     title: "Research Paper Chatbot",
//     description: {
//       short: "A chatbot designed for research paper queries...",
//       full: "A chatbot using RAG architecture to retrieve research papers, generate citations, and provide accurate responses.",
//     },
//     image: "/images/research_chatbot.jpeg",
//     link: "#",
//   },
//   {
//     title: "Hotel Booking System",
//     description: {
//       short: "A MERN-stack-based hotel booking system...",
//       full: "A hotel booking system with room availability, booking management, and payment integration built during my Virtusa internship.",
//     },
//     image: "/images/hotel_booking.jpeg",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Grid container spacing={3} justifyContent="center">
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <ProjectCard {...project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Projects;
import React from "react";
import "./Projects.css";

const projects = [
  { title: "Research Paper Chatbot", github: "https://github.com/DrAlzahraniProjects/csusb_fall2024_cse6550_team4", demo: "https://sec.cse.csusb.edu/team4/" },
  { title: "portfolio", github:" ", demo:" "},
  { title: "Diabetic prediction using firefly algorithm", github: "https://github.com/SaikrishnaVinjamuri/DiabeticPrediction",publication:"https://ijfans.org/uploads/paper/6319b88b29f76e418319ba842dd43422.pdf"},
  { title: "Task Manager", github: "https://github.com/SaikrishnaVinjamuri/Task-Manager"},
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="projectTitle">{project.title}</div>
            <div className="projectLinks">
            {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <button className="btns">Demo</button>
                </a>
              )}
              {project.publication && (
                <a href={project.publication} target="_blank" rel="noopener noreferrer">
                <button className="btns">view publication</button>
              </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="btns">GitHub</button>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
