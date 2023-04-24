import Head from "next/head";

import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/EventList";
import { GetStaticProps } from "next";
import { EventType } from "@/helpers/api-util";

interface HomePageProps {
  events: EventType[];
}

const HomePage: React.FC<HomePageProps> = ({ events }) => {
  return (
    <div>
      <Head>
        <title>NextJS Event</title>
        <meta
          name="description"
          content="Find a lot of punk rock show in Korea"
        />
      </Head>
      <EventList items={events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
