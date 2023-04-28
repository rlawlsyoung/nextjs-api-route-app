import classes from "./commentList.module.css";
import { CommentType } from "./Comments";

interface CommentListProps {
  items: CommentType[];
}

function CommentList({ items }: CommentListProps) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
      )
    </ul>
  );
}

export default CommentList;
