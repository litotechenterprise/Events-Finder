import {getAllEvents} from "../../helper/api.util";
import {Fragment} from "react"
import EventsList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import {useRouter} from "next/router"

const Events  = (props) => {
    const router = useRouter()
    const events = props.events;

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


export async function getStaticProps() {
    const featuredEvents = await getAllEvents()
  
    return {
      props: {
        events: featuredEvents
      }, 
      revalidate: 60
    }
}

export default Events;