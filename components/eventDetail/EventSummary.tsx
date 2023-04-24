import classes from "./eventSummary.module.css";

interface EventSummaryType {
  title: string;
}
const EventSummary: React.FC<EventSummaryType> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
