import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from 'react';


/**
 * @typedef {Object} Project
 * @property {string} title - the title of the project
 * @property {string} description - description of the project
 * @property {string} dueDate - when is the project due
 * @property {Array<string>} tasks - tasks associated with that project
 */

function App() {
  const [projects, setProjects] = useState([]);
  const [areAddingProject, setAreAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  /**
   * 
   * @param {Project} project 
   */
  function handleSave(project) {
    console.log(`handleSave: ${JSON.stringify(project)}`);
    setProjects(() => [project, ...projects]);
    setAreAddingProject(() => false);
    setSelectedProject(project);
  }

  function handleAddProject() {
    console.log(`handleAddProject`);
    setAreAddingProject(() => true);
  }

  function handleCancel() {
    setAreAddingProject(() => false);
  }

  /**
   * 
   * @param {Project} project 
   */
  function handleSelectProject(project) {
    console.log(`handleSelectProject: ${JSON.stringify(project)}`);
    setSelectedProject(project);
  }

  function handleDeleteProject() {
    if (selectedProject) {
      const index = projects.findIndex((p) => p === selectedProject);
      if (index > -1) {
        const newProjects = projects.splice(index,1);
        setProjects(newProjects);
        setSelectedProject(newProjects.length ? newProjects[0] : undefined);
      }
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <Sidebar 
        items={projects}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      >
      </Sidebar>
      <Content 
        className="col-span-2" 
        onSaveProject={handleSave} 
        onAddProject={handleAddProject}
        onCancel={handleCancel}
        onDeleteProject={handleDeleteProject}
        areAddingProject={areAddingProject}
        selectedProject={selectedProject}
      >
      </Content>
    </div>
  );
}

export default App;
