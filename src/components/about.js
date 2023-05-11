import React from 'react';
import ReactMarkdown from 'react-markdown';
import './about.css';

function About() {
  return (
    <div className="About">
      <ReactMarkdown>
        # Introduction 🤝
      </ReactMarkdown>
      <ReactMarkdown>
        Hello, my name is Benjamin Isaiah Hallihan, and I'm a 21-year-old Computer Science graduate from Mount Allison University. From a young age, I developed a passion for coding, starting with Python game development and creating Java plugins for Minecraft servers. Throughout high school, my enthusiasm for programming grew, leading me to pursue a major in Computer Science at university.

        During my academic journey, I discovered a particular interest in low-level programming while studying subjects like Systems Programming and Operating Systems. This fascination prompted me to experiment with Linux installations on several machines and delve into the source code of popular window managers like DWM and BSPWM. Determined to create something unique, I turned to the documentation for Xorg and, on January 5th, 2023, I made the initial commits to my own window manager, Wormhole.
      </ReactMarkdown>
      <ReactMarkdown>
        # Additional Projects 🔨
      </ReactMarkdown>
      <ReactMarkdown>
        Throughout my degree, I had the opportunity to collaborate with agile-style groups on two notable projects. The first project involved creating a multiplayer full-stack web-based implementation of the card game "Space Cats Fight Fascism." Working with two team members, we utilized Java, Spring Boot, and Gradle to develop the backend server, while React was employed for the frontend. In the second project, a team of five members came together to build a multiplayer full-stack implementation of the board game "Qwirkle." This time, we leveraged Python across the entire stack and employed PyGame to render the frontend as a desktop application.
      </ReactMarkdown>
      <ReactMarkdown>
      In the past, before I had a thorough understanding of Git, I undertook a personal challenge to prove my capability in creating a full-stack application from scratch. I decided to develop a prototype food delivery app with a cross-platform frontend built in React Native. For the backend, I used Firebase. This project included features such as geoquerying functionality, user accounts, and a menu UI. Although the source code for this is no longer available, I was able to build on the skills I developed in working on this by contributing to the project "Space Cats Fight Fascism," and eventually through the creation of this website. These skills include Javascript, React/React Native, and CSS3.
      </ReactMarkdown>
      <ReactMarkdown>
        *To learn more about these projects, please visit the "Projects" page on this site.*
      </ReactMarkdown>
      <ReactMarkdown>
        # Work Experience 💼
      </ReactMarkdown>
      <ReactMarkdown>
        During the summer of 2021, I worked as an order picker for Atlantic Pet Distributing, which subsequently led to my employment as an IT Business Analyst by their parent company. In this role, I routinely dealt with large data sets, wrote SQL queries, and developed Python scripts. My responsibilities primarily revolved around automating data compilation from various database tables, conducting web QA testing, and working with proprietary software. I also worked directly with employees across various roles to help meet their technical needs.
      </ReactMarkdown>
      <ReactMarkdown>
        # Contact 📧
      </ReactMarkdown>
      <ReactMarkdown>
        If you would like to reach out to me, the best way to contact me is via email at ben.hallihan1@gmail.com.
      </ReactMarkdown>
    </div>
  );
}

export default About;
