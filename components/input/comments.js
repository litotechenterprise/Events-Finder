import { useState } from "react";

import CommentList from "./comment-list"
import NewComment from "./new-comment"
import classes from './comments.module.css'

function Comments(props){
    const {eventId} = props

    const [showComments, setShowComments] = useState(false)

    const toggleComments = () => {
        setShowComments(prev => !prev)
    }

    const addCommentHandler = () => {

    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleComments}>
                {showComments ? 'Hide' : "Show" } Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList />}
        </section>
    );
}


export default Comments;