import EventItem from "./event-item";
import classes from './event-list.module.css'


const EventsList = ({events}) => {
    return (
        <ul className={classes.list}>
          {events.map((evnt) => <EventItem key={evnt.id} data={evnt} />)}
        </ul>
    )
}

export default EventsList;