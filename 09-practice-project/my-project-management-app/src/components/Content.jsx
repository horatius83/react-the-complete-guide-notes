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
    const [$title, $description, $dueDate, $task] = [useRef(), useRef(), useRef(), useRef()];
    const [tasks, setTasks] = useState([]);
    function handleSave() {
        console.log('handleSave');
        const title = $title.current.value;
        console.log(`title: ${title}`);
        const description = $description.current.value;
        console.log(`description: ${description}`);
        const dueDate = $dueDate.current.value;
        console.log(`dueDate: ${dueDate}`);
        onSave({title, description, dueDate, tasks: $task.current.value ? [$task.current.value, ...tasks] : tasks});
    }
    function handleAddTask() {
        setTasks([$task.current.value,...tasks]);
        $task.current.value = '';
    }

    return <form>
        <p>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="button" onClick={handleSave}>Save</button>
        </p>
        <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" ref={$title}></input>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" ref={$description}></input>
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" name="dueDate" ref={$dueDate}></input>
        </p>
        <h2>Tasks</h2>
        {tasks.length 
            ? <ul>{tasks.map((t,i) => <li key={i}>{t}</li>)}</ul> 
            : <p>This project does not have any tasks yet</p>
        }
        <input type="text" name="task" ref={$task}></input>
        <button type="button" onClick={handleAddTask}>Add Task</button>
    </form>
}

function SelectedProject({title, description, dueDate, tasks, onDelete}) {
    return <div>
        <button onClick={onDelete}>Delete</button>
        <label for="title">Title</label>
        <input type="text" name="title" readOnly value={title}></input>
        <label for="description">Description</label>
        <input type="text" name="description" readOnly value={description}></input>
        <label for="date">Date</label>
        <input type="date" name="date" readOnly value={dueDate}></input>
        <ul>
            {tasks.map((t,i) => <li key={i}>{t}</li>)}
        </ul>
    </div>
}

export default function Content({onSaveProject, onAddProject, areAddingProject, onCancel, onDeleteProject, selectedProject, ...props}) {
    return (
        <div className={props.className}>
            {!areAddingProject 
                ? selectedProject 
                    ? <SelectedProject {...selectedProject} onDelete={onDeleteProject}/>
                    : <NoProjectSelected onNewProject={onAddProject}></NoProjectSelected> 
                : <NewProjectForm 
                    onCancel={onCancel}
                    onSave={onSaveProject}
                ></NewProjectForm>
            }
        </div>
    );
}