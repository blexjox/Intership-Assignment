import React from "react";

function About() {
  return (
    <div style={{ padding: "25px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Heading */}
      <h1>About Me</h1>
      <p>
        Hello! I'm <strong>Prabhanjan</strong>, a dedicated Frontend Developer with 2.5 years of
        hands-on experience building modern, interactive, and scalable web
        applications. I specialize in <strong>React, JavaScript, Tailwind, Material UI, and
        Next.js</strong>. I enjoy turning ideas into beautiful and functional UI.
      </p>

      {/* Profile Image */}
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
        alt="Developer Profile"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      {/* Section 1 */}
      <h2>Who Am I?</h2>
      <p>
        I’m a tech enthusiast with a passion for frontend engineering. I love
        crafting seamless user experiences, optimizing performance, and writing
        clean, maintainable code.  
        <br />
        I also enjoy reading books, improving my workstation setup, and creating
        YouTube content on tech & productivity.
      </p>

      {/* Skills List */}
      <h2>My Core Skills</h2>
      <ul>
        <li>Frontend development using React, Next.js, and JavaScript</li>
        <li>UI engineering with Tailwind and Material UI</li>
        <li>Integrating third-party APIs and building dashboards</li>
        <li>Creating responsive and accessible web designs</li>
        <li>Version control with Git & GitHub</li>
      </ul>

      {/* Timeline */}
      <h2>My Journey</h2>
      <ol>
        <li>
          <strong>2021 – Started Learning Web Development</strong>  
          Discovered my passion for building things with code.
        </li>

        <li>
          <strong>2022 – First Frontend Job</strong>  
          Built multiple projects and grew as a React developer.
        </li>

        <li>
          <strong>2023 – Worked on Real-Time Dashboards</strong>  
          Improved expertise in API integration, UI frameworks, and performance.
        </li>

        <li>
          <strong>2024 – YouTube + Personal Projects</strong>  
          Shared knowledge and created useful developer tools & dashboards.
        </li>

        <li>
          <strong>2025 – Building Bigger Projects</strong>  
          Working on full-stack MERN applications and improving daily.
        </li>
      </ol>

      {/* Workspace Image */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Workspace"
        style={{
          width: "100%",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      {/* Table Section */}
      <h2>Technical Summary</h2>
      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "15px",
        }}
      >
        <thead style={{ background: "#efefef", fontWeight: "bold" }}>
          <tr>
            <th>Category</th>
            <th>Technologies</th>
            <th>Strength</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td>React, JS, Next.js, Redux</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Styling</td>
            <td>Tailwind, MUI, CSS3</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Backend</td>
            <td>Node.js, Express.js</td>
            <td>⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Database</td>
            <td>MongoDB, Firebase</td>
            <td>⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Tools</td>
            <td>Git, VS Code, Postman</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
        </tbody>
      </table>

      {/* Image Section */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Coding Illustration"
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />

      <h2 style={{ marginTop: "30px" }}>My Goals</h2>
      <p>
        I aspire to become a lead frontend engineer and contribute to building
        large-scale, impactful products. I constantly learn new tools,
        frameworks, and techniques to keep improving.
      </p>
    </div>
  );
}

export default About;
