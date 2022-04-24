import { useRouter } from "next/router"
import { Fragment } from "react";
import {getEventById} from '../../Dummy-Data';
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"
import ErrorAlert from "../../components/ui/error-alert"
import Button from "../../components/ui/button";
export default function EventId () {

    const { query } = useRouter()
    const eventId = query.id
    const event = getEventById(eventId);

    if (!event) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Event not found</p>
                </ErrorAlert>
                <div className="center">
                    <Button link={"/events"}>Show All Events</Button>
                </div>
            </Fragment>
        )
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