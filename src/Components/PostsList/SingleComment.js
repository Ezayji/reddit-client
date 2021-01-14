import TimeAgo from 'react-timeago';
import numeral from 'numeral';

const SingleComment = ({ comment }) => {
    const upVotes = numeral(comment.data.ups).format('0a');
    const date = new Date(comment.data.created_utc * 1000);

    return(
        <article className="comment" key={comment.data.id}>
            <div className="comment-border">

            </div>
            <div className="comment-content">
                <div className="comment-creator">
                    <p><span>{comment.data.author}</span> | <TimeAgo date={date} /></p>
                </div>
                <p>{comment.data.body}</p>
                <div className="comment-ups">
                    <div className="arrow"></div>
                    <p className="ups upmargin"> {upVotes} </p>
                    <div className="arrow2"></div>
                </div>
            </div>
        </article>
    )
}

export default SingleComment;