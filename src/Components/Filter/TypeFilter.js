import { typeAdded } from '../Redux/FilterSlice';
import { fetchResults } from '../Redux/PostsSlice';

import { useSelector, useDispatch } from 'react-redux';

const TypeFilter = () => {
    const dispatch = useDispatch();
    const currentType = useSelector(state => state.filters.type);

    const onClick = (e) => {
        e.preventDefault();
        if(currentType !== e.target.value){
            dispatch(typeAdded(e.target.value))
            dispatch(fetchResults());
        }
    }
    
    return(
        <div className="typefilter-div" >
            <form>
                <button value='link' onClick={onClick} style={{borderBottom: currentType === 'link' ? '2px solid #6a04ee' : 'none'}} >Posts</button>
                <button value='sr' onClick={onClick} style={{borderBottom: currentType === 'sr' ? '2px solid #6a04ee' : 'none'}} >Communities</button>
            </form>
        </div>
    )
}

export default TypeFilter;