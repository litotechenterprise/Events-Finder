import {getAllEvents} from "../../helper/api.util";
import {Fragment} from "react"
import EventsList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import {useRouter} from "next/router"
import Head from "next/head"

const Events  = (props) => {
    const router = useRouter()
    const events = props.events;

    const findEventsHandler = (year, month) =>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta 
                    name="description" 
                    content="Find a lot of great events that allow you to evolve... "
                />
            </Head>
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