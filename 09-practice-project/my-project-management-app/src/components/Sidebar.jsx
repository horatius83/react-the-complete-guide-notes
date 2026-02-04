export default function Sidebar({ items, onAddProject, onSelectProject }) {
    console.log(`Sidebar: ${items}`);
    return (<div>
        <h2>Your Projects</h2>
        <button onClick={onAddProject}>+ Add Project</button>
        <ul>{items.map((item, i) => <li key={item.title} onClick={() => onSelectProject(item)}>{item.title}</li>)}</ul>
    </div>);
}