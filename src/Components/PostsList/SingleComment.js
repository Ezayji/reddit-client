import TimeAgo from 'react-timeago';
import numeral from 'numeral';
import Reply from './Reply';

const SingleComment = ({ comment }) => {
    const upVotes = numeral(comment.data.ups).format('0a');
    const date = new Date(comment.data.created_utc * 1000);

    let reply;

    if (comment.data.replies){
        reply = comment.data.replies.data.children.map((reply, i) => (
            <Reply reply={reply} key={i} />
    ))
    } else {
        reply = null; 
    }

    return(
        <div className="comment-div">
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
            {reply}
        </div>
    )
}

export default SingleComment;