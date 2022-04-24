import { useRouter } from "next/router"
import { getFilteredEvents } from "../../Dummy-Data";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert"

export default function EventSlugs () {
    const { query } = useRouter();
    const  filterData = query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

                /// the plus converts the string to a num
    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if(isNaN(filterYear) || isNaN(filterMonth) || filterYear > 2030 || filterYear < 2021 || filterMonth < 1 || filterMonth > 13) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invaild Filter. Please adjust your values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link={"/events"}>Show All Events</Button>
                </div>
            </Fragment>
        )
    }


    const filteredEvents  = getFilteredEvents({ year: filterYear, month: filterMonth});


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