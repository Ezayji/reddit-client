import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { subRedditAdded, fetchSubPosts } from '../Redux/SubReditPostsSlice';

const FeaturedSubs = () => {
    const dispatch = useDispatch();

    function getPosts(subName){
        dispatch(subRedditAdded(subName));
        dispatch(fetchSubPosts());
    };

    return(
        <div className="featured-subs">
            <div className="subs" >
                <h1 className="feat-sub-list-heading" >Featured Subreddits</h1>
                <div className="feat-sub" onClick={() => {
                    getPosts('AskReddit');
                }} >
                    <Link to='/subreddit/AskReddit' className="to-sub-posts" >
                        <p>r/AskReddit</p>
                    </Link>                    
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('CryptoCurrency');
                }} >
                    <Link to='/subreddit/CryptoCurrency' className="to-sub-posts" >
                        <p>r/CryptoCurrency</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('DIY');
                }} >
                    <Link to='/subreddit/DIY' className="to-sub-posts" >
                        <p>r/DIY</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('EarthPorn');
                }} >
                    <Link to='/subreddit/EarthPorn' className="to-sub-posts" >
                        <p>r/EarthPorn</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('Futurology');
                }} >
                    <Link to='/subreddit/Futurology' className="to-sub-posts" >
                        <p>r/Futurology</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('G59');
                }} >
                    <Link to='/subreddit/G59' className="to-sub-posts" >
                        <p>r/G59</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('redditdev');
                }} >
                    <Link to='/subreddit/redditdev' className="to-sub-posts" >
                        <p>r/redditdev</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('TeamSesh');
                }} >
                    <Link to='/subreddit/TeamSesh' className="to-sub-posts" >
                        <p>r/TeamSesh</p>
                    </Link>
                </div>
                <div className="feat-sub" onClick={() => {
                    getPosts('todayilearned');
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