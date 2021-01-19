import { Link } from 'react-router-dom';
import { subRedditAdded, fetchSubPosts } from '../Redux/SubReditPostsSlice';
import store from '../Redux/Store';

const FeaturedSubs = () => {
    /*
    const onClick = (name) => {
        store.dispatch(subRedditAdded(name));
       // store.dispatch(fetchSubPosts());
    }
    */
    return(
        <div className="featured-subs">
            <div className="subs" >
                <h1 className="feat-sub-list-heading" >Featured Subreddits</h1>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('AskReddit'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/AskReddit' className="to-sub-posts" >
                        <p>r/AskReddit</p>
                    </Link>                    
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('CryptoCurrency'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/CryptoCurrency' className="to-sub-posts" >
                        <p>r/CryptoCurrency</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('DIY'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/DIY' className="to-sub-posts" >
                        <p>r/DIY</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('EarthPorn'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/EarthPorn' className="to-sub-posts" >
                        <p>r/EarthPorn</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('Futurology'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/Futurology' className="to-sub-posts" >
                        <p>r/Futurology</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('G59'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/G59' className="to-sub-posts" >
                        <p>r/G59</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('redditdev'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/redditdev' className="to-sub-posts" >
                        <p>r/redditdev</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('TeamSesh'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/TeamSesh' className="to-sub-posts" >
                        <p>r/TeamSesh</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    store.dispatch(subRedditAdded('todayilearned'));
                    store.dispatch(fetchSubPosts());
                }} >
                    <Link to='/subreddit/todayilearned' className="to-sub-posts" >
                        <p>r/todayilearned</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSubs;

/* 
() => {
                    store.dispatch(subRedditAdded('AskReddit'));
                    store.dispatch(fetchSubPosts());
                }
*/

