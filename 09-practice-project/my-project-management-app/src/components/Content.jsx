import NoProject from '../assets/no-projects.png';
import { useState, useRef } from 'react';

function NoProjectSelected({onNewProject}) {
    return <>
        <div>
            <img src={NoProject} alt="Pen and clipboard" className='size-12 center'></img>
        </div>
        <h2>No Project Selected</h2>
        <p>
            <b>Select a project or get started with a new one</b>
        </p>
        <button onClick={onNewProject}>Create new project</button>
    </>
}

function NewProjectForm({onCancel, onSave}) {
    const [$title, $description, $dueDate] = [useRef(), useRef(), useRef()];
    function handleSave() {
        console.log('handleSave');
        const title = $title.current.value;
        console.log(`title: ${title}`);
        const description = $description.current.value;
        console.log(`description: ${description}`);
        const dueDate = $dueDate.current.value;
        console.log(`dueDate: ${dueDate}`);
        onSave({title, description, dueDate});
    }

    return <form>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="button" onClick={handleSave}>Save</button>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" ref={$title}></input>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" ref={$description}></input>
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" name="dueDate" ref={$dueDate}></input>
    </form>
}

export default function Content({onSaveProject, ...props}) {
    const [areAddingProject, setAreAddingProject] = useState(false);
    function handleNewProject() {
        setAreAddingProject(() => true);
    }
    function handleSaveNewProject(project) {
        setAreAddingProject(() => false);
        onSaveProject(project);
    }

    return (
        <div className={props.className}>
            {!areAddingProject 
                ? <NoProjectSelected onNewProject={handleNewProject}></NoProjectSelected>
                : <NewProjectForm 
                    onCancel={() => setAreAddingProject(() => false)}
                    onSave={handleSaveNewProject}
                ></NewProjectForm>
            }
        </div>
    );
}