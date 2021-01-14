import TimeAgo from 'react-timeago';
import numeral from 'numeral';



const Reply = ({ reply }) => {
    const upVotes = numeral(reply.data.ups).format('0a');
    const date = new Date(reply.data.created_utc * 1000);
    
    return(
        <article className="comment reply" key={reply.data.id} >
            <div className="comment-border"></div>
            <div className="comment-content">
                <div className="comment-creator">
                    <p><span>{reply.data.author}</span> | <TimeAgo date={date} /></p>
                </div>
                <p>{reply.data.body}</p>
                <div className="comment-ups">
                    <div className="arrow"></div>
                    <p className="ups upmargin"> {upVotes} </p>
                    <div className="arrow2"></div>
                </div>
            </div>
        </article>
    )
}

export default Reply;