import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const PostsListSkeleton = () => {
    return (
        
        <article className="post" >
            <div className="votes">
                <div className="arrowUpMargin" >
                    <SkeletonTheme color="#0d1117" highlightColor="#2d0364" >
                        <Skeleton height={60} width={24} />
                    </SkeletonTheme>
                </div>
            </div>
            <div className="content" >
                <h1>
                    <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                        <Skeleton width={`100%`} height={50} />
                    </SkeletonTheme>
                </h1>
                <p style={{marginTop: '5px'}}>
                    <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                        <Skeleton width={90} height={19} />
                    </SkeletonTheme>
                </p>
                <div className="link">
                    <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                        <Skeleton width={`100%`} height={126} />
                    </SkeletonTheme>
                </div>
                <p className="posted" >
                    <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                        <Skeleton width={`85%`} height={25} />
                    </SkeletonTheme>
                </p>
                <p style={{marginTop: '20px'}} >
                    <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                        <Skeleton height={50} width={151} />
                    </SkeletonTheme>
                </p>
            </div>
        </article>
    )
}

export default PostsListSkeleton;