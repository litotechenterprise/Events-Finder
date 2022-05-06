import { getFeaturedEvents } from "../helper/api.util"
import EventsList from "../components/events/event-list"
import Head from 'next/head'
import NewLetterRegistration from "../components/input/newsletter-registration"

function Home(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta 
          name="description" 
          content="Find a lot of great events that allow you to evolve... "
        />
      </Head>
      <NewLetterRegistration />
      <EventsList events={props.events}/>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    }, 
    revalidate:1800,
  }
}



export default Home;
