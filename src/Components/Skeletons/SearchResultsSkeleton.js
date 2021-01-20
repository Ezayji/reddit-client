import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export const ResultsForSkeleton = () => {
    return(
        <div className="results-for-div" >
            <h1>
                <SkeletonTheme color="#181e27" highlightColor="#2d0364" >
                    <Skeleton height={35} width={`100%`} />
                </SkeletonTheme>
            </h1>
        </div>
    )
}


