import ReactPlayer from 'react-player';


const Image = ({ post }) => {
    if(post.data.url.includes("instagram.fbeg")){
        let link = post.data.url;
        if(link.length > 20) link = link.substring(0, 20);
        let thumbnail = post.data.thumbnail;

        return (
            <div className="link">
                <a className="url" href={post.data.url} >{link}...</a>
                <img src={thumbnail} alt={post.data.title} className="thumbnail" />
            </div>
        )
    } else if (post.data.url.includes(".jpg") || post.data.url.includes(".png")){
        return (
            <img src={post.data.url} alt={post.data.title} className="image" />
        )
    } else if(post.data.url.includes(".gifv")) {
        var gifvURL = post.data.url.replace(".gifv", ".mp4")
        return (
            <video autoPlay loop muted className="gif" >
                <source src={gifvURL} type="video/mp4" alt={post.data.title} />
            </video>
        )
    } else if (post.data.url.includes(".gif")) {
        return (
            <img src={post.data.url} alt={post.data.title} className="gif" />
        )
    } else if (post.data.is_video === true){
        let videoURL = post.data.media.reddit_video.fallback_url;
        return (
            <video controls className="video" >
                <source src={videoURL} type="video/mp4" alt={post.data.title} />
            </video>
        )
    } else if (post.data.media){
        let url = post.data.url_overridden_by_dest;
        return (
            <div className="yt" >
                <ReactPlayer className="react-player" 
                             url={url}
                             width="100%"
                             height="100%"
                             controls={true} />
            </div>
        )
    } else if (!post.data.url.includes(".jpg") || !post.data.url.includes(".png") || !post.data.url.includes(".gif") || !post.data.url.includes(".gifv")){
        let link = post.data.url;
        if(link.length > 20) link = link.substring(0, 20);
        let thumbnail = post.data.thumbnail;

        return (
            <div className="link">
                <a className="url" href={post.data.url} >{link}...</a>
                <img src={thumbnail} alt={post.data.title} className="thumbnail" />
            </div>
        )
    } else {
        return null
    } 
}

export default Image;