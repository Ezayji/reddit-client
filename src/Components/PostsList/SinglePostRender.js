import TimeAgo from 'react-timeago';
import numeral from 'numeral';
import Image from './Preview';

import Comments from './Comments';

const SinglePostRender = ({ post }) => {
    const upVotes = numeral(post.data.ups).format('0a');
    const date = new Date(post.data.created_utc * 1000);

    return (
        <div className="singlepost">
            <article className="post" key={post.data.id}>
                <div className="votes">
                    <div className="arrow arrowUpMargin"></div>
                    <p className="ups">{upVotes}</p>
                    <div className="arrow2 arrowDownMargin"></div>
                </div>
                <div className="content">
                    <h1>{post.data.title}</h1>
                    <Image post={post} />
                    <div>
                        <p className="posted"><TimeAgo date={date} /> | <span>{post.data.author}</span> | {post.data.num_comments} comments</p>
                    </div>
                </div>
            </article>
            <Comments url={post.data.permalink} />
        </div>
    )
}

export default SinglePostRender;