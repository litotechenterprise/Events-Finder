import {getAllEvents} from "../../Dummy-Data";
import {Fragment} from "react"
import EventsList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import {useRouter} from "next/router"

export default function Events () {
    const router = useRouter()
    const events = getAllEvents();

    const findEventsHandler = (year, month) =>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }




    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventsList events={events} />
        </Fragment>
    )
}