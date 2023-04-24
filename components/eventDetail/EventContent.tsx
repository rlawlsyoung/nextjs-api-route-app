import classes from "./eventContent.module.css";

interface EventContentType {
  children: JSX.Element;
}

const EventContent: React.FC<EventContentType> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
