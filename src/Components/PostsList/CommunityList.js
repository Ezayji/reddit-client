import defaultThumb from '../../redditheader5.png';
import numeral from 'numeral';

const CommunityList = ({ community }) => {
    const members = numeral(community.data.subscribers).format('0.0a');

    let src;

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
                <p className="sub-name">{community.data.display_name_prefixed}</p>
                <p className="sub-members"><span>{members} Members</span></p>
                <p className="sub-desc">{community.data.public_description}</p>
            </div>
        </article>
    )
}

export default CommunityList;