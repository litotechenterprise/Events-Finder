import classes from "./comment-list.module.css"

const CommentList = (props) => {
    return (
        <ul className={classes.comments}>
            {/* Render a list of comments */}
            <li>
                <p>My Comment is amazing</p>
                <div>
                    By <address>Lito</address>
                </div>
            </li>
            <li>
                <p>My Comment is amazing</p>
                <div>
                    By <address>Lito</address>
                </div>
            </li>
        </ul>
    )
}

export default CommentList