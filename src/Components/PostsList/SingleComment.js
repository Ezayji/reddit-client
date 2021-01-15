import { useState } from 'react';

import TimeAgo from 'react-timeago';
import numeral from 'numeral';
import Reply from './Reply';

const SingleComment = ({ comment }) => {
    const [replies, setReplies] = useState(false);
    const [value, setValue] = useState('Show Replies')

    const upVotes = numeral(comment.data.ups).format('0a');
    const date = new Date(comment.data.created_utc * 1000);

    let reply;

    let ifReplies;

    const onClick = () => {
        if(replies == false){
            setReplies(true);
            setValue('Hide Replies')
        } else if (replies == true){
            setReplies(false);
            setValue('Show Replies')
        }
    }

    /* && !comment.data.replies.children[0].kind.includes("more") */

    if (comment.data.replies){
        ifReplies = <input className="show-replies" type="submit" value={value} onClick={onClick} />
        reply = comment.data.replies.data.children.map((reply, i) => (
            <Reply reply={reply} key={i} />
        ));
    } else {
        ifReplies = null;
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
            {ifReplies}
            { replies ? reply : null }
        </div>
    )
}

export default SingleComment;