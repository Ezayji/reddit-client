import { subRedditAdded, fetchSubPosts } from '../Redux/SubReditPostsSlice';
import defaultThumb from '../../redditheader5.png';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import Store from '../Redux/Store';

const CommunityList = ({ community }) => {
    const members = numeral(community.data.subscribers).format('0.0a');

    let src;

    const onClick = (e) => {
        e.preventDefault();
        Store.dispatch(subRedditAdded(community.data.display_name));
        Store.dispatch(fetchSubPosts());
    }

    if(community.data.community_icon !== ""){
        const src_url = community.data.community_icon;
        src = src_url.substring(0, src_url.indexOf('?') + '?'.length);
    } else if(community.data.icon_img === null){
        src = defaultThumb;
    } else if (community.data.icon_img !== ""){
        src = community.data.icon_img;
    } else {
        src = defaultThumb;
    }

    return(
        <article className="subreddit" >
            <div className="sub-image-div">
                <img src={src} alt={community.data.display_name} />
            </div>
            <div>
                <div onClick={onClick} >
                    <Link to={`/subreddit/${community.data.display_name}`} className="to-sub-posts" >
                        <p className="sub-name" >{community.data.display_name_prefixed}</p>
                    </Link>
                </div>
                <p className="sub-members"><span>{members} Members</span></p>
                <p className="sub-desc">{community.data.public_description}</p>
            </div>
        </article>
    )
}

export default CommunityList;