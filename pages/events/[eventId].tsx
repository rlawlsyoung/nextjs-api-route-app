import Head from "next/head";

import EventSummary from "@/components/eventDetail/EventSummary";
import EventLogistics from "@/components/eventDetail/EventLogistics";
import EventContent from "@/components/eventDetail/EventContent";
import Comments from "@/components/input/Comments";

import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from "@/helpers/api-util";
import { GetStaticPaths, GetStaticProps } from "next";
import { EventType } from "@/helpers/api-util";

interface EventsDetailPageProps {
  event: EventType;
}

const EventsDetailPage: React.FC<EventsDetailPageProps> = ({ event }) => {
  return event ? (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  ) : (
    <div className="center">Loading...</div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params?.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      event: event,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default EventsDetailPage;
