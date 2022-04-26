import { useRouter, } from "next/router"
import { getFilteredEvents } from "../../helper/api.util";
import useSWR from "swr"
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment,  useEffect, useState } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert"

const EventSlugs = (props) => {
    const [loadedEvents, setLoadedEvents] = useState();
    const router = useRouter();
    const filterData = router.query.slug;
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {data, error } = useSWR("https://laws-de-pr.firebaseio.com/events.json", fetcher);
    useEffect(() => {
        if (data) {
            const events = [];

            for (const key in data) {
                events.push({
                    id:key,
                    ...data[key]
                })
            }
            console.log(events);
            setLoadedEvents(events)
        }
    }, [data])

    if (!loadedEvents) {
        return <p className="center">Loading...</p>
    }
    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if (isNaN(filterYear) || isNaN(filterMonth) || filterYear > 2030 || filterYear < 2021 || filterMonth < 1 || filterMonth > 13 || error) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invaild Filter. Please adjust your values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    let filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === filterYear && eventDate.getMonth() === filterMonth- 1;
      });


    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No Events Found</p>
                </ErrorAlert>
                <div className="center">
                    <Button link={"/events"}>Show All Events</Button>
                </div>
            </Fragment>
        )
    }
    
    const date = new Date(filterYear, filterMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventsList events={filteredEvents}/>
        </Fragment>
    )
}


// export async function getServerSideProps(context) {
//     const { params } = context;
//     const filterData = params.slug;

//                 /// the plus converts the string to a num
//     const filterYear = +filterData[0];
//     const filterMonth = +filterData[1];

//     if (isNaN(filterYear) || isNaN(filterMonth) || filterYear > 2030 || filterYear < 2021 || filterMonth < 1 || filterMonth > 13) {
//         return {
//             props:{hasError: true}
//             // notFound:true, // shows 404 page
//             // redirect: {
//                 //destination: '/error'
//             //}
           
//         }
//     }

//     const filteredEvents  = await getFilteredEvents({ year: filterYear, month: filterMonth});

//     if (!filteredEvents || filteredEvents.length === 0) {
//         return {
//             props:{
//                 event: filteredEvents,
//                 date: {
//                     year: filterYear,
//                     month: filterMonth
//                 }
//             }
//         }
//     }
// }


export default EventSlugs;