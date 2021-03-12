import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import TimeAgo from 'react-timeago';
import numeral from 'numeral';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { renderers } from './LinkRenderer';

import Image from './Preview';
import Awards from './Awards';

import Comments from './Comments';

const SinglePostRender = ({ post, comments }) => {

    let content;

    if(post === null || post === undefined){
        content = <PostsListSkeleton name='single' />
    } else {
        const upVotes = numeral(post.data.ups).format('0a');
        const date = new Date(post.data.created_utc * 1000);

        let link = post.data.url;
        if(link.length > 20) link = link.substring(0, 20);
 
        let selfText;

        if (Object.values(post.data.selftext).length > 0){
            selfText = (
            <div className="self-text">
                <ReactMarkdown plugins={[gfm]} children={post.data.selftext} renderers={renderers} />
            </div>
            )
        } else {
            selfText = null;
        };
        content = (
            <article className="post single" key={post.data.id}>
                <div className="votes">
                    <div className="arrow arrowUpMargin"></div>
                    <p className="ups">{upVotes}</p>
                    <div className="arrow2 arrowDownMargin"></div>
                </div>
                <div className="content">
                    <h1>{post.data.title}</h1>
                    <div className="author_awards">
                        <p>By <span>{post.data.author}</span></p>
                        <Awards awards={post.data.all_awardings} />
                    </div>
                    {selfText}
                    <Image post={post} />
                    
                    <div>
                        <p className="posted"><TimeAgo date={date} /> | <span>{post.data.subreddit_name_prefixed}</span> | {post.data.num_comments} comments</p>
                    </div>
                </div>
            </article>
        );
    };
 
    return (
        <div className="singlepost">
            {content}
            <Comments comments={comments} />
        </div>
    )
};

export default SinglePostRender;