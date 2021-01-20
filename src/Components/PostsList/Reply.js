import TimeAgo from 'react-timeago';
import numeral from 'numeral';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import LinkRenderer from './LinkRenderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const renderers = {
    link: LinkRenderer,
    code: ({language, value}) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} />
      }
}

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
/* 
        <div className="markdown-comment" >
            <ReactMarkdown plugins={[gfm]} children={reply.data.body} renderers={renderers} />
        </div>

        <p>{reply.data.body}</p>
*/