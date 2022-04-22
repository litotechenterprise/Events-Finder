import EventItem from "./event-item";

const EventsList = ({events}) => {
    return (
        <ul>
          {events.map((evnt) => <EventItem key={evnt.id} data={evnt} />)}
        </ul>
    )
}

export default EventsList;