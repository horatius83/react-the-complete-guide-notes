import { Link } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsPage() {
    const fakeEvents = [
        {id: 1, name: 'Strip Solitaire'},
        {id: 2, name: 'Bowling for Soup'},
        {id: 3, name: "Wheel of Fish"}
    ];
    return (<>
        <h1>Events Page</h1>
        <EventsNavigation />
        <ul>
        {fakeEvents.map(fe => {
            return (<li><Link to={`/events/${fe.id}`}>{fe.name}</Link></li>);
        })}
        </ul>
    </>);
}