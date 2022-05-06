import { Fragment } from "react";
import {getEventById, getFeaturedEvents} from '../../helper/api.util';
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics";
import Head from "next/head";
import Comments from "../../components/input/comments";

const EventId = (props) => {
    const event = props.event

    if (!event) {
        return (
            <Fragment>
                <div className="center">
                    <p>Loading...</p>
                </div>
            </Fragment>
        )
    }
    
    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta 
                    name="description" 
                    content={event.description}
                />
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </Fragment>
    )
}

export async function getStaticProps(context) {

    const eventId = context.params.id;
    const event = await getEventById(eventId)
  
    return {
      props: {
        event: event
      },
      revalidate:30,
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({params:{id:event.id}}))
    return {
        paths:paths,
        fallback:'blocking',
    }
}


export default EventId;