import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const CommentsSkeleton = () => {
    return(
        <div className="comment" >
            <div className="comment-border" ></div>
            <div className="comment-content" >
                <p>
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton width={200} height={18}/>
                    </SkeletonTheme>
                </p>
                <p style={{marginTop: "5px"}} >
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton width={`100%`} height={18} />
                    </SkeletonTheme>
                </p>
                <p style={{marginTop: "5px"}} >
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton width={`100%`} height={18} />
                    </SkeletonTheme>
                </p>
                <p style={{marginTop: "5px"}} >
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton width={`50%`} height={18} />
                    </SkeletonTheme>
                </p>
                <p style={{marginTop: "5px"}} >
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton width={100} height={16} />
                    </SkeletonTheme>
                </p>
                
            </div>
        </div>
    )
}

export default CommentsSkeleton;