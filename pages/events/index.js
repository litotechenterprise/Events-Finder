import {getAllEvents} from "../../Dummy-Data";
import EventsList from "../../components/events/event-list";

export default function Events () {
    return (
        <div>
            <h1>Events</h1>
            <EventsList events={getAllEvents()}/>
        </div>
    )
}