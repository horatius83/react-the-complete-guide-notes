import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  console.log(`App.projects: ${projects}`);
  function handleSave(project) {
    console.log(`handleSave: ${project}`);
    setProjects(() => [project, ...projects]);
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <Sidebar items={projects}></Sidebar>
      <Content className="col-span-2" onSaveProject={handleSave}></Content>
    </div>
  );
}

export default App;
