import React, { useState } from "react";

function StudentForm({ addProject }) {
  const [name, setName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, projectName, details });
    setName("");
    setProjectName("");
    setDetails("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student Project</h2>
      <input placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Project Title" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
      <textarea placeholder="Project Details" value={details} onChange={(e) => setDetails(e.target.value)} required />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default StudentForm;
