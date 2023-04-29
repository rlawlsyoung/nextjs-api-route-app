export interface EventType {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

export const getAllEvents = async () => {
  const res = await fetch(
    "https://nextjs-event-app-f461b-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );

  const data = await res.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string | string[] | undefined) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

interface DateType {
  year: number;
  month: number;
}

export const getFilteredEvents = async (dateFilter: DateType) => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
