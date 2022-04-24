import { getFeaturedEvents } from "../Dummy-Data"
import EventsList from "../components/events/event-list"


export default function Home() {
  return (
    <div>
      <EventsList events={getFeaturedEvents()}/>
    </div>
  )
}
