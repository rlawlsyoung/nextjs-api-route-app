import { useRouter } from "next/router";
import Head from "next/head";

import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";

import { getAllEvents } from "@/helpers/api-util";
import { GetStaticProps } from "next";
import { EventType } from "@/helpers/api-util";

interface EventsPageProps {
  events: EventType[];
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of punk rock concert in Korea"
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default EventsPage;
