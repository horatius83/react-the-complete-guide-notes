import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [areAddingProject, setAreAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  console.log(`App.projects: ${projects}`);
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

  function handleSelectProject(project) {
    console.log(`handleSelectProject: ${JSON.stringify(project)}`);
    setSelectedProject(project);
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
        areAddingProject={areAddingProject}
        selectedProject={selectedProject}
      >
      </Content>
    </div>
  );
}

export default App;
