import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <table>
        <thead className="educationHead">
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Graduation Date</th>
            <th>Awards/Honors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>University of Toledo</td>
            <td>Bachelor of Science, Computer Science Engineering</td>
            <td>May 2020</td>
            <td>Medallion Graduate Distinction</td>
          </tr>
          <tr>
            <td>University of Michigan Ross School of Business</td>
            <td>MBA</td>
            <td>Expected Graduation: 2024</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2>SKILLS</h2>
      <table>
        <thead className="skillsHead">
          <tr>
            <th>Programming Languages</th>
            <th>Frameworks</th>
            <th>Databases</th>
            <th>Data Science &amp; Machine Learning</th>
            <th>Cloud Computing</th>
            <th>Software Engineering</th>
            <th>Web Development</th>
            <th>Other Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java, Python, C++, Golang, JavaScript</td>
            <td>React, Django, ASP.NET, GRPC, RPA-UiPath</td>
            <td>SQL, MongoDB, Firebase</td>
            <td>Matlab, Jupyter, Data Visualization</td>
            <td>AWS, Azure, Google Cloud Platform</td>
            <td>Version Control Systems, Agile Methodologies</td>
            <td>GraphQL, Android Development</td>
            <td>Adobe Analytics, Adobe Creative Cloud, Looker, Optimizely, Tableau</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AwardsAndCertifications = () => {
  return (
    <div className="awards">
      <h2 className="headingAwards">AWARDS &amp; CERTIFICATIONS</h2>
      <ul>
        <li>Presidential Award for 500+ hours of community service, Apr. 2012</li>
        <li>Goldman Sachs Lemonade Stand Pitch Competition Winning Group, Apr. 2019</li>
        <li>Revolution UC Data Visualization Winner, Mar. 2019</li>
        <li>Hack CWRU6 Most Efficient Hack &amp; Hack that Promotes Diversity, Feb. 2019</li>
        <li>University of Toledo Brandberry Scholarship for Leadership, Jan. 2017</li>
        <li>IBM Data Science Specialization, Feb. 2020</li>
        <li>WorkBoard OKR Coach Certified, Oct. 2021</li>
        <li>Google Cloud Certified Cloud Digital Leader, Oct. 2022</li>
      </ul>
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
       <Education/>
       <Skills/>
       <AwardsAndCertifications/>
      </div>
    </div>
  );
}

export default App;
