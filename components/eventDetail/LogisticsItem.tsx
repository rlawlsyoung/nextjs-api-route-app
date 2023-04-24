import classes from "./logisticsItem.module.css";

interface LogisticsItem {
  icon: JSX.Element;
  children: JSX.Element;
}

const LogisticsItem: React.FC<LogisticsItem> = ({ icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
