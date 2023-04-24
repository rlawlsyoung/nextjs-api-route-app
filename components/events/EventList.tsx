import EventItem from "./EventItem";
import { EventType } from "@/dummy-data";

import classes from "./eventList.module.css";

interface EventListType {
  items: EventType[];
}

const EventList: React.FC<EventListType> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
