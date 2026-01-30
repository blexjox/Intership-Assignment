import React from "react";

function Home() {
  return (
    <div style={{ padding: "25px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Heading */}
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi! I'm <strong>Prabhanjan</strong>, a passionate Frontend Developer who loves
        building clean, responsive, and high-performance web applications using
        <strong> React, JavaScript, Tailwind, Next.js</strong> and modern UI libraries.
      </p>

      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/photo-1550439062-609e1531270e"
        alt="Coding Desk"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      {/* Section 1 */}
      <h2>What I Do</h2>
      <ul>
        <li>Build modern, responsive web apps</li>
        <li>Create reusable React components</li>
        <li>Manage state using Redux, Context API, Zustand</li>
        <li>Develop clean and optimized UI using Tailwind & Material UI</li>
        <li>Work on real-time dashboards & API-based applications</li>
      </ul>

      {/* Section 2 */}
      <h2>My Development Workflow</h2>
      <ol>
        <li>Requirement analysis</li>
        <li>UI/UX design planning</li>
        <li>Component development</li>
        <li>API integration & testing</li>
        <li>Optimization & deployment</li>
      </ol>

      {/* Section 3 – With Image */}
      <h2>My Workspace</h2>
      <p>Here is a look at my everyday development setup:</p>

      <img
        src="https://images.unsplash.com/photo-1616627981706-2680a2fc7e6a"
        alt="Workstation"
        style={{
          width: "100%",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      {/* Table Section */}
      <h2>Tech Stack Overview</h2>
      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "15px",
        }}
      >
        <thead style={{ background: "#f2f2f2", fontWeight: "bold" }}>
          <tr>
            <th>Category</th>
            <th>Technologies</th>
            <th>Experience Level</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td>React, JavaScript, TypeScript, Vite</td>
            <td>Advanced</td>
          </tr>

          <tr>
            <td>Styling</td>
            <td>Tailwind, Material UI, CSS3</td>
            <td>Advanced</td>
          </tr>

          <tr>
            <td>Backend</td>
            <td>Node.js, Express.js</td>
            <td>Intermediate</td>
          </tr>

          <tr>
            <td>Databases</td>
            <td>MongoDB, Firebase</td>
            <td>Intermediate</td>
          </tr>

          <tr>
            <td>Tools</td>
            <td>Git, Postman, VS Code</td>
            <td>Advanced</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>Why Work With Me?</h2>
      <p>
        I focus on writing clean code, maintaining consistency, and crafting UI that looks aesthetic
        on all screen sizes. I enjoy solving problems and bringing ideas to life through frontend development.
      </p>

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Developer Coding"
        style={{
          width: "100%",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default Home;
