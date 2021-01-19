import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const SubRedditListSkeleton = () => {
    return(
    <article className="subreddit" >
        <div className="sub-image-div">
            <div className="img-skeleton" >
                <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                    <Skeleton circle={true} height={45} width={45} />
                </SkeletonTheme>
            </div>
        </div>
        <div>
            <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                <p className="sub-name">
                    <Skeleton width={100}/>
                </p>
            </SkeletonTheme>

            <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                <p className="sub-members" >               
                    <Skeleton width={154}/>
                </p>
            </SkeletonTheme>

            <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                <p className="sub-desc" >
                    <Skeleton width={300}/>                
                </p>
            </SkeletonTheme>
        </div>
    </article>
    )
}
export default SubRedditListSkeleton;