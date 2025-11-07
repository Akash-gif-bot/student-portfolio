import React from "react";

function ProjectList({ projects, deleteProject }) {
  return (
    <div>
      <h2>Student Projects</h2>
      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong> — {project.projectName}
              <p>{project.details}</p>
              <button onClick={() => deleteProject(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;

