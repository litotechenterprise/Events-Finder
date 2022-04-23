
import Image from "next/image";
import classes from './event-item.module.css'
import Button from "../ui/button";
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import RightArrowIcon from "../icons/arrow-right-icon"

const EventItem= ({data}) => {

    const humanReadableDate = new Date(data.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: "long",
        year:"numeric"
    })

    const formattedAddress = data.location.replace(', ', '\n');

    const exploreLink = `/events/${data.id}`;

    return (
        <li className={classes.item}>
           <img src={'/' + data.image} alt={data.title}/>
           <div className={classes.content}>
               <div className={classes.summary}>
                   <h2>{data.title}</h2>
                   <div className={classes.date}>
                       <DateIcon />
                       <time>{humanReadableDate}</time>
                   </div>
                   <div className={classes.address}>
                       <AddressIcon />
                       <address>{formattedAddress}</address>
                   </div>
               </div>
               <div className={classes.actions}>
                   <Button link={exploreLink}>
                       <span>Explore Event</span>
                       <span className={classes.icon}>
                        <RightArrowIcon />
                        </span></Button>
               </div>
           </div>
        </li>
    )
};

export default EventItem;