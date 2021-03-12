import TimeAgo from 'react-timeago';
import numeral from 'numeral';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { renderers } from './LinkRenderer';

const Reply = ({ reply }) => {
    const upVotes = numeral(reply.data.ups).format('0a');
    const date = new Date(reply.data.created_utc * 1000);
    
    let subReply;

    if (reply.data.replies){
        subReply = reply.data.replies.data.children.map((reply, i) => (
            <Reply reply={reply} key={i} />
    ))
    } else {
        subReply = null; 
    }

    if(reply.kind.includes("more")){
        return null;
    }

    return(
        <div className="reply">
            <article className="comment answer" key={reply.data.id} >
                <div className="comment-border"></div>
                <div className="comment-content">
                    <div className="comment-creator">
                        <p><span>{reply.data.author}</span> | <TimeAgo date={date} /></p>
                    </div>
                    <div className="markdown-comment" >
                        <ReactMarkdown plugins={[gfm]} children={reply.data.body} renderers={renderers} />
                    </div>
                    <div className="comment-ups">
                        <div className="arrow"></div>
                        <p className="ups upmargin"> {upVotes} </p>
                        <div className="arrow2"></div>
                    </div>
                </div>
            </article>
            {subReply}
        </div> 
    )
}

export default Reply;