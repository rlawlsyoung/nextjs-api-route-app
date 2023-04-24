import Image from "next/image";
import { MdDateRange, MdPlace } from "react-icons/md";

import LogisticsItem from "./LogisticsItem";

import classes from "./eventLogistics.module.css";

interface EventLogisticsType {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsType> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={360} height={360} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<MdDateRange />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<MdPlace />}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
