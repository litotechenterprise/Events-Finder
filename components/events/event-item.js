import Link from "next/link";
import Image from "next/image";
const EventItem= ({data}) => {

    const humanReadableDate = new Date(data.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: "long",
        year:"numeric"
    })

    const formattedAddress = data.location.replace(', ', '\n');

    const exploreLink = `/events/${data.id}`;

    return (
        <li>
           <img src={'/' + data.image} alt={title}/>
           <div>
               <div>
                   <h2>{data.title}</h2>
                   <div>
                       <time>{humanReadableDate}</time>
                   </div>
                   <div>
                       <address>{formattedAddress}</address>
                   </div>
               </div>
               <div>
                    <Link href={exploreLink}>Explore Event</Link>
               </div>
           </div>
        </li>
    )
};

export default EventItem;