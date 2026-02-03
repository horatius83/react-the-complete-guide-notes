export default function Sidebar({ items, addProject }) {
    console.log(`Sidebar: ${items}`);
    return (<div>
        <h2>Your Projects</h2>
        <button>+ Add Project</button>
        <ul>{items.map((item) => <li>{item}</li>)}</ul>
    </div>);
}