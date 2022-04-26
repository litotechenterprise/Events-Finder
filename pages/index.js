import { getFeaturedEvents } from "../helper/api.util"
import EventsList from "../components/events/event-list"


function Home(props) {
  return (
    <div>
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
