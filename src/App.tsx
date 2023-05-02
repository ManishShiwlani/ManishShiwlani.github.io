import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <title>Manish Shiwlani - Resume</title>
        <header>
          <h1>Manish Shiwlani</h1>
          <ul>
            <li>Email: manishshiwlani@gmail.com</li>
            <li>Phone: 803-616-8198</li>
            <li>LinkedIn: manish-shiwlani11aa302a</li>
            <li>GitHub: ManishShiwlani</li>
          </ul>
        </header>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>University of Toledo, May 2020</li>
            <li>Bachelor of Science, Computer Science Engineering</li>
            <li>Medallion Graduate Distinction</li>
          </ul>
          <ul>
            <li>
              University of Michigan Ross School of Business, May 2022 to
              Current
            </li>
            <li>MBA, Expected Graduation: 2024</li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              Programming Languages: Java, Python, C++, Golang, JavaScript
            </li>
            <li>Frameworks: React, Django, ASP.NET, GRPC, RPA-UiPath</li>
            <li>Databases: SQL, MongoDB, Firebase</li>
            <li>
              Data Science & Machine Learning: Matlab, Jupyter, Data
              Visualization
            </li>
            <li>Cloud Computing: AWS, Azure, Google Cloud Platform</li>
            <li>
              Software Engineering: Version Control Systems, Agile Methodologies
            </li>
            <li>Web Development: GraphQL, Android Development</li>
            <li>
              Other Tools: Adobe Analytics, Adobe Creative Cloud, Looker,
              Optimizely, Tableau
            </li>
          </ul>
        </section>

        <section id="awards">
          <h2>Awards & Certifications</h2>
          <ul>
            <li>
              Presidential Award for 500+ hours of community service, Apr. 2012
            </li>
            <li>
              Goldman Sachs Lemonade Stand Pitch Competition Winning Group, Apr.
              2019
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
