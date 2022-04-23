import { useRouter } from "next/router"
import { Fragment } from "react";
import {getEventById} from '../../Dummy-Data';
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"

export default function EventId () {

    const { query } = useRouter()
    const eventId = query.id
    const event = getEventById(eventId);

    if (!event) {
        return <p>No Event Found</p>
    }
    
    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}