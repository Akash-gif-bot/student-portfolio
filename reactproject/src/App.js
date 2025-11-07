import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  return (
    <div className="App">
      <h1>Akash — Student Project Portfolio 📚</h1>
      <StudentForm addProject={addProject} />
      <hr />
      <ProjectList projects={projects} deleteProject={deleteProject} />
    </div>
  );
}

export default App;
