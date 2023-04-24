import { useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./comments.module.css";

interface CommentsProps {
  eventId: string;
}

function Comments({ eventId }: CommentsProps) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {
    // send data to API
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
