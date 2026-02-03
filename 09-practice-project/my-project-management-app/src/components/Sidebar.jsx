export default function Sidebar({ items, addProject }) {
    return (<div>
        <h2>Your Projects</h2>
        <button>+ Add Project</button>
        <ul>{items.forEach((item) => <li>{item}</li>)}</ul>
    </div>);
}