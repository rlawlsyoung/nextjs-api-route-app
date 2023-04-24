import Image from "next/image";
import { MdDateRange, MdPlace } from "react-icons/md";

import Button from "../ui/Button";
import { EventType } from "@/dummy-data";

import classes from "./eventItem.module.css";

const EventItem: React.FC<EventType> = ({
  id,
  title,
  image,
  date,
  location,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR");

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <MdDateRange />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <MdPlace />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={"/events/" + id}>EXPLORE EVENT</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
