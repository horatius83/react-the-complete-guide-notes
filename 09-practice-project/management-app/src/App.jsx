import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from 'react';
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
     setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })   
  }

  function handleDeleteTask(id) {
     setProjectsState(prevState => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter((task) => task.id != id)
        }
      });   
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleStartAddProject() {
      setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: null
        }
      });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: undefined
        }
      });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: id
        }
      });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
        }
      });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject 
    tasks={projectsState.tasks}
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    selectedProjectId={projectsState.selectedProjectId}
  />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
